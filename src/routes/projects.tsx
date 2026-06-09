import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Projects } from "@/components/site/sections/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SUPPY" },
      {
        name: "description",
        content:
          "Selected projects by Suprith Jain — SGH, Telegram automation, chess tools, and more.",
      },
      { property: "og:title", content: "Projects — SUPPY" },
      {
        property: "og:description",
        content: "Selected work across automation, gaming, and chess.",
      },
      { property: "og:url", content: absoluteUrl("/projects") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/projects") }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="Things I've shipped."
        description="Calm, premium tools for play, productivity, and chess."
      />
      <Projects />
    </PageShell>
  );
}
