import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <div className="flex items-center justify-center space-x-2">
          <a href="/" className="hover:text-blue-300">Home</a>
          <span>›</span>
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
