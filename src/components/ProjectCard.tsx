import { Link } from "react-router-dom";
import { categoryLabels } from "../data/skills";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";
import type { Project } from "../types/project";

function Cover({ project }: { project: Project }) {
  const { locale } = useLocale();
  const image = project.images[0];

  if (image) {
    return (
      <img
        src={image.src}
        alt={tx(image.alt, locale)}
        className="h-44 w-full bg-paper object-cover"
        loading="lazy"
      />
    );
  }

  const category = project.categories[0];
  return (
    <div className="grid h-44 place-items-end bg-[#111827] p-5 text-white" aria-hidden="true">
      <p className="text-xs tracking-wide text-[#FF7A00]">
        {category ? tx(categoryLabels[category], locale) : "Python"}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLocale();
  const primary = project.categories[0];

  return (
    <article className="card-hover flex h-full flex-col border border-line bg-card">
      <Cover project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          {primary ? (
            <span className="text-[11px] font-semibold tracking-wide text-accent">
              {tx(categoryLabels[primary], locale)}
            </span>
          ) : (
            <span />
          )}
          <span className="text-[11px] text-muted">{label(locale, ui.status[project.status])}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold">
          <Link to={`/projects/${project.slug}`} className="hover:text-accent">
            {tx(project.title, locale)}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">{tx(project.description, locale)}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech} className="border border-line px-2 py-1 text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-[#111827] px-3 py-2 text-white hover:bg-accent hover:text-[#111827] dark:bg-accent dark:text-[#111827]"
          >
            {label(locale, ui.projects.github)}
          </a>
          {project.demo && project.linkKind === "api" ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="border border-line px-3 py-2 hover:border-accent">
              {label(locale, ui.projects.liveApi)}
            </a>
          ) : null}
          {project.demo && project.linkKind === "demo" ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="border border-line px-3 py-2 hover:border-accent">
              {label(locale, ui.projects.demo)}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
