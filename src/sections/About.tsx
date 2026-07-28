import { MapPin } from "lucide-react";
import { about, profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import CountUp from "../components/CountUp";
import SpotlightCard from "../components/SpotlightCard";

export default function About() {
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

          {/* Stats */}
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="col-span-1">
              <SpotlightCard className="h-full p-6" data-cursor="hover">
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
                B.Tech (CCE) @ Manipal Institute of Technology, building
                high-performance software across systems and the web.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.05} className="col-span-2 lg:col-span-4">
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
