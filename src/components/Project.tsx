
import React, { useEffect, useRef } from 'react';

const Project: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
    <section ref={sectionRef} id="project" className="py-24 bg-gradient-to-b from-human-dark to-black/50">
      <div className="container">
        <h2 className="section-title text-center fade-item">
          Projetos <span className="gradient-text">Completos</span>
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item">
          Durante o workshop, você desenvolverá projetos do zero até deployments
          completos, prontos para seu portfólio profissional
        </p>
        
        <div className="space-y-16 mt-16">
          {projectSteps.map((step, index) => (
            <div key={index} className="fade-item">
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-human-dark via-transparent to-transparent z-10"></div>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <span className="text-6xl font-black text-human-orange/20">{step.number}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-human-gray">{step.description}</p>
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
