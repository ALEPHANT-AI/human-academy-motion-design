import React, { useEffect, useRef, useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className={`relative ml-2 flex-shrink-0 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--luminous-magenta)] transform -translate-y-1/2"></span>
          <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-[var(--luminous-magenta)] transform -translate-x-1/2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-100'}`}></span>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-[var(--human-gray)]">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Preciso ter conhecimento prévio em IA?",
      answer: "Não. Começamos do zero e avançamos para níveis estratégicos, independente do seu conhecimento atual. O evento foi desenhado para ser acessível tanto para iniciantes quanto para quem já trabalha com IA."
    },
    {
      question: "Meu negócio já precisa estar funcionando?",
      answer: "Não. O FOUNDER UPGRADE™ serve tanto para quem está estruturando algo novo quanto para quem deseja reposicionar um negócio existente. A metodologia se adapta a diferentes estágios da jornada empreendedora."
    },
    {
      question: "O que acontece depois do evento?",
      answer: "Você sai com um plano prático de implementação. Se quiser aprofundar, oferecemos a Mentoria Fundação™ de 6 meses, que é uma continuação natural para quem deseja ir além e implementar tudo que foi aprendido com acompanhamento."
    },
    {
      question: "Posso abater o valor do ingresso na mentoria?",
      answer: "Sim. O valor é convertido em crédito integral se você decidir continuar conosco na Mentoria Fundação™ após o evento. Esta é uma forma de garantir que seu investimento inicial seja totalmente aproveitado caso decida dar o próximo passo."
    },
    {
      question: "Qual é a diferença entre este evento e outros cursos de IA?",
      answer: "Não ensinamos apenas ferramentas, mas a integração estratégica entre seu DNA único, visão de futuro e tecnologias emergentes. Combinamos a precisão tecnológica com uma abordagem profundamente humana e estratégica para negócios."
    },
    {
      question: "Existe política de cancelamento?",
      answer: "Sim, você pode solicitar reembolso integral até 15 dias antes do evento. Entre 14 e 7 dias antes, o reembolso será de 50%. Com menos de 7 dias de antecedência, não haverá reembolso, mas você pode transferir sua vaga para outra pessoa."
    }
  ];
  
  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-[rgba(5,5,16,0.7)]">
      <div className="container max-w-3xl">
        <h2 className="section-title text-center fade-item">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        
        <div className="mt-12 fade-item cosmic-border p-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 fade-item">
          <p className="mb-6 text-[var(--human-gray)]">
            Ainda tem dúvidas? Entre em contato diretamente conosco
          </p>
          <a 
            href="mailto:contato@alephant.ai" 
            className="inline-flex items-center text-[var(--luminous-magenta)] hover:text-[var(--transcendental-blue)] transition-colors"
          >
            <span>contato@alephant.ai</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
