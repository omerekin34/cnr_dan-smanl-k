import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { withLocale, type Locale } from "@/lib/i18n";
import { listReferences, type ReferenceCase } from "@/lib/references";

export function ReferencesIndex({ lang }: { lang: Locale }) {
  const partners = listReferences();

  return (
    <section className="w-full bg-slate-950 px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <li key={partner.slug} className="min-w-0">
              <FadeIn delay={index * 0.05} className="h-full">
                <ReferenceCard lang={lang} partner={partner} />
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReferenceCard({ lang, partner }: { lang: Locale; partner: ReferenceCase }) {
  const copy = partner.copy[lang];
  const sector = copy.meta[0]?.value;

  return (
    <Link
      href={withLocale(lang, `/referanslar/${partner.slug}`)}
      className="group relative flex h-full min-h-48 flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-[0_16px_40px_-24px_rgba(16,185,129,0.9)] focus-visible:border-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
    >
      <ArrowUpRight
        className="absolute top-4 right-4 h-4 w-4 text-emerald-500 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />

      <span className="flex h-16 items-center justify-center rounded-lg bg-white px-4">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt=""
            width={220}
            height={40}
            unoptimized
            className="h-11 w-auto max-w-full object-contain"
          />
        ) : (
          <span className="text-xl font-bold tracking-[0.22em] text-slate-800 opacity-40 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0">
            {partner.mark}
          </span>
        )}
      </span>

      <span className="mt-5 block">
        <span className="block text-sm font-semibold text-white">{copy.name}</span>
        {sector ? <span className="mt-1 block text-xs leading-relaxed text-slate-400">{sector}</span> : null}
      </span>
    </Link>
  );
}
