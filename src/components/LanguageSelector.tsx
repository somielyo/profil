import React from 'react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-md p-2">
      <div className="flex gap-2">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded ${
            currentLang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          aria-pressed={currentLang === 'en'}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('fr')}
          className={`px-3 py-1 rounded ${
            currentLang === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          aria-pressed={currentLang === 'fr'}
        >
          FR
        </button>
        <button
          onClick={() => onLanguageChange('ar')}
          className={`px-3 py-1 rounded ${
            currentLang === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          aria-pressed={currentLang === 'ar'}
        >
          عربي
        </button>
      </div>
    </div>
  );
}