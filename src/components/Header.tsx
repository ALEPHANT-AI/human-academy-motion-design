
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-human-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">
            HUMAN<span className="text-human-orange">Academy</span>
          </a>
          <div className="ml-6 py-1 px-3 rounded-full bg-white/10 hidden md:block">
            <span className="text-sm text-human-gray">10-12 Julho 2025</span>
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><button onClick={() => scrollToSection('benefits')} className="text-white hover:text-human-orange transition-colors">Benefícios</button></li>
            <li><button onClick={() => scrollToSection('program')} className="text-white hover:text-human-orange transition-colors">Programa</button></li>
            <li><button onClick={() => scrollToSection('project')} className="text-white hover:text-human-orange transition-colors">Projeto</button></li>
            <li><button onClick={() => scrollToSection('instructor')} className="text-white hover:text-human-orange transition-colors">Instrutor</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="btn-primary">Inscreva-se</button></li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-human-dark/95 backdrop-blur-md z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container h-full flex flex-col justify-center">
          <ul className="space-y-6 text-center">
            <li><button onClick={() => scrollToSection('benefits')} className="text-2xl text-white hover:text-human-orange transition-colors">Benefícios</button></li>
            <li><button onClick={() => scrollToSection('program')} className="text-2xl text-white hover:text-human-orange transition-colors">Programa</button></li>
            <li><button onClick={() => scrollToSection('project')} className="text-2xl text-white hover:text-human-orange transition-colors">Projeto</button></li>
            <li><button onClick={() => scrollToSection('instructor')} className="text-2xl text-white hover:text-human-orange transition-colors">Instrutor</button></li>
            <li className="pt-6"><button onClick={() => scrollToSection('pricing')} className="btn-primary btn-lg">Inscreva-se</button></li>
          </ul>
          
          <div className="mt-12 text-center">
            <span className="text-human-gray">10-12 Julho 2025</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
