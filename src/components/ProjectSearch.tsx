import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: Props) {
  const { locale } = useLocale();

  return (
    <label className="block">
      <span className="sr-only">{label(locale, ui.projects.search)}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label(locale, ui.projects.search)}
        className="w-full border border-line bg-card px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
