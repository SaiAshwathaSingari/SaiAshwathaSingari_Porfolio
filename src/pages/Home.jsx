import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const roles = ["DEVELOPER", "ENGINEER", "AGENTIC AI ENTHUSIAST"];
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
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <h2 className="text-[40vw] lg:text-[35vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase pointer-events-none">
          MOVE
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 sm:px-12 h-screen flex flex-col justify-center">
        
        {/* Name Section */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase italic"
          >
            SINGARI <br />
            <span 
              className="cursor-default transition-all duration-300 ease-out text-transparent hover:text-purple-600 block sm:inline"
              style={{ 
                // Increased stroke weight for mobile specifically using a CSS variable or direct value
                // WebkitTextStroke handles the "A" issue better when set slightly thicker on small screens
                WebkitTextStroke: window.innerWidth < 640 ? '1px rgba(255,255,255,0.9)' : '1.5px rgba(255,255,255,0.8)',
                paintOrder: 'stroke fill',
                textRendering: 'optimizeLegibility'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.WebkitTextStroke = '1.5px #9333ea';
                  e.target.style.textShadow = '0 0 30px rgba(147, 51, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.target.style.WebkitTextStroke = '1.5px rgba(255,255,255,0.8)';
                  e.target.style.textShadow = 'none';
                }
              }}
            >
              SAI ASHWATHA
            </span>
          </motion.h1>
        </div>

        {/* Backspacing Role Section */}
        <div className="mt-8 flex flex-wrap items-baseline gap-3 min-h-[2.5rem]">
          <span className="text-xl sm:text-3xl font-light text-zinc-600 italic shrink-0">
            I AM A
          </span>
          <span 
            ref={typeRef} 
            className="text-xl sm:text-3xl font-black text-white uppercase italic tracking-tighter inline-block"
          ></span>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <button className="w-full sm:w-auto group relative overflow-hidden bg-white text-black px-12 py-5 font-black uppercase tracking-tighter text-lg transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center justify-center gap-2">
              VIEW WORK <ChevronRight size={20} strokeWidth={4} />
            </span>
            <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="flex items-center gap-2 border-b-4 border-white pb-1 font-black uppercase tracking-tighter text-lg hover:text-purple-500 hover:border-purple-500 transition-all text-white">
            GET IN TOUCH <ArrowUpRight size={20} />
          </button>
        </motion.div>
      </main>

      {/* Sidebar Branding */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 items-center">
        <p className="rotate-90 text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase origin-center w-max mb-12">
          SINGARI SAI ASHWATHA
        </p>
        <div className="h-24 w-[1px] bg-white/10" />
      </div>

    </div>
  );
};

export default Home;