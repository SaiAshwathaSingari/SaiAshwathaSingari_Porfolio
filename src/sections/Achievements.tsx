import { Award, Briefcase, Code2, Trophy, GraduationCap, type LucideIcon } from "lucide-react";
import { achievements, type AchievementType } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";

const ICONS: Record<AchievementType, LucideIcon> = {
  Internship: Briefcase,
  Certification: Award,
  Achievement: Trophy,
  Hackathon: Code2,
  Education: GraduationCap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Achievements"
          title="Milestones"
          accentWord="& Certs"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.type] || Award;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <SpotlightCard
                  className="flex h-full items-start gap-4 p-6"
                  data-cursor="hover"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-brand-light transition-colors group-hover:bg-brand group-hover:text-ink-950">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">
                        {item.type}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                        · {item.year}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{item.org}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
