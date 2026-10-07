import { FadeIn } from "@/components/fade-in";
import { featureIcons } from "@/components/icon-map";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/types/content";

export function Features({ content }: { content: Dictionary["features"] }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_320px_at_15%_0%,rgba(0,166,81,0.18),transparent_68%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
            tone="dark"
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = featureIcons[item.icon];
            return (
              <FadeIn key={item.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(0,166,81,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-500/70 hover:shadow-[0_0_0_1px_rgba(0,166,81,0.45),0_22px_50px_-28px_rgba(0,166,81,0.55)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-navy-950 shadow-[0_0_24px_rgba(0,166,81,0.45)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
