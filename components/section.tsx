import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className = "",
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-24 py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-[var(--accent)] uppercase mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
