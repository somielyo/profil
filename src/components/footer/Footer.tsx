import React from 'react';
import FooterNav from './FooterNav';
import { Language } from '../../types';

interface Props {
  language: Language;
}

export default function Footer({ language }: Props) {
  const year = new Date().getFullYear();
  
  const sections = {
    en: [
      {
        title: 'Navigation',
        links: [
          { label: 'Experience', href: '#experience' },
          { label: 'Education', href: '#education' },
          { label: 'Skills', href: '#skills' },
          { label: 'Certifications', href: '#certifications' }
        ]
      },
      {
        title: 'Connect',
        links: [
          { label: 'LinkedIn', href: 'https://linkedin.com/in/somiya-el-mimouni' },
          { label: 'GitHub', href: 'https://github.com/somielyo' },
          { label: 'Email', href: 'mailto:acces.handitech@gmail.com' },
          { label: 'Instagram', href: 'https://www.instagram.com/accessibility_eu/' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Resume PDF', href: '/SomResume.pdf' },
          //{ label: 'Accessibility Statement', href: '/accessibility' },
          //{ label: 'Privacy Policy', href: '/privacy' }
        ]
      }
    ],
    fr: [
      {
        title: 'Navigation',
        links: [
          { label: 'Expérience', href: '#experience' },
          { label: 'Formation', href: '#education' },
          { label: 'Compétences', href: '#skills' },
          { label: 'Certifications', href: '#certifications' }
        ]
      },
      {
        title: 'Connexion',
        links: [
          { label: 'LinkedIn', href: 'https://linkedin.com/in/somiya-el-mimouni' },
          { label: 'GitHub', href: 'https://github.com/somielyo' },
          { label: 'Email', href: 'mailto:acces.handitech@gmail.com' },
          { label: 'Instagram', href: 'https://www.instagram.com/accessibility_eu/' }
        ]
      },
      {
        title: 'Ressources',
        links: [
          { label: 'CV PDF', href: '/resume.pdf' },
          //{ label: 'Déclaration d\'accessibilité', href: '/accessibility' },
          //{ label: 'Politique de confidentialité', href: '/privacy' }
        ]
      }
    ],
    ar: [
      {
        title: 'التنقل',
        links: [
          { label: 'الخبرة', href: '#experience' },
          { label: 'التعليم', href: '#education' },
          { label: 'المهارات', href: '#skills' },
          { label: 'الشهادات', href: '#certifications' }
        ]
      },
      {
        title: 'تواصل',
        links: [
          { label: 'لينكد إن', href: 'https://linkedin.com/in/somiya-el-mimouni' },
          { label: 'جيت هب', href: 'https://github.com/somielyo' },
          { label: 'البريد الإلكتروني', href: 'mailto:acces.handitech@gmail.com' },
          { label: 'إنستغرام', href: 'https://www.instagram.com/accessibility_eu/' }
        ]
      },
      {
        title: 'الموارد',
        links: [
          { label: 'السيرة الذاتية PDF', href: '/resume.pdf' },
         // { label: 'بيان إمكانية الوصول', href: '/accessibility' },
         // { label: 'سياسة الخصوصية', href: '/privacy' }
        ]
      }
    ]
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FooterNav sections={sections[language]} />
          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <p>© {year} Somiya El Mimouni. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}