export interface ServiceItem {
  id: string;
  number: string;
  category: 'Web & Search' | 'Video & Content' | 'Automation & Brand' | 'Paid Ads';
  title: string;
  summary: string;
  deliverables: string[];
  ctaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  featuredTheme?: 'emerald' | 'light';
}

export interface PortfolioExternalLink {
  label: string;
  href: string;
  kind: 'tiktok' | 'website';
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'Featured Client' | 'Concept/Demo';
  featured?: boolean;
  isScreenshotPreview?: boolean;
  serviceTag?: string;
  description: string;
  actionLabel: 'View Case Study' | 'Live Preview' | 'View Live Demo';
  actionType: 'case-study' | 'live-preview';
  actionHref?: string;
  externalLinks?: PortfolioExternalLink[];
  highlights: string[];
  imageSrc?: string;
  imageAlt?: string;
  placeholderNote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isFounder?: boolean;
  initials: string;
  bio: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  number: string;
  icon: 'amanah' | 'shura' | 'adl';
  title: string;
  subtitle: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  pricingLabel: string;
  featured?: boolean;
  highlightTag?: string;
  ctaLabel: string;
  inquiryMessage: string;
  whatsappHref: string;
  telegramHref: string;
  deliverables: string[];
}

export interface TestimonialSlot {
  id: string;
  slotNumber: string;
  sectorLabel: string;
  placeholderPrompt: string;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    subtitle: 'Essential Local Presence',
    pricingLabel: 'Custom Pricing Tailored to Your Business',
    ctaLabel: 'Request Custom Quote',
    inquiryMessage:
      'Assalamu Alaikum, I am interested in the Basic Package and would like to request a custom quote from Halal Digital Marketing.',
    whatsappHref:
      'https://wa.me/251929554142?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Basic%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    telegramHref:
      'https://t.me/lasteday?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Basic%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    deliverables: [
      'Google Business Profile (Google Maps) Setup & Optimization',
      '2 Professional Promotional Videos (TikTok & Reels)',
      'Social Media Page Optimization',
      '50% Advance / 50% Upon Completion',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Package',
    subtitle: 'Complete Business Growth System',
    pricingLabel: 'Custom Pricing Tailored to Your Business',
    featured: true,
    highlightTag: 'MOST POPULAR',
    ctaLabel: 'Request Custom Quote',
    inquiryMessage:
      'Assalamu Alaikum, I am interested in the Professional Package and would like to request a custom quote from Halal Digital Marketing.',
    whatsappHref:
      'https://wa.me/251929554142?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Professional%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    telegramHref:
      'https://t.me/lasteday?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Professional%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    deliverables: [
      'Custom Modern Website (Business, Service, or Product Catalog)',
      'Free Domain Name & 1-Year High-Speed Hosting',
      'Advanced Google Maps SEO (Top Local Search Ranking)',
      'Official Telegram Channel Setup & Integration',
      '4 High-Converting Promotional Videos',
      '50% Advance / 50% Upon Completion',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    subtitle: 'Full-Scale Digital Domination',
    pricingLabel: 'Custom Pricing Tailored to Your Business',
    ctaLabel: 'Request Custom Quote',
    inquiryMessage:
      'Assalamu Alaikum, I am interested in the Premium Package and would like to request a custom quote from Halal Digital Marketing.',
    whatsappHref:
      'https://wa.me/251929554142?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Premium%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    telegramHref:
      'https://t.me/lasteday?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20the%20Premium%20Package%20and%20would%20like%20to%20request%20a%20custom%20quote%20from%20Halal%20Digital%20Marketing.',
    deliverables: [
      'Everything in the Professional Package',
      'Custom Lead Generation & Client Inquiry System',
      '1-Month Full Paid Ads Management (Facebook, Instagram & TikTok)',
      '8 Professional Videos & Monthly Content Strategy',
      'Priority 24/7 Support & Monthly Analytics Report',
      '50% Advance / 50% Upon Completion',
    ],
  },
];

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 'slot-1',
    slotNumber: '01.',
    sectorLabel: 'Healthcare & Clinic Partner',
    placeholderPrompt:
      'Reserved for verified client feedback from a medical or healthcare partner in Addis Ababa upon campaign review.',
  },
  {
    id: 'slot-2',
    slotNumber: '02.',
    sectorLabel: 'Automotive & Spare Parts Partner',
    placeholderPrompt:
      'Reserved for verified client feedback from an automotive, importer, or spare parts business partner.',
  },
  {
    id: 'slot-3',
    slotNumber: '03.',
    sectorLabel: 'Hospitality, Real Estate & Enterprise Partner',
    placeholderPrompt:
      'Reserved for verified client feedback covering custom web development, Local SEO, or Telegram automation.',
  },
];

export const INQUIRY_OPTIONS = [
  'General Free Consultation',
  'Basic Package — Custom Quote',
  'Professional Package — Custom Quote',
  'Premium Package — Custom Quote',
  'Custom Website Design & Development',
  'Google Maps & Google Business Profile Optimization',
  'Local SEO',
  'Social Media Marketing',
  'Professional Video Production',
  'Short-Form Video Editing',
  'Content Creation & Scriptwriting',
  'Telegram Automation Bots',
  'Business Branding & Digital Strategy',
  'Facebook & Instagram Ads (Meta Ads)',
];

export const AGENCY_CONTACT = {
  brandName: 'Halal Digital Marketing',
  tagline: 'TRUST • GROWTH • INNOVATION',
  city: 'Addis Ababa, Ethiopia',
  founderName: 'Hamza Hassen',
  founderTitle: 'Founder, Strategist & Web/Google Map Specialist',
  phoneDisplay: '+251 92 955 4142',
  phoneHref: 'tel:+251929554142',
  emailPlaceholder: 'hello@halaldigitalmarketing.et',
  whatsappNumber: '251929554142',
  whatsappBaseUrl: 'https://wa.me/251929554142',
  whatsappConsultationUrl:
    'https://wa.me/251929554142?text=Assalamu%20Alaikum%20Hamza,%20I%20would%20like%20to%20book%20a%20free%20consultation%20with%20Halal%20Digital%20Marketing',
  telegramHandle: '@lasteday',
  telegramBaseUrl: 'https://t.me/lasteday',
  telegramChannelHandle: '@HalalDigitalMarketing',
  telegramChannelUrl: 'https://t.me/HalalDigitalMarketing',
};

export function buildTelegramUrl(message?: string): string {
  if (!message) {
    return AGENCY_CONTACT.telegramBaseUrl;
  }
  return `${AGENCY_CONTACT.telegramBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl(message?: string): string {
  if (!message) {
    return AGENCY_CONTACT.whatsappBaseUrl;
  }
  return `${AGENCY_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const HERO_CAPABILITIES = [
  { number: '01', label: 'Web Design & Development', detail: 'Fast, responsive business websites' },
  { number: '02', label: 'Google Maps & Local SEO', detail: 'Addis Ababa local search visibility' },
  { number: '03', label: 'Video & Content Production', detail: 'Filming, short-form editing & scripts' },
  { number: '04', label: 'Telegram Automation Bots', detail: '24/7 automated inquiry & booking' },
  {
    number: '05',
    label: 'Meta Ads (Facebook & Instagram)',
    detail: 'Targeted, ethical Halal ad campaigns for fast growth',
  },
];

export const TARGET_INDUSTRIES = [
  'Clinics & Healthcare Businesses',
  'Automotive & Spare Parts Companies',
  'Importers & Distributors',
  'Hotels & Hospitality',
  'Restaurants & Cafes',
  'Real Estate Companies',
  'Educational Institutions',
  'Growing Ethiopian Enterprises',
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01.',
    category: 'Web & Search',
    title: 'Custom Website Design & Development',
    summary:
      'Bespoke, mobile-first business websites engineered for Ethiopian internet speeds, clean bilingual structures, and clear conversion pathways.',
    deliverables: [
      'Tailored UI/UX layout built from scratch',
      'Mobile-responsive & fast-loading architecture',
      'Direct WhatsApp, Telegram & phone call integration',
    ],
    ctaLabel: 'Request Website Consultation',
    imageSrc: '/src/assets/images/service_web_engineering_1795359904732.jpg',
    imageAlt: 'Laptop displaying clean architectural website layout on dark stone and oak desk',
    videoSrc: 'https://assets.mixkit.co/videos/46635/46635-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'google-business-profile',
    number: '02.',
    category: 'Web & Search',
    title: 'Google Maps & Google Business Profile Optimization',
    summary:
      'Ensure customers across Addis Ababa find your exact location, opening hours, photos, and direct contact number immediately on Google Maps.',
    deliverables: [
      'Profile verification, categories & service areas',
      'Accurate pin placement & business media setup',
      'Structured review request workflow',
    ],
    ctaLabel: 'Optimize Your Map Listing',
    imageSrc: '/src/assets/images/service_google_maps_pin_1795406030999.jpg',
    imageAlt: 'Smartphone displaying an Addis Ababa local business navigation map with gold pin and 5-star listing',
    videoSrc: 'https://assets.mixkit.co/videos/22149/22149-720.mp4',
    featuredTheme: 'emerald',
  },
  {
    id: 'local-seo',
    number: '03.',
    category: 'Web & Search',
    title: 'Local SEO',
    summary:
      'Targeted search engine optimization focused on Ethiopian buyers searching for clinics, spare parts, hospitality, and B2B suppliers in your area.',
    deliverables: [
      'Addis Ababa & regional keyword research',
      'On-page search structure & schema markup',
      'Local directory & search consistency',
    ],
    ctaLabel: 'Improve Local Rankings',
    imageSrc: '/src/assets/images/service_local_seo_1795406031670.jpg',
    imageAlt: 'Laptop displaying local search visibility analytics and top ranking metrics in dark emerald and gold',
    videoSrc: 'https://assets.mixkit.co/videos/47796/47796-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'social-media-marketing',
    number: '04.',
    category: 'Video & Content',
    title: 'Social Media Marketing',
    summary:
      'Consistent, ethical audience building and campaign management across Instagram, TikTok, Facebook, and Telegram tailored for Ethiopian consumer behavior.',
    deliverables: [
      'Monthly content calendar & publishing schedule',
      'Audience engagement & inquiry routing',
      'Honest, transparent campaign reporting',
    ],
    ctaLabel: 'Plan Social Growth',
    imageSrc: '/src/assets/images/service_social_media_1795406031230.jpg',
    imageAlt: 'Studio workspace with smartphone social media campaign grid and editorial content calendar',
    videoSrc: 'https://assets.mixkit.co/videos/46685/46685-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'video-production',
    number: '05.',
    category: 'Video & Content',
    title: 'Professional Video Production',
    summary:
      'On-location commercial filming in Addis Ababa capturing your clinic, showroom, hotel, or team with cinema-grade cameras, clean audio, and composed lighting.',
    deliverables: [
      'Pre-production shot list & location direction',
      'Cinema camera & stabilizer filming',
      'Commercial brand & product showcases',
    ],
    ctaLabel: 'Schedule a Video Shoot',
    imageSrc: '/src/assets/images/service_video_studio_clean_1795359921417.jpg',
    imageAlt: 'Mirrorless cinema camera mounted on a stabilizer inside a deep emerald production studio',
    videoSrc: 'https://assets.mixkit.co/videos/48529/48529-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'short-form-editing',
    number: '06.',
    category: 'Video & Content',
    title: 'Short-Form Video Editing',
    summary:
      'Tight, retention-focused vertical editing for TikTok, Instagram Reels, and YouTube Shorts with crisp pacing, clean captions, and balanced sound.',
    deliverables: [
      'Vertical 9:16 cuts engineered for retention',
      'Amharic & English subtitle styling',
      'Color grading & audio mastering',
    ],
    ctaLabel: 'Explore Editing Support',
    imageSrc: '/src/assets/images/service_video_editing_1795406031774.jpg',
    imageAlt: 'Dual-monitor video editing workstation showing multi-track vertical Reels timeline and color grading scopes',
    videoSrc: 'https://assets.mixkit.co/videos/21546/21546-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'content-scriptwriting',
    number: '07.',
    category: 'Video & Content',
    title: 'Content Creation & Scriptwriting',
    summary:
      'Clear, culturally grounded scripts and messaging concepts that communicate your expertise respectfully without loud clickbait or hollow claims.',
    deliverables: [
      'Industry-specific video hooks & outlines',
      'Educational & product-demo scripts',
      'Consistent brand tone across campaigns',
    ],
    ctaLabel: 'Develop Content Scripts',
    imageSrc: '/src/assets/images/service_scriptwriting_1795406031314.jpg',
    imageAlt: 'Editorial walnut desk with open leather storyboard notebook, brass pen, and clean script tablet',
    videoSrc: 'https://assets.mixkit.co/videos/46353/46353-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'telegram-bots',
    number: '08.',
    category: 'Automation & Brand',
    title: 'Telegram Automation Bots',
    summary:
      'Custom Telegram bots that serve as a 24/7 digital front desk—answering common questions, issuing service quotes, and booking client appointments.',
    deliverables: [
      'Guided inquiry & appointment booking flows',
      'Instant notifications to your sales staff',
      'Structured lead logging & menu navigation',
    ],
    ctaLabel: 'Automate With Telegram',
    imageSrc: '/src/assets/images/service_telegram_bots_1795406031382.jpg',
    imageAlt: 'Smartphone displaying an automated Telegram booking bot interface beside a sleek laptop',
    videoSrc: 'https://assets.mixkit.co/videos/14669/14669-720.mp4',
    featuredTheme: 'light',
  },
  {
    id: 'branding-strategy',
    number: '09.',
    category: 'Automation & Brand',
    title: 'Business Branding & Digital Strategy',
    summary:
      'Cohesive visual direction, market positioning, and channel roadmaps that align your offline reputation with a world-class digital identity.',
    deliverables: [
      'Brand positioning & messaging architecture',
      'Visual identity guidelines & digital tone',
      'Quarterly full-stack growth roadmap',
    ],
    ctaLabel: 'Build Your Strategy',
    imageSrc: '/src/assets/images/service_brand_strategy_1795406031197.jpg',
    imageAlt: 'Architectural brand strategy flat-lay with emerald and gold material swatches and brand guidelines book',
    videoSrc: 'https://assets.mixkit.co/videos/21219/21219-720.mp4',
    featuredTheme: 'emerald',
  },
  {
    id: 'meta-ads',
    number: '10.',
    category: 'Paid Ads',
    title: 'Facebook & Instagram Ads (Meta Ads)',
    summary:
      'Targeted, high-converting sponsored ad campaigns designed to bring real customers directly to your business. We handle audience targeting, ad copy, and performance tracking—strictly adhering to ethical, Halal advertising standards with 100% transparent ad-spend reporting.',
    deliverables: [
      'Precision Local Audience Targeting (Addis Ababa & Nationwide)',
      'High-ROI Lead Generation & Sales Campaigns',
      '100% Ethical & Halal Content Compliance',
      'Transparent Ad Budget & Performance Reporting',
    ],
    ctaLabel: 'Launch Ethical Meta Ads',
    imageSrc: '/src/assets/images/service_meta_ads_1795406031412.jpg',
    imageAlt: 'Executive workspace monitor showing Facebook and Instagram paid ads ROI metrics and transparent ad-spend dashboard',
    videoSrc: 'https://assets.mixkit.co/videos/5396/5396-720.mp4',
    featuredTheme: 'emerald',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'alif-medium-clinic',
    number: '01.',
    title: 'Alif Medium Clinic (Addis Ababa)',
    category: 'TikTok Growth & Custom Website Concept',
    status: 'Featured Client',
    featured: true,
    isScreenshotPreview: true,
    serviceTag: 'Custom Website Concept & Social Media Growth',
    description:
      'Produced engaging, ethical medical awareness TikTok videos for local patients and designed a custom clinic website prototype.',
    actionLabel: 'View Case Study',
    actionType: 'case-study',
    externalLinks: [
      {
        label: 'View TikTok Work',
        href: 'https://www.tiktok.com/@alif.medium.clinic',
        kind: 'tiktok',
      },
      {
        label: 'View Website Concept',
        href: 'https://ais-pre-ypypvdhtonvdblwzscfa7s-527059847065.europe-west3.run.app',
        kind: 'website',
      },
    ],
    highlights: [
      'Engaging, ethical medical awareness TikTok videos tailored for local patients in Addis Ababa',
      'Custom patient-friendly clinic website prototype with clear service navigation & booking flow',
      'Cohesive visual branding connecting social discovery directly to clinic inquiries',
    ],
    imageSrc: '/assets/aistudio/20261124_082726_26a9a47d.jpg',
    imageAlt: 'Actual mobile website screenshot designed for Alif Medium Clinic in Addis Ababa showing 24/7 header, bilingual navigation, and appointment booking',
    placeholderNote: 'Featured Client Project · Alif Medium Clinic (Addis Ababa)',
  },
  {
    id: 'sino-truck-parts-hub',
    number: '02.',
    title: 'Sino Truck Parts Hub - Interactive E-Catalog Demo',
    category: 'Interactive E-Catalog & B2B Lead Gen',
    status: 'Concept/Demo',
    description:
      'An interactive Sinotruk and heavy-duty spare parts e-catalog demo built for Ethiopian fleet importers—featuring categorized parts browsing, Google Maps warehouse visibility, and direct WhatsApp RFQ routing.',
    actionLabel: 'View Live Demo',
    actionType: 'live-preview',
    actionHref: 'https://ai.studio/apps/493617a8-2be5-4752-a2cc-7e65d08e8897?fullscreenApplet=true',
    highlights: [
      'Interactive heavy-duty truck & Sinotruk spare parts e-catalog layout',
      'Direct WhatsApp & Telegram RFQ (Request for Quote) inquiry flow',
      'Addis Ababa importer warehouse Google Maps visibility architecture',
    ],
    imageSrc: '/src/assets/images/video_thumb_automotive_promo_1795406520655.jpg',
    imageAlt: 'Sino Truck Parts Hub heavy-duty commercial vehicle and spare parts e-catalog showcase',
    placeholderNote: 'Interactive E-Catalog Demo · Sino Truck Parts Hub',
  },
  {
    id: 'modern-business-real-estate-showcase',
    number: '03.',
    title: 'Modern Business & Real Estate Showcase - Demo',
    category: 'Custom Web Architecture & Lead Funnels',
    status: 'Concept/Demo',
    description:
      'A high-converting property and corporate showcase demo tailored for Addis Ababa developers and commercial brands—combining unit previews, bilingual messaging, and instant Telegram consultation capture.',
    actionLabel: 'Live Preview',
    actionType: 'live-preview',
    highlights: [
      'Interactive residential & commercial property unit showcase architecture',
      'Direct WhatsApp & Telegram private viewing and consultation routing',
      'Mobile-first responsive layout engineered for high-trust buyer inquiries',
    ],
    imageSrc: '/src/assets/images/service_web_engineering_1795359904732.jpg',
    imageAlt: 'Modern Business & Real Estate Showcase responsive website architecture demo',
    placeholderNote: 'Interactive Demo · Modern Business & Real Estate Showcase',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hamza-hassen',
    name: 'Hamza Hassen',
    role: 'Founder, Strategist & Web/Google Map Specialist',
    isFounder: true,
    initials: 'HH',
    bio: 'Leads collective direction, client partnerships, full-stack growth strategy, custom web engineering, and Google Business Profile optimization.',
    skills: [
      'Marketing strategy',
      'Client communication',
      'Website development',
      'Google Business optimization',
      'Leadership',
    ],
  },
  {
    id: 'reyan',
    name: 'Reyan',
    role: 'Lead Video Editor & Videographer',
    initials: 'RY',
    bio: 'Directs on-location shoots, camera operation, post-production editing, and visual quality assurance across all brand and short-form video deliverables.',
    skills: ['Professional videography', 'Video editing', 'Production', 'Quality control'],
  },
  {
    id: 'hamza-dev',
    name: 'Hamza',
    role: 'Lead Web Developer & Backup Editor',
    initials: 'HM',
    bio: 'Builds responsive, conversion-ready websites, supports local Google Maps technical setups, and provides backup video editing capacity for fast delivery.',
    skills: ['Website development', 'Google Maps optimization', 'Video editing support'],
  },
  {
    id: 'nur',
    name: 'Nur',
    role: 'Content Creator & Scriptwriter',
    initials: 'NR',
    bio: 'Shapes campaign concepts, structured content calendars, and engaging scripts tailored to Ethiopian audiences with clarity and ethical standards.',
    skills: ['Creative ideas', 'Content planning', 'Scriptwriting'],
  },
  {
    id: 'muna',
    name: 'Muna',
    role: 'Business Development & Client Finder',
    initials: 'MN',
    bio: 'Connects with growing businesses in Addis Ababa, researches sector opportunities, coordinates discovery meetings, and nurtures long-term partnerships.',
    skills: [
      'Client acquisition',
      'Business networking',
      'Meeting coordination',
      'Market research',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01.',
    title: 'Discovery & Consultation',
    description:
      'We listen carefully to your business model, current bottlenecks, target customers in Ethiopia, and commercial goals during a focused consultation.',
  },
  {
    number: '02.',
    title: 'Business Research',
    description:
      'We audit your industry landscape, local search competitors in Addis Ababa, customer buying habits, and existing digital touchpoints.',
  },
  {
    number: '03.',
    title: 'Strategy & Planning',
    description:
      'You receive a clear, transparent roadmap outlining deliverables, timelines, content pillars, and technical architecture before production begins.',
  },
  {
    number: '04.',
    title: 'Creative Production',
    description:
      'Our content and production team writes scripts, films on-location video, designs visual interfaces, and crafts messaging aligned with your brand.',
  },
  {
    number: '05.',
    title: 'Development & Implementation',
    description:
      'We engineer your website, configure Google Business Profile and Local SEO signals, deploy Telegram automation bots, and launch campaigns.',
  },
  {
    number: '06.',
    title: 'Delivery & Ongoing Support',
    description:
      'Every asset is handed over with complete ownership, clear walkthroughs, and continuous optimization support as your business scales.',
  },
];

export const AGENCY_VALUES: ValuePillar[] = [
  {
    number: '01.',
    icon: 'amanah',
    title: 'Amanah',
    subtitle: 'Trust & Reliability',
    description:
      'Fulfilling every promise with 100% honesty and delivering strictly ethical, Halal marketing services.',
  },
  {
    number: '02.',
    icon: 'shura',
    title: 'Shura',
    subtitle: 'Consultation & Teamwork',
    description:
      'Collaborative strategy and transparent communication with our clients and within our team.',
  },
  {
    number: '03.',
    icon: 'adl',
    title: 'Adl',
    subtitle: 'Justice & Transparency',
    description:
      'Fair pricing, clear deliverables, and measurable ROI with zero hidden fees.',
  },
];
