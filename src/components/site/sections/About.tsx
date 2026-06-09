import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import portrait from "@/assets/portrait.jpg";

const chips = [
  "Chess Coach",
  "Software Developer",
  "Linux Tinkerer",
  "Automation Geek",
  "AI Enthusiast",
  "Lifelong Learner",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader eyebrow="About" title="Strategist by board. Builder by night." />

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl glass">
            <img
              src={portrait}
              alt="Suprith Jain portrait"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
            <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-neon/10 blur-3xl" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm Suprith — a professional chess coach and software developer who spends equal hours
            over a board and over a keyboard. I teach students how to think under pressure, and I
            build tools that quietly remove friction from everyday life.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From Telegram automations to chess analysis pipelines, I love shipping calm, polished
            software with a strong point of view. Curiosity is the constant — everything else is
            iteration.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
