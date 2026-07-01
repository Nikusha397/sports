import { FeatureRow } from "../ui/FeatureRow";

type Program = {
  title: string;
  description: string;
  tag: string;
  level: string;
  duration: string;
};

const programs: Program[] = [
  {
    title: "Strength & Power",
    description:
      "Build raw strength with guided free-weight and compound lifting programs, progressively overloaded week to week under expert supervision.",
    tag: "Strength",
    level: "All levels",
    duration: "60 min",
  },
  {
    title: "HIIT & Conditioning",
    description:
      "High-intensity interval sessions that torch calories, spike your heart rate and build serious endurance — fast, fun and effective.",
    tag: "Cardio",
    level: "Intermediate",
    duration: "45 min",
  },
  {
    title: "Functional Training",
    description:
      "Move better in daily life with mobility, balance and core-driven workouts built around real, natural movement patterns.",
    tag: "Mobility",
    level: "All levels",
    duration: "50 min",
  },
  {
    title: "CrossFit",
    description:
      "Varied, high-energy WODs in a team setting — constantly changing, always challenging, and backed by a tight, motivating community.",
    tag: "Community",
    level: "Intermediate",
    duration: "60 min",
  },
  {
    title: "Yoga & Recovery",
    description:
      "Restore, stretch and breathe with classes designed to help your body recover, stay mobile and remain injury-free between hard sessions.",
    tag: "Recovery",
    level: "All levels",
    duration: "50 min",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching with a plan built entirely around your body, your schedule and your goals — for the fastest, safest results.",
    tag: "1-on-1",
    level: "Tailored",
    duration: "60 min",
  },
];

export function ProgramsShowcase() {
  return (
    <>
      {programs.map((p, i) => (
        <FeatureRow
          key={p.title}
          eyebrow={p.tag}
          title={p.title}
          body={<p>{p.description}</p>}
          imageLabel={`${p.title} photo`}
          reverse={i % 2 === 1}
          surface={i % 2 === 1}
          meta={[
            { label: "Duration", value: p.duration },
            { label: "Level", value: p.level },
          ]}
          cta={{ label: "See class times", href: "/schedule" }}
        />
      ))}
    </>
  );
}
