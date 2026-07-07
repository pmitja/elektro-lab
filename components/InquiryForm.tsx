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

// The white inquiry card from the export's Domov/Kontakt hero.
export default function InquiryForm({ intro, note, id = "povprasevanje" }: { intro: string; note: string; id?: string }) {
  const [f, setF] = useState({ ime: "", tel: "", email: "", lokacija: "", storitev: "", opis: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const set =
    (k: keyof typeof f) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setF((prev) => ({ ...prev, [k]: e.target.value }));
      setError(false);
    };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.ime.trim() || !f.tel.trim() || !f.email.trim() || !f.lokacija.trim() || !f.storitev) {
      setError(true);
      return;
    }
    setSent(true);
    setError(false);
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
            {error && (
              <div style={s("background:#FDF0F0;border:1px solid #EFC7C7;border-radius:10px;padding:11px 14px;font:500 13.5px 'Instrument Sans',sans-serif;color:#A53B3B")}>
                Prosimo, izpolnite vsa obvezna polja.
              </div>
            )}
            <button type="submit" className="hv-bg-yellow" style={s("width:100%;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px;border-radius:12px;border:none;cursor:pointer")}>
              Pošlji povpraševanje
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
