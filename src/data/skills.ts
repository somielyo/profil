import { Skill } from '../types';

export const skills: Record<string, Skill[]> = {
  en: [
    {
      category: "Technical Skills",
      items: [
        "HTML5, CSS3, JavaScript",
        "React.js, Angular, Node.js",
        "Python, PHP",
        "WCAG, ARIA, Accessibility Testing",
        "Git, Bootstrap, Jira",
        "Agile/Scrum Methodology"
      ]
    },
    {
      category: "Accessibility Tools",
      items: [
        "NVDA",
        "VoiceOver",
        "TalkBack",
        "Axe",
        "Lighthouse",
        "WAVE"
      ]
    }
  ],
  fr: [
    {
      category: "Compétences Techniques",
      items: [
        "HTML5, CSS3, JavaScript",
        "React.js, Angular, Node.js",
        "Python, PHP",
        "WCAG, ARIA, Tests d'accessibilité",
        "Git, Bootstrap, Jira",
        "Méthodologie Agile/Scrum"
      ]
    },
    {
      category: "Outils d'Accessibilité",
      items: [
        "NVDA",
        "VoiceOver",
        "TalkBack",
        "Axe",
        "Lighthouse",
        "WAVE"
      ]
    }
  ],
  ar: [
    {
      category: "المهارات التقنية",
      items: [
        "HTML5, CSS3, JavaScript",
        "React.js, Angular, Node.js",
        "Python, PHP",
        "WCAG, ARIA, اختبارات إمكانية الوصول",
        "Git, Bootstrap, Jira",
        "منهجية Agile/Scrum"
      ]
    },
    {
      category: "أدوات إمكانية الوصول",
      items: [
        "NVDA",
        "VoiceOver",
        "TalkBack",
        "Axe",
        "Lighthouse",
        "WAVE"
      ]
    }
  ]
};