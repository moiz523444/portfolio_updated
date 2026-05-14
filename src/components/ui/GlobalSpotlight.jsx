import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GlobalSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: clientX,
          y: clientY,
          duration: 1,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-[9998] mix-blend-screen opacity-50"
      />
      <div 
        style={{ transform: 'translate(-50%, -50%)' }}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none z-[9998] mix-blend-screen opacity-30 transition-transform duration-700 ease-out"
      />
    </>
  );
};

export default GlobalSpotlight;
