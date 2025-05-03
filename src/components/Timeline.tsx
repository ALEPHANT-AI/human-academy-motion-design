
import React, { useEffect, useRef } from 'react';

const Timeline: React.FC = () => {
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
  
  const scheduleItems = [
    {
      day: "Dia 1",
      date: "10 Julho",
      events: [
        { time: "09:00 - 10:30", title: "Introdução ao GSAP", description: "Fundamentos e configuração do ambiente" },
        { time: "10:45 - 12:30", title: "Tweens e Timelines", description: "Criando sequências animadas complexas" },
        { time: "14:00 - 16:00", title: "Animação de SVG", description: "Técnicas especializadas para gráficos vetoriais" },
        { time: "16:15 - 18:00", title: "Lab prático", description: "Exercícios de aplicação e dúvidas" }
      ]
    },
    {
      day: "Dia 2",
      date: "11 Julho",
      events: [
        { time: "09:00 - 10:30", title: "Introdução ao ScrollTrigger", description: "Configuração e princípios básicos" },
        { time: "10:45 - 12:30", title: "Técnicas de pin e scrub", description: "Criando experiências baseadas em scroll" },
        { time: "14:00 - 16:00", title: "Parallax avançado", description: "Efeitos de profundidade e movimento" },
        { time: "16:15 - 18:00", title: "Projeto prático", description: "Desenvolvimento do primeiro projeto" }
      ]
    },
    {
      day: "Dia 3",
      date: "12 Julho",
      events: [
        { time: "09:00 - 10:30", title: "Cursores personalizados", description: "Interatividade e feedback visual" },
        { time: "10:45 - 12:30", title: "Transições de página", description: "Criando navegação fluida sem reloads" },
        { time: "14:00 - 16:00", title: "Otimização e performance", description: "Técnicas para animações eficientes" },
        { time: "16:15 - 18:00", title: "Finalização do projeto", description: "Últimos ajustes e apresentação final" }
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="timeline" className="py-24 bg-black/20">
      <div className="container">
        <h2 className="section-title text-center fade-item">
          <span className="gradient-text">Cronograma</span> Completo
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item">
          Três dias intensivos de aprendizado prático e aplicação real
        </p>
        
        <div className="mt-16 space-y-12">
          {scheduleItems.map((day, dayIndex) => (
            <div key={dayIndex} className="fade-item">
              <div className="flex items-center mb-6">
                <div className="bg-human-orange/20 text-human-orange font-bold py-2 px-4 rounded-full">
                  {day.day} - {day.date}
                </div>
                <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-human-orange/50 to-transparent"></div>
              </div>
              
              <div className="space-y-4 ml-4">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex} 
                    className="grid md:grid-cols-4 gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-human-orange font-mono">{event.time}</div>
                    <div className="md:col-span-3">
                      <h4 className="font-bold">{event.title}</h4>
                      <p className="text-human-gray">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
