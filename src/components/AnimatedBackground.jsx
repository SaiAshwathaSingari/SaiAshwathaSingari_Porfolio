import { useEffect, useRef } from "react";

// Layered ambient background: drifting aurora orbs, a faint grid, film grain,
// and a cursor-following spotlight. Uses transforms only, so it's cheap.
export default function AnimatedBackground() {
  const spotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const spot = spotRef.current;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const render = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (spot) {
        spot.style.background = `radial-gradient(600px circle at ${current.x}px ${current.y}px, rgba(126,217,87,0.12), transparent 60%)`;
      }
      raf = requestAnimationFrame(render);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-950"
    >
      {/* Aurora orbs */}
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-brand/20 blur-[140px] animate-float" />
      <div
        className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-lime-400/12 blur-[150px] animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[140px] animate-float"
        style={{ animationDelay: "-4s" }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      {/* Cursor spotlight */}
      <div ref={spotRef} className="absolute inset-0" />

      {/* Grain */}
      <div className="grain absolute inset-0 opacity-[0.035] mix-blend-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/0 to-ink-950" />
    </div>
  );
}
