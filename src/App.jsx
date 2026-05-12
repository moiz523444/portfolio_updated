import React from "react";
import { motion } from "framer-motion";
import SmoothScroll from "./components/layout/SmoothScroll";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
// import Experience from './components/sections/Experience';
// import Testimonials from './components/sections/Testimonials';
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Preloader from "./components/ui/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <CustomCursor />
    <div className="relative min-h-screen bg-background text-soft-white overflow-hidden">
        {/* Global Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#AA8A2E]/5 blur-[150px] rounded-full"
          />
          <motion.div
            animate={{
              x: [-50, 50, -50],
              y: [50, -50, 50],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full"
          />
        </div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience />
          <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
    </>
  );
}

export default App;
