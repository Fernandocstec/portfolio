export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  repoHref: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Fintech Payment Platform",
    description:
      "A backend-oriented payment platform integrating PIX with blockchain settlement using USDT on TRON.",
    tech: [
      "Laravel",
      "Go",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "TRON",
      "REST APIs",
    ],
    highlights: [
      "Microservices architecture",
      "Event-driven processing",
      "Ledger and wallet flows",
      "PIX and blockchain integration",
    ],
    repoHref: "#",
  },
  {
    title: "Event-Driven Ledger System",
    description:
      "A Kafka-based financial ledger simulation focused on idempotency, asynchronous processing and reliable event consumption.",
    tech: ["Go", "Kafka", "PostgreSQL", "Docker"],
    highlights: [
      "Event consumers",
      "Retry and DLQ strategy",
      "Idempotent transactions",
      "High-throughput processing",
    ],
    repoHref: "#",
  },
  {
    title: "ERP Integration & Automation Hub",
    description:
      "A system integration layer designed to connect ERP platforms, external APIs and reporting environments.",
    tech: ["Laravel", "PostgreSQL", "REST APIs", "SOAP", "SQL"],
    highlights: [
      "ERP customization",
      "External API integrations",
      "SQL reporting",
      "Workflow automation",
    ],
    repoHref: "#",
  },
];
