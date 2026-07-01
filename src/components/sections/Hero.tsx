import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { LiveDot } from "../ui/LiveDot";

const stats = [
  { value: "1,200+", label: "Active members" },
  { value: "15+", label: "Expert coaches" },
  { value: "24/7", label: "Open access" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <div aria-hidden className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/heroes/home.jpg)" }}
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        {/* accent glow */}
        <div className="pointer-events-none absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative z-10 py-32 md:py-40">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted backdrop-blur">
              <LiveDot />
              RITM Fitness Club · Rustavi
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl">
              Find your rhythm.
              <br />
              <span className="text-accent-strong">Train with purpose.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A premium fitness club built for results. Modern equipment, expert
              coaching, and a community that pushes you forward — every single
              day.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/membership" variant="accent">
                Start training
              </Button>
              <Button href="/programs" variant="ghost">
                Explore programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-6 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="text-xs text-muted sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
