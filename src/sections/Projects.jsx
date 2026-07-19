import Tilt from "react-parallax-tilt";
import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

function ProjectCard({ project, i }) {
  return (
    <Reveal delay={i * 0.06} className="h-full">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable
        glareMaxOpacity={0.12}
        glareColor="#7ed957"
        glarePosition="all"
        glareBorderRadius="24px"
        scale={1.01}
        transitionSpeed={1200}
        className="h-full"
      >
        <article
          data-cursor-label="View"
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
        >
          {/* Preview banner */}
          <div className="relative h-44 overflow-hidden">
            <div
              className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `radial-gradient(120% 120% at 20% 0%, ${project.accent}44, transparent 60%), linear-gradient(135deg, #0a0a0b, #101012)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 flex items-end justify-between p-6">
              <span className="font-display text-6xl font-bold italic tracking-tight text-white/10">
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

            {/* Hover reveal */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
              <span
                className="inline-flex translate-y-2 items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}55`,
                  background: `${project.accent}14`,
                }}
              >
                View Project
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

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
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-zinc-500"
                >
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
                  className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
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
        </article>
      </Tilt>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Selected Work"
          title="Things"
          accentWord="I've Made"
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
