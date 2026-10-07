import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ReferencesIndex } from "@/components/references-index";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const headerCopy = {
  tr: {
    kicker: "REFERANSLAR",
    title: "Değerli İş Ortaklarımız",
    subtitle:
      "Lojistik ve endüstriyel tesislerde personel, saha ve bordro yükünü birlikte taşıdığımız, bize güvenen markalar.",
  },
  en: {
    kicker: "REFERENCES",
    title: "Our Valued Partners",
    subtitle:
      "The brands that trust us to carry staffing, site crews, and payroll together across logistics and industrial facilities.",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const copy = headerCopy[lang];

  return {
    title: copy.title,
    description: copy.subtitle,
    alternates: {
      canonical: `/${lang}/referanslar`,
      languages: { tr: "/tr/referanslar", en: "/en/referanslar" },
    },
  };
}

export default async function ReferencesIndexPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const copy = headerCopy[lang];

  return (
    <>
      <PageHeader eyebrow={copy.kicker} title={copy.title} subtitle={copy.subtitle} />
      <ReferencesIndex lang={lang} />
    </>
  );
}
