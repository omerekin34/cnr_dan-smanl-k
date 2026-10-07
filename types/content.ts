export type FeatureIcon = "shield" | "bolt" | "badge";
export type ServiceIcon =
  | "users"
  | "package"
  | "warehouse"
  | "payroll"
  | "sparkles"
  | "consulting";

export type ServiceOption = {
  id: string;
  label: string;
};

export type OfficePhone = {
  name: string;
  display: string;
  tel: string;
  whatsapp: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    homeTitle: string;
    corporateTitle: string;
    servicesTitle: string;
    contactTitle: string;
    referencesTitle: string;
  };
  nav: {
    home: string;
    corporate: string;
    services: string;
    contact: string;
    references: string;
    quote: string;
    join: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skip: string;
    menu: string;
    viewAll: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    panel: {
      kicker: string;
      status: string;
      heading: string;
      rows: { label: string; value: string }[];
    };
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    stats: { value: number; suffix: string; label: string; kind?: "serviceYears" }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
  };
  references: {
    eyebrow: string;
    title: string;
    subtitle: string;
    partnerName: string;
    partnerMark: string;
    partnerLogo: string;
    sectorLabel: string;
    sector: string;
    roleLabel: string;
    role: string;
    modelLabel: string;
    model: string;
    storyTitle: string;
    story: string[];
    facts: { value: string; label: string }[];
    scopeTitle: string;
    scopeSubtitle: string;
    scopes: { title: string; description: string }[];
    flowTitle: string;
    flowSubtitle: string;
    steps: { title: string; description: string }[];
    focusTitle: string;
    focus: string;
    note: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: FeatureIcon; title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: {
      id: string;
      icon: ServiceIcon;
      title: string;
      description: string;
      details: string;
      points: string[];
    }[];
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    coverageTitle: string;
    coverage: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    privacy: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      services: ServiceOption[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successBody: string;
      another: string;
      errorName: string;
      errorCompany: string;
      errorEmail: string;
      errorService: string;
      errorMessage: string;
      errorGeneric: string;
    };
    note: {
      title: string;
      lead: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      send: string;
      errorPhone: string;
      errorSubject: string;
    };
    info: {
      title: string;
      addressLabel: string;
      address: string;
      addressLines: string[];
      directionsLabel: string;
      phoneLabel: string;
      phones: OfficePhone[];
      emailLabel: string;
      email: string;
      emailNote: string;
      whatsappLabel: string;
      whatsappNote: string;
      hoursLabel: string;
      hours: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    blurb: string;
    navigate: string;
    contact: string;
    social: string;
    linkedin: string;
    instagram: string;
    x: string;
  };
  corporate: {
    eyebrow: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    story: string[];
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
    approachTitle: string;
    approachSubtitle: string;
    steps: { title: string; description: string }[];
    areasTitle: string;
    areasSubtitle: string;
    areas: string[];
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
  personnelRequest: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    progressLabel: string;
    steps: { label: string }[];
    next: string;
    back: string;
    submit: string;
    submitting: string;
    home: string;
    successTitle: string;
    successBody: string;
    categoriesTitle: string;
    categoriesHint: string;
    categories: { id: string; title: string; description: string }[];
    detailsTitle: string;
    headcountLabel: string;
    headcountPlaceholder: string;
    headcountOptions: { id: string; label: string }[];
    durationLabel: string;
    durations: { id: string; label: string; description: string }[];
    notesLabel: string;
    notesOptional: string;
    notesPlaceholder: string;
    contactTitle: string;
    companyLabel: string;
    companyPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    errorCompany: string;
    errorName: string;
    errorPhone: string;
    errorEmail: string;
    errorGeneric: string;
  };
  joinApplication: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    progressLabel: string;
    steps: { label: string }[];
    personalTitle: string;
    experienceTitle: string;
    preferenceTitle: string;
    next: string;
    back: string;
    submit: string;
    submitting: string;
    home: string;
    successMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    locations: { id: string; label: string }[];
    rolesLabel: string;
    rolesHint: string;
    roles: { id: string; label: string }[];
    experienceLabel: string;
    experienceOptions: { id: string; label: string }[];
    licenseLabel: string;
    licenses: { id: string; label: string }[];
    scheduleLabel: string;
    schedules: { id: string; label: string }[];
    notesLabel: string;
    notesOptional: string;
    notesPlaceholder: string;
    errorName: string;
    errorPhone: string;
    errorLocation: string;
    errorRoles: string;
    errorExperience: string;
    errorLicense: string;
    errorSchedule: string;
    errorGeneric: string;
  };
};
