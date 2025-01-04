import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';

interface Props {
  experiences: ExperienceType[];
  title: string;
}

export default function Experience({ experiences, title }: Props) {
  return (
    <section className="py-16 bg-white" id='experience'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-600 mb-2">{exp.company}</p>
                <p className="text-gray-600 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}