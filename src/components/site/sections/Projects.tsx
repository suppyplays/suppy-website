import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import g6 from "@/assets/g6.jpg";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

export const PROJECTS = [
  {
    slug: "sgh",
    title: "SGH — Suppy's GameHub",
    tag: "Platform",
    desc: "A modern gaming hub that brings classic games into a clean, social experience.",
    image: g6,
  },
  {
    slug: "telegram-automation",
    title: "Telegram Automation",
    tag: "Automation",
    desc: "Smart bots that schedule, moderate, and assist — saving hours every week.",
    image: g1,
  },
  {
    slug: "chess-tools",
    title: "Chess Analysis Toolkit",
    tag: "Chess",
    desc: "PGN parsing, opening trees, and Stockfish-powered insights for students.",
    image: g3,
  },
  {
    slug: "future-oss",
    title: "Future Open Source",
    tag: "Coming Soon",
    desc: "Small, polished primitives for the open source community. In the lab.",
    image: g4,
  },
];

export function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work. Quietly opinionated."
        description="A handful of personal projects across automation, gaming, and chess."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative overflow-hidden rounded-3xl glass"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-neon">{p.tag}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 transition-colors group-hover:border-neon/60 group-hover:text-neon">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
