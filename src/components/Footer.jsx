import { ArrowUp } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { RevealText } from "./Reveal";
import Football from "./Football";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-20 pb-10">
      <div className="pitch-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-5">
              <Football className="h-5 w-5 animate-spin-slow" /> Let's build
              something
            </p>
            <h2 className="font-display text-[13vw] font-bold uppercase italic leading-[0.82] tracking-tightest sm:text-6xl md:text-7xl">
              <RevealText text="Say" className="text-gradient" />{" "}
              <RevealText text="Hello" className="text-gradient-brand" delay={0.08} />
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-lg text-zinc-400 transition-colors hover:text-white"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-brand-light"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => scrollTo("#home")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-brand hover:bg-brand/10"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:flex-row">
          <span>© {year} {profile.fullName}</span>
          <span>Built with React · GSAP · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
