import { useEffect, useRef, useState } from "react";

const canUseCursor = () => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

// A three-part custom cursor:
//  • a precise dot
//  • a trailing ring that grows over interactive elements
//  • a green "label" bubble that appears for elements with data-cursor-label
//    (e.g. VIEW / DRAG / PLAY) for a richer, contextual feel.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled] = useState(canUseCursor);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    const labelPos = { ...pos };
    let raf;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;

      const target = e.target;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea, [role='button']"
      );
      const labelled = target.closest("[data-cursor-label]");

      ring.dataset.hover = interactive ? "true" : "false";

      if (labelled) {
        const text = labelled.getAttribute("data-cursor-label") || "";
        label.textContent = text;
        label.dataset.show = "true";
        ring.dataset.hidden = "true";
      } else {
        label.dataset.show = "false";
        ring.dataset.hidden = "false";
      }
    };

    const render = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      labelPos.x += (pos.x - labelPos.x) * 0.22;
      labelPos.y += (pos.y - labelPos.y) * 0.22;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      label.style.transform = `translate3d(${labelPos.x}px, ${labelPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      label.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      label.style.opacity = "1";
    };
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => (ring.dataset.down = "false");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-brand mix-blend-difference transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        data-hover="false"
        data-down="false"
        data-hidden="false"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-white/60 transition-[width,height,background-color,border-color,opacity] duration-300 ease-out mix-blend-difference data-[hover=true]:h-14 data-[hover=true]:w-14 data-[hover=true]:bg-white data-[down=true]:scale-90 data-[hidden=true]:scale-0 data-[hidden=true]:opacity-0"
      />
      <div
        ref={labelRef}
        data-show="false"
        className="pointer-events-none fixed left-0 top-0 z-[9998] grid h-16 w-16 scale-0 place-items-center rounded-full bg-brand text-center text-[9px] font-black uppercase leading-tight tracking-[0.15em] text-ink-950 opacity-0 transition-[transform,opacity] duration-300 ease-out data-[show=true]:scale-100 data-[show=true]:opacity-100"
      />
    </>
  );
}
