import type { Metadata } from "next";
import { spaceGrotesk, instrumentSans } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import RouteScrollReset from "@/components/RouteScrollReset";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Električar Maribor in okolica | Elektro storitve | El-Janko Mont",
  description:
    "Zanesljive elektro storitve v Mariboru in okolici. Hišne in industrijske inštalacije, električne polnilnice, meritve, omarice, razsvetljava in vzdrževanje.",
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: SITE_URL,
    siteName: "El-Janko Mont",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${instrumentSans.variable}`}>
      <body>
        <RouteScrollReset />
        <div style={{ fontFamily: "var(--font-body)", color: "#020817" }}>{children}</div>
      </body>
    </html>
  );
}
