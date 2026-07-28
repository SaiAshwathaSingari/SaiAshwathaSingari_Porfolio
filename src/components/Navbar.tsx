import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile, socials } from "../data/portfolio";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { cn } from "../lib/utils";

export default function Navbar() {
  const { scrollTo } = useSmoothScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 400 && !open);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      scrollTo(href, { offset: -8 });
    },
    [scrollTo]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[150] transition-[padding,background,border] duration-500",
          scrolled
            ? "border-b border-white/[0.08] bg-ink-950/70 py-3 backdrop-blur-md backdrop-saturate-150"
            : "border-b border-transparent py-5"
        )}
      >
        <nav className="container-x flex items-center justify-between">
          <button
            onClick={() => go("#home")}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
            data-cursor="hover"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-ink-950 shadow-[0_0_18px_-4px_rgba(124,255,79,0.7)] transition-transform group-hover:-rotate-6">
              S
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              Sai Ashwatha
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => go(link.href)}
                    data-cursor="hover"
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
                      isActive ? "text-ink-950" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-brand"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              download
              data-cursor="hover"
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-brand hover:bg-brand/10 sm:inline-flex"
            >
              Resume
              <ArrowUpRight size={13} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[140] flex flex-col bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05 }}
                  >
                    <button
                      onClick={() => go(link.href)}
                      className="font-display text-4xl font-bold tracking-tightest text-zinc-200 transition-colors active:text-brand sm:text-5xl"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/10 px-8 py-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
