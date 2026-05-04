"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

function btnClass(active: boolean) {
  return [
    "rounded-md px-2.5 py-1 transition-colors duration-200",
    active
      ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
  ].join(" ");
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("language");

  return (
    <div
      className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--glass)] p-0.5 text-xs font-semibold"
      role="group"
      aria-label={t("label")}
    >
      <Link
        href={pathname}
        locale="pt"
        className={btnClass(locale === "pt")}
        aria-current={locale === "pt" ? "true" : undefined}
      >
        {t("pt")}
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={btnClass(locale === "en")}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {t("en")}
      </Link>
    </div>
  );
}
