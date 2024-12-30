import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage;
