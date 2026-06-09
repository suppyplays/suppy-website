import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { ParticleField } from "../ParticleField";
import { SITE } from "@/lib/site";

const letterV = {
  hidden: { y: "100%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 * i },
  }),
};

export function Hero() {
  const name = SITE.fullName;
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg" />
      <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon shadow-[0_0_8px_currentColor]" />
          Available for new collaborations
        </motion.div>

        <h1 className="mt-6 overflow-hidden font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-[-0.04em]">
          <span className="flex flex-wrap">
            {name.split("").map((c, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="show"
                variants={letterV}
                className="inline-block"
                style={{ whiteSpace: c === " " ? "pre" : undefined }}
              >
                <span className="text-gradient">{c}</span>
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          {SITE.tagline}. Crafting elegant systems, sharper minds, and ambitious ideas — one move at
          a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Explore projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            ["10+", "Years coaching"],
            ["1800+", "FIDE rating"],
            ["50+", "Students"],
            ["20+", "Projects"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl glass p-4">
              <div className="font-display text-2xl font-bold text-gradient">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-neon"
          />
        </div>
      </motion.div>
    </section>
  );
}
