export type PriceOption = {
  label: string; // Напр. "Свій автомобіль"
  amount: number; // 2000
  currency: 'UAH'; // завжди гривня
  per: 'заняття' | 'курс';
  includes?: string[];
};

export type ProgramItem = { title: string; children?: string[] };
export type ProgramSection = { title: string; items: (string | ProgramItem)[] };

export type Course = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  duration: { label: string; minutes: number }; // "1 год 30 хв", 90
  location: { label: string; city: string; country: string };
  description: string;
  program: ProgramSection[];
  notes?: string[];
  pricing: {
    sessionLabel: string; // заголовок блоку вартості
    options: PriceOption[];
    courseRecommendation?: string;
    courseLength?: { sessions: number; sessionMinutes: number };
  };
  certificate?: string;
  contacts: {
    phones: string[]; // у форматі +380...
    organization: string;
    address: string;
    addressLink?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
};
