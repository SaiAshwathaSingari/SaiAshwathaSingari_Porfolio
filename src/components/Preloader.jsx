import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Football from "./Football";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const duration = reduced ? 300 : 1900;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-ink-950"
      initial={{ opacity: 1 }}
      animate={count >= 100 ? { opacity: 1 } : {}}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
      onAnimationComplete={() => {
        if (count >= 100) onComplete?.();
      }}
    >
      <div className="relative flex flex-col items-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="eyebrow mb-6"
        >
          <span className="h-px w-8 bg-brand" />
          Loading Portfolio
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center font-display text-4xl font-bold uppercase italic tracking-tightest text-white sm:text-6xl"
          >
            {profile.fullName}
          </motion.h1>
        </div>

        {/* Progress line with rolling ball */}
        <div className="mt-12 w-[min(82vw,380px)]">
          <div className="relative h-px w-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand"
              style={{ width: `${count}%` }}
            />
            <div
              className="absolute top-1/2 h-6 w-6 -translate-y-1/2"
              style={{ left: `calc(${count}% - 12px)` }}
            >
              <Football className="h-6 w-6 animate-spin-slow drop-shadow-[0_0_10px_rgba(126,217,87,0.5)]" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              Loading
            </span>
            <span className="font-display text-sm tabular-nums text-zinc-400">
              {String(count).padStart(3, "0")}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
