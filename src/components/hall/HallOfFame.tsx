import React from 'react';
import { Award } from '../../types';
import AwardCard from './AwardCard';

interface Props {
  awards: Award[];
  title: string;
}

export default function HallOfFame({ awards, title }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}