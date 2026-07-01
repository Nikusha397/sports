import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Membership } from "@/components/sections/Membership";

export const metadata: Metadata = {
  title: "Membership — RITM Fitness Club",
  description:
    "Simple, flexible membership plans with no hidden fees. Cancel anytime.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={
          <>
            Simple,
            <br />
            <span className="text-accent-strong">flexible plans</span>
          </>
        }
        description="No hidden fees. No long contracts. Just everything you need to train — pick the plan that matches your ambition."
        image="/heroes/membership.jpg"
        cta={{ label: "Talk to us", href: "/contact" }}
      />
      <Membership showHeading={false} />
    </>
  );
}
