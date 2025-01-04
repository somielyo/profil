import { Profile } from '../types';

interface Translations {
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  hallTitle: string;
  [key: string]: string;
}

export const translations: Record<string, Translations> = {
  en: {
    experienceTitle: 'Professional Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills & Expertise',
    hallTitle: 'Certifications'
  },
  fr: {
    experienceTitle: 'Expérience Professionnelle',
    educationTitle: 'Formation',
    skillsTitle: 'Compétences & Expertise',
    hallTitle: 'Certifications'
  },
  ar: {
    experienceTitle: 'الخبرة المهنية',
    educationTitle: 'التعليم',
    skillsTitle: 'المهارات والخبرات',
    hallTitle: 'الشهادات'
  }
};

export const profiles: Record<string, Profile> = {
  en: {
    name: 'Somy El',
    title: 'Digital Accessibility and Development Specialist',
    address: 'Paris, France',
    phone: '+33 7 49 01 39 29',
    email: 'acces.handitech@gmail.com',
    description: 'A professional in science, technology, and health, I strive to connect my expertise in development and programming with my knowledge in humanities to create accessible digital products tailored to everyone\'s needs.'
  },
  fr: {
    name: 'Somy El',
    title: 'Spécialiste en Accessibilité Numérique et Développement',
    address: 'Paris, France',
    phone: '+33 7 49 01 39 29',
    email: 'acces.handitech@gmail.com',
    description: 'Professionnelle en sciences, technologies et santé, je m\'efforce de connecter mon expertise en développement et programmation avec mes connaissances en sciences humaines pour créer des produits numériques accessibles adaptés aux besoins de tous.'
  },
  ar: {
    name: 'سمية الميموني',
    title: 'متخصصة في إمكانية الوصول الرقمي والتطوير',
    address: 'باريس، فرنسا',
    phone: '+33 7 49 01 39 29',
    email: 'acces.handitech@gmail.com',
    description: 'كمتخصصة في العلوم والتكنولوجيا والصحة، أسعى لربط خبرتي في التطوير والبرمجة مع معرفتي في العلوم الإنسانية لإنشاء منتجات رقمية يمكن الوصول إليها ومصممة لتلبية احتياجات الجميع.'
  }
};