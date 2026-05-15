import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Core 1 Consulting",
    category: "Full Stack Web",
    image: "/projects/core1.jpg",
    link: "https://core1.co/",
    problem:
      "A high-end consulting firm needed a digital presence that matched their premium offline reputation and streamlined lead generation.",
    solution:
      "Developed a performance-focused React.js platform with modern animations and a highly optimized SEO structure.",
    techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js"],
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Finnovator ME",
    category: "Fintech Platform",
    image: "/projects/finnovator.jpg",
    link: "https://www.finnovator.me/",
    problem:
      "The client required a complex dashboard to display real-time financial metrics for Middle Eastern markets.",
    solution:
      "Built a high-performance dashboard using Next.js for SSR, ensuring fast data fetching and a responsive user interface.",
    techStack: ["Next.js", "Chart.js", "REST APIs", "TypeScript"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Edge Finance Mobile App",
    category: "Mobile Application",
    image: "/projects/react_native.jpg",
    link: "",
    problem:
      "A startup needed a cross-platform mobile app to bridge the gap between their web services and mobile users.",
    solution:
      "Developed a native-feel application using React Native, implementing complex animations and offline data synchronization.",
    techStack: ["React Native", "Redux", "Firebase", "Expo"],
    color: "from-pink-500/20 to-transparent",
  },
  {
    title: "Alif Loan App",
    category: "Banking Solution",
    image: "/projects/alif.jpg",
    link: "http://173.208.180.149:3000/",
    problem:
      "A digital bank needed a secure, intuitive loan application process to reduce drop-off rates.",
    solution:
      "Re-engineered the onboarding flow with a step-by-step interactive UI, significantly increasing user conversion.",
    techStack: ["React.js", "Context API", "Styled Components", "Axios"],
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Finnovator SA",
    category: "Enterprise Web",
    image: "/projects/finnovator_sa.jpg",
    link: "https://www.finnovator.com.sa/",
    problem:
      "An enterprise-level financial service needed a robust, secure, and multilingual platform for the Saudi market.",
    solution:
      "Architected a scalable React application with internationalization and high-security protocols for sensitive data.",
    techStack: ["React.js", "i18next", "Auth0", "Material UI"],
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "FurFusion Studio",
    category: "Creative WordPress",
    image: "/projects/furfusion.jpg",
    link: "https://furfusionstudio.com/",
    problem:
      "A creative agency needed a unique, fast-loading portfolio site that allowed easy content management.",
    solution:
      "Customized a headless WordPress solution with a refined UI, focusing on high-quality image rendering and smooth transitions.",
    techStack: ["WordPress", "Elementor", "Custom CSS", "PHP"],
    color: "from-orange-500/20 to-transparent",
  },
  {
    title: "VinsDaddy",
    category: "E-Commerce",
    image: "/projects/vinsdaddy.jpg",
    link: "https://vinsdaddy.com/",
    problem:
      "An online store needed a high-conversion checkout flow and a premium brand aesthetic to stand out.",
    solution:
      "Developed a custom E-commerce experience with optimized product pages and a streamlined payment gateway integration.",
    techStack: ["WordPress", "WooCommerce", "JS", "MySQL"],
    color: "from-rose-500/20 to-transparent",
  },
  {
    title: "Duffa Website",
    category: "Custom Web App",
    image: "/projects/duffa.jpg",
    link: "",
    problem:
      "The client needed a lightweight, high-performance landing page with interactive elements to showcase their services.",
    solution:
      "Built a lightning-fast static site using vanilla JS and modern CSS techniques for maximum performance scores.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    color: "from-indigo-500/20 to-transparent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Delivering <span className="text-gradient">Impactful</span> Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl"
          >
            Explore how I've helped businesses transform their digital landscape
            through high-performance solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
              className="group relative glass rounded-[40px] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual Side */}
                <div className="relative h-[300px] lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
                  />
                  <div className="absolute inset-0 bg-background/20" />
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-widest border-white/10 text-secondary">
                      {project.category}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                      >
                        <HiArrowUpRight className="text-xl" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white">
                    {project.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-primary tracking-widest mb-2">
                        The Challenge
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold text-secondary tracking-widest mb-2">
                        The Solution
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-xs uppercase font-bold text-white/40 tracking-widest mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-3 py-1 rounded-md bg-white/5 text-text-muted border border-white/5 font-medium uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/moiz523444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full glass border border-white/10 hover:border-primary/50 transition-all group font-bold text-lg"
          >
            <span>Explore more on GitHub</span>
            <FaGithub className="text-2xl group-hover:text-primary transition-colors" />
          </a>
          <p className="text-text-muted text-sm mt-6 max-w-sm mx-auto">
            Discover my latest experiments, open-source contributions, and
            technical explorations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
