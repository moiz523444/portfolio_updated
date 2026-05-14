import { motion } from "framer-motion";
import { HiMail, HiPhone, HiCalendar } from "react-icons/hi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/moiz523444", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdul-moiz-35448a28b/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/abdulmoiz5141/", label: "Instagram" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-8"
            >
              Let's Create <br />
              <span className="text-gradient">Something Iconic</span>
            </motion.h2>

            <p className="text-text-muted text-lg mb-12 max-w-md">
              Ready to take your digital presence to the next level? Reach out
              and let's discuss how we can build your next high-performance product.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-primary group-hover:scale-110 transition-transform">
                  <HiMail />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest">
                    Email
                  </div>
                  <div className="text-lg font-medium">moiz10633@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-secondary group-hover:scale-110 transition-transform">
                  <HiPhone />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest">
                    Phone
                  </div>
                  <div className="text-lg font-medium">+92 (311-2778985)</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/10 hover:border-primary/50 text-white font-bold transition-all group"
              >
                <HiCalendar className="text-2xl text-primary group-hover:scale-110 transition-transform" />
                Schedule a Discovery Call
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:text-primary transition-colors border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 glass p-10 rounded-[40px] border border-white/5 relative"
          >
             {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
            
            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="ca80be4a-581e-41d7-b572-2bada52c8c86" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-text-muted uppercase tracking-widest ml-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-text-muted uppercase tracking-widest ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase tracking-widest ml-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell me about your project or vision..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all placeholder:text-white/10 resize-none text-white"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-primary text-white font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
