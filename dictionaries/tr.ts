import { getOfficeAddress, getOfficeAddressLines, getOfficePhones, officeEmail } from "@/lib/office";
import type { Dictionary } from "@/types/content";

export const tr = {
  meta: {
    title: "ÇNR Group Danışmanlık | Taşeron ve Personel Tedarik",
    description:
      "ÇNR Group Danışmanlık, depo ve endüstriyel tesislere mavi yaka iş gücü, depo personeli ve tesis hizmetleri sunar. SGK, İSG ve bordrolama süreçlerini üstlenir.",
    homeTitle: "Ana Sayfa",
    corporateTitle: "Hakkımızda",
    servicesTitle: "Hizmetlerimiz",
    contactTitle: "İletişim",
    referencesTitle: "Referanslar",
  },
  nav: {
    home: "Ana Sayfa",
    corporate: "Hakkımızda",
    services: "Hizmetlerimiz",
    contact: "İletişim",
    references: "Referanslar",
    quote: "Personel Talebi",
    join: "Bize Katıl",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil seçimi",
    skip: "İçeriğe geç",
    menu: "Ana menü",
    viewAll: "Tümünü Gör",
  },
  hero: {
    badge: "Taşeron ve personel tedarik",
    titleLead: "Lojistik ve Tesis Yönetiminde",
    titleAccent: "Güvenilir İnsan Kaynağı Çözümünüz",
    subtitle:
      "İhtiyacınız olan personeli biz tedarik edelim; SGK ve bordro yükünü biz üstlenelim.",
    primaryCta: "Hizmetlerimizi İnceleyin",
    secondaryCta: "Bize Ulaşın",
    highlights: ["SGK ve bordro bizde", "İSG uyumlu kadro", "Geniş personel havuzu"],
    panel: {
      kicker: "Saha özeti",
      status: "Kadro hazır",
      heading: "Yasal ve operasyonel yük ÇNR'de",
      rows: [
        { label: "SGK", value: "Kayıt ve bildirimler bizde" },
        { label: "İSG", value: "Saha güvenliği takipte" },
        { label: "Bordro", value: "Özlük ve maaş bizde" },
      ],
    },
  },
  about: {
    eyebrow: "Hakkımızda",
    title: "Tesisinizin insan kaynağını sahada biz yönetiriz",
    body: "Yükleme, paketleme ve tesis temizliği için eğitimli personel tedarik ederiz. SGK, bordro ve İSG süreçlerini biz üstleniriz; müşteri tarafında bu yasal risk sıfırdır.",
    tags: ["Mal yükleme", "Paketleme", "Tesis temizliği", "SGK", "Bordro", "İSG"],
    missionTitle: "Misyon",
    mission: "En zor zamanınızda aklınıza gelen ilk firma olmak.",
    visionTitle: "Vizyon",
    vision: "Yaratıcı çözümler üretmek.",
    stats: [
      { value: 100, suffix: "+", label: "Aktif Çalışan Personel" },
      { value: 10, suffix: "+", label: "İş Ortağı Lojistik Firması" },
      { value: 6, suffix: "+", label: "Hizmet Yılı", kind: "serviceYears" },
    ],
  },
  partners: {
    eyebrow: "Referanslar",
    title: "Değerli İş Ortaklarımız",
    subtitle:
      "Lojistik ve endüstriyel tesislerde personel, saha ve bordro yükünü birlikte taşıdığımız iş ortakları.",
    note: "Şeritteki firmalar referans sayfasındaki iş ortaklarımızdır. Logoya tıklayınca ilgili referans açılır.",
  },
  references: {
    eyebrow: "Referanslar",
    title: "Mars Logistics tesisinde personel ortağıyız",
    subtitle:
      "Mars Logistics’in depo ve sevkiyat sahasında kadroyu biz kurarız. SGK, İSG ve bordro ÇNR Group Danışmanlık’ta kalır; operasyon Mars’ın planıyla yürür.",
    partnerName: "Mars Logistics",
    partnerMark: "ML",
    partnerLogo: "/mars-logistics.png",
    sectorLabel: "Sektör",
    sector: "Lojistik, depo ve dağıtım",
    roleLabel: "ÇNR’nin rolü",
    role: "Personel tedariki, saha kadrosu ve bordrolama",
    modelLabel: "Çalışma biçimi",
    model: "Daimi ekip ve dönemsel takviye",
    storyTitle: "Mars ile sahada nasıl duruyoruz",
    story: [
      "Mars Logistics, depo ve dağıtım operasyonunu yürüten iş ortaklarımızdan biridir. ÇNR Group Danışmanlık bu tesislerde mavi yaka kadroyu seçer, sahaya alır ve yasal süreçlerini kendi üzerinde tutar.",
      "Mars tarafı sevkiyat planı, depo akışı ve müşteri teslimatına odaklanır. Mal kabul, yerleştirme, yükleme, boşaltma ve sevkiyata hazırlık için gereken insan kaynağı ÇNR ekiplerindedir.",
      "Yoğun çıkış dönemlerinde kadroyu genişletiriz. Sakin dönemde daimi ekip aynı vardiya disiplininde kalır. Amaç, Mars operasyonunun personel açığı veya evrak yükü yüzünden yavaşlamamasıdır.",
      "Personelin özlük dosyası, SGK bildirimi ve iş güvenliği takibi tesisin günlük işine eklenmez. Mars sahadaki işi yönetir; ÇNR kadronun sorumluluğunu taşır.",
    ],
    facts: [
      { value: "Depo", label: "Mal kabul ve yerleştirme kadrosu" },
      { value: "Rampa", label: "Yükleme ve boşaltma ekipleri" },
      { value: "Bordro", label: "SGK ve özlük ÇNR’de" },
      { value: "İSG", label: "Sahaya çıkmadan önce hazırlık" },
    ],
    scopeTitle: "Mars tesisinde üstlendiğimiz işler",
    scopeSubtitle:
      "Lojistik sahanın insan kaynağı tarafını tek muhatap olarak yönetiriz. Hizmet, Mars’ın vardiya ve sevkiyat takvimine göre kurulur.",
    scopes: [
      {
        title: "Depo personeli",
        description:
          "Mal kabul, raf ve alan yerleştirme, ayrıştırma ve sevkiyata hazırlık için daimi kadro kurarız. Dönemsel yoğunlukta aynı havuzdan takviye ederiz.",
      },
      {
        title: "Yükleme ve boşaltma",
        description:
          "Rampa ve depo içi elleçlemeyi vardiya planına uygun ekiplerle karşılarız. Tempo ve ürün hassasiyeti kadro sayısına yansır.",
      },
      {
        title: "Paketleme ve etiketleme",
        description:
          "Sevkiyat öncesi paketleme, etiketleme ve düzen işlerini ayrı bir taşerona bölmeden aynı saha ekibinin içinde tutarız.",
      },
      {
        title: "Bordrolama ve SGK",
        description:
          "Maaş, özlük dosyası ve SGK bildirimleri Mars’ın operasyon masasına düşmez. Evrak takibi ÇNR Group Danışmanlık’ta kalır.",
      },
      {
        title: "İş güvenliği",
        description:
          "Oryantasyon ve saha kuralları personel göreve çıkmadan netleşir. İSG takibi, vardiya değişse de aynı düzenle sürer.",
      },
      {
        title: "Tesis düzeni",
        description:
          "Depo ve saha temizliğini operasyonu kesmeden planlarız. Düzen, yükleme hattının güvenli ve açık kalması için kadronun parçasıdır.",
      },
    ],
    flowTitle: "Bir vardiya nasıl kurulur",
    flowSubtitle: "İhtiyaç Mars’ın sevkiyat takviminden gelir. Seçim, uyum ve saha takibi ÇNR’de yürür.",
    steps: [
      {
        title: "İhtiyaç",
        description: "Depo, rampa ve vardiya sayısı Mars’ın günlük planına göre netleşir.",
      },
      {
        title: "Seçim",
        description: "Geniş havuzdan işe uygun personel seçilir, oryantasyon tamamlanır.",
      },
      {
        title: "Saha",
        description: "Ekip mal kabul, yerleştirme, yükleme ve sevkiyat hazırlığında görev alır.",
      },
      {
        title: "Takip",
        description: "Devam, performans ve iş güvenliği ÇNR tarafından izlenir, kadro desteklenir.",
      },
    ],
    focusTitle: "Mars neye odaklanır",
    focus:
      "Sevkiyat planı, depo akışı ve müşteri teslimatı Mars Logistics’in işidir. Personelin yasal kaydı, bordrosu ve saha disiplini ÇNR Group Danışmanlık’ta kalır. İki taraf da kendi işinin sorumluluğunu taşır.",
    note: "Bu sayfa, birlikte çalıştığımız lojistik referansı Mars Logistics içindir. Onaylanan diğer iş ortakları eklendikçe aynı yapıda yayınlanır.",
  },
  features: {
    eyebrow: "Neden ÇNR Group?",
    title: "Kadroyu biz kurarız, yasal riski de biz taşırız",
    subtitle:
      "Personeli geniş havuzumuzdan sağlar, yasal yükümlülükleri üstlenir ve sahaya eğitimli ekipler çıkarırız.",
    items: [
      {
        icon: "shield",
        title: "Sıfır Risk",
        description:
          "Vergi, SGK ve İSG süreçlerini biz yürütürüz. Özlük dosyası, bildirim ve iş güvenliği takibi sizin operasyon yükünüze eklenmez.",
      },
      {
        icon: "bolt",
        title: "Hızlı Tedarik",
        description:
          "Daimi ya da dönemsel ihtiyacınızı geniş personel havuzundan kısa sürede sahaya alırız. Vardiya ve tesis planına göre kadro kurarız.",
      },
      {
        icon: "badge",
        title: "Eğitimli Kadro",
        description:
          "Seçilmiş, saha ve iş güvenliği konusunda hazırlanmış, sorumluluk sahibi ekiplerle çalışırsınız.",
      },
    ],
  },
  services: {
    eyebrow: "Hizmetlerimiz",
    title: "Depo, tesis ve saha için tek sorumlu ekip",
    subtitle:
      "Personel tedarikinden temizliğe, bordrodan insan kaynakları danışmanlığına kadar tesisinizin insan kaynağını tek çatı altında yönetiriz.",
    learnMore: "Detayları incele",
    items: [
      {
        id: "permanent-staffing",
        icon: "users",
        title: "Daimi ve Dönemsel Personel Tedariği",
        description:
          "Sürekli kadro ya da dönemsel yoğunluk için mavi yaka ve depo personelini seçer, işe alır ve sahada yönetiriz.",
        details:
          "İşletmenizin vardiya planına göre daimi ekipler kurar ya da sezon, kampanya ve proje dönemleri için geçici kadro sağlarız. Seçim, oryantasyon ve devam takibi ÇNR sorumluluğundadır.",
        points: [
          "Daimi ve dönemsel kadro planı",
          "Depo ve saha personeli seçimi",
          "İşe alım, oryantasyon ve devam takibi",
        ],
      },
      {
        id: "loading-unloading",
        icon: "package",
        title: "Yükleme ve Boşaltma Hizmetleri",
        description:
          "Tesis ve depo sahasında mal yükleme, indirme ve elleçleme işlerini eğitimli ekiplerle yürütürüz.",
        details:
          "Rampa, depo içi ve tesis sahasındaki yükleme ile boşaltma işlerini iş güvenliği kurallarına uygun ekiplerle karşılarız. Tempo, vardiya ve ürün hassasiyetine göre kadroyu ayarlarız.",
        points: [
          "Rampa ve depo içi elleçleme",
          "Vardiyalı yükleme ve boşaltma ekipleri",
          "İş güvenliğine uygun saha düzeni",
        ],
      },
      {
        id: "warehouse-management",
        icon: "warehouse",
        title: "Depolama Yönetimi",
        description:
          "Depo içi yerleştirme, ayrıştırma, etiketleme ve düzen operasyonlarını sahadaki kadromuzla destekleriz.",
        details:
          "Depolama yönetimi için gereken insan kaynağını ve saha düzenini kurarız. Yerleştirme, sayım desteği, etiketleme ve paketleme aynı ekibin içinde kalır.",
        points: [
          "Yerleştirme ve ayrıştırma desteği",
          "Etiketleme ve paketleme",
          "Depo düzeni ve sayım desteği",
        ],
      },
      {
        id: "payroll",
        icon: "payroll",
        title: "Bordrolama Hizmetleri",
        description:
          "Maaş, özlük ve SGK bildirimlerini sizin adınıza düzenler; personel evrak yükünü tesisinizden alırız.",
        details:
          "Tedarik ettiğimiz personelin bordrosu, SGK işlemleri ve özlük dosyası ÇNR tarafından tutulur. Siz kadronun sahadaki işine odaklanırsınız.",
        points: [
          "Bordro ve özlük işlemleri",
          "SGK bildirimleri",
          "Personel evrak takibi",
        ],
      },
      {
        id: "cleaning",
        icon: "sparkles",
        title: "Temizlik Hizmetleri",
        description:
          "Kurumsal ofis, tesis ve villa temizliğini düzenli program ve eğitimli ekiplerle üstleniriz.",
        details:
          "Ofis, üretim ve depo tesisleri ile villa temizliği için ayrı programlar kurarız. Periyot, malzeme ve denetim planı işin başında netleşir.",
        points: [
          "Kurumsal ofis temizliği",
          "Tesis ve saha temizliği",
          "Villa temizliği",
        ],
      },
      {
        id: "hr-consulting",
        icon: "consulting",
        title: "Danışmanlık Hizmetleri",
        description:
          "İnsan kaynakları, kadro planı ve taşeron modelinde işletmenize uygun yapıyı birlikte kurarız.",
        details:
          "Hangi işin daimi kadro, hangisinin dönemsel tedarik olması gerektiğini netleştiririz. İSG koordinasyonu ve insan kaynağı planı danışmanlığın parçasıdır.",
        points: [
          "Kadro ve vardiya planı",
          "Taşeron modelinin kurgusu",
          "İSG koordinasyon danışmanlığı",
        ],
      },
    ],
  },
  servicesPage: {
    eyebrow: "Hizmetlerimiz",
    title: "İnsan kaynağı, saha hizmeti ve bordro tek elde",
    subtitle:
      "Depo personelinden tesis temizliğine kadar ihtiyacınızı seçer, SGK, İSG ve bordrolamayı biz üstleniriz.",
    coverageTitle: "Tesisinizde tek muhatap",
    coverage:
      "Yükleme, depolama desteği, temizlik ve danışmanlık aynı ekibin planında yürür. Personelin yasal süreçleri ÇNR Group Danışmanlık'ta kalır.",
  },
  contact: {
    eyebrow: "İLETİŞİM",
    title: "Bizimle İletişime Geçin",
    subtitle:
      "Personel talepleriniz, saha hizmetleri ve bordrolama çözümlerimiz hakkında detaylı bilgi almak veya operasyonunuz için hemen destek talep etmek için bize ulaşın.",
    privacy: "Bilgileriniz yalnızca talebinize dönüş yapmak için kullanılır.",
    form: {
      name: "Ad Soyad",
      namePlaceholder: "Adınız ve soyadınız",
      company: "Firma Adı",
      companyPlaceholder: "Şirketinizin adı",
      email: "E-posta",
      emailPlaceholder: "ornek@sirket.com",
      service: "İhtiyaç Duyulan Hizmet",
      servicePlaceholder: "Hizmet seçin",
      services: [
        { id: "permanent-staffing", label: "Daimi ve Dönemsel Personel Tedariği" },
        { id: "loading-unloading", label: "Yükleme ve Boşaltma Hizmetleri" },
        { id: "warehouse-management", label: "Depolama Yönetimi" },
        { id: "payroll", label: "Bordrolama Hizmetleri" },
        { id: "cleaning", label: "Temizlik Hizmetleri" },
        { id: "hr-consulting", label: "Danışmanlık Hizmetleri" },
      ],
      message: "Mesaj",
      messagePlaceholder: "Kadro sayısı, tesis tipi veya dönemsel ihtiyacınızı yazın",
      submit: "Talebi Gönder",
      sending: "Gönderiliyor",
      successTitle: "Talebiniz alındı",
      successBody: "Ekibimiz en kısa sürede sizinle iletişime geçecek.",
      another: "Yeni talep gönder",
      errorName: "Lütfen adınızı ve soyadınızı girin.",
      errorCompany: "Lütfen firma adını girin.",
      errorEmail: "Geçerli bir e-posta adresi girin.",
      errorService: "Lütfen bir hizmet seçin.",
      errorMessage: "Mesajınız en az 10 karakter olmalıdır.",
      errorGeneric: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    },
    note: {
      title: "Bize yazın",
      lead: "Personel, saha hizmeti veya danışmanlık hakkında yazın. Notunuzu bırakın, ekibimiz dönüş yapsın.",
      phone: "Telefon",
      phonePlaceholder: "05XX XXX XX XX",
      subject: "Konu",
      subjectPlaceholder: "Personel, bordro, temizlik...",
      namePlaceholder: "Adınız soyadınız",
      emailPlaceholder: "ornek@email.com",
      messagePlaceholder: "Kısaca anlatın, dönüş yapalım.",
      send: "Gönder",
      errorPhone: "Geçerli bir telefon numarası girin.",
      errorSubject: "Lütfen konuyu yazın.",
    },
    info: {
      title: "İletişim bilgileri",
      addressLabel: "Adres",
      address: getOfficeAddress("tr"),
      addressLines: getOfficeAddressLines("tr"),
      directionsLabel: "Yol Tarifi Al",
      phoneLabel: "Telefon",
      phones: getOfficePhones("tr"),
      emailLabel: "E-posta",
      email: officeEmail,
      emailNote: "Notunuz için buradayız.",
      whatsappLabel: "WhatsApp",
      whatsappNote: "Önerilen kanaldır. Dönüş burada daha hızlı sağlanır.",
      hoursLabel: "Çalışma saatleri",
      hours: "Hafta içi 09:00–18:00, saha ekipleri planlı vardiyayla",
    },
  },
  cta: {
    title: "İhtiyacınız olan kadroyu birlikte oluşturalım",
    subtitle:
      "Daimi veya dönemsel personel, saha hizmeti ya da bordrolama için talebinizi iletin.",
    button: "Personel Talebi Oluştur",
  },
  footer: {
    rights: "© 2026 ÇNR Group Danışmanlık",
    blurb:
      "Depo, tesis ve endüstriyel operasyonlara mavi yaka iş gücü ve tesis hizmetleri sunarız. SGK, İSG ve bordro bizdedir.",
    navigate: "Keşfet",
    contact: "İletişim",
    social: "Sosyal medya",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    x: "X",
  },
  corporate: {
    eyebrow: "Hakkımızda",
    title: "Zor günde akla gelen personel ortağı",
    subtitle:
      "En zor zamanınızda aklınıza gelen ilk firma olmak ve yaratıcı çözümler üretmek için sahadayız.",
    storyTitle: "Biz kimiz",
    story: [
      "ÇNR Group Danışmanlık, depo, tesis ve endüstriyel işletmelere mavi yaka iş gücü, depo personeli ve tesis hizmetleri sağlayan bir taşeron ve personel tedarik firmasıdır.",
      "Tesisinizde mal yükleme, indirme, paketleme, etiketleme ve temizlik gibi tüm ihtiyaçlarınızı karşılıyoruz. İşletmeye değer katan, sorumluluk sahibi personeller yetiştiriyoruz.",
      "Bordro, SGK ve iş sağlığı ve güvenliği süreçlerini üstleniriz. Siz yalnızca işinize odaklanırsınız.",
    ],
    missionTitle: "Misyon",
    mission: "En zor zamanınızda aklınıza gelen ilk firma olmak.",
    visionTitle: "Vizyon",
    vision: "Yaratıcı çözümler üretmek.",
    valuesTitle: "Nasıl çalışırız",
    values: [
      {
        title: "Sorumluluk",
        description: "Personelin yasal ve saha sorumluluğunu kendi üzerimize alırız.",
      },
      {
        title: "Güvenilirlik",
        description: "Seçilmiş ve iş güvenliğine hazır kadrolarla sahada dururuz.",
      },
      {
        title: "Süreklilik",
        description: "Dönemsel yoğunlukta da daimi düzende de aynı ekip disipliniyle kalırız.",
      },
    ],
    approachTitle: "Çalışma modelimiz",
    approachSubtitle: "İhtiyaç netleşir, kadro seçilir, yasal yük bizde kalır, saha takip edilir.",
    steps: [
      {
        title: "İhtiyaç",
        description: "Kadro, vardiya ve tesis ihtiyacını birlikte netleştiririz.",
      },
      {
        title: "Seçim",
        description: "Geniş havuzdan işe uygun personeli seçer ve hazırlarız.",
      },
      {
        title: "Uyum",
        description: "SGK, İSG ve bordrolamayı biz yürütürüz.",
      },
      {
        title: "Süreklilik",
        description: "Sahadaki performansı takip eder, kadroyu destekleriz.",
      },
    ],
    areasTitle: "Hizmet Bölgelerimiz",
    areasSubtitle:
      "Operasyonel gücümüzle aşağıdaki bölgelerde kesintisiz personel tedariki sağlıyoruz.",
    areas: ["Gebze", "Darıca", "Çayırova", "Tuzla / Şifa", "Şekerpınar"],
  },
  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.",
    cta: "Ana sayfaya dön",
  },
  personnelRequest: {
    metaTitle: "Personel Talebi",
    metaDescription:
      "Depo, yükleme, temizlik veya bordrolama ihtiyacınızı adım adım iletin. Uzman ekibimiz en kısa sürede sizinle iletişime geçer.",
    title: "Personel Talebi Oluşturun",
    subtitle: "İhtiyacınıza en uygun ekibi kurmamız için aşağıdaki adımları takip edin.",
    progressLabel: "Talep adımları",
    steps: [
      { label: "Hizmet" },
      { label: "İhtiyaç" },
      { label: "İletişim" },
    ],
    next: "İleri",
    back: "Geri",
    submit: "Talebi Gönder",
    submitting: "Gönderiliyor",
    home: "Ana Sayfaya Dön",
    successTitle: "Talebiniz Başarıyla Alındı!",
    successBody: "Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    categoriesTitle: "Hizmet Kategorisi Seçimi",
    categoriesHint: "Talebinize en yakın hizmeti seçin.",
    categories: [
      {
        id: "warehouse-logistics",
        title: "Depo ve Lojistik Personeli",
        description: "Mal kabul, sevkiyat, paketleme ve depo içi operasyon kadrosu.",
      },
      {
        id: "loading-team",
        title: "Yükleme ve Boşaltma Ekibi",
        description: "Rampa, araç ve saha için yükleme ile boşaltma ekipleri.",
      },
      {
        id: "facility-cleaning",
        title: "Tesis ve Kurumsal Temizlik",
        description: "Endüstriyel tesis, depo ve ofis alanları için temizlik kadrosu.",
      },
      {
        id: "payroll-ohs",
        title: "Bordrolama ve İSG Yönetimi",
        description: "SGK, bordro, özlük ve iş sağlığı süreçlerinin devri.",
      },
    ],
    detailsTitle: "İhtiyaç Detayları",
    headcountLabel: "Personel Sayısı",
    headcountPlaceholder: "Kadro aralığını seçin",
    headcountOptions: [
      { id: "1-5", label: "1-5" },
      { id: "5-10", label: "5-10" },
      { id: "10-50", label: "10-50" },
      { id: "50-plus", label: "50+" },
    ],
    durationLabel: "Çalışma Süresi",
    durations: [
      {
        id: "seasonal",
        label: "Dönemsel / Proje Bazlı",
        description: "Yoğun sezon, kampanya veya belirli bir proje için.",
      },
      {
        id: "permanent",
        label: "Daimi / Uzun Vadeli",
        description: "Sürekli kadro ve düzenli vardiya düzeni için.",
      },
    ],
    notesLabel: "Ek Talepler",
    notesOptional: "İsteğe bağlı",
    notesPlaceholder: "Vardiya, tesis adresi veya özel bir koşul varsa yazın.",
    contactTitle: "Firma ve İletişim Bilgileri",
    companyLabel: "Firma Adı",
    companyPlaceholder: "Firma unvanı",
    nameLabel: "Yetkili Ad Soyad",
    namePlaceholder: "Adınız ve soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "05xx xxx xx xx",
    emailLabel: "E-Posta",
    emailPlaceholder: "ornek@firma.com",
    errorCompany: "Firma adını girin.",
    errorName: "Yetkili adını ve soyadını girin.",
    errorPhone: "Geçerli bir telefon numarası girin.",
    errorEmail: "Geçerli bir e-posta adresi girin.",
    errorGeneric: "Talep gönderilemedi. Lütfen tekrar deneyin.",
  },
  joinApplication: {
    metaTitle: "Bize Katıl",
    metaDescription:
      "Depo, yükleme, tesis ve forklift kadroları için ÇNR Group'a başvurun. Gebze, Darıca, Çayırova, Tuzla/Şifa ve Şekerpınar güzergahlarında sizi değerlendirelim.",
    title: "ÇNR Group Ailesine Katılın",
    subtitle:
      "Güvenilir, düzenli ve dolgun maaşlı bir iş arıyorsanız, hemen başvurunuzu yapın. Sizi en uygun projede değerlendirelim.",
    progressLabel: "Başvuru adımları",
    steps: [{ label: "Kişisel" }, { label: "Tecrübe" }, { label: "Tercih" }],
    personalTitle: "Kişisel Bilgiler & İkamet",
    experienceTitle: "İş Tecrübesi ve Yetkinlikler",
    preferenceTitle: "Çalışma Tercihi",
    next: "İleri",
    back: "Geri",
    submit: "Başvuruyu Tamamla",
    submitting: "Gönderiliyor...",
    home: "Ana Sayfaya Dön",
    successMessage:
      "Başvurunuz başarıyla alındı! İnsan Kaynakları ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız ve soyadınız",
    phoneLabel: "Telefon Numarası",
    phonePlaceholder: "05xx xxx xx xx",
    locationLabel: "İkametgah / Hangi güzergahta oturuyorsunuz?",
    locationPlaceholder: "Güzergah seçin",
    locations: [
      { id: "gebze", label: "Gebze" },
      { id: "darica", label: "Darıca" },
      { id: "cayirova", label: "Çayırova" },
      { id: "tuzla-sifa", label: "Tuzla/Şifa" },
      { id: "sekerpinar", label: "Şekerpınar" },
      { id: "other", label: "Diğer" },
    ],
    rolesLabel: "Hangi alanda çalışmak istersiniz?",
    rolesHint: "Birden fazla seçebilirsiniz.",
    roles: [
      { id: "loading", label: "Yükleme/Boşaltma" },
      { id: "warehouse", label: "Depo/Toplama" },
      { id: "cleaning", label: "Tesis Temizliği" },
      { id: "forklift", label: "Forklift/Operatör" },
      { id: "other", label: "Diğer" },
    ],
    experienceLabel: "Daha önce benzer bir işte çalıştınız mı?",
    experienceOptions: [
      { id: "yes", label: "Evet" },
      { id: "no", label: "Hayır" },
    ],
    licenseLabel: "Ehliyetiniz var mı?",
    licenses: [
      { id: "none", label: "Yok" },
      { id: "b", label: "B Sınıfı" },
      { id: "g", label: "G Sınıfı-Forklift" },
    ],
    scheduleLabel: "Çalışma şekli tercihiniz",
    schedules: [
      { id: "permanent", label: "Daimi Çalışma" },
      { id: "seasonal", label: "Dönemsel-Part Time" },
    ],
    notesLabel: "Eklemek istediğiniz kısa not",
    notesOptional: "İsteğe bağlı",
    notesPlaceholder: "Vardiya, deneyim veya belirtmek istediğiniz bir not varsa yazın.",
    errorName: "Adınızı ve soyadınızı girin.",
    errorPhone: "Geçerli bir telefon numarası girin.",
    errorLocation: "Oturduğunuz güzergahı seçin.",
    errorRoles: "En az bir çalışma alanı seçin.",
    errorExperience: "Bu soruyu yanıtlayın.",
    errorLicense: "Ehliyet durumunuzu seçin.",
    errorSchedule: "Çalışma şeklini seçin.",
    errorGeneric: "Başvuru gönderilemedi. Lütfen tekrar deneyin.",
  },
} satisfies Dictionary;
