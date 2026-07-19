import { motion } from "framer-motion";
import { skillGroups, techTicker } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { DragRow, VelocityMarquee } from "../components/Marquee";
import Football from "../components/Football";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Skills"
          title="The"
          accentWord="Toolkit"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.category}
              delay={gi * 0.05}
              data-cursor="hover"
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-brand/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
                    {group.category}
                  </h3>
                  <span className="font-display text-xs italic text-white/20">
                    0{gi + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:border-brand/50 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Draggable tech squad */}
        <div className="mt-14">
          <p className="eyebrow mb-5">
            <span className="h-px w-8 bg-brand/70" /> The Squad · drag me
          </p>
          <DragRow>
            {[...techTicker, ...techTicker].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex select-none items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4 font-display text-xl font-bold uppercase italic tracking-tight text-zinc-300"
              >
                {tech}
                <Football className="h-5 w-5 opacity-50" />
              </span>
            ))}
          </DragRow>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-16 md:mt-24">
        <VelocityMarquee baseVelocity={2.6}>
          {techTicker.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 whitespace-nowrap pr-6 font-display text-3xl font-bold uppercase italic tracking-tight text-white/10 md:text-5xl"
            >
              {item}
              <span className="text-brand/40">/</span>
            </span>
          ))}
        </VelocityMarquee>
      </div>
    </section>
  );
}
