import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
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

    // Create a smoother page transition
    const tl = gsap.timeline();
    
    tl.set(document.body, { opacity: 0 })
      .to(document.body, { 
        opacity: 1, 
        duration: 1.2, 
        ease: 'power2.out'
      });
    
    // Add shine effect to gradient elements
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
      gsap.to(text, {
        backgroundPositionX: '200%',
        repeat: -1,
        duration: 3,
        ease: 'linear'
      });
    });
    
    // Create scroll-based background color shift
    gsap.to('body', {
      backgroundColor: '#080810',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
    
    // Add parallax effect to background elements
    const bgElements = document.querySelectorAll('.bg-blur');
    bgElements.forEach(el => {
      gsap.to(el, {
        y: -100,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    
    // Clean up
    return () => {
      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="bg-human-dark text-white overflow-x-hidden">
      {/* Background blur elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vh] bg-blue-500/5 rounded-full blur-[120px] bg-blur"></div>
        <div className="absolute bottom-[30%] right-[10%] w-[35vw] h-[35vh] bg-human-orange/5 rounded-full blur-[150px] bg-blur"></div>
        <div className="absolute top-[50%] right-[20%] w-[30vw] h-[30vh] bg-purple-500/5 rounded-full blur-[100px] bg-blur"></div>
      </div>
      
      <div className="relative z-10">
        <CustomCursor />
        <Header />
        <Hero />
        <VideoSection />
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
    </div>
  );
};

export default Index;
