import { Education } from '../types';

export const education: Record<string, Education[]> = {
  en: [
    {
      degree: "Master's Degree in Digital Humanities",
      institution: "Paris 8 University",
      period: "In Progress",
      location: "Paris"
    },
    {
      degree: "Master's in Mathematics and Computer Science",
      institution: "Paris 8 University",
      period: "2020 – 2022",
      location: "Paris"
    },
    {
      degree: "Bachelor's Degree in Physics",
      institution: "Ibn Zohr University",
      period: "2014 – 2017",
      location: "Morocco"
    }
  ],
  fr: [
    {
      degree: "Master en Humanités Numériques",
      institution: "Université Paris 8",
      period: "En cours",
      location: "Paris"
    },
    {
      degree: "Master en Mathématiques et Informatique",
      institution: "Université Paris 8",
      period: "2020 – 2022",
      location: "Paris"
    },
    {
      degree: "Licence en Physique",
      institution: "Université Ibn Zohr",
      period: "2014 – 2017",
      location: "Maroc"
    }
  ],
  ar: [
    {
      degree: "ماجستير في العلوم الإنسانية الرقمية",
      institution: "جامعة باريس 8",
      period: "قيد التقدم",
      location: "باريس"
    },
    {
      degree: "ماجستير في الرياضيات وعلوم الكمبيوتر",
      institution: "جامعة باريس 8",
      period: "2020 – 2022",
      location: "باريس"
    },
    {
      degree: "بكالوريوس في الفيزياء",
      institution: "جامعة ابن زهر",
      period: "2014 – 2017",
      location: "المغرب"
    }
  ]
};