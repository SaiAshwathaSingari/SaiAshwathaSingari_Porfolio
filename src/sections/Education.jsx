import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Education"
          title="Where"
          accentWord="I Learn"
        />

        <div className="space-y-6">
          {education.map((edu) => (
            <Reveal
              key={edu.institution}
              data-cursor="hover"
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-colors hover:border-brand/40 md:p-12"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
                <div className="flex-1">
                  {edu.logo && (
                    <div className="mb-6 inline-flex items-center rounded-2xl bg-white px-5 py-4 shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="h-12 w-auto md:h-14"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                      {edu.duration}
                    </span>
                    <span className="animate-pulse rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-bold uppercase italic tracking-tight md:text-5xl">
                    {edu.institution}
                  </h3>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-300">
                    {edu.degree}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin size={14} /> {edu.location}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400">
                    {edu.notes}
                  </p>
                </div>

                {/* CGPA */}
                <div className="flex flex-col items-start lg:items-end">
                  <span className="eyebrow mb-3">CGPA</span>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-brand/20 blur-2xl" />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="relative font-display text-6xl font-bold italic tracking-tighter text-gradient-brand sm:text-7xl md:text-8xl"
                    >
                      {edu.score}
                    </motion.div>
                  </div>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    {edu.scoreScale}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
