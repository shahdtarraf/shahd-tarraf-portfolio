import type { Locale } from "../types/project";

export const ui = {
  skip: { en: "Skip to content", ar: "تخطي إلى المحتوى" },
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    projects: { en: "Projects", ar: "المشاريع" },
    about: { en: "About", ar: "نبذة" },
    skills: { en: "Skills", ar: "المهارات" },
    github: { en: "GitHub", ar: "GitHub" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  hero: {
    kicker: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    viewProjects: { en: "View Projects", ar: "عرض المشاريع" },
    github: { en: "GitHub", ar: "GitHub" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  about: {
    title: { en: "About", ar: "نبذة" },
    education: { en: "Education", ar: "التعليم" },
    specialization: { en: "Specialization", ar: "التخصص" },
    location: { en: "Location", ar: "الموقع" },
    note: {
      en: "Employment history is not listed. This page covers education and public technical work.",
      ar: "لا يُعرض سجل وظيفي. تعرض هذه الصفحة التعليم والعمل التقني العام.",
    },
  },
  skills: {
    title: { en: "Technical skills", ar: "المهارات التقنية" },
    subtitle: {
      en: "Technologies that appear in the public repositories.",
      ar: "تقنيات تظهر في المستودعات العامة.",
    },
  },
  featured: {
    title: { en: "Featured work", ar: "أعمال مختارة" },
    subtitle: {
      en: "Six systems chosen for technical scope and documentation. Every other verified project is on the projects page.",
      ar: "ستة أنظمة اختيرت لنطاقها التقني وتوثيقها. بقية المشاريع الموثّقة في صفحة المشاريع.",
    },
    viewAll: { en: "View All Projects", ar: "عرض كل المشاريع" },
  },
  projects: {
    title: { en: "All projects", ar: "كل المشاريع" },
    search: { en: "Search title, description, technology, or category", ar: "ابحث في العنوان أو الوصف أو التقنية أو التصنيف" },
    all: { en: "All", ar: "الكل" },
    empty: { en: "No projects match this filter.", ar: "لا توجد مشاريع مطابقة لهذا التصفية." },
    count: { en: "projects", ar: "مشروعاً" },
    view: { en: "View details", ar: "عرض التفاصيل" },
    github: { en: "GitHub", ar: "GitHub" },
    demo: { en: "Live Demo", ar: "عرض حي" },
    liveApi: { en: "Live API", ar: "واجهة حية" },
    apiHealth: { en: "API Health", ar: "صحة الواجهة" },
    placeholder: {
      en: "No interface image is published in this repository.",
      ar: "لا توجد صورة واجهة منشورة في هذا المستودع.",
    },
    plot: { en: "Training plot from the repository", ar: "مخطط تدريب من المستودع" },
    screenshot: { en: "Screenshot from the repository", ar: "لقطة من المستودع" },
  },
  details: {
    overview: { en: "Project overview", ar: "نظرة عامة" },
    problem: { en: "Problem", ar: "المشكلة" },
    solution: { en: "Solution", ar: "الحل" },
    features: { en: "Key features", ar: "الميزات الأساسية" },
    stack: { en: "Technology stack", ar: "المكدس التقني" },
    frontend: { en: "Frontend", ar: "الواجهة" },
    backend: { en: "Backend", ar: "الخلفية" },
    aiml: { en: "AI / ML", ar: "ذكاء اصطناعي / تعلم آلي" },
    database: { en: "Database", ar: "قاعدة البيانات" },
    deployment: { en: "Deployment", ar: "النشر" },
    how: { en: "Architecture", ar: "المعمارية" },
    highlights: { en: "Implementation details", ar: "تفاصيل التنفيذ" },
    media: { en: "Visual evidence", ar: "دليل بصري" },
    outputs: { en: "Results and outputs", ar: "النتائج والمخرجات" },
    contribution: { en: "What this repository contains", ar: "ما يتضمنه هذا المستودع" },
    notes: { en: "Notes", ar: "ملاحظات" },
    related: { en: "Related repositories", ar: "مستودعات ذات صلة" },
    back: { en: "Back to projects", ar: "العودة إلى المشاريع" },
    notFound: { en: "This project is not in the verified catalog.", ar: "هذا المشروع غير موجود في الكتالوج الموثّق." },
    status: { en: "Status", ar: "الحالة" },
    category: { en: "Category", ar: "التصنيف" },
  },
  status: {
    active: { en: "Active", ar: "نشط" },
    completed: { en: "Completed", ar: "مكتمل" },
    archived: { en: "Archived", ar: "مؤرشف" },
  },
  github: {
    title: { en: "Explore my GitHub", ar: "استكشف GitHub" },
    repos: { en: "Public repositories", ar: "مستودعات عامة" },
    languages: { en: "Languages seen on GitHub", ar: "لغات ظاهرة على GitHub" },
    contributions: {
      en: "Counts below come from the public GitHub profile.",
      ar: "الأرقام أدناه من الملف العام على GitHub.",
    },
    button: { en: "Open GitHub profile", ar: "فتح ملف GitHub" },
  },
  contact: {
    title: { en: "Contact", ar: "تواصل" },
    body: {
      en: "Email, LinkedIn, Telegram, and GitHub.",
      ar: "البريد، ولينكدإن، وتيليغرام، وGitHub.",
    },
    email: { en: "Email", ar: "البريد" },
    linkedin: { en: "LinkedIn", ar: "لينكدإن" },
    telegram: { en: "Telegram", ar: "تيليغرام" },
  },
  footer: {
    built: {
      en: "Public repositories from github.com/shahdtarraf.",
      ar: "مستودعات عامة من github.com/shahdtarraf.",
    },
  },
  theme: {
    light: { en: "Light mode", ar: "الوضع الفاتح" },
    dark: { en: "Dark mode", ar: "الوضع الداكن" },
  },
  locale: {
    en: { en: "English", ar: "English" },
    ar: { en: "العربية", ar: "العربية" },
  },
} as const;

export function label(locale: Locale, pair: { en: string; ar: string }): string {
  return pair[locale];
}
