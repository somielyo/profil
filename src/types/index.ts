export type Language = 'en' | 'fr' | 'ar';

export interface Profile {
  name: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Volunteer {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}
// types.ts (or the relevant file)
export interface Award {
  // Define your Award interface here
  title: string;
  organization: string;
  year: string;
  description: string;
  href:string;
}