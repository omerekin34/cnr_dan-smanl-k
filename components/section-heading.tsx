import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
  action,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const subtitleClass = `mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`;

  const copy = (
    <div className={`max-w-2xl ${action ? "min-w-0 flex-1" : ""} ${alignment}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-brand-500" : "text-brand-700"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {subtitle && !action ? <p className={subtitleClass}>{subtitle}</p> : null}
    </div>
  );

  if (!action) return copy;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        {copy}
        <div className="shrink-0 self-end">{action}</div>
      </div>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
    </div>
  );
}
