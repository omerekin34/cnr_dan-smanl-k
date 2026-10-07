import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/i18n";
import { glowButtonClass } from "@/lib/styles";
import type { Dictionary } from "@/types/content";

export function CtaBand({ lang, content }: { lang: Locale; content: Dictionary["cta"] }) {
  return (
    <section className="w-full bg-slate-950 px-4 pb-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-brand-500/30 bg-navy-950 px-6 py-10 shadow-[0_0_48px_-28px_rgba(0,166,81,0.8)] sm:px-10 sm:py-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{content.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{content.subtitle}</p>
              </div>
              <Link href={`/${lang}/personel-talebi`} className={glowButtonClass}>
                {content.button}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
