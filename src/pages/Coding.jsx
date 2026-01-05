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
      
      {/* Background Watermark - Adjusted opacity and size for better visibility */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[30vw] md:text-[40vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          CODE
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-5 sm:px-12 py-8 md:py-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[2px] w-8 bg-purple-600" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500">
                PROFILES
             </span>
          </div>
          {/* Fixed "CODING." text scaling to prevent chopping */}
          <h1 className="text-[16vw] md:text-[10rem] font-black italic tracking-[calc(-0.05em)] md:tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
            CODING<span className="text-purple-600">.</span>
          </h1>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
          {codingLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative block border border-zinc-900 bg-zinc-950 p-6 md:p-10 overflow-hidden transition-all duration-500 ${link.color}`}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 group-hover:bg-white transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${link.accent}`}>
                    {link.status}
                  </span>
                  <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Adjusted Font Size for mobile to prevent overflow */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase transition-colors duration-300 group-hover:text-white text-zinc-300">
                  {link.name}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Simplified Footer for Mobile Visibility */}
        <div className="mt-16 md:mt-24 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-700">
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">
            Sai Ashwatha Singari
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026
          </p>
        </div>

      </main>

      {/* Hidden sidebar on mobile for cleaner look */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:block z-20 pointer-events-none">
        <p className="rotate-90 text-[10px] font-black tracking-[0.8em] text-zinc-900 uppercase origin-center w-max">
          SINGARI SAI ASHWATHA
        </p>
      </div>

    </div>
  );
};

export default Coding;