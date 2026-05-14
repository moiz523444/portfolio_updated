import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/moiz523444", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/abdul-moiz-35448a28b/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/abdulmoiz5141/",
    label: "Instagram",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-8 group cursor-pointer"
          >
            Abdul{" "}
            <span className="text-gradient group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              Moiz.
            </span>
          </motion.a>

          <p className="text-text-muted max-w-sm mb-12 text-sm leading-relaxed">
            Building high-performance digital products that drive business
            growth and user satisfaction.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  borderColor: "rgba(139, 92, 246, 0.5)",
                }}
                className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-xl hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/5">
          {/* Links - Left */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 order-2 md:order-1 flex-1">
            {["Home", "Services", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ),
            )}
          </div>

          {/* Button - Center */}
          <div className="flex justify-center order-1 md:order-2 flex-1">
            <motion.button
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-8 py-3 rounded-full glass border border-primary/20 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary/10 transition-all shadow-[0_0_20px_rgba(139,92,246,0.1)]"
            >
              Back to Top <HiArrowUp className="text-sm" />
            </motion.button>
          </div>

          {/* Copyright - Right */}
          <div className="text-[10px] text-text-muted/60 uppercase tracking-[0.3em] font-bold text-center md:text-right order-3 flex-1">
            © 2026 Crafted by <span className="text-primary">Abdul Moiz</span>
          </div>
        </div>
      </div>

      {/* Final Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
};

export default Footer;
