import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "EmergX",
      role: "Full Stack Developer Intern",
      duration: "JUL 2025 — SEP 2025",
      location: "Remote",
      description: "Engineered high-performance UI components and backend systems for an AI-driven interview intelligence platform.",
      skills: ["React.js", "Node.js", "Express", "JWT", "Web Audio API", "Tailwind CSS"],
      highlights: [
        "Architected client-side microphone orchestration and real-time visual recording indicators using Web Audio API.",
        "Engineered scalable Node.js/Express APIs to manage complex session lifecycles and secure audio stream handling.",
        "Orchestrated secure user sessions by implementing JWT-based authentication and Google OAuth 2.0 integration.",
        "Optimized frontend architectural state, resulting in a significant reduction in redundant network overhead."
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-black text-white py-24 md:py-32 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-20 left-[-5%] text-[22vw] font-black italic text-white/[0.02] pointer-events-none uppercase tracking-tighter select-none">
        Playbook
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85]">
            WORK <br />
            <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">EXPERIENCE.</span>
          </h2>
          <div className="h-2 w-24 bg-purple-600 mt-8" />
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left Side: Timeline & Role */}
                <div className="lg:w-1/3">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-black tracking-[0.3em] text-purple-500 uppercase px-3 py-1 border border-purple-500/30 bg-purple-500/5">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none group-hover:text-purple-500 transition-colors duration-500">
                      {exp.company}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-zinc-200 mt-6 uppercase italic tracking-tight">
                      {exp.role}
                    </p>
                    <p className="text-xs font-black text-zinc-500 mt-3 tracking-[0.2em] uppercase">
                      {exp.location}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mt-8">
                      {exp.skills.map((skill, si) => (
                        <span key={si} className="text-[10px] font-black bg-zinc-900 text-zinc-400 px-3 py-1 rounded-full uppercase tracking-widest border border-zinc-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Details & Highlights */}
                <div className="lg:w-2/3">
                  <div className="relative">
                    <p className="text-2xl md:text-3xl font-medium text-zinc-300 mb-12 leading-relaxed italic border-l-8 border-purple-600 pl-8 bg-gradient-to-r from-purple-600/5 to-transparent py-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-8">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex gap-6 group/item">
                          <div className="flex flex-col items-center">
                             <span className="text-purple-600 font-black text-2xl leading-none">0{i + 1}</span>
                             <div className="w-px h-full bg-zinc-800 mt-2 group-last/item:hidden" />
                          </div>
                          <p className="text-base md:text-lg text-zinc-400 group-hover/item:text-white transition-colors leading-relaxed font-bold uppercase tracking-tight pb-4">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-24 group-hover:via-purple-600/50 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Status indicator instead of CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-zinc-900/50 px-8 py-4 border border-zinc-800">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
            <span className="text-xs font-black tracking-[0.5em] text-zinc-500 uppercase">End of Experience Record</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;