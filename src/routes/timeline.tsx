import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Timeline } from "@/components/site/sections/Timeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — SUPPY" },
      {
        name: "description",
        content: "Milestones from a journey across chess, code, and creation.",
      },
      { property: "og:title", content: "Timeline — SUPPY" },
      { property: "og:description", content: "Milestones across chess, code, and creation." },
      { property: "og:url", content: absoluteUrl("/timeline") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/timeline") }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Timeline" title="A decade in moves." />
      <Timeline />
    </PageShell>
  ),
});
