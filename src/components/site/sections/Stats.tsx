import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "../Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => `${Math.round(n)}${suffix}`);
  useEffect(() => {
    if (inView) animate(v, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const });
  }, [inView, to, v]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 10, s: "+", label: "Years of coaching" },
  { v: 50, s: "+", label: "Students mentored" },
  { v: 1800, s: "+", label: "FIDE rating" },
  { v: 20, s: "+", label: "Shipped projects" },
];

export function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="grid gap-4 rounded-3xl glass p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-gradient">
                  <Counter to={s.v} suffix={s.s} />
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
