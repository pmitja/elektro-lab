import type { Metadata } from "next";
import Link from "next/link";
import s from "@/lib/s";
import { TELEFON } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { GeneratedIcon, GeneratedImage } from "@/components/GeneratedMedia";
import RevealInit from "@/components/RevealInit";
import HeroGsap from "@/components/HeroGsap";

export const metadata: Metadata = {
  title: { absolute: "O nas | Električar Maribor in okolica | El-Janko Mont" },
  description:
    "Spoznajte El-Janko Mont, elektro podjetje za zanesljive elektro storitve v Mariboru in okolici. Strokovna izvedba, jasna komunikacija in varne rešitve.",
  alternates: { canonical: "/o-nas" },
};

const VREDNOTE = [
  {
    naslov: "Varnost",
    tekst: "Elektro dela morajo biti izvedena tako, da omogočajo varno uporabo prostora.",
    icon: "safety",
  },
  {
    naslov: "Natančnost",
    tekst: "Urejena izvedba, preglednost in tehnična pravilnost so temelj kakovostnega dela.",
    icon: "precision",
  },
  {
    naslov: "Zanesljivost",
    tekst: "Držimo se dogovorov in poskrbimo, da je delo opravljeno odgovorno.",
    icon: "reliability",
  },
  {
    naslov: "Jasna komunikacija",
    tekst: "Stranki razložimo potek dela, možnosti in priporočene rešitve.",
    icon: "communication",
  },
];

export default function ONas() {
  return (
    <>
      <RevealInit />
      <HeroGsap />
      <Header active="/o-nas" ctaHref="/kontakt" />

      {/* PAGE HERO */}
      <section style={s("background:#020817;background-image:linear-gradient(90deg,rgba(2,8,23,.98),rgba(2,8,23,.8)),linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px),url('/generated/soft-electrical-bg.webp');background-size:cover,46px 46px,46px 46px,cover;background-position:center;position:relative;overflow:hidden")}>
        <div data-gsap-hero-glow style={s("position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
        <div data-gsap-hero data-gsap-hero-copy style={s("max-width:1200px;margin:0 auto;padding:76px 24px 68px;position:relative")}>
          <div style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 14px;margin-bottom:24px")}>
            <span className="amx-dot" style={s("width:7px;height:7px;border-radius:50%;background:#FFB400")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.75)")}>O nas</span>
          </div>
          <h1 style={s("font:700 clamp(32px,4vw,50px)/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.025em;color:#fff;margin:0 0 18px;max-width:820px")}>
            Elektro podjetje, ki stavi na zanesljivost, natančnost in varnost
          </h1>
          <p style={s("font:400 17px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:640px")}>
            El-Janko Mont izvaja elektro storitve za domove, stanovanja, novogradnje in podjetja na območju Maribora in okolice. Naš cilj je, da je vsako elektro delo izvedeno strokovno, pregledno in varno.
          </p>
        </div>
      </section>

      {/* NAŠ PRISTOP */}
      <section style={s("background:#fff")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1.2fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Pristop</span>
            </div>
            <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 26px")}>
              Naš <span style={s("background:linear-gradient(transparent 58%,#FFB400 58%)")}>pristop</span>
            </h2>
            <p style={s("font:400 16.5px/1.75 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>
              Pri elektro delih je pomembno, da je vse izvedeno pravilno že prvič. Zato se vsakega projekta lotimo premišljeno — najprej razumemo potrebe stranke, nato predlagamo ustrezno rešitev in izvedemo dela na način, ki omogoča varno in dolgoročno uporabo.
            </p>
          </div>
          <div style={s("position:relative")}>
            <div style={s("position:relative;width:100%;height:380px;border-radius:18px;overflow:hidden;display:block;box-shadow:0 18px 50px rgba(2,8,23,.14)")}>
              <GeneratedImage src="/generated/about-electrician-cabinet.webp" alt="Električar ureja električno omarico" sizes="(max-width: 980px) 100vw, 620px" priority />
            </div>
            <div style={s("position:absolute;bottom:-16px;left:-14px;background:#FFB400;border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:10px;box-shadow:0 12px 30px rgba(2,8,23,.2)")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#020817" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.8-3.4 7.7-8 9-4.6-1.3-8-4.2-8-9V6z"></path><path d="M9 12l2 2 4-4.5"></path></svg>
              <span style={s("font:600 13.5px 'Space Grotesk',sans-serif;color:#020817")}>Pravilno že prvič</span>
            </div>
          </div>
        </div>
      </section>

      {/* VREDNOTE */}
      <section style={s("background:#F5F6F8;background-image:linear-gradient(180deg,rgba(245,246,248,.92),rgba(245,246,248,.97)),url('/generated/soft-electrical-bg.webp');background-size:cover;background-position:center")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Vrednote</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 44px;text-align:center")}>
            Kaj nam je <span style={s("background:linear-gradient(transparent 58%,#FFB400 58%)")}>pomembno</span>?
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px")}>
            {VREDNOTE.map((v) => (
              <div key={v.naslov} style={s("background:#fff;border:1px solid rgba(2,8,23,.07);border-radius:18px;padding:28px 24px;display:flex;flex-direction:column;gap:12px")}>
                <span style={s("width:46px;height:46px;border-radius:12px;background:#020817;display:flex;align-items:center;justify-content:center")}>
                  <GeneratedIcon name={v.icon} alt="" size={33} />
                </span>
                <h3 style={s("font:600 18px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0")}>{v.naslov}</h3>
                <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBMOČJE DELA */}
      <section style={s("background:#0C182E;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:46px 46px")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55)")}>Območje dela</span>
            </div>
            <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 18px;color:#fff")}>Delujemo v Mariboru in okolici</h2>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0")}>
              Elektro storitve izvajamo predvsem na območju Maribora in okolice. Za večje projekte se lahko dogovorimo tudi za izvedbo na širšem območju.
            </p>
          </div>
          <div style={s("display:flex;justify-content:center")}>
            <div style={s("width:100%;max-width:380px;aspect-ratio:1;border-radius:50%;border:1px dashed rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;position:relative")}>
              <div style={s("width:66%;aspect-ratio:1;border-radius:50%;border:1px dashed rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center")}>
                <div style={s("display:flex;flex-direction:column;align-items:center;gap:10px")}>
                  <span style={s("width:48px;height:48px;border-radius:50%;background:#FFB400;display:flex;align-items:center;justify-content:center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#020817"><polygon points="13,2 4,14 11,14 9,22 20,9 13,9"></polygon></svg>
                  </span>
                  <span style={s("font:600 17px 'Space Grotesk',sans-serif;color:#fff")}>Maribor</span>
                </div>
              </div>
              <span style={s("position:absolute;top:10%;right:6%;font:500 12.5px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.6);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:6px 12px")}>Ruše</span>
              <span style={s("position:absolute;bottom:14%;left:2%;font:500 12.5px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.6);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:6px 12px")}>Hoče</span>
              <span style={s("position:absolute;top:22%;left:4%;font:500 12.5px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.6);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:6px 12px")}>Pesnica</span>
              <span style={s("position:absolute;bottom:8%;right:10%;font:500 12.5px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.6);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:6px 12px")}>Duplek</span>
              <span style={s("position:absolute;top:48%;right:-2%;font:500 12.5px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.6);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:6px 12px")}>Lenart</span>
            </div>
          </div>
        </div>
      </section>

      {/* ZAKLJUČNI CTA */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("background:#020817;background-image:linear-gradient(rgba(2,8,23,.86),rgba(2,8,23,.9)),linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px),url('/generated/cta-electrical-bg.webp');background-size:cover,46px 46px,46px 46px,cover;background-position:center;border-radius:24px;padding:64px 32px;text-align:center;position:relative;overflow:hidden")}>
            <div style={s("position:absolute;bottom:-180px;left:50%;transform:translateX(-50%);width:600px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
            <div style={s("position:relative;display:flex;flex-direction:column;align-items:center;gap:18px")}>
              <h2 style={s("font:700 clamp(28px,3.4vw,42px)/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.02em;color:#fff;margin:0;max-width:640px")}>
                Iščete zanesljivega električarja?
              </h2>
              <p style={s("font:400 16.5px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:540px")}>
                Kontaktirajte nas in preverite, kako vam lahko pomagamo pri vašem projektu.
              </p>
              <div style={s("display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:10px")}>
                <Link href="/kontakt" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFB400;color:#020817;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                  Kontaktirajte nas
                </Link>
                <a href={`tel:${TELEFON}`} className="hv-border-strong" style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.28);color:#fff;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                  Pokliči zdaj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCtaBar ctaHref="/kontakt" />
    </>
  );
}
