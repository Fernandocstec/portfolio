export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "Backend Systems",
    description:
      "Services and APIs designed for clarity, observability, and growth under real traffic.",
  },
  {
    title: "API & System Integrations",
    description:
      "REST and SOAP bridges between ERPs, partners, and internal platforms with stable contracts.",
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Kafka-backed pipelines with reliable consumption, retries, and operational guardrails.",
  },
  {
    title: "Fintech & Payment Systems",
    description:
      "Ledger flows, wallets, and regulated rails with emphasis on correctness and auditability.",
  },
  {
    title: "ERP Customization",
    description:
      "Tailored modules and data paths that align enterprise processes with external ecosystems.",
  },
  {
    title: "Process Automation",
    description:
      "Workflows that remove manual handoffs while keeping humans in the loop where it matters.",
  },
];
