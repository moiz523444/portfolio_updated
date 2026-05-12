import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Quantum Tech Solutions',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    desc: 'Leading the development of next-gen enterprise dashboards. Optimized performance by 40% using advanced React patterns.',
  },
  {
    company: 'Vortex Digital Agency',
    role: 'Frontend Engineer',
    period: '2020 - 2022',
    desc: 'Crafted bespoke digital experiences for global brands. Specialized in GSAP animations and pixel-perfect UI implementation.',
  },
  {
    company: 'Starlight Startups',
    role: 'Junior Web Developer',
    period: '2018 - 2020',
    desc: 'Developed responsive web applications and contributed to internal UI libraries. Mastered the fundamentals of CSS and JS.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-white/40 uppercase tracking-widest text-sm">A timeline of innovation</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-20">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-background z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
                    <div className="text-white/40 font-bold mb-2 tracking-widest uppercase text-xs">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-white/60 font-medium mb-4">{exp.company}</div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
