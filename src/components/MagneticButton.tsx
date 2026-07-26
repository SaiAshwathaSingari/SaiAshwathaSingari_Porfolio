import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../lib/utils";

interface MagneticButtonProps {
  as?: ElementType;
  strength?: number;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

// Wraps children and gently pulls them toward the cursor on hover.
export default function MagneticButton({
  as = "button",
  strength = 0.4,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  // Dynamic motion tag (button / a / div); loosely typed on purpose.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag: any =
    (motion as unknown as Record<string, ElementType>)[as as string] ??
    motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
