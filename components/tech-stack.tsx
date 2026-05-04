import { techStack } from "@/lib/data/stack";
import { Section, SectionHeading } from "./section";

export function TechStack() {
  return (
    <Section
      id="stack"
      className="border-t border-[var(--border)] bg-[var(--surface-subtle)]"
      aria-labelledby="stack-heading"
    >
      <SectionHeading
        id="stack-heading"
        eyebrow="Toolkit"
        title="Tech Stack"
        description="Languages, platforms, and integration surfaces I use in production-grade work."
      />
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-2xl border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] shadow-sm backdrop-blur-sm transition hover:border-[var(--accent)]/30 hover:text-[var(--text-primary)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Section>
  );
}
