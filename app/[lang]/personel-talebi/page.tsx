import type { Metadata } from "next";
import { PersonnelRequestWizard } from "@/components/personnel-request-wizard";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: dict.personnelRequest.metaTitle,
    description: dict.personnelRequest.metaDescription,
    alternates: {
      canonical: `/${lang}/personel-talebi`,
      languages: { tr: "/tr/personel-talebi", en: "/en/personel-talebi" },
    },
  };
}

export default async function PersonnelRequestPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return <PersonnelRequestWizard lang={lang} content={dict.personnelRequest} />;
}
