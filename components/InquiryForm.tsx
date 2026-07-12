"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import s from "@/lib/s";

const STORITVE = [
  "Elektroinštalacije",
  "Hišne inštalacije",
  "Industrijske inštalacije",
  "Električne polnilnice",
  "Prenova elektroinštalacij",
  "Električne omarice",
  "Meritve elektroinštalacij",
  "Razsvetljava",
  "Pametne inštalacije",
  "Montaža vtičnic, stikal in varovalk",
  "Elektro vzdrževanje",
  "Drugo",
];

const inputStyle = s("width:100%;padding:12px 13px;border:1px solid #D9DEE7;border-radius:10px;font:400 14.5px 'Instrument Sans',sans-serif;color:#0B1526;outline:none;background:#fff");

const LEADS_API_URL = "https://nivo-neon.vercel.app/api/leads";
const COMPANY_ID = "11111111-1111-4111-8111-111111111111";

// The white inquiry card from the export's Domov/Kontakt hero.
export default function InquiryForm({ intro, note, id = "povprasevanje" }: { intro: string; note: string; id?: string }) {
  const [f, setF] = useState({
    ime: "",
    tel: "",
    email: "",
    lokacija: "",
    storitev: "",
    opis: "",
    privacyConsent: false,
    marketingConsent: false,
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const set =
    (k: "ime" | "tel" | "email" | "lokacija" | "storitev" | "opis") =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setF((prev) => ({ ...prev, [k]: e.target.value }));
      setError(null);
    };

  const setCheckbox =
    (k: "privacyConsent" | "marketingConsent") => (e: ChangeEvent<HTMLInputElement>) => {
      setF((prev) => ({ ...prev, [k]: e.target.checked }));
      setError(null);
    };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!f.ime.trim() || !f.tel.trim() || !f.email.trim() || !f.lokacija.trim() || !f.storitev || !f.privacyConsent) {
      setError("Prosimo, izpolnite vsa obvezna polja.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(LEADS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId: COMPANY_ID,
          name: f.ime,
          phone: f.tel,
          email: f.email,
          location: f.lokacija,
          service: f.storitev,
          message: f.opis,
          privacyConsent: f.privacyConsent,
          marketingConsent: f.marketingConsent,
        }),
      });

      if (res.ok) {
        setSent(true);
        return;
      }

      if (res.status === 429) {
        setError("Enako povpraševanje z iste številke je bilo že oddano v zadnjih 2 minutah.");
      } else if (res.status === 403) {
        setError("Prišlo je do napake pri pošiljanju. Prosimo, kontaktirajte nas neposredno.");
      } else {
        setError("Prosimo, izpolnite vsa obvezna polja.");
      }
    } catch {
      setError("Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id={id} style={s("scroll-margin-top:92px;background:#fff;border-radius:20px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35)")}>
      {!sent ? (
        <div>
          <h2 style={s("font:700 23px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0 0 6px")}>Pošljite povpraševanje</h2>
          <p style={s("font:400 14px/1.55 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 20px")}>{intro}</p>
          <form onSubmit={submit} style={s("display:flex;flex-direction:column;gap:13px")}>
            <div className="amx-2col" style={s("display:grid;grid-template-columns:1fr 1fr;gap:13px")}>
              <label style={s("display:flex;flex-direction:column;gap:6px")}>
                <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>Ime in priimek *</span>
                <input type="text" value={f.ime} onChange={set("ime")} placeholder="Janez Novak" className="fc-navy" style={inputStyle} />
              </label>
              <label style={s("display:flex;flex-direction:column;gap:6px")}>
                <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>Telefonska številka *</span>
                <input type="tel" value={f.tel} onChange={set("tel")} placeholder="040 000 000" className="fc-navy" style={inputStyle} />
              </label>
            </div>
            <div className="amx-2col" style={s("display:grid;grid-template-columns:1fr 1fr;gap:13px")}>
              <label style={s("display:flex;flex-direction:column;gap:6px")}>
                <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>E-mail naslov *</span>
                <input type="email" value={f.email} onChange={set("email")} placeholder="ime@email.si" className="fc-navy" style={inputStyle} />
              </label>
              <label style={s("display:flex;flex-direction:column;gap:6px")}>
                <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>Lokacija izvedbe *</span>
                <input type="text" value={f.lokacija} onChange={set("lokacija")} placeholder="npr. Maribor, Tezno" className="fc-navy" style={inputStyle} />
              </label>
            </div>
            <label style={s("display:flex;flex-direction:column;gap:6px")}>
              <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>Vrsta storitve *</span>
              <select value={f.storitev} onChange={set("storitev")} className="fc-navy" style={{ ...inputStyle, appearance: "auto" }}>
                <option value="">Izberite storitev …</option>
                {STORITVE.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label style={s("display:flex;flex-direction:column;gap:6px")}>
              <span style={s("font:600 12.5px 'Instrument Sans',sans-serif;color:#47536B")}>Kratek opis projekta</span>
              <textarea value={f.opis} onChange={set("opis")} rows={3} placeholder="Na kratko opišite, kaj želite urediti …" className="fc-navy" style={{ ...inputStyle, resize: "vertical", minHeight: 74 }} />
            </label>
            <label style={s("display:flex;align-items:flex-start;gap:9px;cursor:pointer")}>
              <input type="checkbox" checked={f.privacyConsent} onChange={setCheckbox("privacyConsent")} style={s("margin-top:2px;width:16px;height:16px;flex:none")} />
              <span style={s("font:400 13px/1.5 'Instrument Sans',sans-serif;color:#47536B")}>
                Strinjam se z obdelavo podatkov za namen obravnave povpraševanja. *
              </span>
            </label>
            <label style={s("display:flex;align-items:flex-start;gap:9px;cursor:pointer")}>
              <input type="checkbox" checked={f.marketingConsent} onChange={setCheckbox("marketingConsent")} style={s("margin-top:2px;width:16px;height:16px;flex:none")} />
              <span style={s("font:400 13px/1.5 'Instrument Sans',sans-serif;color:#47536B")}>
                Želim prejemati obvestila o akcijah, novostih in posebnih ponudbah.
              </span>
            </label>
            {error && (
              <div style={s("background:#FDF0F0;border:1px solid #EFC7C7;border-radius:10px;padding:11px 14px;font:500 13.5px 'Instrument Sans',sans-serif;color:#A53B3B")}>
                {error}
              </div>
            )}
            <button type="submit" disabled={submitting} className="hv-bg-yellow" style={s(`width:100%;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px;border-radius:12px;border:none;cursor:${submitting ? "default" : "pointer"};opacity:${submitting ? 0.7 : 1}`)}>
              {submitting ? "Pošiljanje …" : "Pošlji povpraševanje"}
            </button>
            <p style={s("font:400 12px/1.5 'Instrument Sans',sans-serif;color:#8A93A6;margin:0;text-align:center")}>{note}</p>
          </form>
        </div>
      ) : (
        <div style={s("display:flex;flex-direction:column;align-items:center;text-align:center;padding:42px 8px;gap:16px")}>
          <span style={s("width:58px;height:58px;border-radius:50%;background:#EAF7EE;display:flex;align-items:center;justify-content:center")}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E9E5B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
          </span>
          <h2 style={s("font:700 22px 'Space Grotesk',sans-serif;margin:0")}>Hvala za povpraševanje</h2>
          <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0;max-width:320px")}>
            Vaše sporočilo smo prejeli in vas bomo kontaktirali v najkrajšem možnem času.
          </p>
        </div>
      )}
    </div>
  );
}
