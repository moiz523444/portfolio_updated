import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightningBolt, HiDeviceMobile, HiCode, HiTrendingUp } from 'react-icons/hi';

const reasons = [
  {
    title: "High Performance",
    description: "Optimized code ensures lightning-fast load times and smooth interactions.",
    icon: <HiLightningBolt className="text-primary" />,
  },
  {
    title: "Responsive & Adaptive",
    description: "Your application will look and function perfectly across all devices.",
    icon: <HiDeviceMobile className="text-secondary" />,
  },
  {
    title: "Clean & Scalable Code",
    description: "I write maintainable, professional code that follows industry best practices.",
    icon: <HiCode className="text-primary" />,
  },
  {
    title: "Business-First Mindset",
    description: "I focus on achieving your business goals and driving measurable ROI.",
    icon: <HiTrendingUp className="text-secondary" />,
  },
];

const stats = [
  { label: 'Performance', value: '99', suffix: '+', color: 'from-purple-500 to-indigo-500' },
  { label: 'Responsive', value: '100', suffix: '%', color: 'from-cyan-500 to-blue-500' },
  { label: 'Clean Code', value: 'A+', suffix: '', color: 'from-pink-500 to-rose-500' },
  { label: 'ROI Driven', value: '24/7', suffix: '', color: 'from-emerald-500 to-teal-500' },
];

const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
            >
              Value Proposition
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              Why partner with me for your <br />
              <span className="text-gradient">Next Project?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted text-lg leading-relaxed mb-12 max-w-xl"
            >
              I combine technical excellence with a deep understanding of 
              product strategy to deliver digital solutions that aren't just beautiful, 
              but also highly functional and results-oriented.
            </motion.p>

            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="mt-1 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{reason.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visualization Side (Bento Grid) */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="relative group h-48 md:h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--secondary))` }} />
                <div className="absolute inset-0 glass border border-white/5 group-hover:border-white/10 transition-all rounded-3xl flex flex-col items-center justify-center p-6 text-center">
                  <div className={`text-5xl md:text-6xl font-display font-black mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}<span className="text-2xl font-bold opacity-80">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Decorative Sparkle */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${stat.color} blur-[2px]`} />
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Overlay Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="col-span-2 glass border border-primary/20 rounded-3xl p-8 flex items-center justify-between bg-primary/5 mt-4"
            >
              <div>
                <h4 className="text-white font-bold mb-1">Ready to scale?</h4>
                <p className="text-text-muted text-xs">Let's build something extraordinary together.</p>
              </div>
              <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Hire Me
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
