
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling for better experience
    gsap.config({
      nullTargetWarn: false, 
    });

    // Prevent scroll jank during page load
    document.body.style.opacity = '0';
    gsap.to(document.body, { 
      opacity: 1, 
      duration: 0.6, 
      ease: 'power2.out'
    });
    
    // Clean up
    return () => {
      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="bg-human-dark text-white overflow-x-hidden">
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
