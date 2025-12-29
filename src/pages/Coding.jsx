import React from 'react';
import { motion } from 'framer-motion';

const Coding = () => {
  const codingLinks = [
    { name: "GitHub", url: "https://github.com/yourusername", status: "Active" },
    { name: "LeetCode", url: "https://leetcode.com/yourusername", status: "Solving" },
    { name: "GeeksForGeeks", url: "#", status: "Ranking" },
    { name: "CodeChef", url: "#", status: "Competitive" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-x-hidden flex flex-col justify-center">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[35vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          CODE
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 sm:px-12 py-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-12 bg-purple-600" />
             <span className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-purple-500">
               Terminal Access
             </span>
          </div>
          <h1 className="text-[16vw] md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8]">
            CODING<span className="text-purple-600">.</span>
          </h1>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {codingLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="group border-l-4 border-zinc-900 hover:border-purple-600 pl-6 py-4 transition-all duration-500 bg-zinc-900/10 hover:bg-purple-600/5"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-purple-400">
                  {link.status}
                </span>
                <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-300 group-hover:text-white transition-colors">
                {link.name}
              </h2>
            </motion.a>
          ))}
        </div>

        {/* Footer Teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 border-t border-zinc-900 pt-10"
        >
          <h3 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase text-zinc-800">
            ADDING MORE <br /> LINKS SOON
          </h3>
        </motion.div>
      </main>

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

export default Coding;