import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Feature from '../components/Feature';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const roles = ["A DEVELOPER", "AN ENGINEER", "AN AGENTIC AI ENTHUSIAST"];
    let mainTl = gsap.timeline({ repeat: -1 });

    roles.forEach((role) => {
      mainTl.to(typeRef.current, { duration: 0.8, text: role, ease: "none" })
        .to({}, { duration: 1.5 })
        .to(typeRef.current, { duration: 0.5, text: "", ease: "none" })
        .to({}, { duration: 0.2 });
    });

    return () => mainTl.kill();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[40vw] lg:text-[35vw] font-black text-white/[0.015] italic leading-none tracking-tighter uppercase select-none">
          MOVE
        </h2>
      </div>

      {/* HERO SECTION */}
      <main className="relative z-10 container mx-auto px-6 sm:px-12 pt-40 md:pt-64 pb-20 flex flex-col justify-start">
        
        {/* Name Section */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] sm:leading-[0.85] font-black tracking-tighter uppercase italic"
          >
            SINGARI <br />
            <span 
              className="cursor-default transition-all duration-500 ease-out block sm:inline"
              style={{ 
                /* PC VERSION: Transparent with light stroke */
                color: window.innerWidth < 640 ? 'white' : 'transparent',
                WebkitTextStroke: window.innerWidth < 640 ? '0px' : '1px rgba(255,255,255,0.3)',
                /* MOBILE FIX: Use text-shadow instead of stroke to keep letter 'A' clean */
                textShadow: window.innerWidth < 640 
                  ? 'none' 
                  : 'none',
                textRendering: 'optimizeLegibility'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  /* PC HOVER: Solid white fill like other elements */
                  e.target.style.color = 'white';
                  e.target.style.WebkitTextStroke = '1px white';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.color = 'transparent';
                  e.target.style.WebkitTextStroke = '1px rgba(255,255,255,0.3)';
                }
              }}
            >
              SAI ASHWATHA
            </span>
          </motion.h1>
        </div>

        {/* Typewriter Section */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-baseline gap-3 min-h-[3rem]">
          <span className="text-xl sm:text-3xl font-light text-zinc-600 italic shrink-0 tracking-tight uppercase">
            I AM
          </span>
          <span 
            ref={typeRef} 
            className="text-xl sm:text-3xl font-black text-white uppercase italic tracking-tighter inline-block border-r-2 border-purple-600 pr-1"
          ></span>
        </div>
      </main>

      {/* FEATURE SECTION */}
      <section className="relative z-10">
        <Feature />
      </section>

      {/* Sidebar Branding */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 items-center z-20 pointer-events-none">
        <p className="rotate-90 text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase origin-center w-max mb-12">
          SINGARI SAI ASHWATHA
        </p>
        <div className="h-24 w-[1px] bg-white/10" />
      </div>

    </div>
  );
};

export default Home;