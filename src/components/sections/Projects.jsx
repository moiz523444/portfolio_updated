import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Core 1 Consulting",
    category: "React.js / Tech",
    image: "/projects/core1.jpg",
    link: "https://core1.co/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Finnovator ME",
    category: "React.js / Fintech",
    image: "/projects/finnovator.jpg",
    link: "https://www.finnovator.me/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Nexus Mobile App",
    category: "React Native / iOS & Android",
    image: "/projects/react_native.jpg",
    link: "",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Alif Loan App",
    category: "React.js / Banking",
    image: "/projects/alif.jpg",
    link: "http://173.208.180.149:3000/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Finnovator SA",
    category: "React.js / Enterprise",
    image: "/projects/finnovator_sa.jpg",
    link: "https://www.finnovator.com.sa/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Duffa Website",
    category: "HTML / CSS / JS",
    image: "/projects/duffa.jpg",
    link: "",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "FurFusion Studio",
    category: "WordPress / Creative",
    image: "/projects/furfusion.jpg",
    link: "https://furfusionstudio.com/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "VinsDaddy",
    category: "WordPress / E-Commerce",
    image: "/projects/vinsdaddy.jpg",
    link: "https://vinsdaddy.com/",
    color: "from-gold/20 to-transparent",
    size: "md:col-span-1 md:row-span-1",
  },
];

const Projects = () => {
  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Selected <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/40 text-lg leading-relaxed"
            >
              A collection of high-impact digital products crafted with
              precision and focused on user-centric performance.
            </motion.p>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/10 glass hover:bg-white/5 transition-all text-sm font-medium whitespace-nowrap"
          >
            View All Work
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px] grid-flow-dense">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/20 transition-all ${project.size}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 mix-blend-overlay`} />
              </div>

              {/* Entire Card Link Overlay */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-label={`View ${project.title}`}
                />
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                  <span className="px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.2em] border-white/10 text-white/80">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.link && (
                      <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300">
                        <HiArrowUpRight className="text-xl" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="transform transition-all duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white leading-tight">
                    {project.title}
                  </h3>
                  <div className="h-1 w-0 bg-[#D4AF37] group-hover:w-24 transition-all duration-500 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
                </div>
              </div>

              {/* Hover Spotlight Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15)_0%,transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
