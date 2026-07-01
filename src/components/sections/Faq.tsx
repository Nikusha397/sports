"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { LiveDot } from "../ui/LiveDot";

const faqs = [
  {
    q: "Can I visit before joining?",
    a: "Of course. Drop by during opening hours for a tour of the club and a chat with our team — we'll walk you through the space, the equipment and the plans.",
  },
  {
    q: "Are classes included in my membership?",
    a: "Group classes are included in the Pro and Elite plans, and the Starter plan includes two classes per week. Check the schedule for current times.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Absolutely. All plans are flexible — you can freeze your membership while travelling or cancel anytime with no hidden fees.",
  },
  {
    q: "Do I need experience to start?",
    a: "Not at all. Our coaches will walk you through everything, from your first warm-up to a full program built around your level and goals.",
  },
  {
    q: "Is the gym really open 24/7?",
    a: "Yes — members get secure access around the clock, every day of the year, so you can train on your own schedule.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. The Pro plan includes a monthly session and the Elite plan includes weekly 1-on-1 coaching. You can also book extra sessions anytime.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: heading + support */}
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
            <LiveDot />
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Questions,
            <br />
            answered
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            Everything you need to know before your first visit. Still unsure?
            Our team is happy to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
          >
            Ask a question
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>

        {/* Right: accordion */}
        <Reveal delay={0.08} className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-background transition-colors duration-300 ${
                  isOpen ? "border-accent/50" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold tracking-tight">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-accent transition-all duration-300 ${
                      isOpen ? "rotate-45 border-accent bg-accent/10" : "border-border"
                    }`}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
