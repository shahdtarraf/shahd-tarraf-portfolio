import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { GitHubSection } from "../components/GitHubSection";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <About />
      <GitHubSection />
      <Contact />
    </>
  );
}
