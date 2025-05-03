
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Program from '../components/Program';
import Project from '../components/Project';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Instructor from '../components/Instructor';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Load and initialize GSAP for animations
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        gsapModule.default.registerPlugin(ScrollTriggerModule.default);
        
        // Initialize scroll-based animations
        const fadeElements = document.querySelectorAll('.fade-item');
        
        fadeElements.forEach(element => {
          ScrollTriggerModule.default.create({
            trigger: element,
            start: 'top 85%',
            onEnter: () => element.classList.add('visible'),
            once: true
          });
        });
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };
    
    loadGSAP();
  }, []);
  
  return (
    <div className="bg-human-dark text-white">
      <CustomCursor />
      <Header />
      <Hero />
      <Benefits />
      <Program />
      <Project />
      <Process />
      <Timeline />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
