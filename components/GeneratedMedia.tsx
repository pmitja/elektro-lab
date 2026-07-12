import Image from "next/image";
import type { CSSProperties } from "react";

export function GeneratedIcon({
  name,
  alt,
  size = 31,
  style,
  collection = "icons",
}: {
  name: string;
  alt: string;
  size?: number;
  style?: CSSProperties;
  collection?: "icons" | "icons-v2";
}) {
  return (
    <Image
      src={`/generated/${collection}/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      style={{ display: "block", objectFit: "contain", ...style }}
    />
  );
}

export function GeneratedImage({
  src,
  alt,
  style,
  sizes = "(max-width: 980px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover", display: "block", ...style }}
    />
  );
}
