"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/i18n";
import { glowButtonClass } from "@/lib/styles";
import type { Dictionary } from "@/types/content";

type NavbarProps = {
  lang: Locale;
  content: Dictionary["nav"];
};

const joinButtonClass =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-emerald-500 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-emerald-500 transition duration-300 hover:bg-emerald-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 xl:px-5 xl:py-3";

export function Navbar({ lang, content }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: content.home, exact: true },
    { href: `/${lang}/corporate`, label: content.corporate, exact: false },
    { href: `/${lang}/services`, label: content.services, exact: false },
    { href: `/${lang}/referanslar`, label: content.references, exact: false },
    { href: `/${lang}/contact`, label: content.contact, exact: false },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar lang={lang} />
      <div className="relative border-b border-white/10 bg-navy-950/70 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent" />
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-2 lg:px-6 xl:gap-3 xl:px-8">
          <Logo lang={lang} priority className="h-11 w-auto sm:h-12" />

          <nav className="hidden items-center gap-3 lg:flex xl:gap-4" aria-label={content.menu}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href, link.exact) ? "page" : undefined}
                className={`text-sm font-medium whitespace-nowrap transition ${
                  isActive(link.href, link.exact) ? "text-brand-500" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher lang={lang} label={content.language} />
            <Link href={`/${lang}/bize-katil`} className={joinButtonClass}>
              {content.join}
            </Link>
            <Link href={`/${lang}/personel-talebi`} className={`${glowButtonClass} shrink-0 whitespace-nowrap`}>
              {content.quote}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher lang={lang} label={content.language} />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? content.closeMenu : content.openMenu}</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="max-h-[calc(100svh-6.5rem)] overflow-y-auto border-t border-white/10 bg-navy-950/95 md:max-h-[calc(100svh-7rem)] lg:hidden"
            >
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label={content.menu}>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href, link.exact) ? "page" : undefined}
                    className={`rounded-xl px-3 py-3 text-base font-medium ${
                      isActive(link.href, link.exact) ? "bg-white/10 text-brand-500" : "text-slate-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href={`/${lang}/bize-katil`} className={`${joinButtonClass} mt-3 min-h-12 text-base`}>
                  {content.join}
                </Link>
                <Link href={`/${lang}/personel-talebi`} className={`${glowButtonClass} min-h-12`}>
                  {content.quote}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
