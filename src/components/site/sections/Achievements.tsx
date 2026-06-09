import { Award, Crown, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const items = [
  {
    icon: Crown,
    title: "FIDE Rated Player",
    body: "Competing nationally with a peak rating north of 1800.",
  },
  {
    icon: Award,
    title: "Professional Coach",
    body: "Mentored 50+ students from rookies to rated players.",
  },
  {
    icon: Code2,
    title: "Shipped Projects",
    body: "From SGH to Telegram automations, built end-to-end.",
  },
  {
    icon: Sparkles,
    title: "Polymath Stack",
    body: "Python, Linux, AI tooling, UI/UX, and a calm taste.",
  },
];

export function Achievements() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader eyebrow="Achievements" title="A track record across boards & screens." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl glass p-6"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
