import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <FeatureRow
        eyebrow="Welcome"
        title="This is where Rustavi gets stronger"
        body={
          <>
            <p>
              RITM Fitness Club is a modern gym built for people who take their
              training seriously. Premium equipment, expert coaches and a
              community that pushes you forward — every single day.
            </p>
            <p>
              Whether you&apos;re chasing your first pull-up or a new personal
              best, you&apos;ll find the space, the support and the energy to get
              there.
            </p>
          </>
        }
        imageLabel="Gym interior photo"
        meta={[
          { label: "Members", value: "1,200+" },
          { label: "Coaches", value: "15+" },
          { label: "Open", value: "24 / 7" },
        ]}
        cta={{ label: "About the club", href: "/about" }}
      />

      <FeatureRow
        eyebrow="Programs"
        title="Train with real purpose"
        body={
          <>
            <p>
              From heavy strength work to high-intensity conditioning, yoga and
              personal training — every program is built to move you forward,
              safely and effectively.
            </p>
            <p>
              Not sure where to start? Our coaches will match you with the right
              plan for your level and your goals.
            </p>
          </>
        }
        imageLabel="Training photo"
        reverse
        surface
        cta={{ label: "Explore programs", href: "/programs" }}
      />

      <FeatureRow
        eyebrow="Schedule"
        title="A class for every day"
        body={
          <>
            <p>
              Early-morning HIIT, lunchtime express sessions, late-night lifting
              and weekend burns — our weekly timetable is built around real
              life.
            </p>
            <p>
              Every class is included with your membership. Just pick a time and
              reserve your spot.
            </p>
          </>
        }
        imageLabel="Group class photo"
        meta={[
          { label: "Classes / week", value: "50+" },
          { label: "Levels", value: "All" },
        ]}
        cta={{ label: "View schedule", href: "/schedule" }}
      />

      <FeatureRow
        eyebrow="Membership"
        title="Find the plan that fits"
        body={
          <>
            <p>
              Simple, flexible memberships with no joining fee and no long
              contracts. Freeze anytime, cancel anytime — no strings attached.
            </p>
            <p>
              From the essentials to fully personalised coaching, there&apos;s a
              plan that matches your ambition.
            </p>
          </>
        }
        imageLabel="Membership photo"
        reverse
        surface
        cta={{ label: "View memberships", href: "/membership" }}
      />

      <CTA />
    </>
  );
}
