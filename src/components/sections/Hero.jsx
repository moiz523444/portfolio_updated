import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text span', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 1.2,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 rounded-full glass border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
        >
          Available for New Projects
        </motion.div>

        <div className="hero-text overflow-hidden mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter">
            <span className="inline-block mb-2">Creative</span> <br />
            <span className="inline-block text-gradient py-2">Frontend & Web Developer</span>
          </h1>
        </div>

        <p className="hero-subtext text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Crafting high-end digital experiences where design meets precision.
          Specialized in <span className="text-white/80">ultra-smooth animations</span> and <span className="text-white/80">modern UI architecture</span>.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="group relative px-10 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-10 py-4 rounded-full border border-white/10 glass hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium text-sm tracking-wider uppercase"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[10%] hidden xl:block z-20"
      >
        <div className="glass p-5 rounded-3xl flex items-center gap-4 border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-2xl border border-[#D4AF37]/20">
            🚀
          </div>
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Projects Completed</div>
            <div className="text-2xl font-bold text-white">40+</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[20%] left-[10%] hidden xl:block z-20"
      >
        <div className="glass p-5 rounded-3xl flex items-center gap-4 border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-2xl border border-[#D4AF37]/20">
            ⚡
          </div>
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Performance</div>
            <div className="text-2xl font-bold text-white">100%</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
