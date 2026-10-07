import { Check } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { serviceIcons } from "@/components/icon-map";
import type { Dictionary } from "@/types/content";

export function ServicesView({
  services,
  page,
}: {
  services: Dictionary["services"];
  page: Dictionary["servicesPage"];
}) {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-6">
        {services.items.map((item, index) => {
          const Icon = serviceIcons[item.icon];
          const reversed = index % 2 === 1;
          return (
            <FadeIn key={item.id}>
              <article
                id={item.id}
                className="scroll-mt-36 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-brand-500/60 hover:shadow-[0_0_36px_-22px_rgba(0,166,81,0.7)] sm:p-8 lg:grid-cols-2"
              >
                <div className={reversed ? "lg:order-2" : undefined}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 text-navy-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-brand-300">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{item.details}</p>
                </div>
                <ul className="space-y-3 rounded-2xl border border-white/10 bg-navy-950/70 p-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          );
        })}

        <FadeIn>
          <aside className="rounded-3xl border border-brand-500/25 bg-navy-950 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{page.coverageTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{page.coverage}</p>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
