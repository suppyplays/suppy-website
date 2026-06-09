import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { About } from "@/components/site/sections/About";
import { Skills } from "@/components/site/sections/Skills";
import { Achievements } from "@/components/site/sections/Achievements";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SUPPY" },
      {
        name: "description",
        content: "Get to know Suprith Jain — chess coach, software developer, and creator.",
      },
      { property: "og:title", content: "About — SUPPY" },
      { property: "og:description", content: "Get to know Suprith Jain." },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Player, coach, builder."
        description="A short story behind SUPPY."
      />
      <About />
      <Achievements />
      <Skills />
    </PageShell>
  );
}
