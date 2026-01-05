
import React from 'react';
import type { Program } from '../types.ts';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="text-brand-accent mr-4">{program.icon}</div>
          <h3 className="text-2xl font-bold font-serif text-brand-dark">{program.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
        <ul className="space-y-2 text-sm text-gray-700">
          {program.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramCard;
