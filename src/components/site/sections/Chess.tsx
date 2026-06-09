import { Crown, Trophy, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import chess from "@/assets/chess.jpg";

export function ChessSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Chess"
        title="Coaching that builds players, not just openings."
        description="From first principles to tournament prep — a calm, structured approach with measurable progress."
      />
      <div className="mt-14 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass">
            <img
              src={chess}
              alt="Chess board"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-background/20" />
            <div className="absolute bottom-5 left-5 rounded-2xl glass-strong px-4 py-3">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                FIDE Rating
              </div>
              <div className="font-display text-2xl font-bold text-gradient">1800+</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-3">
            {[
              {
                icon: Crown,
                title: "1-on-1 Coaching",
                body: "Personalised plans, structured progress, real games.",
              },
              {
                icon: GraduationCap,
                title: "Group Classes",
                body: "Small cohorts, weekly themes, tournament prep.",
              },
              {
                icon: Trophy,
                title: "Tournament Prep",
                body: "Opening files, endgame drills, mindset work.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl glass p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.body}</div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:scale-[1.03] transition-transform"
            >
              Book a trial session <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
