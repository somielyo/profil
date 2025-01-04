import { Experience } from '../types';

export const experiences: Record<string, Experience[]> = {
  en: [
    {
      title: 'Digital Accessibility and Development Consultant',
      company: 'Freelance',
      period: 'January 2023 – Present',
      responsibilities: [
        'Conduct independent WCAG 2.1 audits on websites and applications',
        'Communicate technical issues with actionable recommendations',
        'Use NVDA, VoiceOver, and TalkBack for assistive technology validation',
        'Provide pragmatic accessibility solutions',
        'Achieved 98% client approval rate'
      ]
    },
    {
      title: 'Software Developer for the Blind (Internship)',
      company: 'University Laboratory, Paris 8 University',
      period: 'April 2022 – January 2023',
      responsibilities: [
        'Analyzed software functionalities for user needs',
        'Developed virtual agents for blind users',
        'Created interfaces with interactive elements for dyslexic users',
        'Implemented smart method for reading statistical tables',
        'Added major features including copy-paste text and intelligent search'
      ]
    }
  ],
  fr: [
    {
      title: 'Consultante en Accessibilité Numérique et Développement',
      company: 'Freelance',
      period: 'Janvier 2023 – Présent',
      responsibilities: [
        'Réalisation d\'audits WCAG 2.1 indépendants',
        'Communication des problèmes techniques avec recommandations',
        'Utilisation de NVDA, VoiceOver et TalkBack',
        'Solutions d\'accessibilité pragmatiques',
        'Taux de satisfaction client de 98%'
      ]
    },
    {
      title: 'Développeuse Logiciel pour Malvoyants (Stage)',
      company: 'Laboratoire Universitaire, Université Paris 8',
      period: 'Avril 2022 – Janvier 2023',
      responsibilities: [
        'Analyse des fonctionnalités logicielles',
        'Développement d\'agents virtuels',
        'Création d\'interfaces pour utilisateurs dyslexiques',
        'Implémentation de méthodes de lecture de tableaux',
        'Ajout de fonctionnalités majeures'
      ]
    }
  ],
  ar: [
    {
      title: 'مستشارة في إمكانية الوصول الرقمي والتطوير',
      company: 'عمل حر',
      period: 'يناير 2023 - حتى الآن',
      responsibilities: [
        'إجراء تدقيقات WCAG 2.1 مستقلة',
        'التواصل بشأن المشكلات التقنية مع التوصيات',
        'استخدام NVDA وVoiceOver وTalkBack',
        'تقديم حلول عملية للوصول',
        'معدل رضا العملاء 98٪'
      ]
    },
    {
      title: 'مطورة برمجيات للمكفوفين (تدريب)',
      company: 'مختبر الجامعة، جامعة باريس 8',
      period: 'أبريل 2022 - يناير 2023',
      responsibilities: [
        'تحليل وظائف البرمجيات',
        'تطوير وكلاء افتراضيين',
        'إنشاء واجهات للمستخدمين المصابين بعسر القراءة',
        'تنفيذ طرق ذكية لقراءة الجداول',
        'إضافة ميزات رئيسية'
      ]
    }
  ]
};