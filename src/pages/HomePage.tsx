import React from 'react';
    import Hero from '../components/Hero';
    import About from '../components/About';
    import Programs from '../components/Programs';
    import Admissions from '../components/Admissions';
    import Testimonials from '../components/Testimonials';
    import WhyChooseUs from '../components/WhyChooseUs';

    const HomePage = () => {
      return (
        <div>
          <Hero />
          <About />
          <Programs />
          <Admissions />
          <Testimonials />
          <WhyChooseUs />
        </div>
      );
    };

    export default HomePage;
