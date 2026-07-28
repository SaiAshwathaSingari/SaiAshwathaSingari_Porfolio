import { useEffect, useRef } from "react";

// Layered ambient background: drifting aurora orbs, a faint grid, and a
// cursor-following green spotlight. Transform/paint only, so it stays cheap.
export default function AnimatedBackground() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const spot = spotRef.current;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const render = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (spot) {
        // transform-only update: the compositor moves an already-painted
        // radial layer, so there's no per-frame repaint of the viewport.
        spot.style.transform = `translate3d(${current.x - 600}px, ${current.y - 600}px, 0)`;
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
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-brand/15 blur-[150px] animate-float" />
      <div
        className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-brand-mint/10 blur-[160px] animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[150px] animate-float"
        style={{ animationDelay: "-4s" }}
      />

      {/* Faint dotted grid */}
      <div
        className="grid-dots absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      {/* Cursor spotlight — a fixed 1200px radial layer moved via transform */}
      <div
        ref={spotRef}
        className="absolute left-0 top-0 h-[1200px] w-[1200px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(124,255,79,0.10), transparent 60%)",
          transform: "translate3d(-600px, -600px, 0)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/0 to-ink-950" />
    </div>
  );
}
