import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8 bg-transparent'
      }`}
    >
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'max-w-5xl' : 'max-w-full'
      }`}>
        <div className={`flex items-center justify-between w-full transition-all duration-500 ${
          isScrolled ? 'glass px-8 py-3 rounded-full border border-white/10' : ''
        }`}>
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-display font-bold tracking-tighter cursor-pointer group"
          >
            Abdul <span className="text-gradient group-hover:opacity-80 transition-all">Moiz.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 rounded-full bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HiMenuAlt4 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030712]/95 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Animated Background Decoration */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <button
              className="absolute top-8 right-8 text-4xl text-white/50 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl md:text-7xl font-display font-black tracking-tighter hover:text-gradient transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-2 bg-gradient-primary rounded-full z-0"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links for Mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex gap-8 text-2xl text-white/30"
            >
              <a href="https://github.com/moiz523444" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/abdul-moiz-35448a28b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
