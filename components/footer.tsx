import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/i18n";
import { officeMapsHref } from "@/lib/office";
import type { Dictionary } from "@/types/content";

type FooterProps = {
  lang: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
  contact: Dictionary["contact"]["info"];
};

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.7 3.3A2.2 2.2 0 1 0 4.7 7.7 2.2 2.2 0 0 0 4.7 3.3ZM3 9h3.4v12H3V9Zm6.2 0H12.5v1.6h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V21H16.4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9.2V9Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.7 10.3 22.4 1h-1.8l-6.7 8.1L8.3 1H1.5l8.1 11.8L1.5 23h1.8l7.1-8.6L15.7 23h6.8l-7.8-12.7Zm-2.5 2.9-.8-1.2L4.2 2.4h2.8l5.3 7.6.8 1.2 6.9 9.9h-2.8l-5.9-8.9Z" />
    </svg>
  );
}

export function Footer({ lang, footer, nav, contact }: FooterProps) {
  const links = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/corporate`, label: nav.corporate },
    { href: `/${lang}/services`, label: nav.services },
    { href: `/${lang}/referanslar`, label: nav.references },
    { href: `/${lang}/contact`, label: nav.contact },
  ];

  const social = [
    { href: "https://www.linkedin.com", label: footer.linkedin, icon: LinkedInIcon },
    { href: "https://www.instagram.com", label: footer.instagram, icon: InstagramIcon },
    { href: "https://x.com", label: footer.x, icon: XIcon },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo lang={lang} className="h-16 w-auto" wordmarkClassName="text-lg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{footer.blurb}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">{footer.navigate}</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">{footer.contact}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={officeMapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 transition hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>{contact.address}</span>
              </a>
            </li>
            {contact.phones.map((person) => (
              <li key={person.tel}>
                <a href={person.tel} className="flex gap-2 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    <span className="block text-slate-200">{person.name}</span>
                    <span className="text-slate-400">{person.display}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-2 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">{footer.social}</p>
          <div className="mt-4 flex gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-slate-200 transition hover:border-brand-500/60 hover:text-brand-500"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500 sm:px-6 lg:px-8">{footer.rights}</p>
      </div>
    </footer>
  );
}
