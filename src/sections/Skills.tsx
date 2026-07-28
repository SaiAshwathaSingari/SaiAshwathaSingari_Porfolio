import { motion } from "framer-motion";
import { skillGroups, techTicker } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { DragRow, VelocityMarquee } from "../components/Marquee";
import SpotlightCard from "../components/SpotlightCard";
import CircuitCard from "../components/CircuitCard";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="03" label="Skills" title="The" accentWord="Toolkit" />

        {/* Featured circuit tile */}
        <Reveal className="mb-4">
          <SpotlightCard className="relative flex min-h-[200px] flex-col justify-end overflow-hidden p-7 md:p-9">
            <CircuitCard />
            <div className="relative max-w-xl">
              <span className="eyebrow mb-3">
                <span className="h-px w-6 bg-brand/70" /> Full-stack range
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                From C++ systems to the browser.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Comfortable across the stack — performance-critical C++ and
                systems work through to modern, full-stack web apps.
              </p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Skill groups */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <SpotlightCard className="h-full p-6" data-cursor="hover">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
                    {group.category}
                  </h3>
                  <span className="font-display text-xs text-white/20">
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
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:border-brand/50 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Draggable tech row */}
        <div className="mt-12">
          <p className="eyebrow mb-5">
            <span className="h-px w-8 bg-brand/70" /> The stack · drag me
          </p>
          <DragRow>
            {[...techTicker, ...techTicker].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex select-none items-center gap-3 whitespace-nowrap rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-4 font-display text-xl font-bold tracking-tight text-zinc-300"
              >
                <span className="h-2 w-2 rounded-full bg-brand/60" />
                {tech}
              </span>
            ))}
          </DragRow>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-16 md:mt-20">
        <VelocityMarquee baseVelocity={2.6}>
          {techTicker.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 whitespace-nowrap pr-6 font-display text-3xl font-bold tracking-tight text-white/[0.06] md:text-5xl"
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
