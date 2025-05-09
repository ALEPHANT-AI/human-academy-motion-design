import React, { useEffect, useRef } from 'react';
import './hero-styles.css';

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
            <img src="/assets/images/alephant-logo.png" alt="ALEPHANT" className="h-11 w-auto" />
          </div>
          <div className="event-info">
            <span className="event-date">07-08 Julho • Florianópolis</span>
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
        {/* Background image */}
        <div className="hero-background">
          <img 
            src="https://i.imgur.com/193j6jD.png" 
            alt="Duas silhuetas caminhando por corredor futurista com ecrãs verticais roxos"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-symbol">
              <img src="/assets/images/alephant-logo.png" alt="ALEPHANT" className="object-contain" />
            </div>
            <h2 className="main-tagline">FOUNDER UPGRADE&trade;</h2>
            <h1 className="main-title">Empresas do futuro serão extensões precisas do seu fundador.</h1>
            
            <p className="hero-paragraph">
              Menos esforço. Mais inteligência. Negócios únicos e vivos.
            </p>
            
            <div className="hero-buttons">
              <a href="#register" className="cta-button">Garantir Minha Vaga</a>
              <div className="lot-info">
                <div className="lot-number">LOTE FUNDADORES</div>
                <div className="lot-progress-container">
                  <div className="lot-progress-bar"></div>
                </div>
                <div className="lot-progress-text">30% das vagas preenchidas</div>
              </div>
            </div>
          </div>
          
          <div className="audience-ticker">
            <div className="ticker-content" ref={tickerRef}>
              <p>Fundadores • CEOs • Executivos • Estrategistas • Líderes de Inovação • Creators • Consultores</p>
            </div>
          </div>
          
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="meta-label">Quando</div>
              <div className="meta-value">07-08 Julho 2025</div>
            </div>
            <div className="hero-meta-item">
              <div className="meta-label">Onde</div>
              <div className="meta-value">Florianópolis, Brasil</div>
            </div>
            <div className="hero-meta-item">
              <div className="meta-label">Formato</div>
              <div className="meta-value">Imersão Presencial</div>
            </div>
            <div className="hero-meta-item">
              <div className="meta-label">Investimento</div>
              <div className="meta-value">R$ 1.500,00</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
