import { FadeIn } from "@/components/fade-in";
import { PageHeaderShell } from "@/components/page-header";
import { ReferenceSummaryCard } from "@/components/reference-summary-card";
import type { ReferenceCase, ReferenceCopy } from "@/lib/references";

type ReferenceDetailViewProps = {
  reference: Pick<ReferenceCase, "logo" | "mark" | "accent">;
  copy: ReferenceCopy;
};

export function ReferenceDetailView({ reference, copy }: ReferenceDetailViewProps) {
  return (
    <article>
      <PageHeaderShell>
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.22em] text-emerald-400 uppercase">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{copy.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{copy.subtitle}</p>
        </FadeIn>
      </PageHeaderShell>

      <section className="w-full bg-slate-950 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">{copy.storyTitle}</h2>
            <div className="space-y-6 text-base leading-relaxed text-slate-300">
              {copy.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <ReferenceSummaryCard
                copy={copy}
                logo={reference.logo}
                mark={reference.mark}
                accent={reference.accent}
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
