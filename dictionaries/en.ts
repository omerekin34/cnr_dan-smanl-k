import { getOfficeAddress, getOfficeAddressLines, getOfficePhones, officeEmail } from "@/lib/office";
import type { Dictionary } from "@/types/content";

export const en = {
  meta: {
    title: "ÇNR Group Danışmanlık | Workforce and Facility Services",
    description:
      "ÇNR Group Danışmanlık supplies blue-collar workforce, warehouse personnel, and facility services. We manage SGK, occupational safety, and payroll for the people we place.",
    homeTitle: "Home",
    corporateTitle: "About Us",
    servicesTitle: "Our Services",
    contactTitle: "Contact",
    referencesTitle: "References",
  },
  nav: {
    home: "Home",
    corporate: "About Us",
    services: "Our Services",
    contact: "Contact",
    references: "References",
    quote: "Request Personnel",
    join: "Join Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
    menu: "Main menu",
    viewAll: "View All",
  },
  hero: {
    badge: "Subcontracting and staffing",
    titleLead: "Your Trusted Workforce Solution in",
    titleAccent: "Logistics and Facility Management",
    subtitle:
      "Let us supply the personnel you need, and let us carry the SGK and payroll burden.",
    primaryCta: "Explore Our Services",
    secondaryCta: "Contact Us",
    highlights: ["SGK and payroll included", "Safety-ready teams", "A wide personnel pool"],
    panel: {
      kicker: "Site snapshot",
      status: "Crew ready",
      heading: "Legal and operational load stays with ÇNR",
      rows: [
        { label: "SGK", value: "Registration handled by us" },
        { label: "Safety", value: "Site safety stays in view" },
        { label: "Payroll", value: "Files and wages included" },
      ],
    },
  },
  about: {
    eyebrow: "About Us",
    title: "We run the people your facility depends on",
    body: "We supply trained staff for loading, packing, and facility cleaning. Payroll, SGK, and occupational safety stay with us, so the client side carries none of that risk.",
    tags: ["Loading", "Packing", "Facility cleaning", "SGK", "Payroll", "Safety"],
    missionTitle: "Mission",
    mission: "To be the first company you think of in your hardest moment.",
    visionTitle: "Vision",
    vision: "To create inventive solutions.",
    stats: [
      { value: 100, suffix: "+", label: "Active Personnel" },
      { value: 10, suffix: "+", label: "Partner Logistics Companies" },
      { value: 6, suffix: "+", label: "Years of Service", kind: "serviceYears" },
    ],
  },
  partners: {
    eyebrow: "References",
    title: "Our Trusted Partners",
    subtitle:
      "Logistics and industrial companies whose people, site work, and payroll we carry with them.",
    note: "The firms in this strip are the partners on the references page. Open a logo to read that reference.",
  },
  references: {
    eyebrow: "References",
    title: "We staff the floor at Mars Logistics",
    subtitle:
      "We build the crew for Mars Logistics’s warehouse and dispatch floor. SGK, occupational safety, and payroll stay with ÇNR Group Danışmanlık; the operation follows Mars’s plan.",
    partnerName: "Mars Logistics",
    partnerMark: "ML",
    partnerLogo: "/mars-logistics.png",
    sectorLabel: "Sector",
    sector: "Logistics, warehousing, and distribution",
    roleLabel: "ÇNR’s role",
    role: "Staffing, site crews, and payroll",
    modelLabel: "How we work",
    model: "A permanent crew, with seasonal cover",
    storyTitle: "How we stand on site with Mars",
    story: [
      "Mars Logistics is one of the partners whose warehouse and distribution operation we support. ÇNR Group Danışmanlık selects the blue-collar crew, places it on site, and keeps the legal process on our side.",
      "Mars focuses on the dispatch plan, warehouse flow, and customer delivery. The people for goods-in, putaway, loading, unloading, and dispatch preparation come from ÇNR teams.",
      "In a heavy outbound period we widen the crew. In a quieter stretch the permanent team stays on the same shift discipline. The aim is that Mars’s operation does not slow down for a staffing gap or a paperwork load.",
      "Personnel files, SGK notifications, and safety follow-up are not added to the facility’s daily work. Mars runs the job on site; ÇNR carries responsibility for the crew.",
    ],
    facts: [
      { value: "Warehouse", label: "Goods-in and putaway crews" },
      { value: "Dock", label: "Loading and unloading teams" },
      { value: "Payroll", label: "SGK and files stay with ÇNR" },
      { value: "Safety", label: "Prepared before anyone starts" },
    ],
    scopeTitle: "What we take on at the Mars site",
    scopeSubtitle:
      "We manage the people side of the logistics floor as a single counterpart. The service is built around Mars’s shifts and dispatch calendar.",
    scopes: [
      {
        title: "Warehouse personnel",
        description:
          "We build a permanent crew for goods-in, putaway, sorting, and dispatch preparation. Peak periods are covered from the same pool.",
      },
      {
        title: "Loading and unloading",
        description:
          "Dock and in-warehouse handling is covered by crews matched to the shift plan. Pace and product care set the headcount.",
      },
      {
        title: "Packing and labeling",
        description:
          "Packing, labeling, and order prep stay inside the same site team, without splitting the work to another contractor.",
      },
      {
        title: "Payroll and SGK",
        description:
          "Wages, personnel files, and SGK notifications do not land on Mars’s operations desk. The paperwork stays with ÇNR Group Danışmanlık.",
      },
      {
        title: "Occupational safety",
        description:
          "Orientation and site rules are clear before anyone starts. Safety follow-up holds the same shape when the shift changes.",
      },
      {
        title: "Site upkeep",
        description:
          "Warehouse and floor cleaning is planned so the operation keeps moving. A clear dock is part of the crew’s job.",
      },
    ],
    flowTitle: "How a shift is set up",
    flowSubtitle: "The need comes from Mars’s dispatch calendar. Selection, compliance, and site follow-up run at ÇNR.",
    steps: [
      {
        title: "Need",
        description: "Warehouse, dock, and shift numbers are set from Mars’s daily plan.",
      },
      {
        title: "Selection",
        description: "The right people are chosen from a wide pool, and orientation is completed.",
      },
      {
        title: "Site",
        description: "The crew takes goods-in, putaway, loading, and dispatch preparation.",
      },
      {
        title: "Follow-up",
        description: "Attendance, performance, and safety are watched by ÇNR, and the crew is supported.",
      },
    ],
    focusTitle: "What Mars focuses on",
    focus:
      "The dispatch plan, warehouse flow, and customer delivery are Mars Logistics’s work. Legal registration, payroll, and site discipline for the people stay with ÇNR Group Danışmanlık. Each side carries its own responsibility.",
    note: "This page is for Mars Logistics, the logistics reference we work with. Other approved partners will be published in the same structure.",
  },
  features: {
    eyebrow: "Why ÇNR Group?",
    title: "You get the crew. We carry the risk.",
    subtitle:
      "We staff from a wide pool, take on the legal duties, and put trained people on site.",
    items: [
      {
        icon: "shield",
        title: "Zero Risk",
        description:
          "We handle taxes, SGK, and occupational safety. Personnel files, filings, and safety follow-up do not land on your operation.",
      },
      {
        icon: "bolt",
        title: "Fast Supply",
        description:
          "Permanent or temporary demand is filled quickly from our personnel pool, matched to your shift and facility plan.",
      },
      {
        icon: "badge",
        title: "Trained Staff",
        description:
          "You work with selected people who are prepared for the site and for occupational safety, and who take the job seriously.",
      },
    ],
  },
  services: {
    eyebrow: "Our Services",
    title: "One accountable team for warehouse, facility, and site",
    subtitle:
      "From staffing to cleaning, and from payroll to HR consulting, we manage the people your facility needs.",
    learnMore: "View details",
    items: [
      {
        id: "permanent-staffing",
        icon: "users",
        title: "Permanent and Temporary Staffing",
        description:
          "We select, employ, and manage blue-collar and warehouse personnel for ongoing teams or peak periods.",
        details:
          "We build permanent crews around your shift plan, or temporary teams for season, campaign, and project peaks. Selection, orientation, and attendance stay with ÇNR.",
        points: [
          "Permanent and temporary workforce plans",
          "Warehouse and site personnel selection",
          "Hiring, orientation, and attendance",
        ],
      },
      {
        id: "loading-unloading",
        icon: "package",
        title: "Loading and Unloading Services",
        description:
          "Trained crews handle loading, unloading, and goods handling on the warehouse floor and at the facility.",
        details:
          "We cover dock, in-warehouse, and facility loading and unloading with teams that follow occupational safety rules. Crew size follows the pace, the shift, and how carefully the goods must be handled.",
        points: [
          "Dock and in-warehouse handling",
          "Shift-based loading and unloading crews",
          "A site setup that follows safety rules",
        ],
      },
      {
        id: "warehouse-management",
        icon: "warehouse",
        title: "Warehouse Management",
        description:
          "Our on-site crews support putaway, sorting, labeling, and day-to-day warehouse order.",
        details:
          "We supply the people and the site discipline warehouse operations need. Putaway, count support, labeling, and packing stay with the same team.",
        points: [
          "Putaway and sorting support",
          "Labeling and packing",
          "Warehouse order and count support",
        ],
      },
      {
        id: "payroll",
        icon: "payroll",
        title: "Payroll Services",
        description:
          "We run wages, personnel files, and SGK filings for the people we supply, and take that paperwork off your site.",
        details:
          "Payroll, SGK processing, and personnel files for the workforce we place are kept by ÇNR. You stay focused on the work those people do on site.",
        points: ["Payroll and personnel files", "SGK filings", "Document follow-up"],
      },
      {
        id: "cleaning",
        icon: "sparkles",
        title: "Cleaning Services",
        description:
          "Corporate offices, facilities, and villas are cleaned on a set program by trained crews.",
        details:
          "We set separate programs for offices, production and warehouse facilities, and villas. Frequency, materials, and supervision are agreed before the work starts.",
        points: ["Corporate office cleaning", "Facility and site cleaning", "Villa cleaning"],
      },
      {
        id: "hr-consulting",
        icon: "consulting",
        title: "Consulting Services",
        description:
          "We help you shape workforce planning and a subcontracting model that fits the operation.",
        details:
          "We clarify which roles should be permanent and which should be supplied for a period. Occupational safety coordination and workforce planning are part of the advice.",
        points: [
          "Headcount and shift planning",
          "Subcontracting model design",
          "Occupational safety coordination",
        ],
      },
    ],
  },
  servicesPage: {
    eyebrow: "Our Services",
    title: "People, site services, and payroll in one place",
    subtitle:
      "We staff the need, from warehouse crews to facility cleaning, and we take on SGK, occupational safety, and payroll.",
    coverageTitle: "One counterpart at your facility",
    coverage:
      "Loading, warehouse support, cleaning, and consulting run on one plan. The legal duties of the personnel stay with ÇNR Group Danışmanlık.",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Get in Touch",
    subtitle:
      "Reach us for staffing requests, site services, and payroll solutions, or to request support for your operation right away.",
    privacy: "Your details are used only to respond to this request.",
    form: {
      name: "Full Name",
      namePlaceholder: "Your name",
      company: "Company Name",
      companyPlaceholder: "Your company",
      email: "Email",
      emailPlaceholder: "name@company.com",
      service: "Service Needed",
      servicePlaceholder: "Select a service",
      services: [
        { id: "permanent-staffing", label: "Permanent and Temporary Staffing" },
        { id: "loading-unloading", label: "Loading and Unloading Services" },
        { id: "warehouse-management", label: "Warehouse Management" },
        { id: "payroll", label: "Payroll Services" },
        { id: "cleaning", label: "Cleaning Services" },
        { id: "hr-consulting", label: "Consulting Services" },
      ],
      message: "Message",
      messagePlaceholder: "Headcount, facility type, or the period you need covered",
      submit: "Send Request",
      sending: "Sending",
      successTitle: "Request received",
      successBody: "Our team will contact you shortly.",
      another: "Send another request",
      errorName: "Please enter your full name.",
      errorCompany: "Please enter the company name.",
      errorEmail: "Enter a valid email address.",
      errorService: "Please select a service.",
      errorMessage: "Your message should be at least 10 characters.",
      errorGeneric: "The message could not be sent. Please try again.",
    },
    note: {
      title: "Write to us",
      lead: "Write about staffing, site services, or consulting. Leave a note and the team will get back to you.",
      phone: "Phone",
      phonePlaceholder: "05XX XXX XX XX",
      subject: "Subject",
      subjectPlaceholder: "Staffing, payroll, cleaning...",
      namePlaceholder: "Your full name",
      emailPlaceholder: "name@email.com",
      messagePlaceholder: "Tell us briefly and we will reply.",
      send: "Send",
      errorPhone: "Enter a valid phone number.",
      errorSubject: "Please enter a subject.",
    },
    info: {
      title: "Contact details",
      addressLabel: "Address",
      address: getOfficeAddress("en"),
      addressLines: getOfficeAddressLines("en"),
      directionsLabel: "Get directions",
      phoneLabel: "Phone",
      phones: getOfficePhones("en"),
      emailLabel: "Email",
      email: officeEmail,
      emailNote: "We are here for your note.",
      whatsappLabel: "WhatsApp",
      whatsappNote: "The preferred channel. Replies come through faster here.",
      hoursLabel: "Hours",
      hours: "Weekdays 09:00–18:00, site crews on planned shifts",
    },
  },
  cta: {
    title: "Let’s build the crew you need",
    subtitle: "Send a request for permanent or temporary staff, site services, or payroll.",
    button: "Request Personnel",
  },
  footer: {
    rights: "© 2026 ÇNR Group Danışmanlık",
    blurb:
      "Blue-collar workforce and facility services for warehouses, sites, and industrial operations. SGK, occupational safety, and payroll stay with us.",
    navigate: "Explore",
    contact: "Contact",
    social: "Social",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    x: "X",
  },
  corporate: {
    eyebrow: "About Us",
    title: "The staffing partner you call on a hard day",
    subtitle:
      "We are on site to be the first company you think of in a difficult moment, and to create inventive solutions.",
    storyTitle: "Who we are",
    story: [
      "ÇNR Group Danışmanlık is a subcontracting and staffing firm that supplies blue-collar workforce, warehouse personnel, and facility services to warehouses, sites, and industrial operations.",
      "We cover every need at your facility, from loading and unloading goods to packing, labeling, and cleaning. We develop responsible personnel who add value to the operation.",
      "We take on payroll, SGK, and occupational safety. You focus on the work.",
    ],
    missionTitle: "Mission",
    mission: "To be the first company you think of in your hardest moment.",
    visionTitle: "Vision",
    vision: "To create inventive solutions.",
    valuesTitle: "How we work",
    values: [
      {
        title: "Responsibility",
        description: "We take the legal and on-site duties of the personnel onto ourselves.",
      },
      {
        title: "Reliability",
        description: "Selected people, prepared for occupational safety, stay on your site.",
      },
      {
        title: "Continuity",
        description: "The same discipline holds in a peak period and in a permanent setup.",
      },
    ],
    approachTitle: "Our model",
    approachSubtitle: "The need is clear, the crew is selected, the legal load stays with us, and the site is followed.",
    steps: [
      {
        title: "Need",
        description: "We define headcount, shifts, and the facility together.",
      },
      {
        title: "Selection",
        description: "We choose and prepare the right people from a wide pool.",
      },
      {
        title: "Compliance",
        description: "We run SGK, occupational safety, and payroll.",
      },
      {
        title: "Continuity",
        description: "We follow performance on site and support the crew.",
      },
    ],
    areasTitle: "Our Service Areas",
    areasSubtitle:
      "With our operational strength, we provide uninterrupted staffing across the regions below.",
    areas: ["Gebze", "Darıca", "Çayırova", "Tuzla / Şifa", "Şekerpınar"],
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for may have moved, or it may never have existed.",
    cta: "Back to home",
  },
  personnelRequest: {
    metaTitle: "Personnel Request",
    metaDescription:
      "Tell us about warehouse, loading, cleaning, or payroll needs step by step. Our team will contact you shortly.",
    title: "Create a Personnel Request",
    subtitle: "Follow the steps below so we can build the team that fits your operation.",
    progressLabel: "Request steps",
    steps: [
      { label: "Service" },
      { label: "Details" },
      { label: "Contact" },
    ],
    next: "Next",
    back: "Back",
    submit: "Submit Request",
    submitting: "Sending",
    home: "Return to Homepage",
    successTitle: "Your request has been received!",
    successBody: "Our team will contact you as soon as possible.",
    categoriesTitle: "Choose a Service Category",
    categoriesHint: "Pick the service closest to your request.",
    categories: [
      {
        id: "warehouse-logistics",
        title: "Warehouse and Logistics Personnel",
        description: "Receiving, shipping, packing, and in-warehouse operations.",
      },
      {
        id: "loading-team",
        title: "Loading and Unloading Crew",
        description: "Dock, vehicle, and yard crews for loading and unloading.",
      },
      {
        id: "facility-cleaning",
        title: "Facility and Corporate Cleaning",
        description: "Cleaning crews for industrial sites, warehouses, and offices.",
      },
      {
        id: "payroll-ohs",
        title: "Payroll and Occupational Safety",
        description: "SGK, payroll, personnel files, and workplace safety handled for you.",
      },
    ],
    detailsTitle: "Requirement Details",
    headcountLabel: "Number of Personnel",
    headcountPlaceholder: "Select a headcount range",
    headcountOptions: [
      { id: "1-5", label: "1-5" },
      { id: "5-10", label: "5-10" },
      { id: "10-50", label: "10-50" },
      { id: "50-plus", label: "50+" },
    ],
    durationLabel: "Duration",
    durations: [
      {
        id: "seasonal",
        label: "Seasonal / Project-based",
        description: "A peak season, campaign, or a defined project.",
      },
      {
        id: "permanent",
        label: "Permanent / Long-term",
        description: "An ongoing crew with a regular shift pattern.",
      },
    ],
    notesLabel: "Additional Notes",
    notesOptional: "Optional",
    notesPlaceholder: "Add a shift pattern, site address, or any special condition.",
    contactTitle: "Company and Contact Details",
    companyLabel: "Company Name",
    companyPlaceholder: "Company name",
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5xx xxx xx xx",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    errorCompany: "Enter the company name.",
    errorName: "Enter the contact name.",
    errorPhone: "Enter a valid phone number.",
    errorEmail: "Enter a valid email address.",
    errorGeneric: "The request could not be sent. Please try again.",
  },
  joinApplication: {
    metaTitle: "Join Us",
    metaDescription:
      "Apply to ÇNR Group for warehouse, loading, facility, and forklift roles along the Gebze, Darıca, Çayırova, Tuzla/Şifa, and Şekerpınar routes.",
    title: "Join the ÇNR Group Family",
    subtitle:
      "If you are looking for reliable, steady work with solid pay, apply now. We will consider you for the project that fits you best.",
    progressLabel: "Application steps",
    steps: [{ label: "Personal" }, { label: "Experience" }, { label: "Preference" }],
    personalTitle: "Personal Details and Location",
    experienceTitle: "Experience and Skills",
    preferenceTitle: "Work Preference",
    next: "Next",
    back: "Back",
    submit: "Submit Application",
    submitting: "Sending",
    home: "Return to Homepage",
    successMessage:
      "Your application has been received! Our Human Resources team will contact you as soon as possible.",
    nameLabel: "Full Name",
    namePlaceholder: "Your first and last name",
    phoneLabel: "Phone Number",
    phonePlaceholder: "05xx xxx xx xx",
    locationLabel: "Where do you live / which route are you on?",
    locationPlaceholder: "Select a route",
    locations: [
      { id: "gebze", label: "Gebze" },
      { id: "darica", label: "Darıca" },
      { id: "cayirova", label: "Çayırova" },
      { id: "tuzla-sifa", label: "Tuzla/Şifa" },
      { id: "sekerpinar", label: "Şekerpınar" },
      { id: "other", label: "Other" },
    ],
    rolesLabel: "Which kind of work do you want?",
    rolesHint: "You can select more than one.",
    roles: [
      { id: "loading", label: "Loading / Unloading" },
      { id: "warehouse", label: "Warehouse / Picking" },
      { id: "cleaning", label: "Facility Cleaning" },
      { id: "forklift", label: "Forklift / Operator" },
      { id: "other", label: "Other" },
    ],
    experienceLabel: "Have you done similar work before?",
    experienceOptions: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
    ],
    licenseLabel: "Do you have a driving licence?",
    licenses: [
      { id: "none", label: "None" },
      { id: "b", label: "Class B" },
      { id: "g", label: "Class G - Forklift" },
    ],
    scheduleLabel: "Preferred working arrangement",
    schedules: [
      { id: "permanent", label: "Permanent" },
      { id: "seasonal", label: "Seasonal / Part-time" },
    ],
    notesLabel: "A short note, if you want to add one",
    notesOptional: "Optional",
    notesPlaceholder: "Add a shift preference, experience, or anything else we should know.",
    errorName: "Enter your first and last name.",
    errorPhone: "Enter a valid phone number.",
    errorLocation: "Select the route where you live.",
    errorRoles: "Select at least one type of work.",
    errorExperience: "Please answer this question.",
    errorLicense: "Select your licence status.",
    errorSchedule: "Select a working arrangement.",
    errorGeneric: "The application could not be sent. Please try again.",
  },
} satisfies Dictionary;
