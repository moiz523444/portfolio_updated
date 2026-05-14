import { motion } from 'framer-motion';
import { HiOutlineUser, HiOutlineLightningBolt, HiOutlineGlobeAlt, HiOutlineCode } from 'react-icons/hi';

const stats = [
  { label: 'Years Experience', value: '05+', icon: HiOutlineLightningBolt },
  { label: 'Happy Clients', value: '50+', icon: HiOutlineUser },
  { label: 'Projects Done', value: '100+', icon: HiOutlineGlobeAlt },
  { label: 'Successful ROI', value: '100%', icon: HiOutlineCode },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image side - Premium Layered Look */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Decorative Frames */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden glass border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                <img
                  src="/projects/profile.jpg"
                  alt="Abdul Moiz"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-8 left-8 glass px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="text-2xl font-bold text-white leading-none">05+</div>
                  <div className="text-[8px] uppercase tracking-widest text-text-muted mt-1 font-bold">Years of Excellence</div>
                </div>
              </div>

              {/* Floating Expertise Card */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-6 md:-right-10 glass p-6 rounded-3xl border border-white/10 shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm">
                    <HiOutlineCode />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white">Expertise</div>
                </div>
                <div className="text-[10px] text-text-muted leading-relaxed">
                  Specialized in building <span className="text-white">scalable ecosystems</span> with React & Next.js.
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
            >
              The Story So Far
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
            >
              Transforming Visions Into <br />
              <span className="text-gradient">High-Performance Realities</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-text-muted text-lg leading-relaxed mb-12 max-w-2xl"
            >
              <p>
                I am a specialized Software Engineer dedicated to crafting digital 
                ecosystems that drive business growth. With mastery in <span className="text-white font-medium">React.js, Next.js, 
                React Native, and WordPress</span>, I bridge complex logic with stunning UI.
              </p>
              <p>
                My philosophy is simple: <span className="text-primary font-bold italic">Performance is not an option, it's a foundation.</span> I prioritize scalability, security, and ROI in every line of code I write.
              </p>
            </motion.div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-6 md:p-8 rounded-[32px] glass-card group overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <stat.icon />
                    </div>
                    <div className="text-3xl md:text-4xl font-display font-black text-white mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.2em] font-bold">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#contact"
                className="relative overflow-hidden px-10 py-5 rounded-full bg-gradient-primary text-white font-bold tracking-widest uppercase text-xs group shadow-[0_20px_40px_-15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">Start a Project</span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
              <a
                href="#services"
                className="px-10 py-5 rounded-full glass border border-white/10 hover:border-primary/40 hover:bg-white/5 transition-all text-xs font-bold tracking-widest uppercase text-white/80 hover:text-white"
              >
                My Services
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
