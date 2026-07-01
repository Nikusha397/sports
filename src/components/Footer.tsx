import Link from "next/link";
import { Container } from "./ui/Container";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Programs", href: "/programs" },
      { label: "Schedule", href: "/schedule" },
      { label: "Membership", href: "/membership" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Club",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Visit us", href: "/contact" },
      { label: "Home", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center font-bold tracking-tight"
            aria-label="RITM Fitness Club — home"
          >
            <span className="text-2xl">
              RITM<span className="text-accent-strong">.</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            RITM Fitness Club — a premium training space in Rustavi built to help
            you find your rhythm and reach your goals.
          </p>
          <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted">
            <p>
              <span className="font-medium text-foreground">Location:</span>{" "}
              Rustavi, Georgia
            </p>
            <p>
              <span className="font-medium text-foreground">Phone:</span> +995
              000 00 00 00
            </p>
            <p>
              <span className="font-medium text-foreground">Hours:</span>{" "}
              Mon–Sun · 07:00–23:00
            </p>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-tight">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} RITM Fitness Club. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a
              href="https://www.facebook.com/ritmfitnessclub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Facebook
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
