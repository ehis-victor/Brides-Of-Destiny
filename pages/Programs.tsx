
import React from 'react';
import ProgramCard from '../components/ProgramCard.tsx';
import type { Program } from '../types.ts';

const programData: Program[] = [
  {
    title: 'Economic Empowerment',
    description: 'Fostering financial independence and stability through targeted business and skills training.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>,
    details: [
      'Business and skill-development training.',
      'Access to micro-loans and financial literacy education.',
      'Support for income-generation initiatives.',
      'Mentorship from successful entrepreneurs.'
    ]
  },
  {
    title: 'Education & Training',
    description: 'Providing educational opportunities and vocational skills to unlock new possibilities for widows and their children.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>,
    details: [
      'Scholarships for children\'s education.',
      'Vocational and professional skill training programs.',
      'Adult literacy and numeracy classes.',
      'Capacity-building and leadership initiatives.'
    ]
  },
  {
    title: 'Health & Wellness',
    description: 'Ensuring access to essential healthcare and providing mental and emotional support for holistic well-being.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
    details: [
      'Partnerships for access to healthcare services.',
      'Mental health counseling and trauma support.',
      'Wellness workshops on nutrition and preventive care.',
      'Emotional well-being and stress management programs.'
    ]
  },
  {
    title: 'Community Support',
    description: 'Building a safe and nurturing network for peer support, advocacy, and collective healing.',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
    details: [
      'Individual and group counseling sessions.',
      'Peer-support systems and mentorship networks.',
      'Creation of safe community spaces for gathering.',
      'Advocacy for widows’ rights and social dignity.'
    ]
  }
];

const Programs: React.FC = () => {
  return (
    <div className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl font-serif">
            Our Empowerment Programs
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            We offer a comprehensive suite of programs designed to address the multifaceted needs of widows and their families, fostering resilience and building a foundation for a brighter future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programData.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
