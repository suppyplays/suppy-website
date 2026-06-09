import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_currentColor]" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
