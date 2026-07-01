import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-2 px-6 py-16 text-white sm:px-12 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-black/20 blur-3xl"
            />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to start training?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Join RITM Fitness Club in Rustavi, pick the plan that fits, and
                train with a community that pushes you forward.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-strong transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  View memberships
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
