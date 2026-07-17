import Image from "next/image";

const LOGO_WIDTH = 1539;
const LOGO_HEIGHT = 1022;

export default function Logo({ size = 20 }: { color?: string; size?: number }) {
  const width = Math.round(size * 10.6);
  const height = Math.round(size * 2.8);

  return (
    <span
      className="brand-logo"
      style={{ position: "relative", display: "block", width, height, overflow: "hidden", flex: "none" }}
    >
      <Image
        src="/brand/el-janko-mont-horizontal-transparent.png"
        alt="El-Janko Mont"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        sizes={`${width}px`}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "auto",
          transform: "translateY(-50%)",
        }}
      />
    </span>
  );
}
