import Image from "next/image";
import type { ReferenceAccent, ReferenceCopy } from "@/lib/references";

const accentStyles: Record<ReferenceAccent, { bar: string; tag: string }> = {
  red: { bar: "bg-[#dd211d]", tag: "text-[#dd211d]" },
  emerald: { bar: "bg-emerald-500", tag: "text-emerald-500" },
};

type ReferenceSummaryCardProps = {
  copy: ReferenceCopy;
  logo?: string;
  mark: string;
  accent: ReferenceAccent;
};

export function ReferenceSummaryCard({ copy, logo, mark, accent }: ReferenceSummaryCardProps) {
  const tone = accentStyles[accent];

  return (
    <aside className="overflow-hidden rounded-xl bg-white text-slate-900 shadow-2xl shadow-black/40">
      <div className={`h-1.5 ${tone.bar}`} aria-hidden="true" />
      <div className="p-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-6">
            {logo ? (
              <Image
                src={logo}
                alt={copy.name}
                width={278}
                height={40}
                unoptimized
                className="h-9 w-auto sm:h-11"
              />
            ) : (
              <span className="text-xl font-bold tracking-tight text-slate-900">{mark}</span>
            )}
          </div>
        </div>

        <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${tone.tag}`}>{copy.cardEyebrow}</p>
        <p className="mt-1 mb-6 text-2xl font-bold tracking-tight">{copy.name}</p>

        <dl className="space-y-5">
          {copy.meta.map((row) => (
            <div key={row.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{row.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
