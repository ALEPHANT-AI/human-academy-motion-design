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
            <span className="logo-icon"></span>HUMAN Academy
          </div>
          <div className="event-info">
            <span className="event-date">17 e 18 de Maio no Zoom | Ao vivo</span>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#program" className="nav-link">Workshop</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
              <li><a href="#register" className="nav-link nav-btn">Comprar Ingresso</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="main-title">AI videolab</h1>
            <p className="hero-paragraph">
              Domine técnicas audiovisuais inovadoras usando inteligência artificial. Uma experiência prática para criativos que querem potencializar sua produção de vídeos com IA.
            </p>
            <div className="hero-buttons">
              <a href="#register" className="cta-button">Comprar Ingresso</a>
              <div className="lot-info">
                <div className="lot-number">LOTE 5</div>
                <div className="lot-progress-container">
                  <div className="lot-progress-bar"></div>
                </div>
                <div className="lot-progress-text">14% das vagas preenchidas à R$ 64,00</div>
              </div>
            </div>
          </div>
          <div className="audience-ticker">
            <div className="ticker-content" ref={tickerRef}>
              <p>Diretores • Filmmakers • Profissionais de Publicidade • Editores e Pós-produtores • Criadores de Conteúdo Digital • Diretores de Arte • Motion Designers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
