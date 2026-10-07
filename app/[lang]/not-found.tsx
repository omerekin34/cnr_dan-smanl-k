"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n";
import { glowButtonClass } from "@/lib/styles";

export default function NotFound() {
  const pathname = usePathname() || "/tr";
  const segment = pathname.split("/")[1] ?? "tr";
  const lang = isLocale(segment) ? segment : "tr";
  const dict = getDictionary(lang);

  return (
    <section className="hero-glow flex min-h-[70svh] items-center px-4 pt-36 pb-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{dict.notFound.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">{dict.notFound.body}</p>
        <Link href={`/${lang}`} className={`${glowButtonClass} mt-8`}>
          {dict.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
