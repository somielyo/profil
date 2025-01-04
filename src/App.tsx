import React, { useState } from 'react';
import { Language } from './types';
import { profiles, translations } from './data/translations';
import { experiences } from './data/experience';
import { education } from './data/education';
import { skills } from './data/skills';
import { awards } from './data/awards';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/header/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import HallOfFame from './components/hall/HallOfFame';
import Footer from './components/footer/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';
  const t = translations[language];

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <LanguageSelector 
        currentLang={language}
        onLanguageChange={setLanguage}
      />
      <Header 
        profile={profiles[language]}
        isRTL={isRTL}
      />
      <main>
        <Profile 
          profile={profiles[language]}
          isRTL={isRTL}
        />
        <Experience id="experience"
          experiences={experiences[language]}
          title={t.experienceTitle}
        />
        <Education 
          education={education[language]}
          title={t.educationTitle}
        />
        <Skills 
          skills={skills[language]}
          title={t.skillsTitle}
        />
        <HallOfFame 
          awards={awards[language]}
          title={t.hallTitle}
        />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;