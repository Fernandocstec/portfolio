import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { CurrentFocus } from "@/components/current-focus";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <TechStack />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
