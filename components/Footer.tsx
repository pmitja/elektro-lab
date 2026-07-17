import Link from "next/link";
import s from "@/lib/s";
import { TELEFON, EMAIL, NASLOV } from "@/lib/site";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Domov", href: "/" },
  { label: "Storitve", href: "/storitve" },
  { label: "Reference", href: "/reference" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

const STORITVE = [
  "Elektroinštalacije",
  "Hišne inštalacije",
  "Industrijske inštalacije",
  "Električne polnilnice",
  "Prenove",
  "Meritve",
  "Električne omarice",
  "Razsvetljava",
  "Pametne inštalacije",
  "Elektro vzdrževanje",
];

export default function Footer() {
  return (
    <footer style={s("background:#020817;color:#fff")}>
      <div style={s("max-width:1200px;margin:0 auto;padding:64px 24px 28px")}>
        <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:36px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.1)")}>
          <div style={s("display:flex;flex-direction:column;gap:14px")}>
            <span style={s("display:flex;align-items:center;gap:10px")}>
              <Logo color="#fff" size={19} />
            </span>
            <p style={s("font:400 14px/1.65 'Instrument Sans',sans-serif;color:rgba(255,255,255,.6);margin:0;max-width:260px")}>
              Zanesljive elektro storitve za domove, podjetja in novogradnje v Mariboru in okolici.
            </p>
          </div>
          <div style={s("display:flex;flex-direction:column;gap:11px")}>
            <span style={s("font:600 13px 'Space Grotesk',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>Navigacija</span>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hv-text-yellow" style={s("font:400 14.5px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.75);text-decoration:none")}>
                {item.label}
              </Link>
            ))}
          </div>
          <div style={s("display:flex;flex-direction:column;gap:11px")}>
            <span style={s("font:600 13px 'Space Grotesk',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>Storitve</span>
            {STORITVE.map((label) => (
              <Link key={label} href="/storitve" className="hv-text-yellow" style={s("font:400 14.5px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.75);text-decoration:none")}>
                {label}
              </Link>
            ))}
          </div>
          <div style={s("display:flex;flex-direction:column;gap:11px")}>
            <span style={s("font:600 13px 'Space Grotesk',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>Kontakt</span>
            <a href={`tel:${TELEFON}`} className="hv-text-yellow" style={s("font:500 14.5px 'Instrument Sans',sans-serif;color:#fff;text-decoration:none")}>{TELEFON}</a>
            <a href={`mailto:${EMAIL}`} className="hv-text-yellow" style={s("font:400 14.5px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.75);text-decoration:none")}>{EMAIL}</a>
            <span style={s("font:400 14.5px/1.55 'Instrument Sans',sans-serif;color:rgba(255,255,255,.75)")}>{NASLOV}</span>
            <span style={s("font:400 14.5px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.75)")}>Maribor in okolica</span>
          </div>
        </div>
        <div style={s("display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;padding-top:24px")}>
          <span style={s("font:400 13px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.45)")}>© 2026 El-Janko Mont. Vse pravice pridržane.</span>
          <span style={s("font:400 13px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.45)")}>Elektro storitve · Maribor in okolica</span>
        </div>
      </div>
    </footer>
  );
}
