import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ImagePlaceholder } from "./ImagePlaceholder";

type FeatureRowProps = {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  imageLabel: string;
  reverse?: boolean;
  meta?: { label: string; value: string }[];
  cta?: { label: string; href: string };
  surface?: boolean;
};

export function FeatureRow({
  eyebrow,
  title,
  body,
  imageLabel,
  reverse = false,
  meta,
  cta,
  surface = false,
}: FeatureRowProps) {
  // Default: image left, text right -> right-align text (Gold's "OUR PRODUCTS" look).
  // Reverse: image right, text left -> left-align text.
  const alignRight = !reverse;
  const textAlign = alignRight
    ? "lg:items-end lg:text-right"
    : "lg:items-start lg:text-left";

  return (
    <section className={`py-16 md:py-24 ${surface ? "bg-surface" : ""}`}>
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className={reverse ? "lg:order-2" : "lg:order-1"} y={32}>
          <ImagePlaceholder
            label={imageLabel}
            rounded="rounded-3xl"
            className="aspect-[16/10] w-full lg:max-h-[520px]"
          />
        </Reveal>

        {/* Text */}
        <Reveal
          delay={0.08}
          className={`flex flex-col items-start gap-5 ${textAlign} ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted">
            {body}
          </div>

          {meta && (
            <dl
              className={`mt-2 flex w-full flex-wrap gap-8 border-t border-border pt-5 ${
                alignRight ? "lg:justify-end" : ""
              }`}
            >
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className="text-xs uppercase tracking-widest text-muted">
                    {m.label}
                  </dt>
                  <dd className="text-lg font-bold tracking-tight">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {cta && (
            <Link
              href={cta.href}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
            >
              {cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
