import { getTranslations } from "next-intl/server";
import { Section, SectionHeading } from "./section";

type CapabilityItem = {
  title: string;
  description: string;
};

export async function Capabilities() {
  const t = await getTranslations("capabilities");
  const items = t.raw("items") as CapabilityItem[];

  return (
    <Section
      id="capabilities"
      className="border-t border-[var(--border)] bg-[var(--surface-subtle)]"
      aria-labelledby="capabilities-heading"
    >
      <SectionHeading
        id="capabilities-heading"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title}>
            <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-md transition duration-200 hover:border-[var(--accent)]/25 hover:shadow-[var(--card-shadow-hover)]">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
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
