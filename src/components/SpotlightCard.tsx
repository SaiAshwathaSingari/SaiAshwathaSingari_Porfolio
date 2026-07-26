import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

// Frosted bento tile with a cursor-following green spotlight (Aceternity style).
export default function SpotlightCard({
  children,
  className,
  onMouseMove,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
    onMouseMove?.(e);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "spotlight card-surface group relative overflow-hidden transition-colors duration-300 hover:border-brand/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
