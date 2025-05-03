
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
    
    // Create a more dramatic entrance for the title
    gsap.from(title, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: title,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });
    
    // Create a staggered reveal for the cards
    gsap.fromTo(benefitCards, 
      { 
        opacity: 0,
        y: 80,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          toggleActions: 'play none none reverse',
        }
      }
    );
    
    // Create hover animations for the cards
    benefitCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow: '0 20px 25px -5px rgba(255, 92, 0, 0.1), 0 10px 10px -5px rgba(255, 92, 0, 0.04)',
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          duration: 0.3
        });
      });
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
    <section ref={sectionRef} id="benefits" className="py-24 bg-[#0A0A14] relative">
      {/* Glass morphism background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-human-orange/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]"></div>
      
      <div className="container relative z-10">
        <h2 className="section-title text-center mb-16 text-[42px] md:text-[56px] leading-tight font-black tracking-tight">
          Acelerador para sua carreira em <span className="gradient-text bg-gradient-to-r from-human-orange via-human-orange-light to-human-orange bg-[length:200%_100%]">interfaces modernas</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card p-8 flex flex-col items-start bg-[#111122]/40 rounded-2xl backdrop-blur-md border border-white/5 transition-all duration-300 cursor-default"
            >
              <div className="h-12 w-12 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-human-orange to-human-orange-light rounded-full opacity-20 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-human-orange to-human-orange-light rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
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
