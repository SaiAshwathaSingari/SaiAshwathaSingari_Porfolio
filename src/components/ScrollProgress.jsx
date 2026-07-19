import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Football from "./Football";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const left = useTransform(scaleX, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-gradient-to-r from-brand-light via-brand to-brand-dark"
      />
      {/* Football tracker riding the progress bar */}
      <motion.div
        style={{ left, top: "7px" }}
        className="pointer-events-none fixed z-[201] -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div style={{ rotate }}>
          <Football className="h-4 w-4 drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]" />
        </motion.div>
      </motion.div>
    </>
  );
}
