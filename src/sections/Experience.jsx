import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

function ExperienceItem({ exp, i }) {
  return (
    <div className="relative pl-10 md:pl-16">
      {/* Node */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="absolute left-[6px] top-2 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-[10px]"
      >
        <span className="h-4 w-4 rounded-full border-2 border-brand bg-ink-950" />
        <span className="absolute h-4 w-4 animate-pulse-ring rounded-full border border-brand/60" />
      </motion.span>

      <Reveal>
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          glareEnable
          glareMaxOpacity={0.1}
          glareColor="#7ed957"
          glarePosition="all"
          glareBorderRadius="24px"
          transitionSpeed={1400}
        >
          <div
            data-cursor="hover"
            className="group glass rounded-3xl p-6 transition-colors hover:border-brand/40 md:p-9"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4 md:gap-5">
                {exp.logo && (
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-2.5 shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip-brand">{exp.duration}</span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-light">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                        </span>
                        Present
                      </span>
                    )}
                    {exp.location && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-3xl font-bold uppercase italic tracking-tight md:text-4xl">
                    {exp.company}
                  </h3>
                  {exp.parent && (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium italic text-brand-light">
                        {exp.parent}
                      </span>
                      {exp.parentLogo && (
                        <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-md shadow-black/30 ring-1 ring-white/10">
                          <img
                            src={exp.parentLogo}
                            alt="Emerson logo"
                            className="h-6 w-auto md:h-7"
                            loading="lazy"
                          />
                        </span>
                      )}
                    </div>
                  )}
                  <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-300">
                    {exp.role}
                  </p>
                </div>
              </div>

              <span className="hidden font-display text-5xl font-bold italic text-white/5 md:block">
                0{i + 1}
              </span>
            </div>

            <p className="mt-6 max-w-2xl border-l-2 border-brand/60 pl-5 text-base italic leading-relaxed text-zinc-300">
              {exp.summary}
            </p>

            <ul className="mt-7 grid gap-x-10 gap-y-3 md:grid-cols-2">
              {exp.highlights.map((h, hi) => (
                <li key={hi} className="flex gap-3 text-sm text-zinc-400">
                  <ArrowUpRight
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-light"
                  />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Tilt>
      </Reveal>
    </div>
  );
}

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 30%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where"
          accentWord="I've Built"
        />

        <div ref={trackRef} className="relative">
          {/* Timeline rail */}
          <div className="absolute bottom-2 left-[6px] top-2 w-px bg-white/10 md:left-[10px]">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-brand-light via-brand to-brand-dark"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.company} exp={exp} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
