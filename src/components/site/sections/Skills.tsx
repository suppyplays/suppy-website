import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const skills = [
  { name: "Python", value: 95 },
  { name: "Web Development", value: 88 },
  { name: "Linux", value: 90 },
  { name: "Automation", value: 92 },
  { name: "Chess Coaching", value: 96 },
  { name: "Problem Solving", value: 94 },
  { name: "Artificial Intelligence", value: 80 },
  { name: "UI / UX Design", value: 78 },
];

export function Skills() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Skills"
        title="A toolkit honed by curiosity."
        description="Strongest in systems thinking — equally happy debugging a Python script or a tournament position."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.04}>
            <div className="rounded-xl glass p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground tabular-nums">{s.value}%</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 * i }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--neon), var(--neon-2))" }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
