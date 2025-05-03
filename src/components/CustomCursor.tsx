
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    
    if (!dot || !outline) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Animate dot to follow cursor exactly
      dot.style.transform = `translate(${posX - 4}px, ${posY - 4}px)`;
      
      // Animate outline with slight delay for smooth following effect
      outline.animate({
        transform: `translate(${posX - 12}px, ${posY - 12}px)`
      }, { duration: 500, fill: "forwards", easing: "ease" });
    };
    
    const handleMouseDown = () => {
      dot.style.transform = 'scale(0.9)';
    };
    
    const handleMouseUp = () => {
      dot.style.transform = 'scale(1)';
    };
    
    const handleLinkHover = () => {
      outline.classList.add('cursor-hover');
    };
    
    const handleLinkLeave = () => {
      outline.classList.remove('cursor-hover');
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const links = document.querySelectorAll('a, button, .card-hover, input, textarea, [role="button"]');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  useEffect(() => {
    // Re-initialize on DOM changes
    const observer = new MutationObserver(() => {
      const links = document.querySelectorAll('a, button, .card-hover, input, textarea, [role="button"]');
      const outline = outlineRef.current;
      
      if (!outline) return;
      
      const handleLinkHover = () => {
        outline.classList.add('cursor-hover');
      };
      
      const handleLinkLeave = () => {
        outline.classList.remove('cursor-hover');
      };
      
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
