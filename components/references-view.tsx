import { ClipboardList, Package, ShieldCheck, Sparkles, Users, Warehouse } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import type { Dictionary } from "@/types/content";

const scopeIcons = [Users, Package, ClipboardList, Warehouse, ShieldCheck, Sparkles];

export function ReferencesView({ content }: { content: Dictionary["references"] }) {
  return (
    <div className="bg-slate-950">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-white">{content.storyTitle}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
            {content.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_24px_60px_-32px_rgba(221,33,29,0.55)]">
            <div className="h-1.5 bg-[#dd211d]" />
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6">
                <Image
                  src={content.partnerLogo}
                  alt={content.partnerName}
                  width={278}
                  height={40}
                  unoptimized
                  className="h-9 w-auto sm:h-11"
                />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#dd211d]">
                {content.eyebrow}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-navy-950">{content.partnerName}</h3>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {content.sectorLabel}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-700">{content.sector}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {content.roleLabel}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-700">{content.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {content.modelLabel}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-700">{content.model}</dd>
                </div>
              </dl>
            </div>
          </article>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-navy-950">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {content.facts.map((fact, index) => (
            <FadeIn key={fact.label} delay={index * 0.05}>
              <div className="bg-navy-950 px-6 py-8">
                <p className="text-lg font-semibold tracking-tight text-brand-400">{fact.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{fact.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.scopeTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {content.scopeSubtitle}
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.scopes.map((scope, index) => {
            const Icon = scopeIcons[index] ?? Users;
            return (
              <FadeIn key={scope.title} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-[0_0_32px_-18px_rgba(0,166,81,0.7)]">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{scope.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{scope.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.flowTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.flowSubtitle}
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
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <FadeIn>
          <aside className="rounded-3xl border border-brand-500/25 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{content.focusTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{content.focus}</p>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">{content.note}</p>
          </aside>
        </FadeIn>
      </section>
    </div>
  );
}
