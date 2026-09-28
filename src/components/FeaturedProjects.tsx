import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../data/projects";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const { locale } = useLocale();
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">{label(locale, ui.featured.title)}</p>
          <p className="mt-2 max-w-2xl text-muted">{label(locale, ui.featured.subtitle)}</p>
        </div>
        <Link to="/projects" className="text-sm font-semibold text-accent">
          {label(locale, ui.featured.viewAll)}
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
