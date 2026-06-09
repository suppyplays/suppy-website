import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const events = [
  {
    year: "2014",
    title: "First serious chess tournament",
    body: "Learned to lose well — and come back sharper.",
  },
  {
    year: "2017",
    title: "Started coding",
    body: "Python scripts and tiny automations. The bug bit.",
  },
  {
    year: "2019",
    title: "Began coaching chess",
    body: "Turned passion into practice. First students, first wins.",
  },
  {
    year: "2021",
    title: "Linux & automation deep-dive",
    body: "Built workflows that quietly run my world.",
  },
  {
    year: "2023",
    title: "Telegram automation projects",
    body: "From utility bots to community tooling.",
  },
  {
    year: "2025",
    title: "SUPPY brand & SGH",
    body: "Bringing it all under one focused, premium identity.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Timeline"
        title="The long, scenic route."
        description="Pieces of a journey — chess, code, and everything between."
      />
      <div ref={ref} className="relative mt-14">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2 md:block" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neon via-neon-2 to-transparent md:left-1/2 md:-translate-x-1/2 md:block"
        />
        <ol className="space-y-10">
          {events.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={e.year} delay={i * 0.04}>
                <li className={`relative grid gap-4 md:grid-cols-2 md:gap-12`}>
                  <div className={left ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}>
                    <div className="rounded-2xl glass p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-neon">{e.year}</div>
                      <div className="mt-1 font-display text-lg font-semibold">{e.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2 h-3 w-3 rounded-full bg-background ring-2 ring-neon shadow-[0_0_16px_var(--neon)]"
                  />
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
