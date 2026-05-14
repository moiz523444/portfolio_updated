import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Outer Ring Springs (Lagging)
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });
  
  // Inner Dot Springs (Fast)
  const dotX = useSpring(0, { stiffness: 800, damping: 40 });
  const dotY = useSpring(0, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.group') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/30 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.5)' : 'rgba(139, 92, 246, 0.3)',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] hidden md:block shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#06B6D4' : '#8B5CF6',
        }}
      />
      
      <div className="noise-overlay" />
    </>
  );
};

export default CustomCursor;
