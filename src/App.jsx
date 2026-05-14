import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SmoothScroll from "./components/layout/SmoothScroll";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyHireMe from "./components/sections/WhyHireMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Preloader from "./components/ui/Preloader";
import GlobalSpotlight from "./components/ui/GlobalSpotlight";

function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <CustomCursor />
        <div className="relative min-h-screen bg-background text-text overflow-hidden">
          <GlobalSpotlight />
          {/* Global Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full"
          />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <WhyHireMe />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
    </>
  );
}

export default App;
