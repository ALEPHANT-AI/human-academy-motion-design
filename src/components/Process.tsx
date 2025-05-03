
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const title = sectionRef.current.querySelector('.section-title');
    const subtitle = sectionRef.current.querySelector('.section-subtitle');
    const processCards = sectionRef.current.querySelectorAll('.process-card');
    
    gsap.from([title, subtitle], {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      }
    });
    
    processCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=50',
            end: 'center center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const processSteps = [
    {
      icon: "💻",
      title: "Aulas práticas",
      description: "Aprenda fazendo com exercícios em tempo real e feedback imediato."
    },
    {
      icon: "🔍",
      title: "Análise de cases",
      description: "Estude os melhores exemplos do mercado e descubra como foram feitos."
    },
    {
      icon: "🛠️",
      title: "Hands-on intensivo",
      description: "Trabalhe em projetos reais aplicando as técnicas aprendidas."
    },
    {
      icon: "🚀",
      title: "Mentoria contínua",
      description: "Suporte personalizado durante todo o processo de aprendizado."
    }
  ];
  
  return (
    <section ref={sectionRef} id="process" className="py-24 bg-[#0F0F19]">
      <div className="container">
        <h2 className="section-title text-center text-[42px] md:text-[56px] leading-tight">
          Nossa <span className="gradient-text">Metodologia</span>
        </h2>
        <p className="section-subtitle text-center mx-auto max-w-3xl">
          Um método pensado para maximizar seu aprendizado em apenas três dias de workshop intensivo
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card flex flex-col items-center text-center p-8 bg-[#111122]/40 rounded-2xl backdrop-blur-sm hover:shadow-lg hover:shadow-human-orange/10 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-human-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
