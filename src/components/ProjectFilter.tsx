import { categoryLabels, categoryOrder } from "../data/skills";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";
import type { CategoryId } from "../types/project";

interface Props {
  used: Set<CategoryId>;
  active: CategoryId | "all";
  onChange: (value: CategoryId | "all") => void;
}

export function ProjectFilter({ used, active, onChange }: Props) {
  const { locale } = useLocale();
  const visible = categoryOrder.filter((id) => used.has(id));

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
      <button
        type="button"
        className={`px-3 py-2 text-sm ${active === "all" ? "bg-accent text-[#111827]" : "border border-line"}`}
        onClick={() => onChange("all")}
        aria-pressed={active === "all"}
      >
        {label(locale, ui.projects.all)}
      </button>
      {visible.map((id) => (
        <button
          key={id}
          type="button"
          className={`px-3 py-2 text-sm ${active === id ? "bg-accent text-[#111827]" : "border border-line"}`}
          onClick={() => onChange(id)}
          aria-pressed={active === id}
        >
          {tx(categoryLabels[id], locale)}
        </button>
      ))}
    </div>
  );
}
