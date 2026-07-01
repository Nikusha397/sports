import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 hover:-translate-y-0.5",
  accent:
    "bg-accent text-on-accent hover:bg-accent-strong hover:-translate-y-0.5 shadow-sm shadow-accent/20",
  ghost:
    "border border-border bg-transparent text-foreground hover:bg-surface",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("#");

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
