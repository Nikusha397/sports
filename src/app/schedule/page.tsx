import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { Schedule } from "@/components/sections/Schedule";

export const metadata: Metadata = {
  title: "Schedule — RITM Fitness Club",
  description:
    "Our weekly class timetable. Drop into any class included with your membership.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title={
          <>
            Find your
            <br />
            <span className="text-accent-strong">class</span>
          </>
        }
        description="A full week of classes for every level and every goal — reserve your spot in seconds."
        image="/heroes/schedule.jpg"
        cta={{ label: "Contact us", href: "/contact" }}
      />

      <FeatureRow
        eyebrow="Weekly timetable"
        title="Train on your schedule"
        body={
          <>
            <p>
              From early-morning HIIT to late-night lifting, our timetable is
              built around real life. Every class is included with your
              membership — just pick a time that fits and show up.
            </p>
            <p>
              New sessions are added every season, and popular classes fill up
              fast, so reserve your spot ahead of time.
            </p>
          </>
        }
        imageLabel="Group class photo"
        meta={[
          { label: "Classes / week", value: "50+" },
          { label: "Open", value: "24 / 7" },
        ]}
      />

      <Schedule showHeading={false} />
    </>
  );
}
