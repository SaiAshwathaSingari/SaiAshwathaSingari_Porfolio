import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Football from "../components/Football";

gsap.registerPlugin(ScrollTrigger);

const PLAYS = [
  {
    no: "01",
    title: "Understand first",
    body: "I read the problem, constraints and edge cases before writing code, so what ships solves the actual need — not just the ticket.",
  },
  {
    no: "02",
    title: "Improve steadily",
    body: "A little better each day: new tools, cleaner patterns and stronger fundamentals. Consistency over hype.",
  },
  {
    no: "03",
    title: "Build for the team",
    body: "Clear reviews, useful docs and clean handoffs. I write code teammates can read, trust and extend.",
  },
  {
    no: "04",
    title: "Stay calm under load",
    body: "Sprints, incidents and deadlines happen. I keep a level head and keep shipping when it matters most.",
  },
  {
    no: "05",
    title: "Finish properly",
    body: "Tested, accessible and performant. I don't call a feature done until it genuinely is — no loose ends.",
  },
];

export default function Playbook() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    // Pinned horizontal scroll only on tablet/desktop; mobile is a clean stack.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + getDistance(),
          invalidateOnRefresh: true,
        },
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(t);
      mm.revert();
    };
  }, []);

  return (
    <section
      id="playbook"
      ref={containerRef}
      className="relative overflow-hidden bg-ink-950 py-20 md:py-0"
    >
      <div className="pitch-lines absolute inset-0 opacity-40" />

      <div
        ref={trackRef}
        className="relative flex w-full flex-col gap-6 px-6 sm:px-10 md:h-[100svh] md:w-max md:flex-row md:items-center md:gap-6 md:px-10 lg:px-16"
      >
        {/* Intro panel */}
        <div className="flex w-full flex-col justify-center md:h-[70vh] md:w-[60vw] md:shrink-0 lg:w-[38vw]">
          <span className="eyebrow mb-6">
            <span className="text-brand">02</span>
            <span className="h-px w-8 bg-brand/70" /> The Playbook
          </span>
          <h2 className="font-display text-6xl font-bold uppercase italic leading-[0.85] tracking-tightest sm:text-7xl md:text-8xl">
            <span className="text-gradient">How</span>{" "}
            <span className="text-gradient-brand">I Play</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            Five principles I bring to every team — the standard I hold myself to
            on every build.
          </p>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            <Football className="h-6 w-6 animate-spin-slow" />
            <span className="hidden md:inline">Scroll to advance</span>
            <span className="md:hidden">Keep scrolling</span>
          </div>
        </div>

        {PLAYS.map((play) => (
          <article
            key={play.no}
            data-cursor="hover"
            className="group relative flex w-full flex-col gap-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-brand/40 md:h-[70vh] md:w-[58vw] md:shrink-0 md:justify-between md:gap-0 md:p-12 lg:w-[34vw]"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative flex items-start justify-between">
              <span className="font-display text-6xl font-bold italic tracking-tighter text-white/10 md:text-7xl">
                {play.no}
              </span>
              <Football className="h-8 w-8 opacity-40 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-spin-slow md:h-9 md:w-9" />
            </div>
            <div className="relative">
              <h3 className="font-display text-3xl font-bold uppercase italic tracking-tight text-white md:text-4xl">
                {play.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
                {play.body}
              </p>
            </div>
          </article>
        ))}

        {/* End cap */}
        <div className="flex w-full flex-col items-center justify-center gap-6 py-10 md:h-[70vh] md:w-[40vw] md:py-0 lg:w-[26vw]">
          <Football className="h-24 w-24 animate-spin-slow md:h-32 md:w-32" />
          <span className="font-display text-2xl font-bold uppercase italic tracking-tight text-white/70">
            Let's build
          </span>
        </div>
      </div>
    </section>
  );
}
