import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">John Smith</h1>
        <p className="text-xl mb-6">Accessibility Specialist & Inclusive Design Expert</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Mail size={20} aria-hidden="true" />
            <span>your.email@example.com</span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Linkedin size={20} aria-hidden="true" />
            <span>LinkedIn Profile</span>
          </a>
          <a href="tel:+33612345678" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Phone size={20} aria-hidden="true" />
            <span>(+33) 6 12 34 56 78</span>
          </a>
        </div>
      </div>
    </header>
  );
}