import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ViewAllLink } from "@/components/view-all-link";
import { withLocale, type Locale } from "@/lib/i18n";
import { listReferences } from "@/lib/references";
import type { Dictionary } from "@/types/content";

type PartnerLogosProps = {
  lang: Locale;
  content: Dictionary["partners"];
  viewAllLabel: string;
};

export function PartnerLogos({ lang, content, viewAllLabel }: PartnerLogosProps) {
  const partners = listReferences().map((partner) => ({
    slug: partner.slug,
    name: partner.copy[lang].name,
    mark: partner.mark,
    logo: partner.logo,
  }));
  // One half must be wide enough to cover a large screen; the second half
  // is an identical copy so the -50% marquee loop has no gap.
  const repeats = Math.max(1, Math.ceil(8 / Math.max(partners.length, 1)));
  const half = Array.from({ length: repeats }, () => partners).flat();
  const loop = [...half, ...half];

  return (
    <section id="partners" className="relative scroll-mt-32 overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-800/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
          tone="dark"
          action={<ViewAllLink href={withLocale(lang, "/referanslar")} label={viewAllLabel} />}
        />
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max gap-4 py-3">
          {loop.map((partner, index) => {
            const decorative = index >= partners.length;
            return (
              <li key={`${partner.slug}-${index}`} aria-hidden={decorative ? true : undefined}>
                <LogoPlate
                  name={partner.name}
                  mark={partner.mark}
                  logo={partner.logo}
                  href={withLocale(lang, `/referanslar/${partner.slug}`)}
                  tabIndex={decorative ? -1 : undefined}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">{content.note}</p>
      </div>
    </section>
  );
}

function LogoPlate({
  name,
  mark,
  logo,
  href,
  tabIndex,
}: {
  name: string;
  mark: string;
  logo?: string;
  href?: string;
  tabIndex?: number;
}) {
  const className = logo
    ? "group flex h-[92px] w-[240px] items-center justify-center rounded-2xl border border-white/15 bg-white px-6 shadow-[0_12px_40px_-24px_rgba(221,33,29,0.8)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(221,33,29,0.55)]"
    : "group flex h-[92px] w-[240px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 transition duration-300 hover:border-brand-500/55 hover:bg-white/[0.07] hover:shadow-[0_0_32px_rgba(0,166,81,0.2)]";
  const inner = logo ? (
    <Image src={logo} alt={name} width={278} height={40} unoptimized className="h-8 w-auto" />
  ) : (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-900 text-sm font-bold tracking-wide text-slate-300 grayscale transition duration-300 group-hover:border-brand-400/40 group-hover:bg-brand-500 group-hover:text-navy-950 group-hover:grayscale-0">
        {mark}
      </span>
      <span className="text-sm font-semibold tracking-wide text-slate-400 grayscale transition duration-300 group-hover:text-white group-hover:grayscale-0">
        {name}
      </span>
    </>
  );

  if (!href) return <div className={className}>{inner}</div>;

  return (
    <Link href={href} tabIndex={tabIndex} className={className}>
      {inner}
    </Link>
  );
}
