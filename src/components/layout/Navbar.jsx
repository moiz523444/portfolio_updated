import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Experience', href: '#experience' },
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
            Abdul <span className="text-[#D4AF37] group-hover:text-white transition-colors">Moiz.</span>
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
                className="text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 rounded-full bg-[#D4AF37] text-black hover:bg-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
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
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[110] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-8 right-8 text-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX />
            </button>
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display font-bold hover:text-accent-pink transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
