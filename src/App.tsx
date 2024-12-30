import React from 'react';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import About from './components/About';
    import Programs from './components/Programs';
    import Admissions from './components/Admissions';
    import Testimonials from './components/Testimonials';
    import WhyChooseUs from './components/WhyChooseUs';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Programs />
          <Admissions />
          <Testimonials />
          <WhyChooseUs />
          <Footer />
        </div>
      );
    }

    export default App;
