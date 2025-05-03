
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const projectCards = sectionRef.current.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const projectSteps = [
    {
      number: "01",
      title: "Landing Page Imersiva",
      description: "Construção de uma landing page completa utilizando técnicas de scroll animation, parallax e efeitos de reveal.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Portfólio Interativo",
      description: "Desenvolvimento de um portfólio com transições entre projetos, cursor personalizado e animações de hover.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Experiência Narrativa",
      description: "Criação de uma experiência de storytelling visual usando técnicas de pin scrolling e sequências animadas.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section ref={sectionRef} id="project" className="py-24 bg-[#0F0F19]">
      <div className="container">
        <h2 className="section-title text-center fade-item text-[42px] md:text-[56px] leading-tight mb-4">
          Projetos <span className="gradient-text">Completos</span>
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item max-w-3xl">
          Durante o workshop, você desenvolverá projetos do zero até deployments
          completos, prontos para seu portfólio profissional
        </p>
        
        <div className="space-y-24 mt-24">
          {projectSteps.map((step, index) => (
            <div key={index} className="project-card">
              <div className={`grid md:grid-cols-2 gap-8 items-center bg-[#111122]/40 rounded-2xl overflow-hidden backdrop-blur-sm ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`p-8 md:p-10 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <span className="text-6xl font-black text-human-orange/20">{step.number}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-human-gray">{step.description}</p>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative group overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-human-dark via-transparent to-transparent z-10"></div>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
