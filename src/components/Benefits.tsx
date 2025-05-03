
import React, { useEffect, useRef } from 'react';

const Benefits: React.FC = () => {
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
  
  const benefits = [
    {
      title: "Expertises dos maiores nomes",
      description: "Aprenda técnicas utilizadas por agências premiadas e estúdios de alto nível"
    },
    {
      title: "Do essencial ao avançado",
      description: "Domine desde os fundamentos até os conceitos mais sofisticados de animação web"
    },
    {
      title: "Projetos para portfólio",
      description: "Termine o workshop com um projeto completo para adicionar ao seu portfólio"
    },
    {
      title: "Comunidade exclusiva",
      description: "Acesso a uma rede de profissionais e oportunidades no mercado de motion e web"
    }
  ];
  
  return (
    <section ref={sectionRef} id="benefits" className="py-24">
      <div className="container">
        <h2 className="section-title text-center fade-item mb-16">
          Acelerador para sua carreira em <span className="gradient-text">interfaces modernas</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="fade-item card card-hover p-8 flex flex-col items-start"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-human-orange to-human-orange-light flex items-center justify-center mb-6">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-human-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
