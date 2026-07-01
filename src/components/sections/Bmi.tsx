"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

type Category = {
  label: string;
  range: string;
  color: string;
  min: number;
};

const categories: Category[] = [
  { label: "Underweight", range: "< 18.5", color: "text-sky-400", min: 0 },
  { label: "Healthy", range: "18.5 – 24.9", color: "text-emerald-400", min: 18.5 },
  { label: "Overweight", range: "25 – 29.9", color: "text-amber-400", min: 25 },
  { label: "Obese", range: "≥ 30", color: "text-accent", min: 30 },
];

function categoryFor(bmi: number): Category {
  return (
    [...categories].reverse().find((c) => bmi >= c.min) ?? categories[0]
  );
}

export function Bmi() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);

  const bmi = useMemo(() => {
    const m = height / 100;
    if (!m) return 0;
    return weight / (m * m);
  }, [height, weight]);

  const category = categoryFor(bmi);
  // map bmi 12..40 onto 0..100% for the gauge
  const gaugePct = Math.min(100, Math.max(0, ((bmi - 12) / (40 - 12)) * 100));

  return (
    <section id="bmi" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-8 md:grid-cols-2 md:p-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
                  Free tool
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  BMI calculator
                </h2>
                <p className="text-muted">
                  Know your starting point. Enter your height and weight to
                  estimate your Body Mass Index — then let our coaches build a
                  plan around it.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="flex items-center justify-between text-sm font-medium">
                    Height
                    <span className="font-mono text-muted">{height} cm</span>
                  </span>
                  <input
                    type="range"
                    min={140}
                    max={210}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="accent-accent"
                    aria-label="Height in centimetres"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="flex items-center justify-between text-sm font-medium">
                    Weight
                    <span className="font-mono text-muted">{weight} kg</span>
                  </span>
                  <input
                    type="range"
                    min={40}
                    max={150}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="accent-accent"
                    aria-label="Weight in kilograms"
                  />
                </label>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-background p-8">
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm uppercase tracking-widest text-muted">
                  Your BMI
                </span>
                <span className="text-6xl font-bold tracking-tight tabular-nums">
                  {bmi.toFixed(1)}
                </span>
                <span className={`text-lg font-semibold ${category.color}`}>
                  {category.label}
                </span>
              </div>

              {/* Gauge */}
              <div className="w-full">
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-accent">
                  <div
                    className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-white shadow"
                    style={{ left: `${gaugePct}%` }}
                  />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[11px] text-muted">
                  {categories.map((c) => (
                    <div key={c.label} className="flex flex-col">
                      <span className={`font-semibold ${c.color}`}>{c.label}</span>
                      <span>{c.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              >
                Get a personalised plan
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
