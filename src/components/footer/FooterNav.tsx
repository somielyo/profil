import React from 'react';

interface NavSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface Props {
  sections: NavSection[];
}

export default function FooterNav({ sections }: Props) {
  return (
    <nav className="grid md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-200 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}