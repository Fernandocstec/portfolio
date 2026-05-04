import { capabilities } from "@/lib/data/capabilities";
import { Section, SectionHeading } from "./section";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      className="border-t border-[var(--border)] bg-[var(--surface-subtle)]"
      aria-labelledby="capabilities-heading"
    >
      <SectionHeading
        id="capabilities-heading"
        eyebrow="Scope"
        title="What I Build"
        description="End-to-end backend and integration work—from first API contract to production operations."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <li key={item.title}>
            <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-md transition duration-200 hover:border-[var(--accent)]/25 hover:shadow-[var(--card-shadow-hover)]">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
