import { ProjectCard } from "./ProjectCard";
import type { Project } from "../types/project";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

export function ProjectGrid({ items }: { items: Project[] }) {
  const { locale } = useLocale();

  if (items.length === 0) {
    return <p className="text-muted">{label(locale, ui.projects.empty)}</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
