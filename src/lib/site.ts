const DEFAULT_SITE_URL = "https://suppy.qzz.io";

export const SITE = {
  name: "SUPPY",
  fullName: "Suprith Jain",
  tagline: "Chess Coach • Developer • Creator",
  domain: "suppy.qzz.io",
  email: "hello@suppy.qzz.io",
  description: "Suprith Jain — Chess Coach, Developer, Creator. Premium personal site for SUPPY.",
  socials: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/",
  },
};

/** Production-safe absolute URL for SEO metadata and Open Graph tags. */
export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  return fromEnv || DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "" : normalized}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/chess", label: "Chess" },
  { to: "/timeline", label: "Timeline" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
