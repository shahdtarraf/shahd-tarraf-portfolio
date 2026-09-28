import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { caseStudies } from "../data/caseStudies";
import { getProjectBySlug, projects } from "../data/projects";
import { categoryLabels } from "../data/skills";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";
import type { Project } from "../types/project";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ResourceLinks({ project }: { project: Project }) {
  const { locale } = useLocale();

  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <a
        className="bg-[#111827] px-4 py-2 font-semibold text-white hover:bg-accent hover:text-[#111827] dark:bg-accent dark:text-[#111827]"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        {label(locale, ui.projects.github)}
      </a>
      {project.demo && project.linkKind === "api" ? (
        <>
          <a className="border border-line px-4 py-2 font-semibold hover:border-accent" href={project.demo} target="_blank" rel="noreferrer">
            {label(locale, ui.projects.liveApi)}
          </a>
          <a className="border border-line px-4 py-2 text-muted hover:border-accent" href={project.demo} target="_blank" rel="noreferrer">
            {label(locale, ui.projects.apiHealth)}
          </a>
        </>
      ) : null}
      {project.demo && project.linkKind === "demo" ? (
        <a className="border border-line px-4 py-2 font-semibold hover:border-accent" href={project.demo} target="_blank" rel="noreferrer">
          {label(locale, ui.projects.demo)}
        </a>
      ) : null}
    </div>
  );
}

export function ProjectDetails() {
  const { slug } = useParams();
  const { locale } = useLocale();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold">{label(locale, ui.details.notFound)}</h1>
        <Link to="/projects" className="mt-4 inline-block text-accent">
          {label(locale, ui.details.back)}
        </Link>
      </section>
    );
  }

  const study = caseStudies[project.slug];
  const primary = project.categories[0];
  const related = (project.relatedSlugs ?? [])
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter((item): item is Project => item !== undefined);
  const hasStack = Boolean(
    project.stack.frontend?.length ||
      project.stack.backend?.length ||
      project.stack.aiml?.length ||
      project.stack.database?.length ||
      project.stack.deployment?.length,
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/projects" className="text-sm text-accent">
        {label(locale, ui.details.back)}
      </Link>
      <header className="mt-6 border-b border-line pb-8">
        {primary ? (
          <p className="kicker">{tx(categoryLabels[primary], locale)}</p>
        ) : null}
        <h1 className="mt-2 font-display text-4xl font-bold">{tx(project.title, locale)}</h1>
        <p className="mt-3 text-sm text-muted">
          {label(locale, ui.details.status)}: {label(locale, ui.status[project.status])}
        </p>
        <div className="mt-6">
          <ResourceLinks project={project} />
        </div>
      </header>

      {tx(project.description, locale) ? (
        <Block title={label(locale, ui.details.overview)}>
          <p className="max-w-3xl text-lg leading-8">{tx(project.description, locale)}</p>
        </Block>
      ) : null}

      {tx(project.problem, locale) ? (
        <Block title={label(locale, ui.details.problem)}>
          <p className="leading-7 text-muted">{tx(project.problem, locale)}</p>
        </Block>
      ) : null}

      {tx(project.solution, locale) ? (
        <Block title={label(locale, ui.details.solution)}>
          <p className="leading-7">{tx(project.solution, locale)}</p>
        </Block>
      ) : null}

      {project.features.length > 0 ? (
        <Block title={label(locale, ui.details.features)}>
          <ul className="list-disc space-y-2 ps-5">
            {project.features.map((feature) => (
              <li key={feature.en}>{tx(feature, locale)}</li>
            ))}
          </ul>
        </Block>
      ) : null}

      {hasStack ? (
        <Block title={label(locale, ui.details.stack)}>
          <dl className="grid gap-4 md:grid-cols-2">
            {project.stack.frontend?.length ? (
              <div className="border border-line bg-card p-4">
                <dt className="text-xs uppercase text-muted">{label(locale, ui.details.frontend)}</dt>
                <dd className="mt-1">{project.stack.frontend.join(", ")}</dd>
              </div>
            ) : null}
            {project.stack.backend?.length ? (
              <div className="border border-line bg-card p-4">
                <dt className="text-xs uppercase text-muted">{label(locale, ui.details.backend)}</dt>
                <dd className="mt-1">{project.stack.backend.join(", ")}</dd>
              </div>
            ) : null}
            {project.stack.aiml?.length ? (
              <div className="border border-line bg-card p-4">
                <dt className="text-xs uppercase text-muted">{label(locale, ui.details.aiml)}</dt>
                <dd className="mt-1">{project.stack.aiml.join(", ")}</dd>
              </div>
            ) : null}
            {project.stack.database?.length ? (
              <div className="border border-line bg-card p-4">
                <dt className="text-xs uppercase text-muted">{label(locale, ui.details.database)}</dt>
                <dd className="mt-1">{project.stack.database.join(", ")}</dd>
              </div>
            ) : null}
            {project.stack.deployment?.length ? (
              <div className="border border-line bg-card p-4">
                <dt className="text-xs uppercase text-muted">{label(locale, ui.details.deployment)}</dt>
                <dd className="mt-1">{project.stack.deployment.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
          {project.technologies.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="border border-line px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </Block>
      ) : null}

      {project.architecture.length > 0 ? (
        <Block title={label(locale, ui.details.how)}>
          <ArchitectureDiagram steps={project.architecture} />
        </Block>
      ) : null}

      {project.technicalHighlights.length > 0 ? (
        <Block title={label(locale, ui.details.highlights)}>
          <ul className="space-y-3">
            {project.technicalHighlights.map((item) => (
              <li key={item.en} className="border-s-2 border-accent ps-4 text-sm leading-6 text-muted">
                {tx(item, locale)}
              </li>
            ))}
          </ul>
        </Block>
      ) : null}

      {project.images.length > 0 ? (
        <Block title={label(locale, ui.details.media)}>
          <div className="grid gap-6">
            {project.images.map((image) => (
              <figure key={image.src} className="border border-line bg-card">
                <img src={image.src} alt={tx(image.alt, locale)} className="w-full" loading="lazy" />
                <figcaption className="p-3 text-xs text-muted">
                  {image.kind === "plot" ? label(locale, ui.projects.plot) : label(locale, ui.projects.screenshot)}
                  {" — "}
                  {tx(image.alt, locale)}
                </figcaption>
              </figure>
            ))}
          </div>
        </Block>
      ) : null}

      {study ? (
        <>
          {study.outputs.length > 0 ? (
            <Block title={label(locale, ui.details.outputs)}>
              <ul className="space-y-3">
                {study.outputs.map((item) => (
                  <li key={item.en} className="text-sm leading-6 text-muted">
                    {tx(item, locale)}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}
          {tx(study.contribution, locale) ? (
            <Block title={label(locale, ui.details.contribution)}>
              <p className="leading-7">{tx(study.contribution, locale)}</p>
            </Block>
          ) : null}
        </>
      ) : null}

      {project.notes ? (
        <Block title={label(locale, ui.details.notes)}>
          <p className="text-sm leading-6 text-muted">{tx(project.notes, locale)}</p>
        </Block>
      ) : null}

      <div className="mt-12 border-t border-line pt-8">
        <ResourceLinks project={project} />
      </div>

      {related.length > 0 ? (
        <Block title={label(locale, ui.details.related)}>
          <ul className="space-y-2">
            {related.map((item) => (
              <li key={item.id}>
                <Link className="text-accent" to={`/projects/${item.slug}`}>
                  {tx(item.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </Block>
      ) : null}
    </article>
  );
}
