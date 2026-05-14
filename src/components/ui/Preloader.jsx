import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Faster counter for better feel

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Percentage Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[12rem] md:text-[18rem] font-display font-black text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            >
              {progress}
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white mb-4">
                Abdul <span className="text-gradient">Moiz.</span>
              </h1>
              
              {/* Progress Bar */}
              <div className="w-48 h-[2px] bg-white/5 mx-auto rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-primary"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[10px] text-text-muted uppercase tracking-[0.6em] font-bold"
              >
                Building Digital Excellence
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"
            />
          </div>

          {/* Curved Bottom Transition Panel (Optional but premium) */}
          <svg className="absolute bottom-0 w-full h-[100px] text-[#030712] fill-current translate-y-[99%]">
            <path d="M0 0 Q 50 100 100 0 L 100 100 L 0 100 Z" transform="scale(1, -1) translate(0, -100)" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
