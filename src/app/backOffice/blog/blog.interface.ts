// blog.interface.ts

export interface BlogPost {
  id: number;
  img: string;
  slug: string;
  ar: BlogContent;
  en: BlogContent;
}

export interface BlogContent {
  title: string;
  contactUs: string;
  ourServices: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  introText: string;
  mainHeading: string;
  subHeading: string;
  services: Service[];
  additionalSections: AdditionalSection[];
  whyUsTitle: string;
  whyUsIntro: string;
  whyUsPoints: WhyUsPoint[];
  expertInfo: ExpertInfo;
  contactInfo: ContactInfo;
  finalCtaTitle: string;
  finalCtaDesc: string;
  faqItems?: FaqItem[];
  btnContact: string;
  firmName: string;
  introHeading?: string;
  introPoints?: string[];
  guideIntro?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface AdditionalSection {
  heading: string;
  subHeading?: string;
  description?: string;
  points?: SectionPoint[];
  specializations?: Specialization[];
  benefits?: string[];
  tasks?: Task[];
  conclusion?: string;
}

export interface SectionPoint {
  title: string;
  items: string[];
}

export interface Specialization {
  title: string;
  description: string;
  items: string[];
}

export interface Task {
  title: string;
  items: string[];
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface ExpertInfo {
  heading: string;
  content: string;
  features: string[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
