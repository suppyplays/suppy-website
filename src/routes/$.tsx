import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Not Found — SUPPY" },
      { name: "description", content: "Page not found." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFound,
});

function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center px-6">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="text-center">
        <div className="font-display text-[12rem] font-bold leading-none text-gradient md:text-[16rem]">
          404
        </div>
        <h1 className="mt-2 font-display text-2xl">This square is empty.</h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back to the board.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:scale-[1.03] transition-transform"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
