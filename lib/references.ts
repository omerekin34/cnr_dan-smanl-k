import type { Locale } from "@/lib/i18n";

export type ReferenceAccent = "red" | "emerald";

export type ReferenceMeta = {
  label: string;
  value: string;
};

export type ReferenceCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  storyTitle: string;
  story: string[];
  cardEyebrow: string;
  name: string;
  meta: ReferenceMeta[];
};

export type ReferenceCase = {
  slug: string;
  logo?: string;
  mark: string;
  accent: ReferenceAccent;
  copy: Record<Locale, ReferenceCopy>;
};

const references: ReferenceCase[] = [
  {
    slug: "mars-logistics",
    logo: "/mars-logistics.png",
    mark: "ML",
    accent: "red",
    copy: {
      tr: {
        eyebrow: "Referanslar",
        title: "Mars Logistics tesisinde personel ortağıyız",
        subtitle:
          "Mars Logistics’in depo ve sevkiyat sahasında kadroyu biz kurarız. SGK, İSG ve bordro ÇNR Group Danışmanlık’ta kalır; operasyon Mars’ın planıyla yürür.",
        storyTitle: "Mars ile sahada nasıl duruyoruz",
        story: [
          "Mars Logistics, depo ve dağıtım operasyonunu yürüten iş ortaklarımızdan biridir. ÇNR Group Danışmanlık bu tesislerde mavi yaka kadroyu seçer, sahaya alır ve yasal süreçlerini kendi üzerinde tutar.",
          "Mars tarafı sevkiyat planı, depo akışı ve müşteri teslimatına odaklanır. Mal kabul, yerleştirme, yükleme, boşaltma ve sevkiyata hazırlık için gereken insan kaynağı ÇNR ekiplerindedir.",
          "Yoğun çıkış dönemlerinde kadroyu genişletiriz. Sakin dönemde daimi ekip aynı vardiya disiplininde kalır. Amaç, Mars operasyonunun personel açığı veya evrak yükü yüzünden yavaşlamamasıdır.",
          "Personelin özlük dosyası, SGK bildirimi ve iş güvenliği takibi tesisin günlük işine eklenmez. Mars sahadaki işi yönetir; ÇNR kadronun sorumluluğunu taşır.",
        ],
        cardEyebrow: "Referanslar",
        name: "Mars Logistics",
        meta: [
          { label: "Sektör", value: "Lojistik, depo ve dağıtım" },
          { label: "ÇNR’nin rolü", value: "Personel tedariki, saha kadrosu ve bordrolama" },
          { label: "Çalışma biçimi", value: "Daimi ekip ve dönemsel takviye" },
        ],
      },
      en: {
        eyebrow: "References",
        title: "We staff the floor at Mars Logistics",
        subtitle:
          "We build the crew for Mars Logistics’s warehouse and dispatch floor. SGK, occupational safety, and payroll stay with ÇNR Group Danışmanlık; the operation follows Mars’s plan.",
        storyTitle: "How we stand on site with Mars",
        story: [
          "Mars Logistics is one of the partners whose warehouse and distribution operation we support. ÇNR Group Danışmanlık selects the blue-collar crew, places it on site, and keeps the legal process on our side.",
          "Mars focuses on the dispatch plan, warehouse flow, and customer delivery. The people for goods-in, putaway, loading, unloading, and dispatch preparation come from ÇNR teams.",
          "In a heavy outbound period we widen the crew. In a quieter stretch the permanent team stays on the same shift discipline. The aim is that Mars’s operation does not slow down for a staffing gap or a paperwork load.",
          "Personnel files, SGK notifications, and safety follow-up are not added to the facility’s daily work. Mars runs the job on site; ÇNR carries responsibility for the crew.",
        ],
        cardEyebrow: "References",
        name: "Mars Logistics",
        meta: [
          { label: "Sector", value: "Logistics, warehousing, and distribution" },
          { label: "ÇNR’s role", value: "Staffing, site crews, and payroll" },
          { label: "How we work", value: "A permanent crew, with seasonal cover" },
        ],
      },
    },
  },
  {
    slug: "omsan-lojistik",
    logo: "/omsan-logistics.png",
    mark: "OM",
    accent: "red",
    copy: {
      tr: {
        eyebrow: "Referanslar",
        title: "Omsan Lojistik tesisinde personel ortağıyız",
        subtitle:
          "Depo, aktarma ve sevkiyat sahasında kadroyu biz kurarız. SGK, İSG ve bordro ÇNR Group Danışmanlık’ta kalır; operasyon Omsan’ın planıyla yürür.",
        storyTitle: "Omsan ile sahada nasıl duruyoruz",
        story: [
          "Omsan Lojistik, depo ve dağıtım operasyonunu yürüten iş ortaklarımızdandır. ÇNR Group Danışmanlık bu tesislerde mavi yaka kadroyu seçer, sahaya alır ve yasal süreçlerini kendi üzerinde tutar.",
          "Yoğun sevkiyat dönemlerinde aynı havuzdan takviye ederiz. Sakin dönemde daimi ekip vardiya düzenini bozmadan kalır. Özlük, SGK ve iş güvenliği takibi tesisin günlük işine eklenmez.",
        ],
        cardEyebrow: "Referanslar",
        name: "Omsan Lojistik",
        meta: [
          { label: "Sektör", value: "Lojistik, depo ve dağıtım" },
          { label: "ÇNR’nin rolü", value: "Personel tedariki, saha kadrosu ve bordrolama" },
          { label: "Çalışma biçimi", value: "Daimi ekip ve dönemsel takviye" },
        ],
      },
      en: {
        eyebrow: "References",
        title: "We staff the floor at Omsan Logistics",
        subtitle:
          "We build the crew for the warehouse, transfer, and dispatch floor. SGK, occupational safety, and payroll stay with ÇNR Group Danışmanlık; the operation follows Omsan’s plan.",
        storyTitle: "How we stand on site with Omsan",
        story: [
          "Omsan Logistics is one of the partners whose warehouse and distribution operation we support. ÇNR Group Danışmanlık selects the blue-collar crew, places it on site, and keeps the legal process on our side.",
          "In a heavy dispatch period we add people from the same pool. In a quieter stretch the permanent team keeps the shift pattern. Personnel files, SGK, and safety follow-up are not added to the facility’s daily work.",
        ],
        cardEyebrow: "References",
        name: "Omsan Lojistik",
        meta: [
          { label: "Sector", value: "Logistics, warehousing, and distribution" },
          { label: "ÇNR’s role", value: "Staffing, site crews, and payroll" },
          { label: "How we work", value: "A permanent crew, with seasonal cover" },
        ],
      },
    },
  },
  {
    slug: "sertrans-lojistik",
    logo: "/sertrans-logistics.png",
    mark: "ST",
    accent: "emerald",
    copy: {
      tr: {
        eyebrow: "Referanslar",
        title: "Sertrans Lojistik tesisinde kadroyu biz kurarız",
        subtitle:
          "Depo, elleçleme ve sevkiyat hazırlığında mavi yaka kadro ÇNR Group Danışmanlık’tadır. Bordro ve SGK bizde kalır; taşıma planı Sertrans’te yürür.",
        storyTitle: "Sertrans ile sahada nasıl duruyoruz",
        story: [
          "Sertrans Lojistik, depo ve taşımacılık operasyonunu yürüten iş ortaklarımızdandır. ÇNR Group Danışmanlık saha kadrosunu seçer, göreve alır ve SGK ile iş güvenliği takibini kendi üzerinde tutar.",
          "Tempo arttığında kadroyu aynı havuzdan destekleriz. Personelin özlük dosyası tesisin günlük işine eklenmez. Sertrans sahadaki işi yönetir; ÇNR kadronun sorumluluğunu taşır.",
        ],
        cardEyebrow: "Referanslar",
        name: "Sertrans Lojistik",
        meta: [
          { label: "Sektör", value: "Lojistik ve taşımacılık" },
          { label: "ÇNR’nin rolü", value: "Personel tedariki, saha kadrosu ve bordrolama" },
          { label: "Çalışma biçimi", value: "Daimi ekip ve dönemsel takviye" },
        ],
      },
      en: {
        eyebrow: "References",
        title: "We staff the floor at Sertrans Logistics",
        subtitle:
          "The blue-collar crew for the warehouse, handling, and dispatch preparation sits with ÇNR Group Danışmanlık. Payroll and SGK stay with us; the transport plan stays with Sertrans.",
        storyTitle: "How we stand on site with Sertrans",
        story: [
          "Sertrans Logistics is one of the partners whose warehouse and transport operation we support. ÇNR Group Danışmanlık selects the site crew, places it on the job, and keeps SGK and safety follow-up on our side.",
          "When the pace rises we support the crew from the same pool. Personnel files are not added to the facility’s daily work. Sertrans runs the job on site; ÇNR carries responsibility for the crew.",
        ],
        cardEyebrow: "References",
        name: "Sertrans Lojistik",
        meta: [
          { label: "Sector", value: "Logistics and transport" },
          { label: "ÇNR’s role", value: "Staffing, site crews, and payroll" },
          { label: "How we work", value: "A permanent crew, with seasonal cover" },
        ],
      },
    },
  },
  {
    slug: "lc-waikiki",
    logo: "/lc-waikiki.png",
    mark: "LC",
    accent: "emerald",
    copy: {
      tr: {
        eyebrow: "Referanslar",
        title: "LC Waikiki tesisinde saha kadrosunu biz taşırız",
        subtitle:
          "Dağıtım deposu ve sevkiyat hazırlığında kadroyu biz kurarız. SGK, İSG ve bordro ÇNR Group Danışmanlık’ta kalır; operasyon planı LC Waikiki’de yürür.",
        storyTitle: "LC Waikiki ile sahada nasıl duruyoruz",
        story: [
          "LC Waikiki, hazır giyim dağıtım operasyonunu yürüten iş ortaklarımızdandır. ÇNR Group Danışmanlık depo ve sevkiyat kadrosunu seçer, sahaya alır ve özlük ile SGK süreçlerini kendi üzerinde tutar.",
          "Sezon geçişlerinde kadroyu genişletiriz. Ara dönemde daimi ekip aynı vardiya disiplininde kalır. Amaç, dağıtımın personel açığı veya evrak yükü yüzünden yavaşlamamasıdır.",
        ],
        cardEyebrow: "Referanslar",
        name: "LC Waikiki",
        meta: [
          { label: "Sektör", value: "Hazır giyim ve dağıtım" },
          { label: "ÇNR’nin rolü", value: "Personel tedariki, saha kadrosu ve bordrolama" },
          { label: "Çalışma biçimi", value: "Daimi ekip ve sezonluk takviye" },
        ],
      },
      en: {
        eyebrow: "References",
        title: "We carry the site crew at LC Waikiki",
        subtitle:
          "We build the crew for the distribution warehouse and dispatch preparation. SGK, occupational safety, and payroll stay with ÇNR Group Danışmanlık; the operating plan stays with LC Waikiki.",
        storyTitle: "How we stand on site with LC Waikiki",
        story: [
          "LC Waikiki is one of the partners whose apparel distribution operation we support. ÇNR Group Danışmanlık selects the warehouse and dispatch crew, places it on site, and keeps personnel files and SGK on our side.",
          "At a season change we widen the crew. Between seasons the permanent team stays on the same shift discipline. The aim is that distribution does not slow down for a staffing gap or a paperwork load.",
        ],
        cardEyebrow: "References",
        name: "LC Waikiki",
        meta: [
          { label: "Sector", value: "Apparel and distribution" },
          { label: "ÇNR’s role", value: "Staffing, site crews, and payroll" },
          { label: "How we work", value: "A permanent crew, with seasonal cover" },
        ],
      },
    },
  },
];

export function getReferenceSlugs() {
  return references.map((reference) => reference.slug);
}

export function listReferences() {
  return references;
}

export function getReference(slug: string) {
  return references.find((reference) => reference.slug === slug);
}
