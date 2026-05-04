import { getTranslations } from "next-intl/server";
import { projectRepoHref } from "@/lib/data/site";
import { externalLinkProps } from "@/lib/utils/links";
import { Section, SectionHeading } from "./section";

type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
};

export async function Projects() {
  const t = await getTranslations("projects");
  const items = t.raw("items") as ProjectItem[];

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <ul className="grid gap-8 lg:grid-cols-3">
        {items.map((project) => (
          <li key={project.title}>
            <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-md transition duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--card-shadow-hover)]">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 text-xs font-medium text-[var(--text-soft)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 border-t border-[var(--border)] pt-5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={projectRepoHref}
                {...externalLinkProps(projectRepoHref)}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-transparent text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              >
                {t("privateRepo")}
              </a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
