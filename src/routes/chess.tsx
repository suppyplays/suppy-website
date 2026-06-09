import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ChessSection } from "@/components/site/sections/Chess";
import { Testimonials } from "@/components/site/sections/Testimonials";

export const Route = createFileRoute("/chess")({
  head: () => ({
    meta: [
      { title: "Chess Coaching — SUPPY" },
      {
        name: "description",
        content: "FIDE-rated chess coaching by Suprith Jain — 1-on-1, group, and tournament prep.",
      },
      { property: "og:title", content: "Chess Coaching — SUPPY" },
      { property: "og:description", content: "Coaching that builds players, not just openings." },
      { property: "og:url", content: absoluteUrl("/chess") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/chess") }],
  }),
  component: () => (
    <PageShell>
      <PageHeader
        eyebrow="Chess"
        title="Boards. Books. Breakthroughs."
        description="Professional coaching with a structured, calm approach."
      />
      <ChessSection />
      <Testimonials />
    </PageShell>
  ),
});
