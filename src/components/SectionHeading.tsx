import { Reveal, RevealText } from "./Reveal";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  index?: string;
  label: string;
  title: string;
  accentWord?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  label,
  title,
  accentWord,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <Reveal
        className={cn("eyebrow mb-6", align === "center" && "justify-center")}
      >
        {index && <span className="text-brand">{index}</span>}
        <span className="h-px w-8 bg-brand/70" />
        {label}
      </Reveal>

      <h2 className="font-display text-5xl font-bold tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
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
