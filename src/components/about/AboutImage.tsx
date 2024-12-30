import React from 'react';

const AboutImage = () => {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
        alt="College Campus"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/10"></div>
    </div>
  );
};

export default AboutImage;
