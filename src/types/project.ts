export type Locale = "en" | "ar";

export type ProjectStatus = "active" | "completed" | "archived";

export type ImageKind = "plot" | "screenshot" | "placeholder";

export type CategoryId =
  | "ai"
  | "machine-learning"
  | "nlp"
  | "computer-vision"
  | "python"
  | "web"
  | "backend"
  | "data"
  | "automation"
  | "gui"
  | "education";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  kind: ImageKind;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  aiml?: string[];
  database?: string[];
  deployment?: string[];
}

export interface Project {
  id: string;
  slug: string;
  repoName: string;
  title: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  features: LocalizedText[];
  technicalHighlights: LocalizedText[];
  architecture: LocalizedText[];
  stack: TechStack;
  categories: CategoryId[];
  technologies: string[];
  github: string;
  /** Public URL. Use linkKind so an API health check is not labeled as a demo. */
  demo?: string;
  linkKind?: "demo" | "api";
  demoLabel?: LocalizedText;
  images: ProjectImage[];
  featured: boolean;
  featuredReason?: LocalizedText;
  status: ProjectStatus;
  hasReadme: boolean;
  relatedSlugs?: string[];
  notes?: LocalizedText;
  updatedAt: string;
  primaryLanguage: string;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: string[];
}
