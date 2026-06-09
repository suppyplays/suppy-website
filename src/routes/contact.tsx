import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Contact } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SUPPY" },
      {
        name: "description",
        content: "Reach Suprith Jain for chess coaching, collaborations, or interesting problems.",
      },
      { property: "og:title", content: "Contact — SUPPY" },
      {
        property: "og:description",
        content: "Coaching, collaborations, and ideas — get in touch.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: () => (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        description="Coaching, collaborations, and conversations welcome."
      />
      <Contact />
    </PageShell>
  ),
});
