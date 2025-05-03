
import React, { useEffect, useRef } from 'react';

const Process: React.FC = () => {
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
    <section ref={sectionRef} id="process" className="py-24">
      <div className="container">
        <h2 className="section-title text-center fade-item">
          Nossa <span className="gradient-text">Metodologia</span>
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item">
          Um método pensado para maximizar seu aprendizado em apenas três dias de workshop intensivo
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="fade-item card card-hover bg-black/20 flex flex-col items-center text-center p-8">
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
