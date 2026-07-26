import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const left = useTransform(scaleX, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-brand-mint via-brand to-brand-dark"
      />
      {/* Glowing dot riding the progress bar */}
      <motion.div
        style={{ left, top: "1px" }}
        className="pointer-events-none fixed z-[201] -translate-x-1/2"
        aria-hidden="true"
      >
        <span className="block h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_2px_rgba(124,255,79,0.7)]" />
      </motion.div>
    </>
  );
}
