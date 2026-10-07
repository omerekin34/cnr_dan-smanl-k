import type { Metadata } from "next";
import { AboutSummary } from "@/components/about-summary";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { PartnerLogos } from "@/components/partner-logos";
import { ServicesGrid } from "@/components/services-grid";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { tr: "/tr", en: "/en" },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} content={dict.hero} />
      <AboutSummary lang={lang} content={dict.about} viewAllLabel={dict.nav.viewAll} />
      <PartnerLogos lang={lang} content={dict.partners} viewAllLabel={dict.nav.viewAll} />
      <ServicesGrid lang={lang} content={dict.services} viewAllLabel={dict.nav.viewAll} />
      <Features content={dict.features} />
    </>
  );
}
