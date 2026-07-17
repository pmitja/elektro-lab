"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import s from "@/lib/s";
import { TELEFON } from "@/lib/site";
import Logo from "@/components/Logo";
import InquiryForm from "@/components/InquiryForm";

const NAV = [
  { label: "Domov", href: "/" },
  { label: "Storitve", href: "/storitve" },
  { label: "Reference", href: "/reference" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

type HeaderProps = {
  active: string;
  ctaHref?: string;
};

export default function Header({ active }: HeaderProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isInquiryOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsInquiryOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isInquiryOpen]);

  return (
    <>
      <header style={s("position:sticky;top:0;z-index:60;background:rgba(2,8,23,.96);backdrop-filter:blur(14px);border-bottom:1px solid rgba(21,156,255,.22);box-shadow:0 8px 30px rgba(2,8,23,.18)")}>
        <div style={s("max-width:1200px;margin:0 auto;padding:0 24px;height:70px;display:flex;align-items:center;gap:28px;position:relative")}>
          <Link href="/" aria-label="El-Janko Mont – domov" style={s("display:flex;align-items:center;gap:10px;text-decoration:none;color:#fff")}>
            <Logo size={20} />
          </Link>
          <nav className="amx-nav" style={s("display:flex;gap:26px;margin-left:16px")}>
            {NAV.map((item) =>
              item.href === active ? (
                <Link key={item.href} href={item.href} aria-current="page" style={s("font:600 14px 'Instrument Sans',sans-serif;color:#fff;text-decoration:none;border-bottom:2px solid #FFB400;padding:4px 0")}>
                  {item.label}
                </Link>
              ) : (
                <Link key={item.href} href={item.href} className="hv-text-light" style={s("font:500 14px 'Instrument Sans',sans-serif;color:rgba(255,255,255,.7);text-decoration:none;padding:4px 0")}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div style={s("margin-left:auto;display:flex;align-items:center;gap:18px")}>
            <a className="amx-tel" href={`tel:${TELEFON}`} style={s("display:flex;align-items:center;gap:8px;font:600 14px 'Instrument Sans',sans-serif;color:#fff;text-decoration:none")}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#159CFF" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"></path></svg>
              {TELEFON}
            </a>
            <button
              type="button"
              className="amx-header-cta hv-bg-yellow"
              aria-haspopup="dialog"
              aria-controls="inquiry-modal"
              onClick={() => setIsInquiryOpen(true)}
              style={s("display:inline-flex;align-items:center;background:#FFB400;color:#020817;font:600 14px 'Instrument Sans',sans-serif;padding:11px 20px;border-radius:11px;text-decoration:none;border:none;cursor:pointer")}
            >
              Pošlji povpraševanje
            </button>
            <details className="amx-mobile-menu">
              <summary aria-label="Odpri glavni meni">
                <Menu className="amx-menu-icon" size={22} strokeWidth={2.2} aria-hidden="true" />
                <X className="amx-close-icon" size={22} strokeWidth={2.2} aria-hidden="true" />
              </summary>
              <nav aria-label="Glavni meni" className="amx-mobile-nav-panel">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={item.href === active ? "page" : undefined}
                    className={item.href === active ? "amx-mobile-nav-link is-active" : "amx-mobile-nav-link"}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      {isInquiryOpen && (
        <div
          id="inquiry-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsInquiryOpen(false);
            }
          }}
          style={s("position:fixed;inset:0;z-index:90;display:flex;align-items:center;justify-content:center;background:rgba(2,8,23,.72);padding:24px;overflow-y:auto")}
        >
          <div style={s("width:min(100%,620px);position:relative;margin:auto")}>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Zapri povpraševanje"
              onClick={() => setIsInquiryOpen(false)}
              style={s("position:absolute;top:-14px;right:-14px;z-index:2;width:42px;height:42px;border-radius:999px;border:1px solid rgba(2,8,23,.12);background:#fff;color:#020817;display:flex;align-items:center;justify-content:center;box-shadow:0 14px 32px rgba(0,0,0,.25);cursor:pointer")}
            >
              <X size={20} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <span id="inquiry-modal-title" style={s("position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0")}>
              Pošljite povpraševanje
            </span>
            <InquiryForm
              id="povprasevanje-modal"
              intro="Na kratko opišite, kaj potrebujete. Odgovorili vam bomo v najkrajšem možnem času."
              note="Vaše podatke uporabimo izključno za pripravo odgovora na povpraševanje."
            />
          </div>
        </div>
      )}
    </>
  );
}
