import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/storitve", "/reference", "/o-nas", "/kontakt"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
