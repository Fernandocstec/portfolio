"use client";

import { useEffect, useState } from "react";
import { siteLinks } from "@/lib/data/site";
import { externalLinkProps } from "@/lib/utils/links";
import { IconClose, IconGithub, IconLinkedin, IconMail, IconMenu } from "./icons";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

function navLinkClass() {
  return "text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "border-[var(--border)] bg-[var(--header-bg-scrolled)] shadow-[var(--header-shadow)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
        >
          FC<span className="text-[var(--text-muted)]">.</span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass()}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteLinks.github}
            {...externalLinkProps(siteLinks.github)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--glass)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            aria-label="GitHub"
          >
            <IconGithub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={siteLinks.linkedin}
            {...externalLinkProps(siteLinks.linkedin)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--glass)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex h-9 items-center gap-2 rounded-lg bg-[var(--accent)] px-3.5 text-sm font-medium text-[var(--accent-foreground)] shadow-sm transition hover:brightness-110"
          >
            <IconMail className="h-4 w-4" />
            Contact
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--glass)] text-[var(--text-primary)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <IconClose className="h-5 w-5" />
          ) : (
            <IconMenu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--surface-elevated)]/95 backdrop-blur-xl md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--glass)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">
              <a
                href={siteLinks.github}
                {...externalLinkProps(siteLinks.github)}
                className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-sm font-medium text-[var(--text-primary)]"
                onClick={() => setOpen(false)}
              >
                <IconGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteLinks.linkedin}
                {...externalLinkProps(siteLinks.linkedin)}
                className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-sm font-medium text-[var(--text-primary)]"
                onClick={() => setOpen(false)}
              >
                <IconLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-medium text-[var(--accent-foreground)]"
                onClick={() => setOpen(false)}
              >
                <IconMail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
