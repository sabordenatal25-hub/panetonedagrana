import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto ${className}`}>
      {children}
    </section>
  );
};