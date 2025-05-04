import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const VideoSection: React.FC = () => {
  useEffect(() => {
    // Create animation for the video section when it comes into view
    gsap.fromTo(
      '.video-section',
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 80%',
        }
      }
    );

    // Animate the overlay text
    gsap.fromTo(
      '.overlay-text',
      { 
        opacity: 0,
        y: 30
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section className="video-section relative w-full overflow-hidden my-16">
      <div className="video-container relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/13tC6nizoB0?autoplay=1&mute=1&loop=1&playlist=13tC6nizoB0&controls=0&showinfo=0" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        <div className="video-overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8" 
             style={{ background: 'linear-gradient(to right, rgba(26, 5, 56, 0.7), rgba(189, 16, 166, 0.5))' }}>
          <div className="overlay-text max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">O Mundo Está Mudando</h2>
            <p className="text-lg md:text-xl text-white/90">
              Este vídeo foi criado 100% com Inteligência Artificial, representando a transformação que estamos vivendo.
              A ALEPHANT está na vanguarda dessa revolução, preparando fundadores para liderar o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
