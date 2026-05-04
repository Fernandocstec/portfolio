import { Section } from "./section";

const copy =
  "Currently working on payment systems integrating PIX with blockchain (USDT/TRON), focusing on scalable backend architecture and event-driven systems.";

export function CurrentFocus() {
  return (
    <Section id="focus" aria-labelledby="focus-heading">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--glass)] to-[var(--surface-elevated)] p-8 shadow-[var(--card-shadow)] backdrop-blur-md md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl" />
        <p className="text-sm font-medium tracking-wide text-[var(--accent)] uppercase mb-3 relative">
          Current focus
        </p>
        <h2
          id="focus-heading"
          className="relative max-w-3xl text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl leading-snug"
        >
          {copy}
        </h2>
      </div>
    </Section>
  );
}
