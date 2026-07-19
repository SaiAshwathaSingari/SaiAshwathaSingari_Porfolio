import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import MagneticButton from "../components/MagneticButton";
import { VelocityMarquee } from "../components/Marquee";
import Football from "../components/Football";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-gradient-brand"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const TICKER = [
  "Software Engineer",
  "Full-Stack",
  "Cloud",
  "Networking",
  "Problem Solver",
];

export default function Hero() {
  const { scrollTo } = useSmoothScroll();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const nameX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const nameY = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const wmX = useTransform(sx, [-0.5, 0.5], [40, -40]);
  const wmY = useTransform(sy, [-0.5, 0.5], [24, -24]);
  const plateX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const plateY = useTransform(sy, [-0.5, 0.5], [-20, 20]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-10"
    >
      {/* Oversized parallax watermark */}
      <motion.div
        style={{ x: wmX, y: wmY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="select-none font-display text-[42vw] font-bold uppercase italic leading-none tracking-tightest text-white/[0.02]"
        >
          SAS
        </motion.span>
      </motion.div>

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
            Software Engineer · Class of 2027
          </span>
        </motion.div>

        {/* Full-width name */}
        <motion.h1
          style={{ x: nameX, y: nameY }}
          className="font-display font-bold uppercase italic leading-[0.9] tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block whitespace-nowrap text-[12.5vw] leading-[0.9] text-gradient sm:text-[11.5vw] lg:text-[9.4vw]"
          >
            Sai Ashwatha
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block whitespace-nowrap text-[12.5vw] leading-[0.9] text-gradient-brand sm:text-[11.5vw] lg:text-[9.4vw]"
          >
            Singari
          </motion.span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: intro */}
          <div>
            <div className="font-display text-2xl font-medium tracking-tight text-zinc-300 sm:text-3xl md:text-4xl">
              I'm a <RotatingRole />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={() => scrollTo("#work")}
                data-cursor-label="View"
                className="btn-primary group"
              >
                View Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollTo("#contact")}
                className="btn-ghost"
              >
                <Mail size={16} />
                Get in Touch
              </MagneticButton>

              <MagneticButton
                as="a"
                href={profile.resume}
                download
                strength={0.25}
                className="items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-400 underline-offset-4 hover:text-white hover:underline"
              >
                Resume
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: interactive No.7 plate */}
          <div className="hidden lg:block">
            <motion.div style={{ x: plateX, y: plateY }}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#7ed957"
                glarePosition="all"
                glareBorderRadius="28px"
                scale={1.02}
                transitionSpeed={1400}
              >
                <div
                  data-cursor-label="Goat"
                  className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8"
                >
                  <div className="tape absolute inset-x-0 top-0 h-10 opacity-60" />
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand/20 blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="chip-brand">Jersey</span>
                      <Football className="h-10 w-10 animate-spin-slow" />
                    </div>
                    <div className="relative flex flex-1 items-center justify-center py-2">
                      <div className="absolute h-40 w-40 rounded-full bg-[#e11d2a]/25 blur-3xl" />
                      <span className="relative block font-display text-[8.5rem] font-bold italic leading-[1.08] text-gradient-red glow-red lg:text-[10rem]">
                        7
                      </span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-lg font-bold uppercase italic tracking-tight text-white">
                          Singari
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                          Chasing greatness · CR7
                        </p>
                      </div>
                      <span className="font-display text-sm italic text-white/30">
                        SIU
                      </span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>

        {/* Socials rail */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-400 transition-colors hover:text-white"
            >
              {s.name}
              <ArrowUpRight
                size={14}
                className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-light"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll-velocity keyword ticker */}
      <div className="relative z-10 mt-12">
        <VelocityMarquee baseVelocity={2.2}>
          {TICKER.map((t) => (
            <span
              key={t}
              className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-4xl font-bold uppercase italic tracking-tight text-white/10 md:text-6xl"
            >
              {t}
              <span className="text-brand/30">/</span>
            </span>
          ))}
        </VelocityMarquee>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mx-auto mt-6 flex flex-col items-center gap-2 text-zinc-500"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
