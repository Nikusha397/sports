import { ReactNode } from "react";

export function ImagePlaceholder({
  label = "Image",
  className = "",
  rounded = "rounded-2xl",
  children,
}: {
  label?: string;
  className?: string;
  rounded?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-border bg-surface-2 ${rounded} ${className}`}
      aria-label={`${label} placeholder`}
      role="img"
    >
      {/* subtle diagonal pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-muted">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
