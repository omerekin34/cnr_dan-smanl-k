import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact-page-view";
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
    title: dict.meta.contactTitle,
    description: dict.contact.subtitle,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: { tr: "/tr/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      />
      <ContactPageView lang={lang} content={dict.contact} />
    </>
  );
}
