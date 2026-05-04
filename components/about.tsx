import { getTranslations } from "next-intl/server";
import { Section, SectionHeading } from "./section";

export async function About() {
  const t = await getTranslations("about");

  return (
    <Section id="about" aria-labelledby="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="max-w-3xl space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-md sm:p-8 md:p-10">
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-[17px]">
          {t("p1")}
        </p>
        <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-[17px]">
          {t("p2")}
        </p>
      </div>
    </Section>
  );
}
