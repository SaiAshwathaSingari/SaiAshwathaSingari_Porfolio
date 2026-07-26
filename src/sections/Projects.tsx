import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const href = project.links.live || project.links.code || undefined;
  return (
    <Reveal delay={i * 0.06} className="h-full">
      <SpotlightCard
        data-cursor-label="View"
        className="flex h-full flex-col"
      >
        {/* 3D laptop preview (clickable) */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title}`}
          className="relative block px-6 pt-8 [perspective:1100px]"
        >
          <div className="relative mx-auto w-full">
            {/* Lid / screen — open on touch, closed until hover on desktop */}
            <div
              className="origin-bottom overflow-hidden rounded-t-xl border border-white/10 shadow-2xl transition-transform duration-700 ease-out [transform:rotateX(-6deg)] md:[transform:rotateX(-68deg)] md:group-hover:[transform:rotateX(-4deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  background: `radial-gradient(120% 120% at 20% 0%, ${project.accent}33, transparent 60%), linear-gradient(135deg, #0a0a0b, #101012)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.14]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <span className="font-display text-5xl font-bold tracking-tight text-white/10">
                    0{i + 1}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: project.accent,
                      background: `${project.accent}1a`,
                      border: `1px solid ${project.accent}33`,
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] backdrop-blur-md"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}55`,
                      background: `${project.accent}14`,
                    }}
                  >
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
            {/* Base / keyboard deck */}
            <div className="relative h-3 rounded-b-lg bg-gradient-to-b from-zinc-600/80 to-zinc-900 shadow-xl">
              <div className="mx-auto h-1 w-20 rounded-b-md bg-ink-950/80" />
            </div>
          </div>
        </a>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <ul className="mt-4 space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
                <Sparkles size={12} className="mt-0.5 shrink-0 text-brand-light" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Challenge
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {project.challenge}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/[0.08] px-2 py-0.5 text-[10px] font-medium text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 pt-2">
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-brand hover:bg-brand/10"
              >
                <Github size={14} /> Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand hover:text-white"
              >
                Live <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Selected Work"
          title="Things"
          accentWord="I've Made"
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
