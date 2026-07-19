import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { cn } from "../lib/utils";

// Scroll-velocity reactive marquee: drifts on its own, speeds up and flips
// direction based on how fast you scroll. Content is repeated 4× so the wrap
// (-25% → 0%) produces a seamless, infinite loop.
export function VelocityMarquee({
  children,
  baseVelocity = 2,
  className,
  itemClassName,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn("mask-fade-x flex overflow-hidden", className)}>
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy > 0}
            className={cn("flex flex-nowrap", itemClassName)}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Draggable row with inertia — grab and fling it. Falls back to being simply
// scrollable via drag on touch. Shows a "Drag" cursor label on fine pointers.
export function DragRow({ children, className }) {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="cursor-grab-x overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.06}
        dragTransition={{ power: 0.3, timeConstant: 260 }}
        data-cursor="drag"
        data-cursor-label="Drag"
        className={cn("flex w-max gap-4", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
