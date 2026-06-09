import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-2xl font-bold text-gradient">{SITE.name}</div>
            <p className="mt-1 text-sm text-muted-foreground">
              {SITE.fullName} — {SITE.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-foreground transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            {[
              { href: SITE.socials.github, icon: Github, label: "GitHub" },
              { href: SITE.socials.twitter, icon: Twitter, label: "Twitter" },
              { href: SITE.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: SITE.socials.telegram, icon: Send, label: "Telegram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-neon/50 hover:text-neon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div>{SITE.domain}</div>
        </div>
      </div>
    </footer>
  );
}
