
import React, { useEffect, useRef } from 'react';

const Pricing: React.FC = () => {
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
  
  return (
    <section ref={sectionRef} id="pricing" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="section-title text-center fade-item">
          Garanta sua <span className="gradient-text">Vaga</span>
        </h2>
        <p className="section-subtitle text-center mx-auto fade-item">
          Vagas limitadas para garantir atenção personalizada e maximizar seu aprendizado
        </p>
        
        <div className="mt-12 fade-item">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-human-orange to-human-orange-light rounded-2xl blur-md opacity-30"></div>
            <div className="relative card bg-black/40 border border-human-orange/20 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-white/10">
                <div>
                  <span className="text-human-gray text-sm uppercase tracking-wider">1º Lote - Vagas Limitadas</span>
                  <div className="flex items-center mt-2">
                    <span className="text-4xl font-bold">R$ 1.497</span>
                    <span className="text-human-gray ml-2 line-through">R$ 1.997</span>
                  </div>
                  <p className="text-human-gray mt-2">Ou em até 12x de R$ 139,90</p>
                </div>
                
                <a href="#" className="mt-6 md:mt-0 btn-primary btn-lg">
                  Garantir minha vaga agora
                </a>
              </div>
              
              <h3 className="text-xl font-bold mb-6">O que está incluído:</h3>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 dias de workshop intensivo (24h total)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Projeto completo para seu portfólio</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acesso a comunidade exclusiva</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificado de participação</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Material de apoio e recursos</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30 dias de suporte pós-evento</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Coffee-breaks e almoço incluídos</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-human-orange mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acesso antecipado a workshops futuros</span>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <p className="text-human-gray text-sm">
                  Garantia de satisfação de 7 dias ou seu dinheiro de volta, sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
