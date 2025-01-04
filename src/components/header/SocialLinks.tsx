import React from 'react';
import { Mail, Linkedin, Phone, Github, Instagram } from 'lucide-react';

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export default function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: Mail,
      href: 'mailto:acces.handitech@gmail.com',
      label: 'acces.handitech@gmail.com'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/somiya-el-mimouni',
      label: 'LinkedIn Profile'
    },
    {
      icon: Phone,
      href: 'tel:+33749013929',
      label: '+33 7 49 01 39 29'
    },
    {
      icon: Github,
      href: 'https://github.com/somielyo',
      label: 'GitHub Profile'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/accessibility_eu/',
      label: 'Instagram Profile'
    }
    
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={20} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}