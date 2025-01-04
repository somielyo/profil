import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700">
            I am an experienced accessibility specialist passionate about creating inclusive digital experiences. 
            With expertise in web accessibility audits and team training, I help organizations comply with WCAG 
            standards and design accessible products for all users, including people with disabilities. My goal 
            is to make the web a place where everyone can thrive.
          </p>
        </div>
      </div>
    </section>
  );
}