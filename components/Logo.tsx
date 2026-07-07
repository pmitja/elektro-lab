import Image from "next/image";

const LOGO_WIDTH = 1420;
const LOGO_HEIGHT = 184;

export default function Logo({ color = "#0B1526", size = 20 }: { color?: string; size?: number }) {
  const isLight = color.toLowerCase() === "#fff" || color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white";

  return (
    <Image
      src={isLight ? "/brand/elektro-lab-logo-light.png" : "/brand/elektro-lab-logo.png"}
      alt="Elektro Lab"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={!isLight}
      style={{ display: "block", width: "auto", height: size }}
    />
  );
}
