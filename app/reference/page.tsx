import type { Metadata } from "next";
import Link from "next/link";
import s from "@/lib/s";
import { TELEFON } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import ImageSlot from "@/components/ImageSlot";
import RevealInit from "@/components/RevealInit";
import HeroGsap from "@/components/HeroGsap";

export const metadata: Metadata = {
  title: { absolute: "Reference | Elektro projekti Maribor in okolica | Elektro Lab" },
  description:
    "Oglejte si izbrane elektro projekte in izvedena dela v Mariboru in okolici. Elektroinštalacije, prenove, razsvetljava, omarice, meritve in vzdrževanje.",
  alternates: { canonical: "/reference" },
};

const REFERENCE = [
  { foto: "Foto: elektroinštalacije v novogradnji", naslov: "Elektroinštalacije v novogradnji", tip: "Stanovanjska hiša", lokacija: "Maribor z okolico", opis: "Izvedba elektroinštalacij, priprava priključkov, razsvetljave, vtičnic in električne omarice." },
  { foto: "Foto: prenova elektroinštalacij v stanovanju", naslov: "Prenova elektroinštalacij v stanovanju", tip: "Stanovanje", lokacija: "Maribor", opis: "Posodobitev obstoječih inštalacij, menjava vtičnic, stikal in ureditev napeljave." },
  { foto: "Foto: montaža razsvetljave v poslovnem prostoru", naslov: "Ureditev razsvetljave", tip: "Poslovni prostor", lokacija: "Maribor z okolico", opis: "Montaža notranje razsvetljave za boljšo funkcionalnost, preglednost in uporabo prostora." },
  { foto: "Foto: urejena električna omarica", naslov: "Ureditev električne omarice", tip: "Hiša", lokacija: "Maribor z okolico", opis: "Pregled, ureditev in nadgradnja električne omarice za varnejšo in preglednejšo uporabo." },
  { foto: "Foto: elektro vzdrževanje poslovnega prostora", naslov: "Elektro vzdrževanje poslovnega prostora", tip: "Poslovni prostor", lokacija: "Maribor", opis: "Vzdrževalna elektro dela, pregled delovanja, menjava elementov in manjše nadgradnje." },
];

export default function Reference() {
  return (
    <>
      <RevealInit />
      <HeroGsap />
      <Header active="/reference" ctaHref="/kontakt" />

      {/* PAGE HERO */}
      <section style={s("background:#0B1526;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:46px 46px;position:relative;overflow:hidden")}>
        <div data-gsap-hero-glow style={s("position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
        <div data-gsap-hero data-gsap-hero-copy style={s("max-width:1200px;margin:0 auto;padding:76px 24px 68px;position:relative")}>
          <div style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 14px;margin-bottom:24px")}>
            <span className="amx-dot" style={s("width:7px;height:7px;border-radius:50%;background:#FFC900")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.75)")}>Reference</span>
          </div>
          <h1 style={s("font:700 clamp(34px,4.2vw,52px)/1.08 'Space Grotesk',sans-serif;letter-spacing:-0.025em;color:#fff;margin:0 0 18px;max-width:720px")}>
            Reference in izvedeni projekti
          </h1>
          <p style={s("font:400 17px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:620px")}>
            Primeri elektro del, ki prikazujejo naš način dela, natančnost izvedbe in raznolikost projektov — od stanovanj in hiš do poslovnih prostorov.
          </p>
        </div>
      </section>

      {/* GRID REFERENC */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:22px")}>
            {REFERENCE.map((r) => (
              <div key={r.naslov} style={s("background:#F5F6F8;border:1px solid rgba(11,21,38,.06);border-radius:20px;overflow:hidden;display:flex;flex-direction:column")}>
                <ImageSlot shape="rect" placeholder={r.foto} style={{ width: "100%", height: 230, display: "block" }} />
                <div style={s("padding:24px 24px 26px;display:flex;flex-direction:column;gap:10px;flex:1")}>
                  <div style={s("display:flex;flex-wrap:wrap;gap:8px")}>
                    <span style={s("font:600 11.5px 'Space Grotesk',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:#0B1526;color:#FFC900;border-radius:999px;padding:6px 12px")}>{r.tip}</span>
                    <span style={s("font:600 11.5px 'Space Grotesk',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:#fff;border:1px solid rgba(11,21,38,.12);color:#47536B;border-radius:999px;padding:6px 12px")}>{r.lokacija}</span>
                  </div>
                  <h3 style={s("font:600 18.5px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:4px 0 0")}>{r.naslov}</h3>
                  <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>{r.opis}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={s("display:flex;justify-content:center;margin-top:44px")}>
            <Link href="/kontakt" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
              Pošljite povpraševanje za vaš projekt
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B1526" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={s("background:#F5F6F8")}>
        <div style={s("max-width:820px;margin:0 auto;padding:88px 24px;text-align:center")}>
          <span style={s("width:52px;height:52px;border-radius:14px;background:#0B1526;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC900" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.8-3.4 7.7-8 9-4.6-1.3-8-4.2-8-9V6z"></path><path d="M9 12l2 2 4-4.5"></path></svg>
          </span>
          <h2 style={s("font:700 clamp(26px,3.2vw,36px)/1.15 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 16px")}>
            Vsak projekt izvedemo z mislijo na <span style={s("background:linear-gradient(transparent 58%,#FFC900 58%)")}>varnost</span>
          </h2>
          <p style={s("font:400 16.5px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0;max-width:560px;display:inline-block")}>
            Ne glede na velikost projekta je naš cilj enak: strokovna izvedba, jasna komunikacija in elektro rešitev, ki je varna za dolgoročno uporabo.
          </p>
        </div>
      </section>

      {/* ZAKLJUČNI CTA */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("background:#0B1526;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:46px 46px;border-radius:24px;padding:64px 32px;text-align:center;position:relative;overflow:hidden")}>
            <div style={s("position:absolute;bottom:-180px;left:50%;transform:translateX(-50%);width:600px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.14),transparent 65%)")}></div>
            <div style={s("position:relative;display:flex;flex-direction:column;align-items:center;gap:18px")}>
              <h2 style={s("font:700 clamp(28px,3.4vw,42px)/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.02em;color:#fff;margin:0;max-width:640px")}>
                Želite podobno rešitev za svoj objekt?
              </h2>
              <p style={s("font:400 16.5px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:540px")}>
                Pošljite povpraševanje in nam povejte, kaj potrebujete. Z veseljem vam pomagamo pri naslednjem koraku.
              </p>
              <div style={s("display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:10px")}>
                <Link href="/kontakt" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                  Pošlji povpraševanje
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
