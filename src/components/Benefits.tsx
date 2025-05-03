
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const benefitCards = sectionRef.current.querySelectorAll('.benefit-card');
    const title = sectionRef.current.querySelector('.section-title');
    
    gsap.from(title, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: title,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });
    
    benefitCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
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
    <section ref={sectionRef} id="benefits" className="py-24 bg-[#0F0F19]/95">
      <div className="container">
        <h2 className="section-title text-center mb-16 text-[42px] md:text-[56px] leading-tight">
          Acelerador para sua carreira em <span className="gradient-text">interfaces modernas</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card p-8 flex flex-col items-start bg-[#111122]/40 rounded-2xl backdrop-blur-sm hover:shadow-lg hover:shadow-human-orange/10 transition-all duration-300 hover:-translate-y-1"
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
