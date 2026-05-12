import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
            >
              Abdul <span className="text-[#D4AF37] relative">
                Moiz.
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#D4AF37]"
                />
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-8 text-[10px] text-white/20 uppercase tracking-[0.5em] text-center"
            >
              Building Excellence
            </motion.div>
          </div>

          {/* Luxury Accents */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-[300px] h-[300px] bg-[#D4AF37] rounded-full blur-[100px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
