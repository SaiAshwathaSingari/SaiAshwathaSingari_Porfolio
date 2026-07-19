import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="08"
          label="Contact"
          title="Let's"
          accentWord="Talk"
        />

        <div className="max-w-2xl">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-zinc-400">
              Have a role, a project, or an idea worth building? I'm always open
              to a good conversation. Reach out and I'll get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <button
              onClick={copyEmail}
              data-cursor="hover"
              className="group flex w-full items-center justify-between gap-4 border-y border-white/10 py-5 text-left"
            >
              <span className="min-w-0 truncate font-display text-2xl font-bold italic tracking-tight text-zinc-200 transition-colors group-hover:text-white sm:text-3xl">
                {profile.email}
              </span>
              <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-brand-light">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 flex flex-col gap-3">
            <p className="text-sm text-zinc-500">
              Phone ·{" "}
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-zinc-300 hover:text-white"
              >
                {profile.phone}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:border-brand hover:bg-brand/10 hover:text-white"
              >
                {s.name}
                <ArrowUpRight size={13} />
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand hover:text-white"
            >
              Resume
              <ArrowUpRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
