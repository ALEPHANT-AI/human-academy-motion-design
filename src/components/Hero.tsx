
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    
    // Generate random particles
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = opacity.toString();
      particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background particles */}
      <div ref={particlesRef} className="particles-container"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="fade-item visible mb-6 font-black">
            Workshop Avançado de
            <span className="gradient-text block"> Motion Design </span>
            para Web
          </h1>
          
          <p className="fade-item visible text-human-gray text-xl mb-10 delay-100">
            Um curso intensivo de 3 dias para dominar animações avançadas, 
            interatividade e transformar suas interfaces de usuário com experiências 
            cinematográficas usando GSAP + ScrollTrigger
          </p>
          
          <div className="fade-item visible flex flex-col sm:flex-row gap-4 justify-center items-center delay-200">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="btn-primary btn-lg"
            >
              Garantir minha vaga
            </button>
            
            <button 
              onClick={() => scrollToSection('program')}
              className="btn-secondary"
            >
              Ver programa completo
            </button>
          </div>
          
          <div className="mt-16 flex justify-center fade-item visible delay-300">
            <div className="p-3 border border-human-orange/30 rounded-full animate-pulse-slow">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="rounded-full bg-human-orange/20 w-10 h-10 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1V13M7 13L13 7M7 13L1 7" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
