import React from 'react';
import SocialLinks from './SocialLinks';
import { Profile } from '../../types';

interface Props {
  profile: Profile;
  isRTL: boolean;
}

export default function Header({ profile, isRTL }: Props) {
  return (
    <header className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{profile.name}</h1>
          <p className="text-xl mb-6">{profile.title}</p>
          <div className={`flex flex-col gap-6 ${isRTL ? 'items-end' : 'items-start'}`}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}