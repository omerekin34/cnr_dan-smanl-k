import type { Locale } from "@/lib/i18n";
import type { OfficePhone } from "@/types/content";

export const officeEmail = "cnr@cnrdanismanlik.com.tr";

const addresses: Record<Locale, string> = {
  tr: "Orhangazi, Eşref Bitlis Blv. No:102 1/A, 34920 Sultanbeyli/İstanbul",
  en: "Orhangazi, Eşref Bitlis Blvd. No. 102 1/A, 34920 Sultanbeyli/Istanbul",
};

const addressLines: Record<Locale, readonly string[]> = {
  tr: ["Orhangazi, Eşref Bitlis Blv. No:102 1/A", "34920 Sultanbeyli/İstanbul"],
  en: ["Orhangazi, Eşref Bitlis Blvd. No. 102 1/A", "34920 Sultanbeyli/Istanbul"],
};

export const officeMapQuery = "Orhangazi, Eşref Bitlis Blv. No:102 1/A, 34920 Sultanbeyli İstanbul";

export const officeMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeMapQuery)}`;

const phoneBook = [
  {
    name: { tr: "Zehra Hanım", en: "Ms. Zehra" },
    display: "0551 881 39 62",
    tel: "tel:+905518813962",
    whatsapp: "https://wa.me/905518813962",
  },
  {
    name: { tr: "Oğuz Bey", en: "Mr. Oğuz" },
    display: "0552 590 13 38",
    tel: "tel:+905525901338",
    whatsapp: "https://wa.me/905525901338",
  },
  {
    name: { tr: "Bayram Bey", en: "Mr. Bayram" },
    display: "0544 690 34 42",
    tel: "tel:+905446903442",
    whatsapp: "https://wa.me/905446903442",
  },
  {
    name: { tr: "Caner Bey", en: "Mr. Caner" },
    display: "0551 681 01 75",
    tel: "tel:+905516810175",
    whatsapp: "https://wa.me/905516810175",
  },
] as const;

export const primaryWhatsapp = phoneBook[0].whatsapp;

export function getOfficeAddress(lang: Locale) {
  return addresses[lang];
}

export function getOfficeAddressLines(lang: Locale) {
  return [...addressLines[lang]];
}

export function getOfficePhones(lang: Locale): OfficePhone[] {
  return phoneBook.map((person) => ({
    name: person.name[lang],
    display: person.display,
    tel: person.tel,
    whatsapp: person.whatsapp,
  }));
}
