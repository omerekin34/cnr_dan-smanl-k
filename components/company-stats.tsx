import { Counter } from "@/components/counter";
import { FadeIn } from "@/components/fade-in";
import { ServiceYearCounter } from "@/components/service-year-counter";
import { getYearsOfService } from "@/lib/service-years";
import type { Dictionary } from "@/types/content";

type Stat = Dictionary["about"]["stats"][number];

const numberClass = "bg-gradient-to-r from-white to-brand-300 bg-clip-text text-transparent";

export function CompanyStats({
  stats,
  className = "mt-12 grid gap-4 sm:grid-cols-3",
}: {
  stats: Stat[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {stats.map((stat, index) => {
        const value = stat.kind === "serviceYears" ? getYearsOfService() : stat.value;

        return (
          <FadeIn key={stat.label} delay={index * 0.08}>
            <div className="rounded-3xl border border-white/10 bg-navy-950/80 px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <dt className="text-sm font-medium text-slate-400">{stat.label}</dt>
              <dd className="mt-3 text-5xl font-semibold tracking-tight text-white">
                {stat.kind === "serviceYears" ? (
                  <ServiceYearCounter fallback={value} suffix={stat.suffix} className={numberClass} />
                ) : (
                  <Counter value={value} suffix={stat.suffix} className={numberClass} />
                )}
              </dd>
            </div>
          </FadeIn>
        );
      })}
    </dl>
  );
}
