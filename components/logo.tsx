import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LogoProps = {
  lang: Locale;
  priority?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

export function Logo({
  lang,
  priority = false,
  className = "h-12 w-auto",
  wordmarkClassName = "text-sm sm:text-base",
}: LogoProps) {
  return (
    <Link
      href={`/${lang}`}
      className="inline-flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
    >
      <Image
        src="/logo.png"
        alt=""
        width={84}
        height={83}
        priority={priority}
        sizes="64px"
        className={className}
      />
      <span className={`whitespace-nowrap font-semibold tracking-tight text-white ${wordmarkClassName}`}>
        ÇNR Danışmanlık
      </span>
    </Link>
  );
}
