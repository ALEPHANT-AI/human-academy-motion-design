
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const title = sectionRef.current.querySelector('.section-title');
    const subtitle = sectionRef.current.querySelector('.section-subtitle');
    const scheduleItems = sectionRef.current.querySelectorAll('.schedule-item');
    
    // Animate title and subtitle
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
    
    // Animate schedule items with staggered effect
    gsap.from(scheduleItems, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: scheduleItems[0],
        start: 'top bottom-=50',
        end: 'center center',
        toggleActions: 'play none none reverse',
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const scheduleItems = [
    {
      day: "Dia 1",
      date: "10 Julho",
      events: [
        { time: "09:00", title: "Início", description: "Abertura e apresentações" },
        { time: "10:45", title: "Tweens e Timelines", description: "Criando sequências animadas complexas" },
        { time: "12:00", title: "Almoço", description: "Pausa para refeição e networking" },
        { time: "13:00", title: "Retorno", description: "Continuação das atividades" },
        { time: "17:00", title: "Encerramento", description: "Conclusão do primeiro dia" }
      ]
    },
    {
      day: "Dia 2",
      date: "11 Julho",
      events: [
        { time: "09:00", title: "Início", description: "Revisão do dia anterior" },
        { time: "10:45", title: "ScrollTrigger avançado", description: "Técnicas de pin e scrub" },
        { time: "12:00", title: "Almoço", description: "Pausa para refeição e networking" },
        { time: "13:00", title: "Retorno", description: "Continuação das atividades" },
        { time: "17:00", title: "Encerramento", description: "Conclusão do workshop" }
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="timeline" className="py-24 bg-black/30 relative">
      {/* Background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-human-orange/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
      
      <div className="container relative z-10">
        <h2 className="section-title text-center mb-3 text-[42px] md:text-[56px] leading-tight font-black tracking-tight">
          <span className="gradient-text">CRONOGRAMA</span>
        </h2>
        <p className="section-subtitle text-center mx-auto text-human-gray">
          17 e 18 de Maio | Ao Vivo
        </p>
        
        <div className="mt-16 space-y-16 max-w-4xl mx-auto">
          {scheduleItems.map((day, dayIndex) => (
            <div key={dayIndex} className="schedule-item">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                <span className="text-human-orange mr-3">{day.day}</span>
                <span className="text-white/70">|</span>
                <span className="ml-3 text-white/70">{day.date}</span>
              </h3>
              
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex} 
                    className="grid grid-cols-[1fr_2px_3fr] gap-6"
                  >
                    <div className="text-right">
                      <span className="text-2xl md:text-4xl font-light text-human-gray-light tracking-tighter">{event.time}</span>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-human-orange/80 to-human-orange/10"></div>
                      <div className="absolute top-1 left-1/2 w-3 h-3 rounded-full bg-human-orange -translate-x-1/2"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium mb-1">{event.title}</h4>
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
