import { useMemo, useState } from "react";
import { ProjectFilter } from "../components/ProjectFilter";
import { ProjectGrid } from "../components/ProjectGrid";
import { ProjectSearch } from "../components/ProjectSearch";
import { getUsedCategories, projects } from "../data/projects";
import { categoryLabels } from "../data/skills";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { matchesQuery, tx } from "../lib/text";
import type { CategoryId } from "../types/project";

export function ProjectsPage() {
  const { locale } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const used = getUsedCategories();

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryOk = category === "all" || project.categories.includes(category);
      if (!categoryOk) return false;
      if (!query.trim()) return true;
      const haystack = [
        tx(project.title, locale),
        tx(project.description, locale),
        project.technologies.join(" "),
        project.categories.map((id) => tx(categoryLabels[id], locale)).join(" "),
        project.repoName,
      ].join(" ");
      return matchesQuery(haystack, query);
    });
  }, [category, locale, query]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold">{label(locale, ui.projects.title)}</h1>
      <p className="mt-2 text-muted" aria-live="polite">
        {filtered.length} / {projects.length} {label(locale, ui.projects.count)}
      </p>
      <div className="mt-6 space-y-4">
        <ProjectSearch value={query} onChange={setQuery} />
        <ProjectFilter used={used} active={category} onChange={setCategory} />
      </div>
      <div className="mt-8 motion-safe:transition-opacity">
        <ProjectGrid items={filtered} />
      </div>
    </section>
  );
}
