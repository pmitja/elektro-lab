import type { CSSProperties } from "react";

// Parses the inline-style strings copied verbatim from the design export
// (Amperix .dc.html files) into React style objects, so the JSX stays a
// character-for-character mirror of the original design.
const cache = new Map<string, CSSProperties>();

export default function s(css: string): CSSProperties {
  const hit = cache.get(css);
  if (hit) return hit;

  const style: Record<string, string> = {};
  const replaced = css
    .replaceAll("'Space Grotesk',sans-serif", "var(--font-display)")
    .replaceAll("'Instrument Sans',system-ui,sans-serif", "var(--font-body)")
    .replaceAll("'Instrument Sans',sans-serif", "var(--font-body)");

  for (const decl of replaced.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = value;
  }

  cache.set(css, style);
  return style as CSSProperties;
}
