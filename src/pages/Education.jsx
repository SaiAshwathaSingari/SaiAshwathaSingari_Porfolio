import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: "Manipal Institute of Technology",
      location: "Manipal, India ",
      degree: "B.Tech, Computer and Communication Engineering ",
      duration: "JULY 2023 — JULY 2027 ",
      score: "8.7/10 ",
      status: "CURRENT"
    }
  ];

  return (
    <section id="education" className="min-h-screen bg-black text-white py-20 md:py-32 px-5 sm:px-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 right-[-10%] md:right-[-5%] text-[30vw] md:text-[20vw] font-black italic text-white/[0.03] pointer-events-none uppercase select-none">
        Roots
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-28"
        >
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85]">
            ACADEMIC <br />
            <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">HISTORY.</span>
          </h2>
          <div className="h-2 w-20 bg-purple-500 mt-6" />
        </motion.div>

        {/* Education Entry */}
        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative border-l-2 border-zinc-800 pl-6 md:pl-16 py-4 hover:border-purple-500 transition-colors"
            >
              {/* Dot Icon */}
              <div className="absolute left-[-9px] top-6 h-4 w-4 bg-zinc-800 border-2 border-black rounded-full group-hover:bg-purple-500 group-hover:scale-125 transition-all" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div className="flex-1">
                  {/* Status Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-black tracking-[0.3em] text-zinc-500">
                      {edu.duration}
                    </span>
                    <span className="bg-purple-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase italic animate-pulse">
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution */}
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight group-hover:text-white transition-colors">
                    {edu.institution}
                  </h3>
                  
                  {/* Location & Degree */}
                  <div className="mt-4 space-y-2">
                    <p className="text-lg md:text-2xl font-bold text-zinc-300 uppercase italic tracking-tight">
                      {edu.degree}
                    </p>
                    <p className="text-sm md:text-base font-medium text-zinc-500 uppercase tracking-widest">
                      {edu.location}
                    </p>
                  </div>
                </div>

                {/* Brightened CGPA Stat */}
                <div className="flex flex-col items-start lg:items-end">
                  <span className="text-[10px] md:text-xs font-black text-purple-400 uppercase tracking-[0.5em] mb-2">
                    CGPA PROFILE
                  </span>
                  <div className="relative">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 blur-2xl bg-purple-600/20 rounded-full" />
                    <div className="text-6xl sm:text-7xl md:text-9xl font-black italic text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] leading-none">
                      8.7
                    </div>
                  </div>
                  <span className="text-xs font-black text-zinc-700 mt-2 tracking-widest uppercase">
                    Scale 10.0
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;