"use client";

import { motion } from "framer-motion";
import { ArrowRight, HardHat, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { ghostButtonClass, glowButtonClass } from "@/lib/styles";
import type { Dictionary } from "@/types/content";

type HeroProps = {
  lang: Locale;
  content: Dictionary["hero"];
};

export function Hero({ lang, content }: HeroProps) {
  const panel = content.panel;

  return (
    <section className="warehouse-scene relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-emerald-950/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-emerald-950/40" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-16 top-28 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-800/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-4 pt-36 pb-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/35 bg-brand-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_#00A651]" />
            {content.badge}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            {content.titleLead}{" "}
            <span className="bg-gradient-to-r from-brand-200 to-brand-500 bg-clip-text text-transparent">
              {content.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {content.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}/services`} className={glowButtonClass}>
              {content.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={`/${lang}/contact`} className={ghostButtonClass}>
              {content.secondaryCta}
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-500/10 blur-2xl" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/70 p-5 shadow-[0_30px_80px_-36px_rgba(0,166,81,0.65)] backdrop-blur-xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
                {panel.kicker}
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70 motion-reduce:animate-none" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-500" />
                </span>
                {panel.status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <FloorMark icon={Users} />
              <FloorMark icon={HardHat} />
              <FloorMark icon={ShieldCheck} />
            </div>

            <p className="mt-6 text-lg font-semibold tracking-tight text-white">{panel.heading}</p>
            <dl className="mt-4 space-y-3">
              {panel.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-slate-100">{row.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloorMark({ icon: Icon }: { icon: typeof Users }) {
  return (
    <div className="grid h-16 place-items-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-200 shadow-[0_0_24px_rgba(0,166,81,0.18)]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}
