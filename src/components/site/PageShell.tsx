import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative pt-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{ background: "var(--gradient-hero)" }}
      />
      {children}
    </motion.main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-6 pt-10">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_currentColor]" />
        {eyebrow}
      </div>
      <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {description && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>}
    </header>
  );
}
