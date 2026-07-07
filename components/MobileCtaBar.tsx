import s from "@/lib/s";
import { TELEFON } from "@/lib/site";

export default function MobileCtaBar({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="amx-bar" style={s("display:none;position:fixed;bottom:0;left:0;right:0;z-index:70;background:rgba(11,21,38,.97);backdrop-filter:blur(10px);padding:10px 14px calc(10px + env(safe-area-inset-bottom));gap:10px;border-top:1px solid rgba(255,255,255,.12)")}>
      <a href={`tel:${TELEFON}`} style={s("flex:1;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.3);color:#fff;font:600 14.5px 'Instrument Sans',sans-serif;padding:13px;border-radius:11px;text-decoration:none")}>
        Pokliči
      </a>
      <a href={ctaHref} style={s("flex:1;display:flex;align-items:center;justify-content:center;gap:8px;background:#FFC900;color:#0B1526;font:600 14.5px 'Instrument Sans',sans-serif;padding:13px;border-radius:11px;text-decoration:none")}>
        Povpraševanje
      </a>
    </div>
  );
}
