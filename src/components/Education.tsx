import React from 'react';
import { Education as EducationType } from '../types';
import { GraduationCap } from 'lucide-react';

interface Props {
  education: EducationType[];
  title: string;
}

export default function Education({ education, title }: Props) {
  return (
    <section className="py-16 bg-gray-50" id='education'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="flex gap-4">
              <div className="flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-blue-600">{edu.institution}</p>
                <p className="text-gray-600">{edu.period}</p>
                {edu.location && (
                  <p className="text-gray-600">{edu.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}