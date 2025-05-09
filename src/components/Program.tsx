import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Program: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !cardsRef.current) return;
    
    const cards = cardsRef.current.querySelectorAll('.program-card');
    if (!cards.length) return;
    
    // Set initial states
    gsap.set(cards, { 
      autoAlpha: 0,
      yPercent: 50
    });
    
    gsap.set(cards[0], { 
      autoAlpha: 1,
      yPercent: 0
    });
    
    // Create the scroll animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.3,
        anticipatePin: 1,
        markers: false,
      }
    });
    
    // Animate heading
    timeline.to(headingRef.current, {
      yPercent: -30,
      opacity: 0.8,
      scale: 0.9,
      duration: 1
    }, 0);
    
    // Animate cards
    cards.forEach((card, index) => {
      if (index === 0) return;
      
      timeline.to(cards[index - 1], {
        autoAlpha: 0,
        yPercent: -30,
        duration: 0.5
      }, index);
      
      timeline.to(card, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.5
      }, index);
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const programItems = [
    {
      number: "01",
      title: "DIA 1 — DESPERTAR",
      description: "Da sobrevivência à estratégia consciente",
      image: "https://i.imgur.com/0a5Zrmo.png",
      alt: "Perfil com pontos luminosos projetados na pele, contra fundo com luzes verticais roxas/azuis",
      topics: [
        "09:00 — Abertura: 'O Chamado do Fundador do Futuro'",
        "09:30 — Diagnóstico de Identidade: Fundador vs Executor - Onde você está?",
        "10:30 — Workshop DNA: O Modelo Mental da Nova Era dos Negócios",
        "12:00 — Intervalo Premium (Coffee + Networking Estratégico)",
        "13:00 — IA Avançada na Prática: Texto, Imagem e Vídeo para Founders",
        "15:00 — Laboratório: LLMs e Ferramentas Emergentes para Negócios",
        "17:00 — Encerramento: Reflexão e Reimaginação do seu Propósito"
      ]
    },
    {
      number: "02",
      title: "DIA 2 — ASCENSÃO",
      description: "Construindo negócios vivos e inteligentes para o futuro",
      image: "https://i.imgur.com/UPL9qI6.png",
      alt: "Silhueta em corredor moderno minimalista com iluminação roxa e chão refletor",
      topics: [
        "09:00 — Abertura: 'O Fundador como Sistema Operacional da Empresa'",
        "09:30 — Workshop: Arquitetura de Negócios Vivos (DNA + IA + Estratégia)",
        "11:30 — Mapeamento de Tendências: Próximas Ondas de Mercado e Oportunidades",
        "12:30 — Intervalo Premium (Coffee + Networking Estratégico)",
        "13:30 — Laboratório de Prototype: Construção do seu Modelo de Negócio do Futuro",
        "15:00 — Branding & Posicionamento: Comunicando sua Essência ao Mercado",
        "16:30 — Apresentação: Mentoria Fundação™ – O Próximo Nível",
        "17:00 — Encerramento: Rito de Compromisso com o Futuro"
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="program" className="program-section min-h-screen bg-[#0F0F19]/95">
      <div className="container pt-20 pb-10">
        <h2 ref={headingRef} className="section-title text-center max-w-4xl mx-auto text-[42px] md:text-[56px] leading-tight">
          Estrutura completa do <span className="gradient-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">evento</span>
        </h2>
        
        <div ref={cardsRef} className="relative mt-12 min-h-[500px]">
          {programItems.map((item, index) => (
            <div 
              key={index}
              className="program-card absolute top-0 left-0 w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-[#111122] rounded-2xl overflow-hidden shadow-lg border border-purple-900/20">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl font-bold text-purple-500/30 mr-4">{item.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                  </div>
                  
                  <p className="text-human-gray mb-8 text-lg italic">'{item.description}'</p>
                  
                  <ul className="space-y-4">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2">→</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
