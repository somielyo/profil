import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Introduction to Web Accessibility',
    organization: 'W3C',
    year: '2024'
  },
  {
    title: 'RGAA Accessibility Training',
    organization: 'Opquast',
    year: '2023'
  },
  {
    title: 'Inclusive Design Certificate',
    organization: 'UX Design Institute',
    year: '2022'
  }
];

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="flex items-start gap-4">
              <Award size={24} className="text-blue-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-600">{cert.organization}, {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}