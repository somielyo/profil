import React from 'react';
import { Award } from '../../types';
import { Trophy } from 'lucide-react';

interface Props {
  award: Award;
}

export default function AwardCard({ award }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <Trophy className="text-yellow-500 w-8 h-8 flex-shrink-0" aria-hidden="true" />
        <div>
          <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
          <p className="text-blue-600 mb-2">{award.organization}</p>
          <p className="text-gray-600 mb-3">{award.year}</p>
          <p className="text-gray-700">{award.description}</p>
        </div>
      </div>
    </div>
  );
}