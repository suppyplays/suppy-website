import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import { PROJECTS } from "@/components/site/sections/Projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — SUPPY" }] };
    return {
      meta: [
        { title: `${p.title} — SUPPY` },
        { name: "description", content: p.desc },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/projects/${p.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/projects/${p.slug}`) }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 pt-40 text-center">
      <h1 className="font-display text-4xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-neon hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 pt-40 text-center">
      <h1 className="font-display text-2xl">Couldn't load that project.</h1>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-foreground px-5 py-2.5 text-sm text-background"
      >
        Retry
      </button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <main className="relative pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{ background: "var(--gradient-hero)" }}
      />
      <article className="mx-auto max-w-4xl px-6 pb-20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <div className="mt-8 text-xs uppercase tracking-[0.18em] text-neon">{project.tag}</div>
        <h1 className="mt-3 font-display text-5xl font-bold leading-[1.02] md:text-6xl">
          <span className="text-gradient">{project.title}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.desc}</p>
        <div className="mt-10 overflow-hidden rounded-3xl glass">
          <img src={project.image} alt={project.title} loading="lazy" className="w-full" />
        </div>
        <div className="prose prose-invert mt-10 max-w-none text-muted-foreground">
          <p>
            This is a placeholder write-up for {project.title}. Replace it with the real case study
            — problem framing, what was built, technical notes, and outcomes.
          </p>
          <ul>
            <li>Stack and architecture</li>
            <li>Key engineering decisions</li>
            <li>Results, metrics, and learnings</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
