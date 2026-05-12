import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '05+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Projects Done', value: '100+' },
  { label: 'Recommend Others', value: '20+' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image/Card Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
                <img
                  src="/projects/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-[0.5] transition-all duration-700"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block border-white/10">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-white/60">Years of Innovation</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              Transforming Ideas Into <br />
              <span className="text-[#D4AF37]">High-Impact Digital Solutions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg leading-relaxed mb-12"
            >
              I am a specialized Software Engineer dedicated to crafting high-performance
              digital ecosystems. With mastery in React.js, Next.js, React Native, and
              WordPress, I build seamless cross-platform experiences that bridge complex
              backend logic with stunning user interfaces. My toolkit includes
              Material UI (MUI), shadcn/ui, and Tailwind CSS for pixel-perfect designs.
              Whether it's a fintech dashboard or a creative studio site, I prioritize
              performance, accessibility, and elegance.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#skills"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium"
            >
              Learn More About Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
