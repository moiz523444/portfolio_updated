import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Faster lerp for better responsiveness
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      smoothTouch: false, // Disable smoothTouch for immediate native-like feel
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Ensure scroll height is updated when content changes
    const resizeObserver = new ResizeObserver(() => {
      lenis.update();
    });
    resizeObserver.observe(document.body);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
