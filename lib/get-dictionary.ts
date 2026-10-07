import { en } from "@/dictionaries/en";
import { tr } from "@/dictionaries/tr";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/content";

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
