import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ReferencesView } from "@/components/references-view";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: dict.meta.referencesTitle,
    description: dict.references.subtitle,
    alternates: {
      canonical: `/${lang}/references`,
      languages: { tr: "/tr/references", en: "/en/references" },
    },
  };
}

export default async function ReferencesPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        eyebrow={dict.references.eyebrow}
        title={dict.references.title}
        subtitle={dict.references.subtitle}
      />
      <ReferencesView content={dict.references} />
      <CtaBand lang={lang} content={dict.cta} />
    </>
  );
}
