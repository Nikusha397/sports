import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₾60",
    period: "/ month",
    description: "Everything you need to build a consistent routine.",
    features: [
      "Full gym floor access",
      "Locker & shower facilities",
      "2 group classes / week",
      "Mobile workout tracking",
    ],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: "₾110",
    period: "/ month",
    description: "Our most popular plan for serious, steady progress.",
    features: [
      "Unlimited gym & class access",
      "1 personal training session / month",
      "Nutrition & recovery guidance",
      "Guest passes (2 / month)",
      "Priority class booking",
    ],
    featured: true,
    cta: "Choose Pro",
  },
  {
    name: "Elite",
    price: "₾190",
    period: "/ month",
    description: "Fully personalised coaching and premium perks.",
    features: [
      "Everything in Pro",
      "Weekly personal training",
      "Custom training & meal plan",
      "Body composition analysis",
      "24/7 dedicated access",
    ],
    cta: "Choose Elite",
  },
];

const perks: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "No joining fee",
    description: "Start today with zero sign-up cost.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" />
      </>
    ),
  },
  {
    title: "Freeze anytime",
    description: "Pause your plan while you travel.",
    icon: (
      <>
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </>
    ),
  },
  {
    title: "Free reassessment",
    description: "Track progress with regular check-ins.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </>
    ),
  },
  {
    title: "Member app",
    description: "Book classes and log workouts on the go.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent-strong"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Membership({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section
      id="membership"
      className="scroll-mt-24 bg-surface py-20 md:py-28"
    >
      <Container className="flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="Membership"
            title="Simple, flexible plans"
            description="No hidden fees. Cancel anytime. Choose the plan that matches your ambition."
          />
        )}

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col gap-6 rounded-3xl border p-7 transition-all duration-300 ${
                  plan.featured
                    ? "border-accent bg-surface-2 shadow-xl shadow-accent/10 lg:-translate-y-3"
                    : "border-border bg-surface-2 hover:-translate-y-1 hover:border-accent/40"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-muted">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-accent text-on-accent hover:bg-accent-strong"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Perks — every plan includes */}
        <Reveal>
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                Every membership includes
              </h3>
              <p className="text-sm text-muted">
                No joining fee. No long contracts. Just everything you need to
                train.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((perk) => (
                <div key={perk.title} className="flex flex-col items-center gap-3 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {perk.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      {perk.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
