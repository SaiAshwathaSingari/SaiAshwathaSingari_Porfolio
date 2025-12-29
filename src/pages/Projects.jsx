import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const upcomingCategories = ["Agentic AI", "Full Stack", "Systems", "Interview Intelligence"];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-hidden flex flex-col justify-center">
      
      {/* Background Watermark - Responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[40vw] md:text-[35vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          LABS
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 sm:px-12 py-10 md:py-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
             <div className="h-px w-8 md:w-12 bg-purple-600" />
             <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-purple-500">
               Portfolio 2025
             </span>
          </div>
          <h1 className="text-[18vw] md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8]">
            PROJECTS<span className="text-purple-600">.</span>
          </h1>
        </motion.div>

        {/* Massive "Coming Soon" Grid - Responsive typography */}
        <div className="space-y-4 md:space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[10vw] md:text-8xl font-black italic tracking-tighter uppercase text-zinc-900 leading-[0.9] md:leading-none"
          >
            ADDING ALL <br /> PROJECTS SOON
          </motion.h2>

          {/* Animated Category Stream - Responsive Flex */}
          <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 pt-6 md:pt-8">
            {upcomingCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-purple-600 animate-pulse" />
                <span className="text-xs md:text-xl font-bold uppercase tracking-widest text-zinc-600 italic">
                  {cat}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Visualizer - Mobile friendly width */}
        <div className="mt-16 md:mt-32 max-w-full md:max-w-2xl">
          <div className="flex justify-between items-end mb-3 md:mb-4">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
              Deployment Progress
            </span>
            <span className="text-[10px] md:text-xs font-black italic text-purple-600 animate-pulse">
              88%
            </span>
          </div>
          <div className="h-[2px] w-full bg-zinc-900 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '88%' }}
              transition={{ delay: 1, duration: 2.5, ease: "circOut" }}
              className="absolute inset-0 h-full bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            />
          </div>
        </div>
      </main>

      {/* Sidebar Branding - Hidden on mobile for cleaner UI */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 items-center z-20 pointer-events-none">
        <p className="rotate-90 text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase origin-center w-max mb-12">
          SINGARI SAI ASHWATHA
        </p>
        <div className="h-24 w-[1px] bg-white/10" />
      </div>

    </div>
  );
};

export default Projects;