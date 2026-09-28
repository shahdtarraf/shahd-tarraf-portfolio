import { tx } from "../lib/text";
import { useLocale } from "../context/LocaleContext";
import type { LocalizedText } from "../types/project";

export function ArchitectureDiagram({ steps }: { steps: LocalizedText[] }) {
  const { locale } = useLocale();

  if (steps.length === 0) return null;

  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <li key={`${index}-${step.en}`} className="flex flex-col items-start">
          <div className="border border-line bg-card px-4 py-3 text-sm font-medium">
            {tx(step, locale)}
          </div>
          {index < steps.length - 1 ? (
            <span className="ms-6 h-6 w-px bg-accent" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
