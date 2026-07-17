import type { Metadata } from "next";
import s from "@/lib/s";
import { TELEFON, EMAIL, NASLOV } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import InquiryForm from "@/components/InquiryForm";
import RevealInit from "@/components/RevealInit";
import HeroGsap from "@/components/HeroGsap";

export const metadata: Metadata = {
  title: { absolute: "Kontakt | Električar Maribor in okolica | El-Janko Mont" },
  description:
    "Kontaktirajte El-Janko Mont za elektro storitve v Mariboru in okolici. Pošljite povpraševanje za elektroinštalacije, prenove, meritve, razsvetljavo ali vzdrževanje.",
  alternates: { canonical: "/kontakt" },
};

const OBMOCJA = ["Maribor", "Ruše", "Hoče", "Pesnica", "Duplek", "Lenart", "Slovenska Bistrica"];

export default function Kontakt() {
  return (
    <>
      <RevealInit />
      <HeroGsap />
      <Header active="/kontakt" ctaHref="#povprasevanje" />

      {/* HERO: KONTAKT + OBRAZEC */}
      <section style={s("background:#020817;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:46px 46px;position:relative;overflow:hidden")}>
        <div data-gsap-hero-glow style={s("position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
        <div data-gsap-hero className="amx-hero" style={s("max-width:1200px;margin:0 auto;padding:72px 24px 64px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;position:relative")}>
          <div data-gsap-hero-copy>
            <div style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 14px;margin-bottom:24px")}>
              <span className="amx-dot" style={s("width:7px;height:7px;border-radius:50%;background:#FFB400")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.75)")}>Kontakt</span>
            </div>
            <h1 style={s("font:700 clamp(34px,4.2vw,52px)/1.08 'Space Grotesk',sans-serif;letter-spacing:-0.025em;color:#fff;margin:0 0 18px")}>Kontaktirajte nas</h1>
            <p style={s("font:400 17px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0 0 34px;max-width:520px")}>
              Potrebujete električarja v Mariboru ali okolici? Pošljite povpraševanje, pokličite ali nam napišite, kaj želite urediti. Odgovorili vam bomo v najkrajšem možnem času.
            </p>
            <div style={s("display:flex;flex-direction:column;gap:14px;max-width:440px")}>
              <a href={`tel:${TELEFON}`} className="hv-border-soft" style={s("display:flex;align-items:center;gap:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);border-radius:14px;padding:16px 18px;text-decoration:none")}>
                <span style={s("width:42px;height:42px;border-radius:11px;background:#FFB400;display:flex;align-items:center;justify-content:center;flex:none")}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#020817" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"></path></svg>
                </span>
                <span style={s("display:flex;flex-direction:column;gap:2px")}>
                  <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5)")}>Telefon</span>
                  <span style={s("font:600 16px 'Instrument Sans',sans-serif;color:#fff")}>{TELEFON}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="hv-border-soft" style={s("display:flex;align-items:center;gap:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);border-radius:14px;padding:16px 18px;text-decoration:none")}>
                <span style={s("width:42px;height:42px;border-radius:11px;background:#FFB400;display:flex;align-items:center;justify-content:center;flex:none")}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#020817" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></path><path d="M3.5 6.5L12 13l8.5-6.5"></path></svg>
                </span>
                <span style={s("display:flex;flex-direction:column;gap:2px")}>
                  <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5)")}>E-mail</span>
                  <span style={s("font:600 16px 'Instrument Sans',sans-serif;color:#fff")}>{EMAIL}</span>
                </span>
              </a>
              <div style={s("display:flex;align-items:center;gap:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);border-radius:14px;padding:16px 18px")}>
                <span style={s("width:42px;height:42px;border-radius:11px;background:#FFB400;display:flex;align-items:center;justify-content:center;flex:none")}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#020817" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
                </span>
                <span style={s("display:flex;flex-direction:column;gap:2px")}>
                  <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5)")}>Naslov in območje dela</span>
                  <span style={s("font:600 16px 'Instrument Sans',sans-serif;color:#fff")}>{NASLOV} · Maribor in okolica</span>
                </span>
              </div>
            </div>
          </div>

          {/* OBRAZEC */}
          <div data-gsap-hero-panel>
            <InquiryForm
              intro="Na kratko opišite, kaj potrebujete, in dodajte lokacijo izvedbe. Tako vam bomo lažje pripravili ustrezen odgovor."
              note="Vaše podatke uporabimo izključno za odgovor na vaše povpraševanje."
            />
          </div>
        </div>
      </section>

      {/* HITRI KONTAKT */}
      <section style={s("background:#fff")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Hitri kontakt</span>
            </div>
            <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 18px")}>
              Raje <span style={s("background:linear-gradient(transparent 58%,#FFB400 58%)")}>pokličete</span>?
            </h2>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 26px")}>
              Za hitrejši dogovor nas lahko pokličete na{" "}
              <a href={`tel:${TELEFON}`} style={s("color:#020817;font-weight:600;text-decoration:none;border-bottom:2px solid #FFB400")}>{TELEFON}</a>. Če se ne uspemo oglasiti, vas pokličemo nazaj v najkrajšem možnem času.
            </p>
            <a href={`tel:${TELEFON}`} className="hv-bg-navy" style={s("display:inline-flex;align-items:center;gap:9px;background:#020817;color:#fff;font:600 15px 'Instrument Sans',sans-serif;padding:14px 26px;border-radius:12px;text-decoration:none")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"></path></svg>
              Pokliči zdaj
            </a>
          </div>
          <div style={s("background:#F5F6F8;border:1px solid rgba(2,8,23,.06);border-radius:20px;padding:34px 30px")}>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:14px")}>
              <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Lokacija</span>
            </div>
            <h3 style={s("font:700 22px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0 0 12px")}>Kje delujemo?</h3>
            <p style={s("font:400 15px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>
              Elektro storitve izvajamo v Mariboru in okolici. Pri povpraševanju nam sporočite lokacijo objekta, da lahko lažje ocenimo izvedbo in se dogovorimo za naslednji korak.
            </p>
            <div style={s("display:flex;flex-wrap:wrap;gap:8px;margin-top:20px")}>
              {OBMOCJA.map((o) => (
                <span key={o} style={s("font:500 13px 'Space Grotesk',sans-serif;color:#47536B;background:#fff;border:1px solid rgba(2,8,23,.1);border-radius:999px;padding:7px 14px")}>{o}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCtaBar ctaHref="#povprasevanje" />
    </>
  );
}
