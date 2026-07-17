import type { Metadata } from "next";
import Link from "next/link";
import s from "@/lib/s";
import { TELEFON } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { GeneratedIcon } from "@/components/GeneratedMedia";
import RevealInit from "@/components/RevealInit";
import HeroGsap from "@/components/HeroGsap";

export const metadata: Metadata = {
  title: { absolute: "Elektro storitve Maribor | Hišne in industrijske inštalacije" },
  description:
    "Elektro storitve v Mariboru in okolici. Hišne in industrijske inštalacije, električne polnilnice, prenove, meritve, omarice, razsvetljava in vzdrževanje.",
  alternates: { canonical: "/storitve" },
};

const STORITVE = [
  { st: "01", naslov: "Elektroinštalacije", tekst: "Izvajamo elektroinštalacije za novogradnje, adaptacije, stanovanja, hiše in poslovne prostore. Poskrbimo za razpeljavo kablov, priključke, vtičnice, stikala, razsvetljavo in druge elektro elemente.", icon: "electrical-installation" },
  { st: "02", naslov: "Hišne inštalacije", tekst: "Izvajamo nove hišne električne inštalacije, prenove obstoječih napeljav ter prilagoditve za sodobno in varno uporabo doma.", icon: "house-installation" },
  { st: "03", naslov: "Industrijske inštalacije", tekst: "Načrtujemo in izvajamo industrijske elektroinštalacije za proizvodne, servisne in poslovne prostore, prilagojene obremenitvam, opremi in zahtevam objekta.", icon: "industrial-installation" },
  { st: "04", naslov: "Električne polnilnice", tekst: "Svetujemo pri izbiri polnilnice, preverimo možnosti priklopa in izvedemo montažo glede na objekt, moč priključka in način uporabe.", icon: "ev-charger" },
  { st: "05", naslov: "Prenova elektroinštalacij", tekst: "Stare elektroinštalacije lahko predstavljajo tveganje in omejujejo sodobno uporabo prostora. Poskrbimo za pregled, menjavo in posodobitev inštalacij, da bo uporaba varnejša in bolj zanesljiva.", icon: "renovation" },
  { st: "06", naslov: "Električne omarice", tekst: "Uredimo montažo, menjavo, nadgradnjo ali pregled električne omarice. Poskrbimo za pregledno razporeditev, varovalke in pripravo na varno uporabo.", icon: "cabinet" },
  { st: "07", naslov: "Meritve elektroinštalacij", tekst: "Izvajamo meritve elektroinštalacij za preverjanje ustreznosti, varnosti in pravilnega delovanja. Meritve so pomembne pri novogradnjah, prenovah in preverjanju obstoječih sistemov.", icon: "measurement" },
  { st: "08", naslov: "Notranja in zunanja razsvetljava", tekst: "Poskrbimo za montažo in ureditev razsvetljave v notranjih prostorih, na fasadah, dovozih, terasah, poslovnih površinah in drugih območjih, kjer potrebujete kakovostno osvetlitev.", icon: "lighting" },
  { st: "09", naslov: "Pametne inštalacije", tekst: "Uredimo sodobne elektro rešitve za boljši nadzor, udobje in učinkovito upravljanje prostora. Pametne inštalacije lahko vključujejo upravljanje luči, senčil, ogrevanja in drugih sistemov.", icon: "smart-installation" },
  { st: "10", naslov: "Montaža vtičnic, stikal in varovalk", tekst: "Izvajamo montažo, menjavo in ureditev vtičnic, stikal, varovalk in drugih osnovnih elektro elementov za varno in praktično uporabo prostora.", icon: "outlet-switch-fuse" },
  { st: "11", naslov: "Elektro vzdrževanje za podjetja", tekst: "Podjetjem nudimo elektro vzdrževanje poslovnih prostorov, delavnic, pisarn, lokalov in drugih objektov. Poskrbimo za pregled, nadgradnje, odpravo napak in zanesljivo delovanje elektro sistema.", icon: "maintenance" },
];

export default function Storitve() {
  return (
    <>
      <RevealInit />
      <HeroGsap />
      <Header active="/storitve" ctaHref="/kontakt" />

      {/* PAGE HERO */}
      <section style={s("background:#020817;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:46px 46px;position:relative;overflow:hidden")}>
        <div data-gsap-hero-glow style={s("position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
        <div data-gsap-hero data-gsap-hero-copy style={s("max-width:1200px;margin:0 auto;padding:76px 24px 68px;position:relative")}>
          <div style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 14px;margin-bottom:24px")}>
            <span className="amx-dot" style={s("width:7px;height:7px;border-radius:50%;background:#FFB400")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.75)")}>Storitve</span>
          </div>
          <h1 style={s("font:700 clamp(34px,4.2vw,52px)/1.08 'Space Grotesk',sans-serif;letter-spacing:-0.025em;color:#fff;margin:0 0 18px;max-width:720px")}>
            Elektro storitve v Mariboru in okolici
          </h1>
          <p style={s("font:400 17px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0 0 30px;max-width:620px")}>
            Na enem mestu uredimo širok nabor elektro storitev za domove, stanovanja, novogradnje in podjetja. Vsako izvedbo načrtujemo z mislijo na varnost, preglednost in dolgoročno zanesljivost.
          </p>
          <Link href="/kontakt" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFB400;color:#020817;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
            Pošlji povpraševanje
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#020817" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </Link>
        </div>
      </section>

      {/* STORITVE DETAIL */}
      <section style={s("background:#fff;background-image:linear-gradient(180deg,rgba(255,255,255,.94),rgba(255,255,255,.98)),url('/generated/soft-electrical-bg.webp');background-size:cover;background-position:center top")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
            <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Kaj izvajamo</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 44px")}>
            Kaj <span style={s("background:linear-gradient(transparent 58%,#FFB400 58%)")}>izvajamo</span>?
          </h2>
          <div className="services-grid">
            {STORITVE.map((item) => (
              <article key={item.st} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__number">{item.st}</span>
                  <div className="service-card__icon" aria-hidden="true">
                    <GeneratedIcon name={item.icon} alt="" size={128} collection="icons-v2" />
                  </div>
                </div>
                <h3>{item.naslov}</h3>
                <p>{item.tekst}</p>
              </article>
            ))}
          </div>
          <div className="service-assurance" aria-label="Način dela">
            <p><strong>01</strong><span><b>Ogled in dogovor</b>Najprej preverimo stanje in vaše potrebe.</span></p>
            <p><strong>02</strong><span><b>Jasna izvedba</b>Delo načrtujemo pregledno in brez nepotrebnih zapletov.</span></p>
            <p><strong>03</strong><span><b>Varen zaključek</b>Poskrbimo za urejeno, preverjeno in zanesljivo rešitev.</span></p>
          </div>
        </div>
      </section>

      {/* ZA KOGA */}
      <section style={s("background:#F5F6F8;background-image:linear-gradient(180deg,rgba(245,246,248,.92),rgba(245,246,248,.97)),url('/generated/soft-electrical-bg.webp');background-size:cover;background-position:center")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFB400;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Za koga</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 44px;text-align:center")}>
            Za koga izvajamo elektro storitve?
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px")}>
            <div style={s("background:#fff;border:1px solid rgba(2,8,23,.07);border-radius:18px;padding:30px 26px;display:flex;flex-direction:column;gap:12px")}>
              <span style={s("width:46px;height:46px;border-radius:12px;background:#020817;display:flex;align-items:center;justify-content:center")}>
                <GeneratedIcon name="home-owner" alt="" size={33} />
              </span>
              <h3 style={s("font:600 18px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0")}>Lastniki hiš in stanovanj</h3>
              <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>Za prenove, novogradnje, adaptacije in manjša elektro dela.</p>
            </div>
            <div style={s("background:#fff;border:1px solid rgba(2,8,23,.07);border-radius:18px;padding:30px 26px;display:flex;flex-direction:column;gap:12px")}>
              <span style={s("width:46px;height:46px;border-radius:12px;background:#020817;display:flex;align-items:center;justify-content:center")}>
                <GeneratedIcon name="company-office" alt="" size={33} />
              </span>
              <h3 style={s("font:600 18px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0")}>Podjetja</h3>
              <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>Za pisarne, lokale, skladišča, delavnice in poslovne prostore.</p>
            </div>
            <div style={s("background:#fff;border:1px solid rgba(2,8,23,.07);border-radius:18px;padding:30px 26px;display:flex;flex-direction:column;gap:12px")}>
              <span style={s("width:46px;height:46px;border-radius:12px;background:#020817;display:flex;align-items:center;justify-content:center")}>
                <GeneratedIcon name="investor-construction" alt="" size={33} />
              </span>
              <h3 style={s("font:600 18px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;margin:0")}>Investitorji in izvajalci</h3>
              <p style={s("font:400 14.5px/1.6 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>Za novogradnje, večje prenove in projekte, kjer je potrebna usklajena izvedba.</p>
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
              <h2 style={s("font:700 clamp(28px,3.4vw,42px)/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.02em;color:#fff;margin:0;max-width:680px")}>
                Potrebujete elektro storitev v Mariboru ali okolici?
              </h2>
              <p style={s("font:400 16.5px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:540px")}>
                Pošljite nam povpraševanje in opišite, kaj potrebujete. Pomagali vam bomo izbrati ustrezno rešitev.
              </p>
              <div style={s("display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:10px")}>
                <Link href="/kontakt" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFB400;color:#020817;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
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
