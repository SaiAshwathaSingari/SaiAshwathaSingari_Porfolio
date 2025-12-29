import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillSets = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "JWT Auth"]
    },
    {
      category: "AI & Tools",
      skills: ["Agentic AI", "Web Audio API", "Git", "Docker", "Postman"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[35vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase select-none">
          TECH
        </h2>
      </div>

      <main className="relative z-10 container mx-auto px-6 sm:px-12 pt-32 md:pt-48 pb-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <h1 className="text-[18vw] md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8]">
            SKILLS<span className="text-purple-600">.</span>
          </h1>
          <div className="h-1.5 w-16 bg-purple-600 mt-6" />
        </motion.div>

        {/* Skills Stack */}
        <div className="space-y-24 md:space-y-40">
          {skillSets.map((set, index) => (
            <div key={index} className="relative">
              {/* Category Label */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600">
                  {set.category}
                </span>
                <div className="h-[1px] flex-grow bg-zinc-900" />
              </motion.div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8">
                {set.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-zinc-800 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
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

export default Skills;