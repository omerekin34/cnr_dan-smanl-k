import type { Metadata } from "next";
import { JoinApplicationWizard } from "@/components/join-application-wizard";
import { getDictionary } from "@/lib/get-dictionary";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return {
    title: dict.joinApplication.metaTitle,
    description: dict.joinApplication.metaDescription,
    alternates: {
      canonical: `/${lang}/bize-katil`,
      languages: { tr: "/tr/bize-katil", en: "/en/bize-katil" },
    },
  };
}

export default async function JoinApplicationPage({ params }: PageProps) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return <JoinApplicationWizard lang={lang} content={dict.joinApplication} />;
}
