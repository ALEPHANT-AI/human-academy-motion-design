import React, { useEffect, useRef } from 'react';

const Instructor: React.FC = () => {
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
  
  const founders = [
    {
      name: "Taynã Puri",
      title: "O Líder do Futuro Ancestral",
      description: "Indígena do povo Puri (que o governo brasileiro chegou a considerar \"extinto\"). Especialista em IA Estratégica, utilizando ferramentas de inteligência artificial como uma extensão do pensamento humano. Cofundador da Alephant, forma líderes que criam movimentos e não apenas empresas.",
      quote: "Não uso IA como um software comum; vejo-a como uma conselheira que amplifica nossas raízes e potencializa nossos resultados.",
      image: "https://imgur.com/sTB5wYK.png",
      alt: "Foto de Taynã Puri, cofundador da ALEPHANT",
      expertise: [
        "Especialista em IA Estratégica",
        "Formador de Líderes e Movimentos",
        "Cofundador da Alephant",
        "Conexão entre Ancestralidade e Tecnologia"
      ]
    },
    {
      name: "Rodrigo Faerman",
      title: "Renascido para Transformar Empresas",
      description: "Arquiteto de inovação para grandes multinacionais, viveu uma experiência de quase morte durante uma crise de saúde. Retornou decidido a conduzir negócios com propósito claro e crescimento sustentável. Cofundador da Alephant, desenvolve metodologias que transferem o DNA do fundador para toda a empresa.",
      quote: "Velocidade sem direção é apenas pressa para chegar ao fim. A verdadeira expansão vem quando unimos propósito sólido a execução de alto nível.",
      image: "https://imgur.com/o6nvMN3.png",
      alt: "Foto de Rodrigo Faerman, cofundador da ALEPHANT",
      expertise: [
        "Arquiteto de Inovação Empresarial",
        "Desenvolvedor da Metodologia DNA",
        "Cofundador da Alephant",
        "Especialista em Crescimento Sustentável"
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="founders" className="py-24 bg-gradient-to-b from-[#0d0d1a] to-[#050510]">
      <div className="container">
        <h2 className="section-title text-center fade-item mb-4">
          Quem está <span className="gradient-text">por trás</span>
        </h2>
        <p className="text-center text-[var(--human-gray)] max-w-3xl mx-auto mb-16 fade-item">
          Conheça os fundadores da Alephant e criadores do método que está transformando empresas e líderes para a nova era
        </p>
        
        <div className="space-y-24">
          {founders.map((founder, index) => (
            <div key={founder.name} className="fade-item">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[var(--luminous-magenta)]/30 to-[var(--transcendental-blue)]/30 rounded-lg blur-xl opacity-60"></div>
                    <div className="relative rounded-lg overflow-hidden aspect-[4/5] cosmic-border">
                      <img 
                        src={founder.image} 
                        alt={founder.alt || founder.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="inline-block mb-3 bg-gradient-to-r from-[var(--luminous-magenta)]/20 to-[var(--transcendental-blue)]/20 text-[var(--luminous-magenta)] font-medium py-2 px-4 rounded-full">
                    {founder.title}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{founder.name}</h3>
                  
                  <p className="text-[var(--human-gray)] mb-6 leading-relaxed">
                    {founder.description}
                  </p>
                  
                  <div className="mb-6 pl-4 border-l-2 border-[var(--luminous-magenta)] italic text-[var(--human-gray)]">
                    "{founder.quote}"
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {founder.expertise.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[var(--luminous-magenta)] mr-2">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-[rgba(42,101,232,0.1)] hover:bg-[rgba(42,101,232,0.2)] rounded-full transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-[rgba(42,101,232,0.1)] hover:bg-[rgba(42,101,232,0.2)] rounded-full transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-[rgba(42,101,232,0.1)] hover:bg-[rgba(42,101,232,0.2)] rounded-full transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-item">
          <a href="#register" className="cta-button">Garantir Minha Vaga</a>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
