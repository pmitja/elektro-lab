import type { Metadata } from "next";
import Link from "next/link";
import s from "@/lib/s";
import { TELEFON, EMAIL, NASLOV } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { GeneratedIcon, GeneratedImage } from "@/components/GeneratedMedia";
import ImageSlot from "@/components/ImageSlot";
import InquiryForm from "@/components/InquiryForm";
import RevealInit from "@/components/RevealInit";
import HeroGsap from "@/components/HeroGsap";

export const metadata: Metadata = {
  title: { absolute: "Električar Maribor in okolica | Elektro storitve | Elektro Lab" },
  description:
    "Zanesljive elektro storitve v Mariboru in okolici. Hišne in industrijske inštalacije, polnilnice, meritve, omarice, razsvetljava in elektro vzdrževanje.",
  alternates: { canonical: "/" },
};

const CHECK_ITEMS = [
  "Elektro dela za domove in podjetja",
  "Urejena in natančna izvedba",
  "Delujemo v Mariboru in okolici",
  "Svetovanje, izvedba in preverjanje",
];

const HERO_TAGS = ["Elektroinštalacije", "Prenove", "Meritve", "Razsvetljava", "Pametne inštalacije", "Vzdrževanje"];

const STORITVE = [
  { naslov: "Elektroinštalacije", tekst: "Izvedba elektroinštalacij za hiše, stanovanja, novogradnje, adaptacije in poslovne prostore.", icon: "electrical-installation" },
  { naslov: "Hišne inštalacije", tekst: "Varne in pregledno izvedene električne inštalacije za hiše, stanovanja in manjše objekte.", icon: "house-installation" },
  { naslov: "Industrijske inštalacije", tekst: "Zanesljive električne inštalacije za delavnice, poslovne prostore in industrijske objekte.", icon: "industrial-installation" },
  { naslov: "Električne polnilnice", tekst: "Montaža električnih polnilnic za domove, podjetja in večstanovanjske objekte.", icon: "ev-charger" },
  { naslov: "Prenova elektroinštalacij", tekst: "Zamenjava in posodobitev starih inštalacij za varnejšo, preglednejšo in bolj zanesljivo uporabo.", icon: "renovation" },
  { naslov: "Električne omarice", tekst: "Ureditev, menjava, montaža in nadgradnja električnih omaric ter varovalk.", icon: "cabinet" },
  { naslov: "Meritve elektroinštalacij", tekst: "Izvajanje meritev za preverjanje varnosti, ustreznosti in pravilnega delovanja elektroinštalacij.", icon: "measurement" },
  { naslov: "Razsvetljava", tekst: "Montaža notranje in zunanje razsvetljave za domove, poslovne prostore, okolico objektov in delovne površine.", icon: "lighting" },
  { naslov: "Pametne inštalacije", tekst: "Sodobne elektro rešitve za več udobja, boljši nadzor in učinkovitejše upravljanje prostora.", icon: "smart-installation" },
  { naslov: "Vtičnice, stikala in varovalke", tekst: "Montaža, menjava in ureditev osnovnih elektro elementov za varno in praktično uporabo.", icon: "outlet-switch-fuse" },
  { naslov: "Elektro vzdrževanje", tekst: "Redno in občasno elektro vzdrževanje za podjetja, poslovne prostore in večje objekte.", icon: "maintenance" },
];

const PROCES = [
  { st: "01", naslov: "Pošljete povpraševanje", tekst: "Preko obrazca ali telefona nam sporočite, kaj potrebujete in kje se objekt nahaja." },
  { st: "02", naslov: "Pregledamo zahteve", tekst: "Preverimo obseg del in se po potrebi dogovorimo za ogled ali dodatne informacije." },
  { st: "03", naslov: "Pripravimo predlog izvedbe", tekst: "Predlagamo ustrezno rešitev in jasno opredelimo naslednje korake." },
  { st: "04", naslov: "Izvedemo elektro dela", tekst: "Dela izvedemo strokovno, varno in z mislijo na dolgoročno zanesljivost." },
  { st: "05", naslov: "Preverimo delovanje", tekst: "Po zaključku preverimo izvedbo in poskrbimo, da je vse pripravljeno za uporabo." },
];

const PREDNOSTI = [
  "Zanesljiva izvedba elektro del",
  "Delovanje v Mariboru in okolici",
  "Rešitve za domove in podjetja",
  "Jasna komunikacija",
  "Urejeno delo na objektu",
  "Celovit pristop od dogovora do izvedbe",
];

const FAQ = [
  { vprasanje: "Ali delujete samo v Mariboru?", odgovor: "Primarno delujemo na območju Maribora in okolice. Za večje projekte se lahko dogovorimo tudi za izvedbo na širšem območju." },
  { vprasanje: "Ali izvajate tudi manjša elektro dela?", odgovor: "Da. Uredimo tudi manjše storitve, kot so montaža vtičnic, stikal, luči, varovalk in druga osnovna elektro dela." },
  { vprasanje: "Ali izvajate elektroinštalacije za novogradnje?", odgovor: "Da. Izvajamo elektroinštalacije za hiše, stanovanja, novogradnje in poslovne objekte." },
  { vprasanje: "Ali izvajate meritve elektroinštalacij?", odgovor: "Da. Meritve so pomembne za preverjanje varnosti, ustreznosti in pravilnega delovanja elektroinštalacij." },
  { vprasanje: "Kako najhitreje dobim ponudbo?", odgovor: "Najhitreje tako, da izpolnite obrazec in na kratko opišete, kaj potrebujete. Pri večjih projektih se lahko dogovorimo tudi za ogled." },
];

const MARQUEE = ["POŠLJI POVPRAŠEVANJE", "POKLIČI ELEKTRIČARJA", "MARIBOR IN OKOLICA"];
const MARQUEE_RUN = Array.from({ length: 8 }, () => MARQUEE).flat();

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFC900" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
  );
}

function Arrow({ size = 15, stroke = "#0B1526", width = 2.4 }: { size?: number; stroke?: string; width?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectricalContractor",
            name: "Elektro Lab",
            telephone: TELEFON,
            email: EMAIL,
            areaServed: "Maribor in okolica",
            address: { "@type": "PostalAddress", addressLocality: NASLOV },
          }),
        }}
      />
      <RevealInit />
      <HeroGsap />
      <Header active="/" ctaHref="#povprasevanje" />

      {/* HERO */}
      <section style={s("background:#0B1526;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:46px 46px;position:relative;overflow:hidden")}>
        <div data-gsap-hero-glow style={s("position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.13),transparent 65%)")}></div>
        <div data-gsap-hero className="amx-hero" style={s("max-width:1200px;margin:0 auto;padding:72px 24px 64px;display:grid;grid-template-columns:1.08fr .92fr;gap:64px;align-items:start;position:relative")}>
          <div data-gsap-hero-copy>
            <div style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 14px;margin-bottom:26px")}>
              <span className="amx-dot" style={s("width:7px;height:7px;border-radius:50%;background:#FFC900")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.75)")}>Elektro storitve · Maribor in okolica</span>
            </div>
            <h1 style={s("font:700 clamp(38px,4.6vw,58px)/1.06 'Space Grotesk',sans-serif;letter-spacing:-0.025em;color:#fff;margin:0 0 20px")}>
              Električar za <span style={s("color:#FFC900")}>Maribor</span> in okolico
            </h1>
            <p style={s("font:400 17px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0 0 30px;max-width:540px")}>
              Zanesljive elektro storitve za domove, stanovanja, novogradnje in podjetja. Poskrbimo za varne, urejene in strokovno izvedene elektro rešitve — od manjših montaž do celovitih elektroinštalacij.
            </p>
            <div className="amx-2col" style={s("display:grid;grid-template-columns:1fr 1fr;gap:12px 24px;margin-bottom:34px;max-width:560px")}>
              {CHECK_ITEMS.map((item) => (
                <div key={item} style={s("display:flex;align-items:center;gap:10px")}>
                  <Check />
                  <span style={s("font:500 14.5px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.85)")}>{item}</span>
                </div>
              ))}
            </div>
            <div style={s("display:flex;flex-wrap:wrap;gap:14px;margin-bottom:40px")}>
              <a href="#povprasevanje" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                Pošlji povpraševanje
                <Arrow />
              </a>
              <a href={`tel:${TELEFON}`} className="hv-border-strong" style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.28);color:#fff;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                Pokliči električarja
              </a>
            </div>
            <div style={s("border-top:1px solid rgba(255,255,255,.12);padding-top:22px;display:flex;flex-wrap:wrap;gap:8px 18px")}>
              {HERO_TAGS.map((tag, i) => (
                <span key={tag} style={{ display: "contents" }}>
                  <span style={s("font:500 13px 'Space Grotesk',sans-serif;color:rgba(255,255,255,.5)")}>{tag}</span>
                  {i < HERO_TAGS.length - 1 && <span style={s("color:#FFC900;font-size:12px")}>•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* OBRAZEC */}
          <div data-gsap-hero-panel>
            <InquiryForm
              intro="Na kratko opišite, kaj potrebujete. Odgovorili vam bomo v najkrajšem možnem času."
              note="Vaše podatke uporabimo izključno za pripravo odgovora na povpraševanje."
            />
          </div>
        </div>
      </section>

      {/* STATISTIČNA VRSTICA */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:0 24px")}>
          <div className="amx-stats" style={s("background:#0C182E;border-radius:22px;margin-top:-34px;position:relative;z-index:5;box-shadow:0 20px 50px rgba(11,21,38,.18);display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:24px;align-items:center;padding:26px 30px")}>
            <div style={s("display:flex;align-items:center;gap:16px")}>
              <ImageSlot shape="circle" placeholder="Foto ekipe" style={{ width: 62, height: 62, flex: "none" }} />
              <span style={s("font:600 15.5px/1.4 'Space Grotesk',sans-serif;color:#fff")}>
                Lokalna ekipa,
                <br />
                ki jo poznate po imenu
              </span>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:4px;border-left:1px solid rgba(255,255,255,.14);padding-left:24px")}>
              <span style={s("font:700 30px 'Space Grotesk',sans-serif;color:#FFC900;letter-spacing:-0.02em")}>10+</span>
              <span style={s("font:500 13px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.65)")}>let izkušenj z elektro deli</span>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:4px;border-left:1px solid rgba(255,255,255,.14);padding-left:24px")}>
              <span style={s("font:700 30px 'Space Grotesk',sans-serif;color:#FFC900;letter-spacing:-0.02em")}>300+</span>
              <span style={s("font:500 13px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.65)")}>izvedenih projektov</span>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:4px;border-left:1px solid rgba(255,255,255,.14);padding-left:24px")}>
              <span style={s("font:700 30px 'Space Grotesk',sans-serif;color:#FFC900;letter-spacing:-0.02em")}>100%</span>
              <span style={s("font:500 13px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.65)")}>preverjena in varna izvedba</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 2 */}
      <section style={s("background:#fff")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1.2fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Celostni pristop</span>
            </div>
            <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 26px")}>
              Elektro storitve <span style={s("background:linear-gradient(transparent 58%,#FFC900 58%)")}>na enem mestu</span>
            </h2>
            <div style={s("position:relative")}>
              <ImageSlot shape="rounded" radius={18} placeholder="Foto: elektro dela na objektu" style={{ width: "100%", height: 300, display: "block" }} />
              <div style={s("position:absolute;bottom:-16px;right:-14px;background:#FFC900;border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:10px;box-shadow:0 12px 30px rgba(11,21,38,.2)")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0B1526"><polygon points="13,2 4,14 11,14 9,22 20,9 13,9"></polygon></svg>
                <span style={s("font:600 13.5px 'Space Grotesk',sans-serif;color:#0B1526")}>Maribor in okolica</span>
              </div>
            </div>
          </div>
          <div>
            <p style={s("font:400 16.5px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 14px")}>
              Pri elektro delih je pomembno, da so izvedena varno, natančno in dolgoročno zanesljivo. Zato vsak projekt obravnavamo celostno — od osnovnega svetovanja do izvedbe, preverjanja in zaključka.
            </p>
            <p style={s("font:400 16.5px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 26px")}>
              Podjetjem in fizičnim strankam v Mariboru in okolici pomagamo pri novogradnjah, prenovah, vzdrževanju, montaži, meritvah, razsvetljavi in sodobnih elektro rešitvah.
            </p>
            <Link href="/storitve" style={s("display:inline-flex;align-items:center;gap:8px;font:600 15px 'Instrument Sans',sans-serif;color:#0B1526;text-decoration:none;border-bottom:2px solid #FFC900;padding-bottom:3px")}>
              Poglej storitve
              <Arrow size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEKCIJA 3: KARTICE */}
      <section style={s("background:#F5F6F8;background-image:linear-gradient(180deg,rgba(245,246,248,.9),rgba(245,246,248,.96)),url('/generated/soft-electrical-bg.webp');background-size:cover;background-position:center")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Storitve</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 44px;text-align:center")}>
            Kaj lahko <span style={s("background:linear-gradient(transparent 58%,#FFC900 58%)")}>uredimo</span> za vas?
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px")}>
            {STORITVE.map((item) => (
              <Link key={item.naslov} href="/storitve" className="hv-card" style={s("display:flex;flex-direction:column;gap:14px;background:#fff;border:1px solid rgba(11,21,38,.07);border-radius:18px;padding:26px 24px;text-decoration:none;color:#0B1526;box-shadow:0 1px 2px rgba(11,21,38,.04);transition:box-shadow .2s,transform .2s")}>
                <span style={s("width:48px;height:48px;border-radius:12px;background:#0B1526;display:flex;align-items:center;justify-content:center")}>
                  <GeneratedIcon name={item.icon} alt="" size={34} />
                </span>
                <span style={s("font:600 17.5px 'Space Grotesk',sans-serif;letter-spacing:-0.01em")}>{item.naslov}</span>
                <span style={s("font:400 14px/1.6 'Instrument Sans',sans-serif;color:#47536B;flex:1")}>{item.tekst}</span>
                <span style={s("display:inline-flex;align-items:center;gap:7px;font:600 13.5px 'Instrument Sans',sans-serif;color:#0B1526")}>
                  Več o storitvah
                  <Arrow size={13} stroke="#B08A00" width={2.6} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCIJA 4: DOMOVI */}
      <section style={s("background:#fff")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center")}>
          <ImageSlot shape="rounded" radius={20} placeholder="Foto: elektroinštalacije v novogradnji" style={{ width: "100%", height: 400 }} />
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Za zasebne stranke</span>
            </div>
            <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 18px")}>Za domove, stanovanja in novogradnje</h2>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 12px")}>
              Ne glede na to, ali gradite hišo, prenavljate stanovanje ali želite urediti posamezno elektro rešitev, poskrbimo za strokovno izvedbo, jasen dogovor in urejen zaključek del.
            </p>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 26px")}>
              Pomagamo pri razpeljavi kablov, montaži vtičnic in stikal, razsvetljavi, električnih omaricah, meritvah in drugih elektro delih, ki jih potrebuje vaš dom.
            </p>
            <a href="#povprasevanje" className="hv-bg-navy" style={s("display:inline-flex;align-items:center;gap:8px;background:#0B1526;color:#fff;font:600 15px 'Instrument Sans',sans-serif;padding:14px 24px;border-radius:12px;text-decoration:none")}>
              Pošlji povpraševanje za dom
            </a>
          </div>
        </div>
      </section>

      {/* SEKCIJA 5: PODJETJA */}
      <section style={s("background:#0C182E;background-image:linear-gradient(90deg,rgba(12,24,46,.96),rgba(12,24,46,.76)),linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px),url('/generated/soft-electrical-bg.webp');background-size:cover,46px 46px,46px 46px,cover;background-position:center")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55)")}>Za podjetja</span>
            </div>
            <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 18px;color:#fff")}>Elektro rešitve za podjetja</h2>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0 0 12px")}>
              Podjetja potrebujejo zanesljive elektro rešitve, ki omogočajo nemoteno delo in varno uporabo prostorov. Izvajamo elektro dela za pisarne, lokale, delavnice, skladišča, poslovne prostore in večstanovanjske objekte.
            </p>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0 0 26px")}>
              Poskrbimo za nove inštalacije, prenove, vzdrževanje, meritve, razsvetljavo in nadgradnje obstoječih sistemov.
            </p>
            <a href="#povprasevanje" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFC900;color:#0B1526;font:600 15px 'Instrument Sans',sans-serif;padding:14px 24px;border-radius:12px;text-decoration:none")}>
              Pošlji povpraševanje za podjetje
            </a>
          </div>
          <div style={s("position:relative;width:100%;height:400px;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 22px 60px rgba(0,0,0,.18)")}>
            <GeneratedImage src="/generated/about-electrician-cabinet.webp" alt="Urejanje električne omarice v poslovnem prostoru" sizes="(max-width: 980px) 100vw, 560px" />
          </div>
        </div>
      </section>

      {/* SEKCIJA 6: PROCES */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Proces</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 44px;text-align:center")}>
            Kako poteka <span style={s("background:linear-gradient(transparent 58%,#FFC900 58%)")}>sodelovanje</span>?
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:18px")}>
            {PROCES.map((k) => (
              <div key={k.st} style={s("display:flex;flex-direction:column;gap:12px;border-top:3px solid #FFC900;background:#F5F6F8;border-radius:0 0 16px 16px;padding:22px 20px 24px")}>
                <span style={s("font:700 15px 'Space Grotesk',sans-serif;color:#B08A00")}>{k.st}</span>
                <span style={s("font:600 16.5px 'Space Grotesk',sans-serif;letter-spacing:-0.01em")}>{k.naslov}</span>
                <span style={s("font:400 13.5px/1.6 'Instrument Sans',sans-serif;color:#47536B")}>{k.tekst}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCIJA 7: ZAKAJ */}
      <section style={s("background:#F5F6F8")}>
        <div className="amx-2col" style={s("max-width:1200px;margin:0 auto;padding:88px 24px;display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center")}>
          <div>
            <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
              <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
              <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Zakaj Elektro Lab</span>
            </div>
            <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 18px")}>Zakaj izbrati Elektro Lab?</h2>
            <p style={s("font:400 16px/1.7 'Instrument Sans',sans-serif;color:#47536B;margin:0")}>
              Ker pri elektriki ni prostora za površno izvedbo. Naš cilj je, da so elektro dela narejena varno, pregledno in tako, da vam dolgoročno služijo brez skrbi.
            </p>
          </div>
          <div className="amx-2col" style={s("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
            {PREDNOSTI.map((p) => (
              <div key={p} style={s("display:flex;align-items:center;gap:12px;background:#fff;border:1px solid rgba(11,21,38,.07);border-radius:13px;padding:16px 18px")}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B08A00" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}><path d="M20 6L9 17l-5-5"></path></svg>
                <span style={s("font:500 14.5px 'Instrument Sans',sans-serif;color:#0B1526")}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIJA: NAŠE DELO */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px 0")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Galerija</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 40px;text-align:center")}>
            Naše delo <span style={s("background:linear-gradient(transparent 58%,#FFC900 58%)")}>v živo</span>
          </h2>
          <div className="amx-gallery" style={s("display:grid;grid-template-columns:1.2fr 1fr 1fr 1.2fr;gap:16px;align-items:center")}>
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: ekipa na terenu" style={{ width: "100%", height: 300, display: "block" }} />
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: razvod kablov" style={{ width: "100%", height: 230, display: "block" }} />
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: električna omarica" style={{ width: "100%", height: 230, display: "block" }} />
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: montaža razsvetljave" style={{ width: "100%", height: 300, display: "block" }} />
          </div>
        </div>
      </section>

      {/* SEKCIJA 8: REFERENCE PREVIEW */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:88px 24px")}>
          <div className="amx-2col" style={s("display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;margin-bottom:36px")}>
            <div>
              <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px")}>
                <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
                <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>Reference</span>
              </div>
              <h2 style={s("font:700 clamp(26px,3vw,36px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0")}>Izvedeni projekti</h2>
            </div>
            <div>
              <p style={s("font:400 15.5px/1.65 'Instrument Sans',sans-serif;color:#47536B;margin:0 0 18px")}>
                Oglejte si primere izvedenih elektro del za domove, stanovanja, novogradnje in poslovne prostore. Reference prikazujejo način dela, natančnost izvedbe in raznolikost projektov.
              </p>
              <Link href="/reference" style={s("display:inline-flex;align-items:center;gap:8px;font:600 15px 'Instrument Sans',sans-serif;color:#0B1526;text-decoration:none;border-bottom:2px solid #FFC900;padding-bottom:3px")}>
                Poglej reference
                <Arrow size={14} />
              </Link>
            </div>
          </div>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px")}>
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: urejena električna omarica" style={{ width: "100%", height: 240 }} />
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: montaža razsvetljave" style={{ width: "100%", height: 240 }} />
            <ImageSlot shape="rounded" radius={16} placeholder="Foto: prenova elektroinštalacij" style={{ width: "100%", height: 240 }} />
          </div>
        </div>
      </section>

      {/* SEKCIJA 9: FAQ */}
      <section style={s("background:#F5F6F8")}>
        <div style={s("max-width:820px;margin:0 auto;padding:88px 24px")}>
          <div style={s("display:flex;align-items:center;gap:9px;margin-bottom:16px;justify-content:center")}>
            <span style={s("width:9px;height:9px;background:#FFC900;border-radius:2px")}></span>
            <span style={s("font:600 12px 'Space Grotesk',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A93A6")}>FAQ</span>
          </div>
          <h2 style={s("font:700 clamp(28px,3.2vw,38px)/1.12 'Space Grotesk',sans-serif;letter-spacing:-0.02em;margin:0 0 36px;text-align:center")}>Pogosta vprašanja</h2>
          <div style={s("display:flex;flex-direction:column;gap:12px")}>
            {FAQ.map((q) => (
              <details key={q.vprasanje} style={s("background:#fff;border:1px solid rgba(11,21,38,.07);border-radius:14px;padding:0 22px")}>
                <summary style={s("list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:19px 0;font:600 16px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;color:#0B1526")}>
                  {q.vprasanje}
                  <span style={s("flex:none;width:26px;height:26px;border-radius:8px;background:#FFC900;display:flex;align-items:center;justify-content:center;font:600 16px 'Space Grotesk',sans-serif;color:#0B1526")}>+</span>
                </summary>
                <p style={s("font:400 15px/1.65 'Instrument Sans',sans-serif;color:#47536B;margin:0;padding:0 0 20px;max-width:640px")}>{q.odgovor}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ZAKLJUČNI CTA */}
      <section style={s("background:#fff")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:0 24px 88px")}>
          <div style={s("background:#0B1526;background-image:linear-gradient(rgba(11,21,38,.86),rgba(11,21,38,.9)),linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px),url('/generated/cta-electrical-bg.webp');background-size:cover,46px 46px,46px 46px,cover;background-position:center;border-radius:24px;padding:64px 32px;text-align:center;position:relative;overflow:hidden")}>
            <div style={s("position:absolute;bottom:-180px;left:50%;transform:translateX(-50%);width:600px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,201,0,.12),transparent 65%)")}></div>
            <div style={s("position:relative;display:flex;flex-direction:column;align-items:center;gap:18px")}>
              <h2 style={s("font:700 clamp(28px,3.4vw,42px)/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.02em;color:#fff;margin:0;max-width:640px")}>
                Potrebujete električarja v Mariboru ali okolici?
              </h2>
              <p style={s("font:400 16.5px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.72);margin:0;max-width:540px")}>
                Pošljite povpraševanje in nam povejte, kaj želite urediti. Pripravili bomo predlog rešitve in se dogovorili za naslednji korak.
              </p>
              <div style={s("display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:10px")}>
                <a href="#povprasevanje" className="hv-bg-yellow" style={s("display:inline-flex;align-items:center;gap:8px;background:#FFC900;color:#0B1526;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                  Pošlji povpraševanje
                </a>
                <a href={`tel:${TELEFON}`} className="hv-border-strong" style={s("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.28);color:#fff;font:600 15.5px 'Instrument Sans',sans-serif;padding:15px 28px;border-radius:12px;text-decoration:none")}>
                  Pokliči zdaj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE CTA TRAK */}
      <a href="#povprasevanje" style={s("display:block;background:#FFC900;overflow:hidden;padding:18px 0;text-decoration:none")}>
        <div style={s("display:flex;width:max-content;animation:amxMarquee 34s linear infinite;gap:0")}>
          {[0, 1].map((half) => (
            <div key={half} style={s("display:flex;gap:44px;padding-right:44px")}>
              {MARQUEE_RUN.map((text, index) => (
                <span key={`${half}-${text}-${index}`} style={s("display:flex;align-items:center;gap:16px;font:700 21px 'Space Grotesk',sans-serif;letter-spacing:-0.01em;color:#0B1526;white-space:nowrap")}>
                  {text}
                  <span aria-hidden="true" style={s("font:700 20px 'Space Grotesk',sans-serif;color:#0B1526")}>∞</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </a>

      <Footer />
      <MobileCtaBar ctaHref="#povprasevanje" />
    </>
  );
}
