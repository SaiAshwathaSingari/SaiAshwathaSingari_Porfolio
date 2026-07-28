import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import MagneticButton from "../components/MagneticButton";
import { VelocityMarquee } from "../components/Marquee";

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
    // The invisible in-flow copy sizes the box and sits on the true text
    // baseline; the animated word overlays it exactly, so alignment with
    // "I'm a" is guaranteed by construction (no magic offsets).
    <span className="relative inline-block overflow-hidden align-bottom">
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        {profile.roles[index]}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 whitespace-nowrap text-gradient-brand"
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

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-10"
    >
      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
                Software Engineer · Class of 2027
              </span>
            </motion.div>

            <h1 className="font-display font-bold tracking-tightest leading-[1.02]">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block pb-[0.06em] text-[12vw] text-gradient sm:text-[9vw] lg:text-[5.6rem]"
              >
                Sai Ashwatha
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block pb-[0.12em] text-[12vw] text-gradient-brand glow-brand sm:text-[9vw] lg:text-[5.6rem]"
              >
                Singari
              </motion.span>
            </h1>

            <div className="mt-7 font-display text-2xl font-medium leading-[1.3] tracking-tight text-zinc-300 sm:text-3xl">
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

          {/* Right: clean floating glow orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden aspect-square lg:block"
          >
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
            <div className="flex h-full items-center justify-center">
              <div className="relative grid h-56 w-56 place-items-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-mint to-brand-dark shadow-[0_0_50px_10px_rgba(124,255,79,0.5)]" />
                <div className="absolute h-32 w-32 rounded-full border border-brand/20" />
                <div className="absolute h-48 w-48 rounded-full border border-brand/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyword ticker */}
      <div className="relative z-10 mt-14">
        <VelocityMarquee baseVelocity={2.2}>
          {TICKER.map((t) => (
            <span
              key={t}
              className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-4xl font-bold tracking-tight text-white/[0.06] md:text-6xl"
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
