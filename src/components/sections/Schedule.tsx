"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type Intensity = "Low" | "Medium" | "High";

type ClassItem = {
  time: string;
  name: string;
  coach: string;
  duration: string;
  spots: number;
  capacity: number;
  intensity: Intensity;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
type Day = (typeof days)[number];

const dayLabels: Record<Day, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const schedule: Record<Day, ClassItem[]> = {
  Mon: [
    { time: "07:00", name: "Morning HIIT", coach: "Nika A.", duration: "45 min", spots: 4, capacity: 16, intensity: "High" },
    { time: "10:00", name: "Functional Flow", coach: "Salome C.", duration: "50 min", spots: 9, capacity: 14, intensity: "Medium" },
    { time: "18:30", name: "Strength 101", coach: "Giorgi B.", duration: "60 min", spots: 2, capacity: 12, intensity: "Medium" },
    { time: "20:00", name: "CrossFit WOD", coach: "Data D.", duration: "60 min", spots: 6, capacity: 14, intensity: "High" },
  ],
  Tue: [
    { time: "08:00", name: "Power Lifting", coach: "Giorgi B.", duration: "60 min", spots: 5, capacity: 10, intensity: "High" },
    { time: "12:00", name: "Lunch Express", coach: "Nika A.", duration: "30 min", spots: 8, capacity: 16, intensity: "Medium" },
    { time: "19:00", name: "Yoga & Mobility", coach: "Ana E.", duration: "50 min", spots: 11, capacity: 18, intensity: "Low" },
  ],
  Wed: [
    { time: "07:00", name: "Morning HIIT", coach: "Nika A.", duration: "45 min", spots: 3, capacity: 16, intensity: "High" },
    { time: "17:30", name: "Conditioning", coach: "Data D.", duration: "45 min", spots: 7, capacity: 14, intensity: "High" },
    { time: "19:30", name: "Functional Flow", coach: "Salome C.", duration: "50 min", spots: 10, capacity: 14, intensity: "Medium" },
  ],
  Thu: [
    { time: "08:00", name: "Strength 101", coach: "Giorgi B.", duration: "60 min", spots: 4, capacity: 12, intensity: "Medium" },
    { time: "18:00", name: "CrossFit WOD", coach: "Data D.", duration: "60 min", spots: 1, capacity: 14, intensity: "High" },
    { time: "20:00", name: "Recovery & Stretch", coach: "Ana E.", duration: "40 min", spots: 12, capacity: 18, intensity: "Low" },
  ],
  Fri: [
    { time: "07:00", name: "Morning HIIT", coach: "Nika A.", duration: "45 min", spots: 6, capacity: 16, intensity: "High" },
    { time: "12:00", name: "Lunch Express", coach: "Salome C.", duration: "30 min", spots: 9, capacity: 16, intensity: "Medium" },
    { time: "18:30", name: "Power Lifting", coach: "Giorgi B.", duration: "60 min", spots: 3, capacity: 10, intensity: "High" },
  ],
  Sat: [
    { time: "09:00", name: "Weekend Burn", coach: "Data D.", duration: "50 min", spots: 5, capacity: 18, intensity: "High" },
    { time: "11:00", name: "Functional Flow", coach: "Salome C.", duration: "50 min", spots: 8, capacity: 14, intensity: "Medium" },
    { time: "13:00", name: "Yoga & Mobility", coach: "Ana E.", duration: "50 min", spots: 13, capacity: 18, intensity: "Low" },
  ],
  Sun: [
    { time: "10:00", name: "Open Gym", coach: "Staff", duration: "All day", spots: 20, capacity: 30, intensity: "Low" },
    { time: "12:00", name: "Recovery & Stretch", coach: "Ana E.", duration: "40 min", spots: 15, capacity: 18, intensity: "Low" },
  ],
};

const intensityStyle: Record<Intensity, string> = {
  Low: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Medium: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  High: "bg-accent/15 text-accent border-accent/30",
};

export function Schedule({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = useState<Day>("Mon");
  const classes = schedule[active];

  return (
    <section id="schedule" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="Weekly schedule"
            title="Find a class that fits"
            description="Drop into any class included with your membership. New times added every season."
          />
        )}

        <Reveal className="flex flex-col gap-8">
          {/* Day selector */}
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
            {days.map((d) => {
              const isActive = active === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setActive(d)}
                  className={`flex flex-col items-center gap-1 rounded-2xl border px-2 py-3 transition-all duration-200 ${
                    isActive
                      ? "border-accent bg-accent text-on-accent"
                      : "border-border bg-surface-2 hover:border-accent/40"
                  }`}
                >
                  <span className="text-sm font-bold">{d}</span>
                  <span
                    className={`text-[11px] ${
                      isActive ? "text-on-accent/80" : "text-muted"
                    }`}
                  >
                    {schedule[d].length} classes
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active day header + legend */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold tracking-tight">
              {dayLabels[active]}
              <span className="ml-2 text-sm font-normal text-muted">
                · {classes.length} sessions
              </span>
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Low
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> Medium
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" /> High
              </span>
            </div>
          </div>

          {/* Class cards */}
          <div className="grid gap-4 lg:grid-cols-2">
            {classes.map((c, i) => {
              const filled = Math.round(
                ((c.capacity - c.spots) / c.capacity) * 100,
              );
              const almostFull = c.spots <= 3;
              return (
                <div
                  key={`${active}-${c.time}-${i}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center rounded-xl border border-border bg-background px-3 py-2">
                        <span className="font-mono text-lg font-bold leading-none text-accent">
                          {c.time}
                        </span>
                        <span className="mt-1 text-[10px] uppercase tracking-wide text-muted">
                          {c.duration}
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold tracking-tight">
                          {c.name}
                        </p>
                        <p className="text-sm text-muted">with {c.coach}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${intensityStyle[c.intensity]}`}
                    >
                      {c.intensity}
                    </span>
                  </div>

                  {/* Capacity + reserve */}
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <div className="flex-1">
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-muted">
                          {c.spots} spots left
                        </span>
                        {almostFull && (
                          <span className="font-semibold text-accent">
                            Almost full
                          </span>
                        )}
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${filled}%` }}
                        />
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
