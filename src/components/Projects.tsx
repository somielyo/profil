import React from 'react';

const projects = [
  {
    title: 'E-Commerce Website Accessibility Audit',
    context: 'Performed a full audit for an online shopping platform.',
    actions: [
      'Identified WCAG 2.1 compliance issues',
      'Proposed solutions to improve user experience'
    ],
    results: 'Enhanced accessibility compliance from 75% to 95%, benefiting visually impaired and screen reader users.'
  },
  {
    title: 'Development of an Accessibility Charter',
    context: 'Created an accessibility policy for a SaaS company.',
    actions: [
      'Trained developers on accessibility best practices',
      'Implemented automated testing to ensure ongoing compliance'
    ],
    results: 'Accessibility became an integral part of the Agile development process.'
  },
  {
    title: 'Team Training on Accessibility',
    context: 'Trained a marketing team on digital accessibility.',
    actions: [
      'Delivered an interactive workshop on user needs',
      'Demonstrated accessibility tools like NVDA and Wave'
    ],
    results: 'Improved integration of accessibility into digital marketing campaigns.'
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.title} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.context}</p>
              <h4 className="font-semibold mb-2">Actions:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {project.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Results:</h4>
              <p className="text-gray-700">{project.results}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}