import { getTranslations } from "next-intl/server";
import { siteLinks } from "@/lib/data/site";
import { externalLinkProps } from "@/lib/utils/links";
import { Section, SectionHeading } from "./section";
import { IconGithub, IconLinkedin, IconMail } from "./icons";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <Section
      id="contact"
      className="border-t border-[var(--border)]"
      aria-labelledby="contact-heading"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-8 shadow-[var(--card-shadow)] backdrop-blur-md md:p-12">
        <div className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={siteLinks.linkedin}
            {...externalLinkProps(siteLinks.linkedin)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]/40"
          >
            <IconLinkedin className="h-5 w-5 text-[var(--text-muted)]" />
            {t("linkedin")}
          </a>
          <a
            href={siteLinks.github}
            {...externalLinkProps(siteLinks.github)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]/40"
          >
            <IconGithub className="h-5 w-5 text-[var(--text-muted)]" />
            {t("github")}
          </a>
          <a
            href={siteLinks.email}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/15 transition hover:brightness-110"
          >
            <IconMail className="h-5 w-5" />
            {t("email")}
          </a>
        </div>
      </div>
    </Section>
  );
}
