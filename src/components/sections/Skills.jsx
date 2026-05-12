import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiFramer,
  SiGnubash,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiGreensock,
  SiWordpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  { name: "MUI", icon: <SiMui />, color: "#007FFF" },
  { name: "shadcn/ui", icon: <SiFramer />, color: "#FFFFFF" }, // Using Framer as a placeholder for shadcn aesthetics
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  // { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  // { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  // { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
  // { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
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
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            My <span className="text-[#D4AF37]">Tech Arsenal</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold"
          >
            Mastering the latest industry standards
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="flex overflow-hidden select-none mb-20 py-4 border-y border-white/5 bg-white/[0.02]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex flex-nowrap gap-12 items-center"
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-10 py-4 glass rounded-full border border-white/5"
            >
              <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-sm font-bold font-display uppercase tracking-widest text-white/80">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Skill Cards */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onMouseMove={handleMouseMove}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500"
          >
            {/* Spotlight Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(212,175,55,0.15)_0%,transparent_60%)]" />
            
            <div className="relative p-10 flex flex-col items-center text-center">
              <div
                className="text-6xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
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
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F9D976] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
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
