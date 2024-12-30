import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
