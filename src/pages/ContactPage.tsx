import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center justify-center space-x-2">
            <a href="/" className="hover:text-blue-300">Home</a>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
