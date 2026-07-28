import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Copy, Check, Phone } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";

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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="07" label="Contact" title="Let's" accentWord="Talk" />

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Pitch */}
          <Reveal className="lg:col-span-3">
            <SpotlightCard className="p-7 md:p-9">
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                Have a role, a project, or an idea worth building? I'm always open
                to a good conversation. Reach out and I'll get back to you.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.05} className="lg:col-span-2">
            <SpotlightCard className="h-full p-2">
              <button
                onClick={copyEmail}
                data-cursor="hover"
                className="group/email flex h-full w-full items-center justify-between gap-4 rounded-[18px] px-5 py-6 text-left"
              >
                <span className="min-w-0 truncate font-display text-lg font-bold tracking-tight text-zinc-200 transition-colors group-hover/email:text-white sm:text-2xl lg:text-3xl">
                  {profile.email}
                </span>
                <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 transition-colors group-hover/email:text-brand-light">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </SpotlightCard>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.1}>
            <SpotlightCard className="flex h-full items-center justify-between p-7">
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand/70" /> Phone
                </span>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="mt-3 block font-display text-xl font-semibold tracking-tight text-zinc-200 hover:text-white"
                >
                  {profile.phone}
                </a>
              </div>
              <Phone size={28} className="text-brand/40" />
            </SpotlightCard>
          </Reveal>

          {/* Socials + resume */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <SpotlightCard className="flex flex-wrap items-center gap-3 p-7">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:border-brand hover:bg-brand/10 hover:text-white"
                >
                  {s.name}
                  <ArrowUpRight size={13} />
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-brand hover:text-white"
              >
                Resume
                <ArrowUpRight size={13} />
              </a>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
