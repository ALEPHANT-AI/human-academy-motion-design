
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
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-human-orange transform -translate-y-1/2"></span>
          <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-human-orange transform -translate-x-1/2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-100'}`}></span>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-human-gray">{answer}</p>
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
      question: "É necessário ter conhecimentos prévios?",
      answer: "Sim, é recomendado ter conhecimentos básicos de HTML, CSS e JavaScript. Não é necessário conhecer GSAP previamente, mas entender os fundamentos de desenvolvimento web ajudará a aproveitar melhor o conteúdo."
    },
    {
      question: "O que preciso levar para o workshop?",
      answer: "Você deve trazer seu próprio notebook com os programas necessários já instalados. Enviaremos uma lista de preparação uma semana antes do evento com todas as ferramentas e configurações necessárias."
    },
    {
      question: "Haverá gravação das aulas?",
      answer: "Sim, todas as sessões serão gravadas e os participantes terão acesso às gravações por 12 meses após o evento, permitindo que você revise o conteúdo sempre que precisar."
    },
    {
      question: "O certificado é reconhecido pelo mercado?",
      answer: "Sim, o certificado é valorizado pelo mercado por ser um workshop ministrado por profissionais reconhecidos na área de motion design e desenvolvimento front-end."
    },
    {
      question: "Posso pagar em parcelas?",
      answer: "Sim, oferecemos parcelamento em até 12x no cartão de crédito. Também aceitamos pagamento via PIX ou transferência bancária para pagamento à vista com desconto adicional."
    },
    {
      question: "Existe política de cancelamento?",
      answer: "Sim, você pode solicitar reembolso integral até 15 dias antes do evento. Entre 14 e 7 dias antes, o reembolso será de 50%. Menos de 7 dias, não haverá reembolso, mas você pode transferir sua vaga para outra pessoa."
    }
  ];
  
  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-black/20">
      <div className="container max-w-3xl">
        <h2 className="section-title text-center fade-item">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        
        <div className="mt-12 fade-item">
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
        
        <div className="mt-12 text-center fade-item">
          <p className="mb-6 text-lg text-human-gray">
            Ainda tem dúvidas? Entre em contato conosco.
          </p>
          <a href="mailto:contato@humanacademy.com.br" className="btn-secondary">
            contato@humanacademy.com.br
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
