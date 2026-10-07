"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

function localeHref(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}

export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || `/${lang}`;

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-[11px] font-semibold tracking-wide"
    >
      {locales.map((locale) => {
        const active = lang === locale;
        return (
          <Link
            key={locale}
            href={localeHref(pathname, locale)}
            hrefLang={locale}
            scroll
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-full bg-brand-500 px-2.5 py-1 text-navy-950"
                : "rounded-full px-2.5 py-1 text-white/70 transition hover:text-white"
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
