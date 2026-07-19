import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const EASE = [0.16, 1, 0.3, 1];

// Generic in-view reveal wrapper.
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

// Word-by-word masked reveal for headings.
export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  once = true,
}) {
  const words = String(text).split(" ");
  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className={cn("inline-block", wordClassName)}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: "-5% 0px" }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
