import { Mail, type LucideIcon } from "lucide-react";
import type { SVGProps } from "react";
import type { Locale } from "@/lib/i18n";
import { officeEmail, primaryWhatsapp } from "@/lib/office";

const PHRASES: Record<Locale, readonly string[]> = {
  tr: [
    "LOJİSTİK TESİSLERİNİZ İÇİN PROFESYONEL İNSAN KAYNAĞI",
    "SGK VE İSG YÜKÜNÜZÜ BİZ ÜSTLENİYORUZ",
    "7/24 KESİNTİSİZ SAHA OPERASYON DESTEĞİ",
  ],
  en: [
    "PROFESSIONAL WORKFORCE FOR YOUR LOGISTICS FACILITIES",
    "WE TAKE ON YOUR SGK AND OCCUPATIONAL SAFETY LOAD",
    "24/7 UNINTERRUPTED ON-SITE OPERATIONS SUPPORT",
  ],
};

const EMAIL_LABEL: Record<Locale, string> = {
  tr: "E-posta",
  en: "Email",
};

const REPEATS = 2;

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.89c-.24.68-1.4 1.3-1.93 1.38-.49.07-1.11.1-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.54c.17 0 .4-.06.63.48.24.57.82 1.99.89 2.13.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.67-.17 1.35Z" />
    </svg>
  );
}

function iconLinks(lang: Locale) {
  return [
    { href: "https://www.instagram.com", label: "Instagram", external: true, icon: InstagramIcon },
    { href: `mailto:${officeEmail}`, label: EMAIL_LABEL[lang], icon: Mail },
    { href: primaryWhatsapp, label: "WhatsApp", external: true, icon: WhatsAppIcon },
  ] satisfies { href: string; label: string; external?: boolean; icon: LucideIcon | typeof InstagramIcon }[];
}

function MarqueeCopy({ copy, phrases }: { copy: number; phrases: readonly string[] }) {
  return (
    <p className="flex shrink-0 items-center text-xs font-medium tracking-widest whitespace-nowrap text-slate-300 uppercase md:text-sm">
      {Array.from({ length: REPEATS }, (_, repeat) =>
        phrases.map((phrase, index) => (
          <span key={`${copy}-${repeat}-${index}`}>
            {phrase}
            <span className="mx-3 inline-block tracking-normal text-emerald-500" aria-hidden="true">
              •
            </span>
          </span>
        )),
      )}
    </p>
  );
}

export function AnnouncementBar({ lang, placement = "top" }: { lang: Locale; placement?: "top" | "bottom" }) {
  const phrases = PHRASES[lang];
  const links = iconLinks(lang);

  return (
    <div
      className={`flex h-10 w-full items-center bg-[#041a13] md:h-12 ${
        placement === "bottom" ? "border-t border-white/10" : "border-b border-white/5"
      }`}
      role="region"
      aria-label={phrases.join(". ")}
    >
      <div className="flex h-full shrink-0 items-center gap-3 border-r border-white/10 px-3 sm:gap-3.5 sm:px-4">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            aria-label={item.label}
            className="text-slate-400 transition-colors hover:text-emerald-500 focus-visible:text-emerald-500 focus-visible:outline-none"
          >
            <item.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>
        ))}
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_0.75rem,black_calc(100%-1.5rem),transparent)]">
        <p className="truncate px-4 text-xs font-medium tracking-widest whitespace-nowrap text-slate-300 uppercase motion-safe:hidden md:text-sm">
          {phrases.map((phrase) => (
            <span key={phrase}>
              {phrase}
              <span className="mx-3 inline-block tracking-normal text-emerald-500" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </p>
        <div className="overflow-hidden motion-reduce:hidden" aria-hidden="true">
          <div className="announcement-track flex w-max items-center">
            <MarqueeCopy copy={0} phrases={phrases} />
            <MarqueeCopy copy={1} phrases={phrases} />
          </div>
        </div>
      </div>
    </div>
  );
}
