import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--cosmic-black)]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              ALEPHANT
            </a>
            <span className="text-sm text-[var(--alephant-gray)] ml-4">10-12 Julho 2025</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><button onClick={() => scrollToSection('benefits')} className="text-white hover:text-[var(--luminous-magenta)] transition-colors">Benefícios</button></li>
              <li><button onClick={() => scrollToSection('program')} className="text-white hover:text-[var(--luminous-magenta)] transition-colors">Programa</button></li>
              <li><button onClick={() => scrollToSection('project')} className="text-white hover:text-[var(--luminous-magenta)] transition-colors">O Que Você Leva</button></li>
              <li><button onClick={() => scrollToSection('instructor')} className="text-white hover:text-[var(--luminous-magenta)] transition-colors">Fundadores</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-white hover:text-[var(--luminous-magenta)] transition-colors">FAQ</button></li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[var(--cosmic-black)]/95 backdrop-blur-md z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <ul className="flex flex-col space-y-8 items-center">
            <li><button onClick={() => scrollToSection('benefits')} className="text-2xl text-white hover:text-[var(--luminous-magenta)] transition-colors">Benefícios</button></li>
            <li><button onClick={() => scrollToSection('program')} className="text-2xl text-white hover:text-[var(--luminous-magenta)] transition-colors">Programa</button></li>
            <li><button onClick={() => scrollToSection('project')} className="text-2xl text-white hover:text-[var(--luminous-magenta)] transition-colors">O Que Você Leva</button></li>
            <li><button onClick={() => scrollToSection('instructor')} className="text-2xl text-white hover:text-[var(--luminous-magenta)] transition-colors">Fundadores</button></li>
            <li><button onClick={() => scrollToSection('faq')} className="text-2xl text-white hover:text-[var(--luminous-magenta)] transition-colors">FAQ</button></li>
          </ul>
          
          <div className="mt-12 text-center">
            <a href="#" className="text-xl font-bold text-white tracking-tight mb-2 block">ALEPHANT</a>
            <span className="text-[var(--alephant-gray)]">10-12 Julho 2025</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
