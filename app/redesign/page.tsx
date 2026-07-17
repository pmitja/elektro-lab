import type { Metadata } from "next";
import Link from "next/link";
import s from "@/lib/s";
import { instrumentSerif } from "@/lib/fonts";
import { TELEFON, EMAIL } from "@/lib/site";
import ImageSlot from "@/components/ImageSlot";
import InquiryForm from "@/components/InquiryForm";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: { absolute: "Predlog prenove domače strani | El-Janko Mont" },
  description: "Interni predogled prenovljene domače strani El-Janko Mont.",
  robots: { index: false, follow: false },
};

// ——— Design tokens (Daylight-inspired editorial direction) ———
const CREAM = "#F6EFE1";
const CREAM_DEEP = "#EFE5CF";
const INK = "#211A0B";
const INK_SOFT = "#6B6250";
const HAIR = "rgba(33,26,11,.16)";
const YELLOW = "#FFB400";
const NAVY = "#020817";

const MONO = "ui-monospace,'SF Mono',Menlo,monospace";
const EYEBROW = `font:500 11.5px ${MONO};letter-spacing:.24em;text-transform:uppercase`;

const STORITVE = [
  { naslov: "Elektroinštalacije", tekst: "Za hiše, stanovanja, novogradnje, adaptacije in poslovne prostore." },
  { naslov: "Hišne inštalacije", tekst: "Varne in pregledno izvedene inštalacije za domove in manjše objekte." },
  { naslov: "Industrijske inštalacije", tekst: "Zanesljive rešitve za delavnice, poslovne in industrijske objekte." },
  { naslov: "Električne polnilnice", tekst: "Montaža polnilnic za domove, podjetja in večstanovanjske objekte." },
  { naslov: "Prenova elektroinštalacij", tekst: "Posodobitev starih inštalacij za varnejšo in zanesljivejšo uporabo." },
  { naslov: "Električne omarice", tekst: "Ureditev, menjava, montaža in nadgradnja omaric ter varovalk." },
  { naslov: "Meritve elektroinštalacij", tekst: "Preverjanje varnosti, ustreznosti in pravilnega delovanja." },
  { naslov: "Razsvetljava", tekst: "Notranja in zunanja razsvetljava za domove in poslovne prostore." },
  { naslov: "Pametne inštalacije", tekst: "Sodobne rešitve za več udobja in učinkovitejše upravljanje prostora." },
  { naslov: "Vtičnice in stikala", tekst: "Montaža in menjava osnovnih elektro elementov za varno uporabo." },
  { naslov: "Elektro vzdrževanje", tekst: "Redno in občasno vzdrževanje za podjetja in večje objekte." },
];

const PROCES = [
  { st: "01", oznaka: "Povpraševanje", naslov: "Pošljete povpraševanje", tekst: "Preko obrazca ali telefona nam sporočite, kaj potrebujete in kje se objekt nahaja." },
  { st: "02", oznaka: "Pregled", naslov: "Pregledamo zahteve", tekst: "Preverimo obseg del in se po potrebi dogovorimo za ogled ali dodatne informacije." },
  { st: "03", oznaka: "Predlog", naslov: "Pripravimo predlog izvedbe", tekst: "Predlagamo ustrezno rešitev in jasno opredelimo naslednje korake." },
  { st: "04", oznaka: "Izvedba", naslov: "Izvedemo elektro dela", tekst: "Dela izvedemo strokovno, varno in z mislijo na dolgoročno zanesljivost." },
  { st: "05", oznaka: "Prevzem", naslov: "Preverimo delovanje", tekst: "Po zaključku preverimo izvedbo in poskrbimo, da je vse pripravljeno za uporabo." },
];

const IZJAVE = [
  { tekst: "Elektro omarica in nova napeljava sta bili urejeni v dogovorjenem roku. Vse pospravljeno, vse deluje.", avtor: "Novogradnja, Maribor — Pobrežje", slot: "Foto: urejena omarica" },
  { tekst: "Hitro so se odzvali, jasno razložili možnosti in prenovo izpeljali brez zapletov.", avtor: "Prenova stanovanja, Maribor — Center", slot: "Foto: prenova stanovanja" },
  { tekst: "Za naš poslovni prostor skrbijo že tretje leto. Vedno dosegljivi, vedno zanesljivi.", avtor: "Poslovni prostor, Tezno", slot: "Foto: poslovni prostor" },
];

const FAQ = [
  { vprasanje: "Ali delujete samo v Mariboru?", odgovor: "Primarno delujemo na območju Maribora in okolice. Za večje projekte se lahko dogovorimo tudi za izvedbo na širšem območju." },
  { vprasanje: "Ali izvajate tudi manjša elektro dela?", odgovor: "Da. Uredimo tudi manjše storitve, kot so montaža vtičnic, stikal, luči, varovalk in druga osnovna elektro dela." },
  { vprasanje: "Ali izvajate elektroinštalacije za novogradnje?", odgovor: "Da. Izvajamo elektroinštalacije za hiše, stanovanja, novogradnje in poslovne objekte." },
  { vprasanje: "Ali izvajate meritve elektroinštalacij?", odgovor: "Da. Meritve so pomembne za preverjanje varnosti, ustreznosti in pravilnega delovanja elektroinštalacij." },
  { vprasanje: "Kako najhitreje dobim ponudbo?", odgovor: "Najhitreje tako, da izpolnite obrazec in na kratko opišete, kaj potrebujete. Pri večjih projektih se lahko dogovorimo tudi za ogled." },
];

function Rule({ color = HAIR }: { color?: string }) {
  return <div style={{ height: 1, background: color }} />;
}

export default function RedesignPreview() {
  return (
    <div className={instrumentSerif.variable} style={s(`background:${CREAM};color:${INK}`)}>
      <style>{`
        .rdx-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        .rdx-nav { display: flex; }
        @media (max-width: 980px) {
          .rdx-2col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .rdx-nav, .rdx-tel { display: none !important; }
          .rdx-stats { grid-template-columns: 1fr 1fr !important; }
          .rdx-stats > div { border-left: 0 !important; padding-left: 0 !important; }
          .rdx-hero-pad { padding-top: 110px !important; padding-bottom: 76px !important; }
        }
        .rdx-link { color: ${INK}; text-decoration: none; opacity: .78; transition: opacity .2s; }
        .rdx-link:hover { opacity: 1; }
        .rdx-faq summary::-webkit-details-marker { display: none; }
        .rdx-faq[open] .rdx-plus { transform: rotate(45deg); }
        .rdx-plus { transition: transform .2s; display: inline-block; }
        .rdx-srv { transition: background .2s; }
        .rdx-srv:hover { background: rgba(255,180,0,.14); }
      `}</style>

      {/* HEADER — cream, hairline, editorial */}
      <header style={s(`position:sticky;top:0;z-index:50;background:${CREAM};border-bottom:1px solid ${HAIR}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;gap:24px")}>
          <Link href="/" aria-label="El-Janko Mont – domov" style={s(`display:flex;align-items:center;text-decoration:none;color:${INK}`)}>
            <Logo size={18} />
          </Link>
          <nav className="rdx-nav" style={s("gap:30px;align-items:center")}>
            {[["Storitve", "/storitve"], ["Reference", "/reference"], ["O nas", "/o-nas"], ["Kontakt", "/kontakt"]].map(([label, href]) => (
              <Link key={href} href={href} className="rdx-link" style={s("font:500 14px var(--font-body)")}>{label}</Link>
            ))}
          </nav>
          <div style={s("display:flex;align-items:center;gap:20px")}>
            <a className="rdx-tel rdx-link" href={`tel:${TELEFON}`} style={s(`font:500 13px ${MONO};letter-spacing:.04em`)}>{TELEFON}</a>
            <a href="#povprasevanje" className="hv-bg-yellow" style={s(`background:${YELLOW};color:${INK};font:600 14px var(--font-body);padding:11px 22px;border-radius:999px;text-decoration:none`)}>
              Pošlji povpraševanje
            </a>
          </div>
        </div>
      </header>

      {/* HERO — full-bleed photo, centered serif headline */}
      <section style={s(`position:relative;overflow:hidden;background:${NAVY};background-image:linear-gradient(rgba(8,13,24,.62),rgba(8,13,24,.78)),url('/generated/cta-electrical-bg.webp');background-size:cover;background-position:center`)}>
        <div className="rdx-hero-pad" style={s("max-width:900px;margin:0 auto;padding:150px 28px 120px;text-align:center;position:relative")}>
          <div style={s(`${EYEBROW};color:rgba(255,255,255,.72);margin-bottom:26px`)}>Elektro storitve — Maribor in okolica</div>
          <h1 style={s("font:400 clamp(46px,6.4vw,86px)/1.04 var(--font-serif);letter-spacing:-0.015em;color:#fff;margin:0 0 26px")}>
            Električar, na katerega se lahko <span style={s(`font-style:italic;color:${YELLOW}`)}>zanesete</span>
          </h1>
          <p style={s("font:400 18px/1.65 var(--font-body);color:rgba(255,255,255,.82);margin:0 auto 38px;max-width:560px")}>
            Zanesljive elektro storitve za domove, novogradnje in podjetja v Mariboru in okolici — od manjših montaž do celovitih elektroinštalacij.
          </p>
          <div style={s("display:flex;flex-wrap:wrap;gap:14px;justify-content:center")}>
            <a href="#povprasevanje" className="hv-bg-yellow" style={s(`background:${YELLOW};color:${INK};font:600 15.5px var(--font-body);padding:16px 32px;border-radius:999px;text-decoration:none`)}>
              Pošlji povpraševanje
            </a>
            <a href={`tel:${TELEFON}`} className="hv-border-strong" style={s("border:1px solid rgba(255,255,255,.4);color:#fff;font:600 15.5px var(--font-body);padding:16px 32px;border-radius:999px;text-decoration:none")}>
              Pokliči električarja
            </a>
          </div>
        </div>
      </section>

      {/* STATS — hairline editorial strip */}
      <section style={s(`background:${CREAM};border-bottom:1px solid ${HAIR}`)}>
        <div className="rdx-stats" style={s("max-width:1240px;margin:0 auto;padding:44px 28px;display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr;gap:32px")}>
          <div style={s("display:flex;flex-direction:column;gap:6px")}>
            <span style={s(`${EYEBROW};color:${INK_SOFT}`)}>Lokalna ekipa</span>
            <span style={s("font:400 21px/1.3 var(--font-serif)")}>Ekipa iz Maribora, ki jo poznate po imenu</span>
          </div>
          {[["10+", "let izkušenj z elektro deli"], ["300+", "izvedenih projektov"], ["100%", "preverjena in varna izvedba"]].map(([st, opis]) => (
            <div key={st} style={s(`display:flex;flex-direction:column;gap:6px;border-left:1px solid ${HAIR};padding-left:32px`)}>
              <span style={s("font:400 44px var(--font-serif);letter-spacing:-0.02em")}>{st}</span>
              <span style={s(`font:400 14px var(--font-body);color:${INK_SOFT}`)}>{opis}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORITVE — numbered editorial grid */}
      <section style={s(`background:${CREAM}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:104px 28px")}>
          <div style={s(`${EYEBROW};color:${INK_SOFT};margin-bottom:18px`)}>Storitve</div>
          <div className="rdx-2col" style={s("align-items:end;margin-bottom:56px;gap:32px")}>
            <h2 style={s("font:400 clamp(36px,4.4vw,60px)/1.08 var(--font-serif);letter-spacing:-0.015em;margin:0")}>
              Kaj uredimo <span style={s("font-style:italic")}>za vas?</span>
            </h2>
            <p style={s(`font:400 16px/1.65 var(--font-body);color:${INK_SOFT};margin:0;max-width:440px;justify-self:end`)}>
              Vsak projekt obravnavamo celostno — od svetovanja do izvedbe, preverjanja in urejenega zaključka del.
            </p>
          </div>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(255px,1fr));gap:0 40px")}>
            {STORITVE.map((item, i) => (
              <Link key={item.naslov} href="/storitve" className="rdx-srv" style={s(`display:flex;flex-direction:column;gap:10px;border-top:1px solid ${INK};padding:20px 8px 34px;text-decoration:none;color:${INK}`)}>
                <span style={s(`font:500 12px ${MONO};letter-spacing:.14em;color:${INK_SOFT}`)}>{String(i + 1).padStart(2, "0")}.</span>
                <span style={s("font:400 24px var(--font-serif);letter-spacing:-0.01em")}>{item.naslov}</span>
                <span style={s(`font:400 14px/1.6 var(--font-body);color:${INK_SOFT}`)}>{item.tekst}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOMOVI / PODJETJA — split editorial cards */}
      <section style={s(`background:${CREAM_DEEP};border-top:1px solid ${HAIR}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:104px 28px")}>
          <div style={s(`${EYEBROW};color:${INK_SOFT};margin-bottom:18px;text-align:center`)}>Za koga delamo</div>
          <h2 style={s("font:400 clamp(36px,4.4vw,58px)/1.08 var(--font-serif);letter-spacing:-0.015em;margin:0 0 56px;text-align:center")}>
            Domovi in <span style={s("font-style:italic")}>podjetja</span>
          </h2>
          <div className="rdx-2col" style={s("gap:28px")}>
            <div style={s(`background:${CREAM};border:1px solid ${HAIR};border-radius:22px;overflow:hidden;display:flex;flex-direction:column`)}>
              <ImageSlot shape="rect" placeholder="Foto: elektroinštalacije v novogradnji" style={{ width: "100%", height: 280 }} />
              <div style={s("padding:34px 34px 38px;display:flex;flex-direction:column;gap:14px;flex:1")}>
                <span style={s(`${EYEBROW};color:${INK_SOFT}`)}>Za zasebne stranke</span>
                <h3 style={s("font:400 30px/1.15 var(--font-serif);margin:0")}>Za domove, stanovanja in novogradnje</h3>
                <p style={s(`font:400 15px/1.65 var(--font-body);color:${INK_SOFT};margin:0;flex:1`)}>
                  Gradite hišo, prenavljate stanovanje ali urejate posamezno elektro rešitev? Poskrbimo za strokovno izvedbo, jasen dogovor in urejen zaključek del.
                </p>
                <a href="#povprasevanje" style={s(`font:600 15px var(--font-body);color:${INK};text-decoration:none;border-bottom:2px solid ${YELLOW};align-self:start;padding-bottom:3px`)}>
                  Povpraševanje za dom →
                </a>
              </div>
            </div>
            <div style={s(`background:${NAVY};border-radius:22px;overflow:hidden;display:flex;flex-direction:column`)}>
              <div style={s("position:relative;width:100%;height:280px;background:url('/generated/about-electrician-cabinet.webp') center/cover")}></div>
              <div style={s("padding:34px 34px 38px;display:flex;flex-direction:column;gap:14px;flex:1")}>
                <span style={s(`${EYEBROW};color:rgba(255,255,255,.6)`)}>Za podjetja</span>
                <h3 style={s("font:400 30px/1.15 var(--font-serif);margin:0;color:#fff")}>Elektro rešitve za poslovne prostore</h3>
                <p style={s("font:400 15px/1.65 var(--font-body);color:rgba(255,255,255,.72);margin:0;flex:1")}>
                  Nove inštalacije, prenove, vzdrževanje, meritve in razsvetljava za pisarne, lokale, delavnice, skladišča in večstanovanjske objekte.
                </p>
                <a href="#povprasevanje" style={s(`font:600 15px var(--font-body);color:#fff;text-decoration:none;border-bottom:2px solid ${YELLOW};align-self:start;padding-bottom:3px`)}>
                  Povpraševanje za podjetje →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCES — yellow band, numbered cards (Daylight "simple path") */}
      <section style={s(`background:${YELLOW}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:104px 28px")}>
          <div style={s(`${EYEBROW};color:rgba(33,26,11,.6);margin-bottom:18px`)}>Kako poteka</div>
          <h2 style={s("font:400 clamp(36px,4.4vw,58px)/1.08 var(--font-serif);letter-spacing:-0.015em;margin:0 0 56px;max-width:560px")}>
            Preprosta pot do <span style={s("font-style:italic")}>izvedbe</span>
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px")}>
            {PROCES.map((k) => (
              <div key={k.st} style={s(`background:${CREAM};border-radius:16px;padding:24px 22px 28px;display:flex;flex-direction:column;gap:12px`)}>
                <span style={s(`font:500 11.5px ${MONO};letter-spacing:.18em;text-transform:uppercase;color:${INK_SOFT}`)}>{k.st} — {k.oznaka}</span>
                <Rule />
                <span style={s("font:400 21px/1.2 var(--font-serif)")}>{k.naslov}</span>
                <span style={s(`font:400 13.5px/1.6 var(--font-body);color:${INK_SOFT}`)}>{k.tekst}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE / IZJAVE — dark section, photo-backed quote cards */}
      <section style={s(`background:${NAVY}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:104px 28px")}>
          <div style={s(`${EYEBROW};color:rgba(255,255,255,.55);margin-bottom:18px`)}>Kaj pravijo stranke</div>
          <h2 style={s("font:400 clamp(36px,4.4vw,58px)/1.08 var(--font-serif);letter-spacing:-0.015em;margin:0 0 56px;color:#fff")}>
            Resnični objekti. <span style={s(`font-style:italic;color:${YELLOW}`)}>Resnične rešitve.</span>
          </h2>
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px")}>
            {IZJAVE.map((iz) => (
              <div key={iz.avtor} style={s("position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.12);min-height:360px;display:flex;flex-direction:column")}>
                <ImageSlot shape="rect" placeholder={iz.slot} style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,.05)" }} />
                <div style={s("position:relative;margin-top:auto;background:rgba(2,8,23,.72);backdrop-filter:blur(8px);padding:26px 24px;display:flex;flex-direction:column;gap:12px")}>
                  <p style={s("font:400 20px/1.35 var(--font-serif);color:#fff;margin:0")}>“{iz.tekst}”</p>
                  <span style={s(`font:500 11.5px ${MONO};letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6)`)}>{iz.avtor}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={s("margin-top:36px;text-align:center")}>
            <Link href="/reference" style={s(`font:600 15px var(--font-body);color:#fff;text-decoration:none;border-bottom:2px solid ${YELLOW};padding-bottom:3px`)}>
              Poglej vse reference →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — editorial hairline accordion */}
      <section style={s(`background:${CREAM}`)}>
        <div style={s("max-width:900px;margin:0 auto;padding:104px 28px")}>
          <div style={s(`${EYEBROW};color:${INK_SOFT};margin-bottom:18px`)}>Pogosta vprašanja</div>
          <h2 style={s("font:400 clamp(36px,4.4vw,56px)/1.08 var(--font-serif);letter-spacing:-0.015em;margin:0 0 44px")}>
            Vprašanja? <span style={s("font-style:italic")}>Imamo odgovore.</span>
          </h2>
          <Rule color={INK} />
          {FAQ.map((q) => (
            <details key={q.vprasanje} className="rdx-faq" style={s(`border-bottom:1px solid ${HAIR}`)}>
              <summary style={s(`list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 4px;font:400 20px var(--font-serif);color:${INK}`)}>
                {q.vprasanje}
                <span className="rdx-plus" style={s(`font:400 22px var(--font-serif);color:${INK_SOFT}`)}>+</span>
              </summary>
              <p style={s(`font:400 15px/1.65 var(--font-body);color:${INK_SOFT};margin:0;padding:0 4px 24px;max-width:640px`)}>{q.odgovor}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ZAKLJUČNI CTA + OBRAZEC */}
      <section style={s(`background:${NAVY};background-image:linear-gradient(rgba(8,13,24,.82),rgba(8,13,24,.88)),url('/generated/soft-electrical-bg.webp');background-size:cover;background-position:center`)}>
        <div className="rdx-2col" style={s("max-width:1240px;margin:0 auto;padding:104px 28px;align-items:center;gap:72px")}>
          <div>
            <div style={s(`${EYEBROW};color:rgba(255,255,255,.6);margin-bottom:22px`)}>Povpraševanje</div>
            <h2 style={s("font:400 clamp(38px,4.6vw,62px)/1.06 var(--font-serif);letter-spacing:-0.015em;color:#fff;margin:0 0 22px")}>
              Potrebujete električarja v <span style={s(`font-style:italic;color:${YELLOW}`)}>Mariboru?</span>
            </h2>
            <p style={s("font:400 16.5px/1.65 var(--font-body);color:rgba(255,255,255,.75);margin:0 0 34px;max-width:460px")}>
              Pošljite povpraševanje in nam povejte, kaj želite urediti. Pripravili bomo predlog rešitve in se dogovorili za naslednji korak.
            </p>
            <div style={s("display:flex;flex-direction:column;gap:14px")}>
              <a href={`tel:${TELEFON}`} style={s(`font:400 26px var(--font-serif);color:#fff;text-decoration:none`)}>{TELEFON}</a>
              <a href={`mailto:${EMAIL}`} style={s(`font:500 14px ${MONO};letter-spacing:.06em;color:rgba(255,255,255,.7);text-decoration:none`)}>{EMAIL}</a>
            </div>
          </div>
          <InquiryForm
            intro="Na kratko opišite, kaj potrebujete. Odgovorili vam bomo v najkrajšem možnem času."
            note="Vaše podatke uporabimo izključno za pripravo odgovora na povpraševanje."
          />
        </div>
      </section>

      {/* FOOTER — slim editorial */}
      <footer style={s(`background:${CREAM};border-top:1px solid ${HAIR}`)}>
        <div style={s("max-width:1240px;margin:0 auto;padding:34px 28px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:18px")}>
          <span style={s("font:500 19px var(--font-serif)")}>El-Janko Mont</span>
          <nav style={s("display:flex;flex-wrap:wrap;gap:24px")}>
            {[["Storitve", "/storitve"], ["Reference", "/reference"], ["O nas", "/o-nas"], ["Kontakt", "/kontakt"]].map(([label, href]) => (
              <Link key={href} href={href} className="rdx-link" style={s("font:500 13.5px var(--font-body)")}>{label}</Link>
            ))}
          </nav>
          <span style={s(`font:500 11.5px ${MONO};letter-spacing:.14em;text-transform:uppercase;color:${INK_SOFT}`)}>© 2026 El-Janko Mont — Maribor</span>
        </div>
      </footer>
    </div>
  );
}
