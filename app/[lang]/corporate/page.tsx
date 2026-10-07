import type { Metadata } from "next";
import { CorporateView } from "@/components/corporate-view";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: dict.meta.corporateTitle,
    description: dict.corporate.subtitle,
    alternates: {
      canonical: `/${lang}/corporate`,
      languages: { tr: "/tr/corporate", en: "/en/corporate" },
    },
  };
}

export default async function CorporatePage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        eyebrow={dict.corporate.eyebrow}
        title={dict.corporate.title}
        subtitle={dict.corporate.subtitle}
      />
      <CorporateView content={dict.corporate} stats={dict.about.stats} />
      <CtaBand lang={lang} content={dict.cta} />
    </>
  );
}
