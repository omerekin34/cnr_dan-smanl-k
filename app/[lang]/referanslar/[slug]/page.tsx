import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReferenceDetailView } from "@/components/reference-detail-view";
import { getReference, getReferenceSlugs } from "@/lib/references";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return getReferenceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lang = await resolveLocale(params);
  const reference = getReference(slug);
  if (!reference) return {};

  const copy = reference.copy[lang];

  return {
    title: copy.name,
    description: copy.subtitle,
    alternates: {
      canonical: `/${lang}/referanslar/${slug}`,
      languages: {
        tr: `/tr/referanslar/${slug}`,
        en: `/en/referanslar/${slug}`,
      },
    },
  };
}

export default async function ReferenceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lang = await resolveLocale(params);
  const reference = getReference(slug);

  if (!reference) notFound();

  return <ReferenceDetailView reference={reference} copy={reference.copy[lang]} />;
}
