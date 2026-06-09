import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Quote } from "lucide-react";

const items = [
  {
    q: "Suprith turned my chaotic openings into a real repertoire. Won my first rated tournament soon after.",
    a: "Aarav, Student",
  },
  {
    q: "His automations replaced three of our manual workflows. Calm, well-built, just works.",
    a: "Priya, Founder",
  },
  {
    q: "Best chess coach I've worked with. Patient, structured, deeply analytical.",
    a: "Kabir, Parent",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader eyebrow="Words" title="What people say." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <figure className="h-full rounded-2xl glass p-6">
              <Quote className="h-5 w-5 text-neon" />
              <blockquote className="mt-4 text-base leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.a}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
