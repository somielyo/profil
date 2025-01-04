import React from 'react';
import { ClipboardCheck, Users, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Accessibility Audits',
    description: 'Comprehensive evaluations and tailored recommendations.',
    icon: ClipboardCheck
  },
  {
    title: 'Team Training',
    description: 'Workshops and sessions to integrate accessibility into your workflows.',
    icon: Users
  },
  {
    title: 'Strategic Consulting',
    description: 'Guidance to achieve compliance with accessibility standards like WCAG and RGAA.',
    icon: LineChart
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon size={48} className="mx-auto mb-4 text-blue-600" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}