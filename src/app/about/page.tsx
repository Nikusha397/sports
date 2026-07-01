import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { Coaches } from "@/components/sections/Coaches";
import { Gallery } from "@/components/sections/Gallery";
import { Bmi } from "@/components/sections/Bmi";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "About — RITM Fitness Club",
  description:
    "Learn about RITM Fitness Club in Rustavi — our story, our space, our coaches, and what makes us different.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Welcome to
            <br />
            <span className="text-accent-strong">RITM</span>
          </>
        }
        description="A premium training space in the heart of Rustavi — built around your goals, your progress and your community."
        image="/heroes/about.jpg"
        cta={{ label: "See memberships", href: "/membership" }}
      />

      <FeatureRow
        eyebrow="Introduction"
        title="The future of fitness in Rustavi"
        body={
          <>
            <p>
              Welcome to RITM Fitness Club — a modern gym built for people who
              take their training seriously. Our state-of-the-art facility is
              equipped with the latest equipment, experienced coaches and a full
              range of classes to match your goals.
            </p>
            <p>
              Whether you&apos;re a seasoned lifter or just starting out, RITM has
              something for everyone. Join a supportive community dedicated to
              getting stronger and living better — every single day.
            </p>
          </>
        }
        imageLabel="Training floor photo"
        meta={[
          { label: "Open", value: "24 / 7" },
          { label: "Members", value: "1,200+" },
          { label: "Coaches", value: "15+" },
        ]}
        cta={{ label: "Explore programs", href: "/programs" }}
      />

      <FeatureRow
        eyebrow="About us"
        title="Passion, power and progress"
        body={
          <>
            <p>
              Our story is one of passion, empowerment and transformation. RITM
              has grown from a simple idea into a home for everyone who values
              hard work, discipline and results.
            </p>
            <p>
              We&apos;re not just a gym — we&apos;re a community united by a shared
              commitment to health and strength. Our experienced trainers,
              modern equipment and diverse classes are all built to help you
              reach your goals and keep coming back.
            </p>
          </>
        }
        imageLabel="Reception photo"
        reverse
        surface
      />

      <Coaches />
      <Gallery showHeading={false} />
      <Bmi />
      <Faq />
    </>
  );
}
