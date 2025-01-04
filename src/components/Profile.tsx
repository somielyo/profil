import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Profile as ProfileType } from '../types';

interface Props {
  profile: ProfileType;
  isRTL: boolean;
}

export default function Profile({ profile, isRTL }: Props) {
  return (
    <section className={`py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
          <h2 className="text-2xl text-blue-600 mb-6">{profile.title}</h2>
          
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-gray-600" aria-hidden="true" />
              <span>{profile.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-gray-600" aria-hidden="true" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-gray-600" aria-hidden="true" />
              <span>{profile.email}</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {profile.description}
          </p>
        </div>
      </div>
    </section>
  );
}