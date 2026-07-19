import { cn } from "../lib/utils";

// A stylised soccer ball: white sphere, apple-green center panel and radiating
// seams. Used for the CR7 / No.7 football motif throughout the site.
export default function Football({ className, spinning = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(spinning && "animate-spin-slow", className)}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="#ffffff" />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#0b0d10"
        strokeWidth="2"
      />
      {/* Center panel */}
      <polygon
        points="50,36 63.3,45.7 58.2,61.3 41.8,61.3 36.7,45.7"
        fill="#7ed957"
        stroke="#0b0d10"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Seams from each panel vertex to the rim */}
      <g stroke="#0b0d10" strokeWidth="2" strokeLinecap="round">
        <line x1="50" y1="36" x2="50" y2="12" />
        <line x1="63.3" y1="45.7" x2="86" y2="38" />
        <line x1="58.2" y1="61.3" x2="71" y2="81" />
        <line x1="41.8" y1="61.3" x2="29" y2="81" />
        <line x1="36.7" y1="45.7" x2="14" y2="38" />
      </g>
      {/* Rim panel hints */}
      <g fill="#0b0d10">
        <circle cx="50" cy="12" r="3" />
        <circle cx="86" cy="38" r="3" />
        <circle cx="71" cy="81" r="3" />
        <circle cx="29" cy="81" r="3" />
        <circle cx="14" cy="38" r="3" />
      </g>
    </svg>
  );
}
