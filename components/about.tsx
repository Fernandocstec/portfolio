import { Section, SectionHeading } from "./section";

const copy = [
  "Backend & Integration Engineer focused on scalable systems and financial technology. I design backends in Laravel, Go, and Python, pairing distributed systems with Kafka and PostgreSQL for throughput you can reason about in incidents—not only in diagrams.",
  "Shipped work spans ERP customization, real-time operations, and integrations over REST and SOAP, with automation that replaces fragile spreadsheets. Today I build payment infrastructure that connects PIX with blockchain settlement (USDT on TRON), prioritizing ledger integrity, async processing, and backends that stay boring under load.",
];

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="Profile"
        title="About"
        description="Systems-first engineering: contracts, queues, and data paths you can operate."
      />
      <div className="max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6 shadow-[var(--card-shadow)] backdrop-blur-md sm:p-8 md:p-10 space-y-5">
        {copy.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-relaxed text-[var(--text-muted)] sm:text-[17px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
