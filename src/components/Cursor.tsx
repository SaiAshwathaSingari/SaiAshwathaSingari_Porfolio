import { useEffect, useRef, useState } from "react";
import { damp } from "../lib/motion";

const INTERACTIVE =
  "a, button, [data-cursor], [data-cursor-label], [role='button'], [role='link']";
const NATIVE_TEXT =
  "input, textarea, select, [contenteditable='true']";

const canUseCursor = () => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

function magnetStrengthFor(width: number, height: number) {
  const area = width * height;
  if (area < 16_000) return 0.32;
  if (area < 48_000) return 0.16;
  if (area < 140_000) return 0.07;
  return 0.03;
}

// Custom cursor: a glued inner dot, a lagging outer ring with magnetic
// snap + velocity stretch, and a labeled disc. All visual state lives in
// one compositor transform — never mix CSS transform transitions with JS.
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled] = useState(canUseCursor);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.body.classList.add("has-custom-cursor");

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...pointer };
    const ringPos = { ...pointer };
    const labelPos = { ...pointer };

    let hoverEl: HTMLElement | null = null;
    let visible = false;
    let hovering = false;
    let labelled = false;
    let native = false;
    let pressed = false;
    let labelText = "";

    let scaleDot = 1;
    let scaleRing = 1;
    let scaleLabel = 0;
    let fill = 0;
    let opacity = 0;
    let stretch = 1;
    let angle = 0;
    let lastRingX = pointer.x;
    let lastRingY = pointer.y;

    let raf = 0;
    let last = performance.now();

    const readTarget = (node: EventTarget | null) => {
      const el = node instanceof Element ? node : null;
      if (!el) {
        hoverEl = null;
        hovering = false;
        labelled = false;
        native = false;
        return;
      }

      native = Boolean(el.closest(NATIVE_TEXT));
      const labeledEl = el.closest("[data-cursor-label]") as HTMLElement | null;
      const hit = (labeledEl ??
        (el.closest(INTERACTIVE) as HTMLElement | null)) as HTMLElement | null;

      hovering = Boolean(hit) && !native;
      labelled = Boolean(labeledEl) && !native;
      hoverEl = hovering ? hit : null;

      if (labeledEl) {
        labelText = labeledEl.getAttribute("data-cursor-label") || "";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      readTarget(e.target);
      if (!native) visible = true;
    };

    const onPointerOver = (e: PointerEvent) => readTarget(e.target);

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") pressed = true;
    };
    const onPointerUp = () => {
      pressed = false;
    };

    const hide = () => {
      visible = false;
      hovering = false;
      labelled = false;
      hoverEl = null;
    };

    const onEnter = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      readTarget(e.target);
      visible = !native;
    };

    const render = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.048);
      last = now;

      let targetX = pointer.x;
      let targetY = pointer.y;
      if (hoverEl) {
        const r = hoverEl.getBoundingClientRect();
        const mx = r.left + r.width / 2;
        const my = r.top + r.height / 2;
        const pull = magnetStrengthFor(r.width, r.height);
        targetX = pointer.x + (mx - pointer.x) * pull;
        targetY = pointer.y + (my - pointer.y) * pull;
      }

      // Inner dot stays glued to the pointer. Outer ring / label lag behind.
      dotPos.x = damp(dotPos.x, pointer.x, 32, dt);
      dotPos.y = damp(dotPos.y, pointer.y, 32, dt);
      ringPos.x = damp(ringPos.x, targetX, hovering ? 13.5 : 10.5, dt);
      ringPos.y = damp(ringPos.y, targetY, hovering ? 13.5 : 10.5, dt);
      labelPos.x = damp(labelPos.x, pointer.x, 15, dt);
      labelPos.y = damp(labelPos.y, pointer.y, 15, dt);

      const vx = (ringPos.x - lastRingX) / Math.max(dt, 0.001);
      const vy = (ringPos.y - lastRingY) / Math.max(dt, 0.001);
      lastRingX = ringPos.x;
      lastRingY = ringPos.y;
      const speed = Math.hypot(vx, vy);
      const targetStretch =
        hovering || labelled || pressed ? 1 : 1 + Math.min(speed / 2800, 0.38);
      stretch = damp(stretch, targetStretch, 14, dt);
      if (speed > 12) angle = Math.atan2(vy, vx);

      const show = visible && !native;
      const targetRingScale = !show
        ? 0.4
        : labelled
          ? 0
          : hovering
            ? 2.45
            : pressed
              ? 0.78
              : 1;
      const targetDotScale = !show || labelled ? 0 : hovering ? 0 : pressed ? 0.45 : 1;
      const targetLabelScale = show && labelled ? 1 : 0;
      const targetFill = show && hovering && !labelled ? 1 : 0;
      const targetOpacity = show ? 1 : 0;

      scaleRing = damp(scaleRing, targetRingScale, 16, dt);
      scaleDot = damp(scaleDot, targetDotScale, 20, dt);
      scaleLabel = damp(scaleLabel, targetLabelScale, 18, dt);
      fill = damp(fill, targetFill, 16, dt);
      opacity = damp(opacity, targetOpacity, 16, dt);

      const sx = stretch;
      const sy = stretch > 0.001 ? 1 / Math.sqrt(stretch) : 1;

      dot.style.opacity = String(opacity);
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${scaleDot})`;

      ring.style.opacity = String(opacity);
      ring.style.backgroundColor = `rgba(255,255,255,${fill})`;
      ring.style.borderColor = `rgba(255,255,255,${0.72 * (1 - fill)})`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scaleRing * sx}, ${scaleRing * sy})`;

      if (labelled && label.textContent !== labelText) {
        label.textContent = labelText;
      }
      label.style.opacity = String(opacity * Math.min(1, scaleLabel * 1.15));
      label.style.transform = `translate3d(${labelPos.x}px, ${labelPos.y}px, 0) translate(-50%, -50%) scale(${scaleLabel})`;

      raf = requestAnimationFrame(render);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);
    document.documentElement.addEventListener("pointerleave", hide);
    document.documentElement.addEventListener("pointerenter", onEnter);
    window.addEventListener("blur", hide);

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("blur", hide);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-brand mix-blend-difference will-change-transform"
        style={{ opacity: 0, transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border-[1.5px] border-white/70 mix-blend-difference will-change-transform"
        style={{ opacity: 0, transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-brand text-center text-[9px] font-black uppercase leading-tight tracking-[0.16em] text-ink-950 will-change-transform"
        style={{ opacity: 0, transform: "translate3d(-100px,-100px,0)" }}
      />
    </>
  );
}
