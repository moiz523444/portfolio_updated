import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineColorSwatch, HiOutlineLightningBolt } from 'react-icons/hi';

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative glass-card p-10 rounded-[40px] flex flex-col items-start text-left group cursor-pointer border border-white/5 overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5"
      >
        {service.icon}
      </div>
      
      <h3 
        style={{ transform: "translateZ(30px)" }}
        className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors"
      >
        {service.title}
      </h3>
      
      <p 
        style={{ transform: "translateZ(20px)" }}
        className="text-text-muted mb-8 leading-relaxed text-sm font-medium"
      >
        {service.description}
      </p>
      
      <div 
        style={{ transform: "translateZ(10px)" }}
        className="mt-auto flex flex-wrap gap-2"
      >
        {service.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="text-[9px] px-3 py-1 rounded-full bg-white/5 text-text-muted uppercase font-bold tracking-[0.2em] border border-white/5 group-hover:border-primary/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Decorative Shine */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/5 opacity-40 group-hover:animate-shine" />
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building high-performance, scalable web applications using React.js and Next.js with focus on speed and SEO.',
      icon: <HiOutlineDesktopComputer />,
      tags: ['React', 'Next.js', 'Tailwind']
    },
    {
      title: 'Mobile Apps',
      description: 'Creating cross-platform mobile applications for iOS and Android using React Native for a seamless native experience.',
      icon: <HiOutlineDeviceMobile />,
      tags: ['React Native', 'Expo', 'UX']
    },
    {
      title: 'UI/UX Strategy',
      description: 'Designing intuitive, user-centric interfaces that convert visitors into customers through modern design principles.',
      icon: <HiOutlineColorSwatch />,
      tags: ['Figma', 'Prototyping', 'UX']
    },
    {
      title: 'Performance',
      description: 'Improving website performance, core web vitals, and scaling infrastructure for growing businesses.',
      icon: <HiOutlineLightningBolt />,
      tags: ['SEO', 'Core Vitals', 'Scale']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black leading-tight"
          >
            Solutions that drive <br />
            <span className="text-gradient">Exponential Growth</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
