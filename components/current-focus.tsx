import { getTranslations } from "next-intl/server";
import { Section } from "./section";

export async function CurrentFocus() {
  const t = await getTranslations("focus");

  return (
    <Section id="focus" aria-labelledby="focus-heading">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--glass)] to-[var(--surface-elevated)] p-8 shadow-[var(--card-shadow)] backdrop-blur-md md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl" />
        <p className="relative mb-3 text-sm font-medium uppercase tracking-wide text-[var(--accent)]">
          {t("eyebrow")}
        </p>
        <h2
          id="focus-heading"
          className="relative max-w-3xl text-xl font-semibold leading-snug tracking-tight text-[var(--text-primary)] sm:text-2xl"
        >
          {t("body")}
        </h2>
      </div>
    </Section>
  );
}
