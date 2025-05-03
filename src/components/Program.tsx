
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
        end: "+=300%",
        pin: true,
        scrub: 0.5,
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
        duration: 1
      }, index);
      
      timeline.to(card, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1
      }, index);
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const programItems = [
    {
      number: "01",
      title: "Fundamentos Avançados de GSAP",
      description: "Aprenda as bases poderosas do GreenSock Animation Platform: tweens, timelines, controle preciso de easing e como estruturar animações complexas para máxima flexibilidade.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      topics: [
        "Aprofundamento em tweens e timelines",
        "Curvas de easing customizadas",
        "Animação de SVG avançada",
        "Técnicas de otimização de performance"
      ]
    },
    {
      number: "02",
      title: "Domínio de ScrollTrigger",
      description: "Transforme o scroll em uma ferramenta de narrativa visual com animações sincronizadas, parallax, efeitos de pin e espaço-tempo personalizados.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      topics: [
        "Criação de scroll horizontais",
        "Animações baseadas em posição",
        "Técnicas de pin e scrub avançadas",
        "Criação de sequências narrativas"
      ]
    },
    {
      number: "03",
      title: "Interfaces Cinematográficas",
      description: "Combine todas as técnicas para criar experiências web verdadeiramente imersivas com transições fluidas e interatividade que responde ao usuário.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      topics: [
        "Transições de página sem reload",
        "Reveals criativos de conteúdo",
        "Interatividade com cursor personalizado",
        "Animações responsivas que escalam"
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="program" className="program-section min-h-screen bg-[#0F0F19]/95">
      <div className="container pt-20 pb-10">
        <h2 ref={headingRef} className="section-title text-center max-w-4xl mx-auto text-[42px] md:text-[56px] leading-tight">
          O que você vai <span className="gradient-text">aprender</span>
        </h2>
        
        <div ref={cardsRef} className="relative mt-12 min-h-[500px]">
          {programItems.map((item, index) => (
            <div 
              key={index}
              className="program-card absolute top-0 left-0 w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-[#111122]/40 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl font-bold text-human-orange/30 mr-4">{item.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                  </div>
                  
                  <p className="text-human-gray mb-8">{item.description}</p>
                  
                  <ul className="space-y-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-human-orange mr-2">→</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative h-full">
                  <div className="aspect-video h-full w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-human-orange/20 to-transparent z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
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

export default Program;
