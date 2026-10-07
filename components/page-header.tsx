import type { ReactNode } from "react";
import { FadeIn } from "@/components/fade-in";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <PageHeaderShell>
      <FadeIn>
        <span className="mb-4 block text-xs font-bold tracking-widest text-emerald-400 uppercase md:text-sm">
          {eyebrow}
        </span>
        <h1 className="mb-4 text-3xl leading-tight font-bold text-white md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
      </FadeIn>
    </PageHeaderShell>
  );
}

export function PageHeaderShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#041a13] px-4 pt-32 pb-16 md:px-8 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,95,70,0.55),#041a13_58%,#041a13)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_64%,transparent_84%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[78%] bg-[linear-gradient(to_right,rgba(16,185,129,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.09)_1px,transparent_1px)] bg-[length:72px_72px] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_18%,#000_46%,transparent_100%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
