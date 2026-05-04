import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-[var(--text-muted)] sm:px-6 lg:px-8">
        {t("line")}
      </div>
    </footer>
  );
}
