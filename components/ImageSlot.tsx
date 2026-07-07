import type { CSSProperties } from "react";

// Mirrors the empty state of the design export's <image-slot> element:
// light frame, dashed ring, image icon and a caption.
export default function ImageSlot({
  placeholder,
  shape = "rounded",
  radius = 12,
  style,
}: {
  placeholder: string;
  shape?: "rect" | "rounded" | "circle";
  radius?: number;
  style?: CSSProperties;
}) {
  const borderRadius = shape === "circle" ? "50%" : shape === "rect" ? 0 : radius;
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "rgba(0,0,0,.04)", borderRadius, ...style }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          textAlign: "center",
          padding: 12,
          font: "13px/1.3 system-ui,-apple-system,sans-serif",
          color: "rgba(0,0,0,.55)",
          userSelect: "none",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <div style={{ maxWidth: "90%", fontWeight: 500, letterSpacing: ".01em" }}>{placeholder}</div>
      </div>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", border: "1.5px dashed rgba(0,0,0,.25)", borderRadius }} />
    </div>
  );
}
