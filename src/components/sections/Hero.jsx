import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { HiArrowRight } from 'react-icons/hi';
import { SiReact, SiNextdotjs, SiWordpress } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.hero-tech-stack', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techStack = [
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'React Native', icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
    { name: 'WordPress', icon: <SiWordpress className="text-[#21759B]" /> },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Open for high-impact collaborations
        </motion.div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8">
          <span className="inline-block">Building</span>{' '}
          <span className="inline-block text-gradient">Performance-Driven</span> <br />
          <span className="inline-block">Digital Products.</span>
        </h1>

        <p className="hero-description text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 font-body leading-relaxed">
          I help startups and businesses scale by developing high-performance,
          modern web and mobile applications that prioritize user experience and
          business growth.
        </p>

        <div className="hero-tech-stack flex flex-wrap justify-center gap-4 mb-12">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-medium border border-white/5"
            >
              <span className="text-xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-gradient-primary text-white font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-bold flex items-center gap-2"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Floating Glassmorphism Cards */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[25%] right-[5%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col gap-2">
          <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Efficiency</div>
          <div className="text-xl font-bold text-gradient">99.9% Up-time</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[20%] left-[5%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col gap-2">
          <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Experience</div>
          <div className="text-xl font-bold text-gradient">5+ Years</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
