"use client";

import { FormEvent, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const info = [
  {
    label: "Location",
    value: "Rustavi, Georgia",
    icon: (
      <>
        <path d="M12 21s-6.5-5.2-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.8-6.5 10-6.5 10Z" />
        <circle cx="12" cy="11" r="2.4" />
      </>
    ),
  },
  {
    label: "Phone",
    value: "+995 000 00 00 00",
    icon: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sun · 07:00–23:00",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
];

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (!message) next.message = "Tell us how we can help.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="Get in touch"
            title="Start your journey today"
            description="Ask a question, book a visit, or just say hi. We usually reply within a day."
            align="left"
          />
        )}

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal className="h-full">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
                {errors.name && (
                  <span className="text-xs text-accent">{errors.name}</span>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                  />
                  {errors.email && (
                    <span className="text-xs text-accent">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+995 …"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="I'd like to know more about membership…"
                  className="min-h-[140px] flex-1 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
                {errors.message && (
                  <span className="text-xs text-accent">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              >
                Send message
              </button>

              {sent && (
                <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                  Thanks! Your message has been received — we&apos;ll be in touch
                  shortly.
                </p>
              )}
            </form>
          </Reveal>

          {/* Info + map */}
          <Reveal delay={0.08} className="h-full">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">Visit us</h3>
                <p className="text-sm text-muted">
                  Come see the club in person — we&apos;re easy to find in the
                  heart of Rustavi.
                </p>
              </div>

              <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        {item.label}
                      </p>
                      <p className="font-semibold tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                role="img"
                aria-label="Map location placeholder"
                className="relative flex min-h-[200px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 28px)",
                  }}
                />
                <span className="relative flex items-center gap-2 text-sm font-medium text-muted">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  Map placeholder — Rustavi
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
