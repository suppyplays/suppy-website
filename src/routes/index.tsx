import { createFileRoute } from "@tanstack/react-router";
import { SITE, absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/site/sections/Hero";
import { About } from "@/components/site/sections/About";
import { Achievements } from "@/components/site/sections/Achievements";
import { Skills } from "@/components/site/sections/Skills";
import { Projects } from "@/components/site/sections/Projects";
import { ChessSection } from "@/components/site/sections/Chess";
import { Timeline } from "@/components/site/sections/Timeline";
import { Gallery } from "@/components/site/sections/Gallery";
import { Stats } from "@/components/site/sections/Stats";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Contact } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUPPY — Suprith Jain · Chess Coach, Developer, Creator" },
      {
        name: "description",
        content:
          "Premium personal site of Suprith Jain — chess coach, software developer, and creator behind SUPPY.",
      },
      { property: "og:title", content: "SUPPY — Suprith Jain" },
      { property: "og:description", content: "Chess Coach • Developer • Creator." },
      { property: "og:url", content: absoluteUrl() },
      { property: "og:image", content: absoluteUrl("/og-image.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <Skills />
      <Projects />
      <ChessSection />
      <Timeline />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
