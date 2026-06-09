import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Gallery } from "@/components/site/sections/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SUPPY" },
      { name: "description", content: "A premium visual gallery from the SUPPY workshop." },
      { property: "og:title", content: "Gallery — SUPPY" },
      { property: "og:description", content: "Visual moments from the workshop." },
      { property: "og:url", content: absoluteUrl("/gallery") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: () => (
    <PageShell>
      <PageHeader eyebrow="Gallery" title="Frames worth keeping." />
      <Gallery />
    </PageShell>
  ),
});
