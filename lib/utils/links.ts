export function externalLinkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return {
      target: "_blank" as const,
      rel: "noopener noreferrer" as const,
    };
  }
  return {};
}
