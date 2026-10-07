import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ViewAllLinkProps = {
  href: string;
  label: string;
};

export function ViewAllLink({ href, label }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
