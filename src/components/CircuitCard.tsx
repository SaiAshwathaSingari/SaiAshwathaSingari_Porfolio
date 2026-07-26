import { motion } from "framer-motion";

const TRACES = [
  "M10 30 H60 V70 H120",
  "M10 60 H40 V100 H110 V140",
  "M10 100 H30 V150 H90",
  "M170 20 V60 H130 V110 H180",
  "M230 40 V90 H190 V150",
  "M170 160 H120 V120",
  "M300 30 H250 V80 H290 V130 H240",
  "M60 170 H140 V130",
];

const NODES = [
  [60, 30],
  [120, 70],
  [40, 60],
  [110, 100],
  [30, 100],
  [90, 150],
  [130, 60],
  [180, 60],
  [190, 90],
  [120, 160],
  [250, 80],
  [290, 130],
  [140, 170],
];

// Decorative animated "circuit board" with pulses running along the traces.
export default function CircuitCard() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-70"
        aria-hidden="true"
      >
        {/* Static faint traces */}
        {TRACES.map((d, i) => (
          <path
            key={`base-${i}`}
            d={d}
            fill="none"
            stroke="rgba(124,255,79,0.12)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {/* Animated pulses */}
        {TRACES.map((d, i) => (
          <motion.path
            key={`pulse-${i}`}
            d={d}
            fill="none"
            stroke="#7CFF4F"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="0.18 0.82"
            initial={{ strokeDashoffset: 1 }}
            animate={{ strokeDashoffset: [1, -1] }}
            transition={{
              duration: 3.4 + (i % 4) * 0.6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.35,
            }}
            style={{ filter: "drop-shadow(0 0 3px rgba(124,255,79,0.8))" }}
          />
        ))}
        {/* Solder nodes */}
        {NODES.map(([x, y], i) => (
          <motion.circle
            key={`node-${i}`}
            cx={x}
            cy={y}
            r={2.4}
            fill="#39FF88"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
