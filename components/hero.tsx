import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--glow),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 md:pb-32 md:pt-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl md:leading-[1.08] max-w-4xl">
          {site.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-[var(--accent)] sm:text-xl">
          {site.role}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
          {site.headline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-soft)]">
          Backend engineer focused on integrations and financial platforms. I
          work with{" "}
          <span className="text-[var(--text-muted)]">
            Laravel, Go, Python, Kafka, and PostgreSQL
          </span>{" "}
          to ship distributed systems, event-driven pipelines, and APIs that
          stay dependable at scale.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/20 transition hover:brightness-110"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--glass)] px-6 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--glass-hover)]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
