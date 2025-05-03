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
  
  const deliverables = [
    {
      number: "01",
      title: "Mapa do DNA de Founder",
      description: "Documento detalhando os elementos inegociáveis que sustentam seu negócio autêntico, alinhado ao seu propósito e valores essenciais.",
      image: "https://i.imgur.com/2j0qtUk.png",
      alt: "Silhueta de perfil contra fundo futurista com hélice de ADN digital roxa e fluxo de dados"
    },
    {
      number: "02",
      title: "Toolkit de IA Estratégica",
      description: "Conjunto de prompts, ferramentas e fluxos para acelerar seu negócio com IA para texto, imagem e vídeo, permitindo automação de alto nível.",
      image: "https://i.imgur.com/DjXy15N.png",
      alt: "Pessoa interagindo com interface holográfica complexa com dados e visualizações cerebrais"
    },
    {
      number: "03",
      title: "Prototype de Negócio do Futuro",
      description: "Modelo prático de como estruturar seu negócio para as próximas ondas de mercado, combinando seu DNA único com tendências emergentes.",
      image: "https://i.imgur.com/0a5Zrmo.png",
      alt: "Perfil com pontos luminosos projetados na pele, contra fundo com luzes verticais roxas/azuis"
    },
    {
      number: "04",
      title: "Plano Estratégico Minimalista",
      description: "Framework para decisões de alto impacto alinhadas ao seu DNA, eliminando desperdícios e focando apenas no que realmente importa.",
      image: "https://i.imgur.com/UPL9qI6.png",
      alt: "Silhueta em corredor moderno minimalista com iluminação roxa e chão refletor"
    },
    {
      number: "05",
      title: "Acesso a Rede de Elite",
      description: "Conexões com fundadores que estão operando na fronteira da inovação consciente, criando oportunidades de networking estratégico de alto nível.",
      image: "https://i.imgur.com/ck2gkBx.png",
      alt: "Silhuetas de duas pessoas frente a frente numa mesa, com ecrã de rede/dados azul/roxo ao fundo"
    }
  ];
  
  return (
    <section ref={sectionRef} id="results" className="py-24 bg-gradient-to-b from-[#0F0F19] to-[#0d0d1a]">
      <div className="container">
        <h2 className="section-title text-center fade-item text-[42px] md:text-[56px] leading-tight mb-4">
          O Que Você <span className="gradient-text">Leva</span>
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item max-w-3xl">
          Ao final do FOUNDER UPGRADE™, você sai com ferramentas práticas e 
          estratégicas para implementação imediata no seu negócio
        </p>
        
        <div className="space-y-16 mt-16">
          {deliverables.map((item, index) => (
            <div key={index} className="project-card">
              <div className={`grid md:grid-cols-2 gap-8 items-center cosmic-border backdrop-blur-sm ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`p-8 md:p-10 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center">
                    <span className="text-5xl font-bold mr-4" style={{
                      background: "linear-gradient(135deg, var(--luminous-magenta) 0%, var(--transcendental-blue) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      opacity: 0.8
                    }}>{item.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[var(--human-gray)] leading-relaxed">{item.description}</p>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative group overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,16,0.8)] via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(189,16,166,0.2)] to-transparent z-5"></div>
                    <img 
                      src={item.image} 
                      alt={item.alt || item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-8 text-[var(--human-gray)]">
            <strong className="text-[var(--luminous-magenta)]">Bônus:</strong> Se optar pela mentoria de 6 meses, o valor investido na imersão <strong>será integralmente convertido em crédito</strong>
          </p>
          <a href="#register" className="cta-button inline-block">Quero Garantir Esses Resultados</a>
        </div>
      </div>
    </section>
  );
};

export default Project;
