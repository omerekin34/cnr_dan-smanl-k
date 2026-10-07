import { Eye, MapPin, ShieldCheck, Target, Zap } from "lucide-react";
import { CompanyStats } from "@/components/company-stats";
import { FadeIn } from "@/components/fade-in";
import type { Dictionary } from "@/types/content";

const valueIcons = [ShieldCheck, Target, Zap];

export function CorporateView({
  content,
  stats,
}: {
  content: Dictionary["corporate"];
  stats: Dictionary["about"]["stats"];
}) {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-16 lg:space-y-24">
        <CompanyStats stats={stats} className="grid gap-4 sm:grid-cols-3" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white">{content.storyTitle}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
              {content.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
          <div className="grid gap-4">
            <FadeIn delay={0.08}>
              <article className="rounded-3xl border border-brand-500/25 bg-white/[0.04] p-6 text-white">
                <Eye className="h-5 w-5 text-brand-500" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{content.visionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{content.vision}</p>
              </article>
            </FadeIn>
            <FadeIn delay={0.14}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Target className="h-5 w-5 text-brand-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">{content.missionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{content.mission}</p>
              </article>
            </FadeIn>
          </div>
        </div>

        <div>
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.valuesTitle}</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <FadeIn key={value.title} delay={index * 0.08} className="h-full">
                  <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-[0_0_32px_-18px_rgba(0,166,81,0.7)]">
                    <Icon className="h-5 w-5 text-brand-400" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{value.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <div>
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.approachTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.approachSubtitle}
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="font-mono text-xs tracking-[0.2em] text-brand-300">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {content.areasTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.areasSubtitle}
            </p>
          </FadeIn>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {content.areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-emerald-500"
              >
                <MapPin className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                <span className="text-sm font-medium text-white">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
