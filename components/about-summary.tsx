import { Eye, Target } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ViewAllLink } from "@/components/view-all-link";
import { withLocale, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/content";

export function AboutSummary({
  lang,
  content,
  viewAllLabel,
}: {
  lang: Locale;
  content: Dictionary["about"];
  viewAllLabel: string;
}) {
  return (
    <section id="about" className="relative scroll-mt-32 overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-800/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            tone="dark"
            action={<ViewAllLink href={withLocale(lang, "/corporate")} label={viewAllLabel} />}
          />
        </FadeIn>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{content.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-100"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </FadeIn>

          <div className="grid gap-4">
            <FadeIn delay={0.08}>
              <article className="rounded-3xl border border-brand-500/25 bg-white/[0.04] p-6 text-white shadow-[0_0_40px_-24px_rgba(0,166,81,0.8)]">
                <Target className="h-5 w-5 text-brand-500" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{content.missionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{content.mission}</p>
              </article>
            </FadeIn>
            <FadeIn delay={0.14}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Eye className="h-5 w-5 text-brand-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">{content.visionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{content.vision}</p>
              </article>
            </FadeIn>
          </div>
        </div>

        <CompanyStats stats={content.stats} />
      </div>
    </section>
  );
}
