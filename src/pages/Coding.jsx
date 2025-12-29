import React from 'react';
import { motion } from 'framer-motion';

const Coding = () => {
  const codingLinks = [
    { name: "GitHub", status: "Access Locked" },
    { name: "LeetCode", status: "Access Locked" },
    { name: "GeeksForGeeks", status: "Access Locked" },
    { name: "CodeChef", status: "Access Locked" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-x-hidden flex flex-col justify-center">
      
      {/* Background Watermark - Responsive scaling */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[40vw] md:text-[35vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          CODE
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 sm:px-12 py-10 md:py-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
             <div className="h-px w-8 md:w-12 bg-purple-600" />
             <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-purple-500">
               Developer Protocol
             </span>
          </div>
          <h1 className="text-[18vw] md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8]">
            CODING<span className="text-purple-600">.</span>
          </h1>
        </motion.div>

        {/* Links Grid - Non-clickable placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {codingLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="relative border-l-2 md:border-l-4 border-zinc-900 bg-zinc-900/10 px-5 md:px-8 py-6 md:py-10 group overflow-hidden"
            >
              {/* Animated Lock Overlay for the "Soon" feel */}
              <div className="absolute inset-0 bg-purple-600/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2 md:mb-4">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                    {link.status}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-purple-600 transition-colors" />
                </div>
                <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-800 group-hover:text-zinc-200 transition-colors">
                  {link.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Teaser - Massive for Mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-32 border-t border-zinc-900 pt-10"
        >
          <h3 className="text-[10vw] md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 leading-[0.9]">
            CONNECTING ALL <br className="hidden md:block" /> PROFILES SOON
          </h3>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] text-purple-600/50">
            System Update in Progress
          </p>
        </motion.div>
      </main>

      {/* Sidebar Branding - Hidden on mobile */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 items-center z-20 pointer-events-none">
        <p className="rotate-90 text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase origin-center w-max mb-12">
          SINGARI SAI ASHWATHA
        </p>
        <div className="h-24 w-[1px] bg-white/10" />
      </div>

    </div>
  );
};

export default Coding;