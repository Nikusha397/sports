import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { LiveDot } from "./LiveDot";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Path to a real background photo in /public. When omitted, a styled gym placeholder is shown. */
  image?: string;
  cta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photo (swap `image` for a real /public photo) */}
      <div
        className="absolute inset-0 bg-surface-2 bg-cover bg-center"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
        aria-hidden
      >
        {!image && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 16px)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/10">
                {eyebrow} hero photo
              </span>
            </div>
          </>
        )}
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted backdrop-blur">
              <LiveDot />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={0.15}>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              >
                {cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
