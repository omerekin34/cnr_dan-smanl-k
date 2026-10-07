import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ServicesView } from "@/components/services-view";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: dict.meta.servicesTitle,
    description: dict.servicesPage.subtitle,
    alternates: {
      canonical: `/${lang}/services`,
      languages: { tr: "/tr/services", en: "/en/services" },
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        eyebrow={dict.servicesPage.eyebrow}
        title={dict.servicesPage.title}
        subtitle={dict.servicesPage.subtitle}
      />
      <ServicesView services={dict.services} page={dict.servicesPage} />
      <CtaBand lang={lang} content={dict.cta} />
    </>
  );
}
