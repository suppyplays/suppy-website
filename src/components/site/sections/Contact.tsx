import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Github, Twitter, Linkedin, Check } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "At least 10 characters").max(2000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    const subject = encodeURIComponent(`Hello from ${data.name}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build, play, or partner."
        description="Open to coaching, collaborations, and interesting problems. I read everything."
      />
      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="rounded-3xl glass p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Reach me
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 flex items-center gap-2 text-lg hover:text-neon"
            >
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <div className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Elsewhere
            </div>
            <div className="mt-3 flex gap-2">
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
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 hover:border-neon/60 hover:text-neon"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-muted-foreground">
              Based on the internet. Replies within a day, usually faster.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl glass p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Name
                </span>
                <input
                  {...register("name")}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/30"
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="mt-1 block text-xs text-destructive">{errors.name.message}</span>
                )}
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </span>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/30"
                  placeholder="you@domain.com"
                />
                {errors.email && (
                  <span className="mt-1 block text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </span>
              <textarea
                {...register("message")}
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-neon/60 focus:ring-2 focus:ring-neon/30"
                placeholder="Tell me a bit about what you're working on…"
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-destructive">
                  {errors.message.message}
                </span>
              )}
            </label>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Sent via your email client. No data stored on this page.
              </p>
              <button
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] disabled:opacity-60"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
