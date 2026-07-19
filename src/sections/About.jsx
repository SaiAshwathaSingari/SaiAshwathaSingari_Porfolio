import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about, profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import CountUp from "../components/CountUp";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const wmY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const statsY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-36"
    >
      {/* Parallax ghost word */}
      <motion.span
        style={{ y: wmY }}
        className="pointer-events-none absolute -right-6 top-10 select-none font-display text-[26vw] font-bold uppercase italic leading-none tracking-tightest text-white/[0.015]"
      >
        01
      </motion.span>

      <div className="container-x relative">
        <SectionHeading index="01" label="About" title="Who" accentWord="I Am" />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl md:text-[2.4rem] md:leading-[1.15]">
                {about.headline}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
              {about.focus.map((f) => (
                <span key={f} className="chip" data-cursor="hover">
                  {f}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Stats + identity card */}
          <div className="flex flex-col gap-6">
            <motion.div style={{ y: cardY }}>
              <Reveal className="glass relative overflow-hidden rounded-3xl p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
                <div className="relative">
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-brand/70" /> Currently
                  </span>
                  <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
                    B.Tech (CCE) student @ Manipal Institute of Technology,
                    building across software, cloud &amp; networks.
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    Based in {profile.location}
                  </p>
                </div>
              </Reveal>
            </motion.div>

            <motion.div style={{ y: statsY }} className="grid grid-cols-2 gap-4">
              {about.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.06}
                  className="glass rounded-2xl p-6 transition-colors hover:border-brand/40"
                  data-cursor="hover"
                >
                  <CountUp
                    value={s.value}
                    className="block font-display text-4xl font-bold italic tracking-tight text-gradient-brand md:text-5xl"
                  />
                  <div className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-zinc-500">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
