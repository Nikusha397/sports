"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

type Coach = {
  name: string;
  role: string;
  focus: string;
  experience: string;
  clients: string;
  rating: string;
  specialties: string[];
  certifications: string[];
  bio: string;
};

const coaches: Coach[] = [
  {
    name: "Nika A.",
    role: "HIIT & Conditioning",
    focus: "Endurance",
    experience: "7 yrs",
    clients: "280+",
    rating: "4.9",
    specialties: ["HIIT", "Fat loss", "Endurance", "Circuit training"],
    certifications: ["ACE Certified", "TRX Level 2"],
    bio: "Nika turns high-intensity training into something you'll actually look forward to. His sessions are fast, fun and built to push your cardio to the next level.",
  },
  {
    name: "Giorgi B.",
    role: "Head Strength Coach",
    focus: "Powerlifting",
    experience: "12 yrs",
    clients: "500+",
    rating: "5.0",
    specialties: ["Powerlifting", "Strength", "Hypertrophy", "Technique"],
    certifications: ["NSCA CSCS", "IPF Coach"],
    bio: "With over a decade under the bar, Giorgi builds serious strength safely. From your first deadlift to a competition platform, he's coached it all.",
  },
  {
    name: "Salome C.",
    role: "Functional Trainer",
    focus: "Mobility",
    experience: "6 yrs",
    clients: "240+",
    rating: "4.8",
    specialties: ["Functional", "Mobility", "Core", "Rehab-friendly"],
    certifications: ["NASM CPT", "FMS Level 2"],
    bio: "Salome helps you move better in everyday life. Her functional sessions rebuild strong, pain-free movement from the ground up.",
  },
  {
    name: "Ana E.",
    role: "Yoga & Recovery",
    focus: "Flexibility",
    experience: "9 yrs",
    clients: "360+",
    rating: "5.0",
    specialties: ["Vinyasa", "Mobility", "Breathwork", "Recovery"],
    certifications: ["RYT-500", "Mobility Specialist"],
    bio: "Ana's recovery and yoga classes are the perfect counterbalance to hard training — restore, stretch and breathe your way back to full capacity.",
  },
  {
    name: "Data D.",
    role: "CrossFit Coach",
    focus: "Conditioning",
    experience: "8 yrs",
    clients: "310+",
    rating: "4.9",
    specialties: ["CrossFit", "Olympic lifts", "WODs", "Conditioning"],
    certifications: ["CrossFit L2", "USAW Level 1"],
    bio: "Data brings relentless energy to every WOD. Expect varied, challenging sessions that build engine, skill and a tight community around you.",
  },
  {
    name: "Mari K.",
    role: "Personal Trainer",
    focus: "Body composition",
    experience: "5 yrs",
    clients: "190+",
    rating: "4.9",
    specialties: ["Weight loss", "Toning", "Nutrition", "Habit coaching"],
    certifications: ["NASM CPT", "Precision Nutrition L1"],
    bio: "Mari specialises in sustainable transformations — pairing smart training with realistic nutrition so results actually last.",
  },
  {
    name: "Luka T.",
    role: "Strength & Power",
    focus: "Athletic performance",
    experience: "10 yrs",
    clients: "420+",
    rating: "5.0",
    specialties: ["Power", "Speed", "Athletic prep", "Plyometrics"],
    certifications: ["NSCA CSCS", "Sports Perf. Coach"],
    bio: "Luka trains athletes and weekend warriors alike, developing explosive power and speed with proven performance programming.",
  },
  {
    name: "Tako M.",
    role: "Wellness Coach",
    focus: "Beginners",
    experience: "4 yrs",
    clients: "150+",
    rating: "4.8",
    specialties: ["Beginners", "Confidence", "Full-body", "Accountability"],
    certifications: ["ACE CPT", "Wellness Coach"],
    bio: "Tako makes starting out feel easy. If you're new to the gym, she'll guide you patiently and build the confidence to keep coming back.",
  },
];

function CoachModal({ coach, onClose }: { coach: Coach; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${coach.name} — ${coach.role}`}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted backdrop-blur transition-colors hover:text-foreground"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid gap-0 overflow-y-auto md:grid-cols-[0.9fr_1.1fr]">
          {/* Photo */}
          <div className="relative min-h-[220px]">
            <ImagePlaceholder
              label={`${coach.name} photo`}
              rounded="rounded-none"
              className="h-full min-h-[220px] w-full"
            />
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">
              {coach.focus}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{coach.name}</h3>
              <p className="text-muted">{coach.role}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: coach.experience, l: "Experience" },
                { v: coach.clients, l: "Clients" },
                { v: coach.rating, l: "Rating" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col rounded-xl border border-border bg-background px-3 py-2.5 text-center"
                >
                  <span className="text-lg font-bold">{s.v}</span>
                  <span className="text-[11px] text-muted">{s.l}</span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-muted">{coach.bio}</p>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Specialties
              </span>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Certifications
              </span>
              <div className="flex flex-wrap gap-2">
                {coach.certifications.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-1.5 text-sm text-muted"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-1 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              >
                Book a visit
              </Link>
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Hire as coach
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Coaches({ showHeading = true }: { showHeading?: boolean }) {
  const [selected, setSelected] = useState<Coach | null>(null);

  return (
    <section id="coaches" className="scroll-mt-24 py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="The team"
            title="Coaches who care"
            description="Certified, experienced, and genuinely invested in your progress — meet the people behind every session."
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setSelected(c)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left"
              >
                <ImagePlaceholder
                  label="Coach photo"
                  rounded="rounded-none"
                  className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.05]"
                />

                {/* RITM logo, top-left */}
                <span className="absolute left-4 top-4 z-10">
                  <Image
                    src="/ritm-logo.png"
                    alt="RITM"
                    width={44}
                    height={44}
                    className="h-9 w-auto opacity-90 invert"
                  />
                </span>

                {/* focus chip, top-right */}
                <span className="absolute right-4 top-4 z-10 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {c.focus}
                </span>

                {/* bottom overlay with name + role */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 pt-16">
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {c.name}
                  </h3>
                  <p className="text-sm text-white/70">{c.role}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View profile
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selected && (
          <CoachModal coach={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
