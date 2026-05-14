import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiFramer,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiGreensock,
  SiWordpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  { name: "MUI", icon: <SiMui />, color: "#007FFF" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#FFFFFF" },
];

const Skills = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            My <span className="text-gradient">Tech Arsenal</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-muted uppercase tracking-[0.4em] text-[10px] font-bold"
          >
            Mastering the latest industry standards
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="flex overflow-hidden select-none mb-20 py-8 border-y border-white/5 bg-white/[0.02]">
        <div className="flex flex-nowrap gap-12 items-center animate-marquee">
          {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-10 py-4 glass rounded-2xl border border-white/5 whitespace-nowrap"
            >
              <span className="text-3xl" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-sm font-bold font-display uppercase tracking-widest text-white/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Skill Cards */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onMouseMove={handleMouseMove}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoothness
              delay: idx * 0.1 
            }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-primary/20 transition-all duration-500"
          >
            {/* Spotlight Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(139,92,246,0.08)_0%,transparent_60%)]" />
            
            <div className="relative p-8 flex flex-col items-center text-center">
              <div
                className="text-6xl mb-6 transition-all duration-700 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg mb-4 text-white tracking-tight">{skill.name}</h3>
              
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 + idx * 0.1 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
