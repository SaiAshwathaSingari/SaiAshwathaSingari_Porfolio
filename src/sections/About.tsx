import { Suspense, lazy } from "react";
import { useReducedMotion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { about, profile } from "../data/portfolio";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import CountUp from "../components/CountUp";
import SpotlightCard from "../components/SpotlightCard";

const InitialsCube = lazy(() => import("../components/three/InitialsCube"));

export default function About() {
  const reduceMotion = useReducedMotion();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const show3D = isTablet && !reduceMotion;

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x relative">
        <SectionHeading index="01" label="About" title="Who" accentWord="I Am" />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Intro */}
          <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
            <SpotlightCard className="flex h-full flex-col p-7 md:p-9">
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-white md:text-[2rem] md:leading-[1.2]">
                {about.headline}
              </p>
              <div className="mt-6 space-y-4">
                {about.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-zinc-400 md:text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {about.focus.map((f) => (
                  <span key={f} className="chip" data-cursor="hover">
                    {f}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* 3D initials cube */}
          <Reveal
            delay={0.05}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <SpotlightCard className="relative h-full min-h-[300px] p-0">
              <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-brand/15 blur-3xl" />
              <div className="absolute left-6 top-6 z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                <Sparkles size={12} className="text-brand-light" /> Interactive
              </div>
              <div className="absolute inset-0">
                {show3D ? (
                  <Suspense fallback={null}>
                    <InitialsCube initials={profile.initials} />
                  </Suspense>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-6xl font-bold text-gradient-brand">
                      {profile.initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-6 left-6 z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Hover to spin
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Stats */}
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="col-span-1">
              <SpotlightCard
                className="h-full p-6"
                data-cursor="hover"
              >
                <CountUp
                  value={s.value}
                  className="block pr-[0.06em] font-display text-4xl font-bold tracking-tight text-gradient-brand md:text-5xl"
                />
                <div className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-zinc-500">
                  {s.label}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}

          {/* Currently */}
          <Reveal className="col-span-2 lg:col-span-2">
            <SpotlightCard className="h-full p-7">
              <span className="eyebrow">
                <span className="h-px w-6 bg-brand/70" /> Currently
              </span>
              <p className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-white">
                B.Tech (CCE) @ Manipal Institute of Technology, building across
                software, cloud &amp; networks.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.05} className="col-span-2 lg:col-span-2">
            <SpotlightCard className="flex h-full items-center justify-between p-7">
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand/70" /> Based in
                </span>
                <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
                  {profile.location}
                </p>
              </div>
              <MapPin size={40} className="text-brand/40" />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
