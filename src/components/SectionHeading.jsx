import { Reveal, RevealText } from "./Reveal";
import { cn } from "../lib/utils";

export default function SectionHeading({
  index,
  label,
  title,
  accentWord,
  className,
  align = "left",
}) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-24",
        align === "center" && "text-center",
        className
      )}
    >
      <Reveal
        className={cn(
          "eyebrow mb-6",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="text-brand">{index}</span>}
        <span className="h-px w-8 bg-brand/70" />
        {label}
      </Reveal>

      <h2 className="font-display text-[13vw] font-bold uppercase italic leading-[0.82] tracking-tightest sm:text-7xl md:text-8xl lg:text-[7.5rem]">
        <RevealText text={title} className="text-gradient" />
        {accentWord && (
          <>
            {" "}
            <RevealText
              text={accentWord}
              className="text-gradient-brand"
              delay={0.08}
            />
          </>
        )}
      </h2>
    </div>
  );
}
