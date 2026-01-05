import React from 'react';
import { motion } from 'framer-motion';

const Coding = () => {
  const codingLinks = [
    { 
      name: "GitHub", 
      status: "Verified", 
      url: "https://github.com/SaiAshwathaSingari", 
      color: "hover:bg-zinc-800",
      accent: "text-white"
    },
    { 
      name: "LeetCode", 
      status: "Active", 
      url: "https://leetcode.com/u/SaiAshwathaSingari/", 
      color: "hover:bg-orange-500",
      accent: "text-orange-400"
    },
    { 
      name: "CodeChef", 
      status: "2 STAR", 
      url: "https://www.codechef.com/users/ashthboyz", 
      color: "hover:bg-amber-800",
      accent: "text-amber-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-hidden flex flex-col justify-center font-sans">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[30vw] md:text-[40vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          CODE
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 md:px-12 py-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[2px] w-12 bg-purple-600" />
          </div>
          <h1 className="text-[17vw] md:text-[11rem] font-black italic tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
            CODING<span className="text-purple-600">.</span>
          </h1>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {codingLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative block border border-zinc-900 bg-zinc-950 p-8 md:p-12 overflow-hidden transition-all duration-500 ${link.color}`}
            >
              {/* Left Stripe */}
              <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 group-hover:bg-white transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8 md:mb-12">
                  <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${link.accent}`}>
                    {link.status}
                  </span>
                  <svg className="w-5 h-5 text-zinc-700 group-hover:text-white transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <h2 className="text-5xl md:text-6xl xl:text-7xl font-black italic tracking-tighter uppercase transition-colors duration-300 group-hover:text-white text-zinc-300">
                  {link.name}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-20 border-t border-zinc-900 pt-8 flex justify-between items-center opacity-40">
          <p className="text-[10px] font-black uppercase tracking-[0.5em]">
            Sai Ashwatha Singari
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026
          </p>
        </div>

      </main>

      {/* Vertical Side Label */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:block z-20 pointer-events-none">
        <p className="rotate-90 text-[10px] font-black tracking-[0.8em] text-zinc-900 uppercase origin-center w-max">
          SINGARI SAI ASHWATHA
        </p>
      </div>

    </div>
  );
};

export default Coding;