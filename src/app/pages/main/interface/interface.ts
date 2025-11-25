export interface Slide {
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  button: { ar: string; en: string };
}

// interface/interface.ts
export interface Service {
  title: {
    ar: string;
    en: string;
  };
  link: string;
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  linkText: {
    ar: string;
    en: string;
  };
}

// interface/interface.ts
export interface BlogPost {
  id: number;
  title: {
    ar: string;
    en: string;
  };
  date: string;
  category: {
    ar: string;
    en: string;
  };
  slug: string;
}

export interface ContactInfo {
  icon: string;
  text: {
    ar: string;
    en: string;
  };
  link: string | null;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface OurSERVICES {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  image: string;
}
