import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/moiz523444", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdul-moiz-35448a28b/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/abdulmoiz5141/", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-8 group cursor-pointer"
          >
            Abdul <span className="text-[#D4AF37] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">Moiz.</span>
          </motion.a>

          <p className="text-white/40 max-w-sm mb-12 text-sm leading-relaxed">
            Crafting digital excellence through minimalist design and high-performance engineering.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(212, 175, 55, 0.1)", borderColor: "rgba(212, 175, 55, 0.5)" }}
                className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-xl hover:text-[#D4AF37] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5 items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-8 py-3 rounded-full glass border border-[#D4AF37]/20 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mx-auto hover:bg-[#D4AF37]/10 transition-all shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              Back to Top <HiArrowUp className="text-sm" />
            </motion.button>
          </div>

          <div className="text-[10px] text-white/20 uppercase tracking-widest font-medium text-center md:text-right">
            © 2026 Crafted by <span className="text-white/40">Abdul Moiz</span>
          </div>
        </div>
      </div>

      {/* Final Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </footer>
  );
};

export default Footer;
