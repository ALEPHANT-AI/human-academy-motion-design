import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Duplicar conteúdo do ticker para scroll infinito
    if (tickerRef.current) {
      tickerRef.current.innerHTML += tickerRef.current.innerHTML;
    }
    
    // Header blur ao scroll
    const handleScroll = () => {
      const header = document.querySelector('.site-header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon"></span>ALEPHANT
          </div>
          <div className="event-info">
            <span className="event-date">07 e 08 de Julho em Florianópolis | Presencial</span>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#program" className="nav-link">Programa</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
              <li><a href="#register" className="nav-link nav-btn">Garantir Vaga</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="main-tagline">🧬 FOUNDER UPGRADE™</div>
            <h1 className="main-title">Atualize sua mente. Atualize seus negócios.</h1>
            <p className="hero-subtitle">Construa o futuro.</p>
            
            <div className="hero-quote">
              "O futuro dos negócios já começou. A questão é: você vai repetir o passado ou atualizar sua mente para criar o novo?"
            </div>
            
            <div className="hero-emphasis">
              <h2 className="emphasis-title">A NOVA ERA DOS FUNDADORES CHEGOU</h2>
              <p className="emphasis-text">
                Em um mundo onde a <strong>IA transforma tudo a cada semana</strong>, onde mercados nascem e morrem em meses, 
                e onde a maioria dos empreendedores ainda opera com mentalidade de 2019...
              </p>
              <p className="emphasis-callout">
                <strong>Chegou a hora da grande atualização.</strong>
              </p>
              <p className="emphasis-description">
                O <strong>Founder Upgrade™</strong> é a imersão presencial intensiva que prepara fundadores, 
                empreendedores e creators para operarem em um novo paradigma:
              </p>
              <ul className="emphasis-benefits">
                <li><strong>Menos esforço, mais estratégia.</strong></li>
                <li><strong>Menos ruído, mais impacto.</strong></li>
                <li><strong>Menos tempo perdido, mais aceleração real.</strong></li>
              </ul>
              <p className="emphasis-closing">
                Em dois dias transformadores, você passará por uma <strong>atualização mental, estratégica e tecnológica</strong> — 
                saindo do padrão antigo de operação para uma nova fundação de alta potência alinhada com seu DNA autêntico.
              </p>
            </div>
            
            <div className="hero-cta-block">
              <p className="cta-note">
                <strong>Este não é um evento de inspiração vazia.</strong><br />
                <strong>É uma atualização prática, real e irreversível do seu sistema operacional como fundador.</strong>
              </p>
              <div className="hero-buttons">
                <a href="#register" className="cta-button">Garantir Minha Vaga</a>
                <div className="lot-info">
                  <div className="lot-number">LOTE 1</div>
                  <div className="lot-progress-container">
                    <div className="lot-progress-bar"></div>
                  </div>
                  <div className="lot-progress-text">30% das vagas preenchidas à R$ 1.500,00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="audience-ticker">
            <div className="ticker-content" ref={tickerRef}>
              <p>Fundadores • Empreendedores • CEOs • Diretores • Líderes de Inovação • Creators • Consultores • Estrategistas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
