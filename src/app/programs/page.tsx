import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgramsShowcase } from "@/components/sections/ProgramsShowcase";

export const metadata: Metadata = {
  title: "Programs — RITM Fitness Club",
  description:
    "Strength, HIIT, functional training, CrossFit, yoga and personal training — find the program that fits your goals.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Programs for
            <br />
            <span className="text-accent-strong">every goal</span>
          </>
        }
        description="Whether you're starting out or chasing a personal best, there's a program built to move you forward."
        image="/heroes/programs.jpg"
        cta={{ label: "View schedule", href: "/schedule" }}
      />
      <ProgramsShowcase />
    </>
  );
}
