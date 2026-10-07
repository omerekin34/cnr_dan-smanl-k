import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getReferenceSlugs } from "@/lib/references";

const routes = [
  "",
  "/corporate",
  "/services",
  "/references",
  "/referanslar",
  "/contact",
  "/personel-talebi",
  "/bize-katil",
  ...getReferenceSlugs().map((slug) => `/referanslar/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cnrdanismanlik.com.tr";

  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${base}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          tr: `${base}/tr${route}`,
          en: `${base}/en${route}`,
        },
      },
    })),
  );
}
