import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { serviceIcons } from "@/components/icon-map";
import { SectionHeading } from "@/components/section-heading";
import { ViewAllLink } from "@/components/view-all-link";
import { withLocale, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/content";

type ServicesGridProps = {
  lang: Locale;
  content: Dictionary["services"];
  viewAllLabel: string;
};

export function ServicesGrid({ lang, content, viewAllLabel }: ServicesGridProps) {
  return (
    <section id="services" className="relative scroll-mt-32 overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_280px_at_80%_0%,rgba(0,166,81,0.14),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
            tone="dark"
            action={<ViewAllLink href={withLocale(lang, "/services")} label={viewAllLabel} />}
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = serviceIcons[item.icon];
            return (
              <FadeIn key={item.id} delay={index * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/70 hover:shadow-[0_0_0_1px_rgba(0,166,81,0.45),0_24px_60px_-30px_rgba(0,166,81,0.45)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-navy-950 shadow-[0_0_24px_rgba(0,166,81,0.35)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-brand-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  <Link
                    href={`/${lang}/services#${item.id}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 transition group-hover:gap-2 group-hover:text-brand-200"
                  >
                    {content.learnMore}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
