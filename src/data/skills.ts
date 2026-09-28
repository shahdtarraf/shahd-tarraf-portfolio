import type { CategoryId, LocalizedText } from "../types/project";
import type { SkillGroup } from "../types/project";

export const categoryOrder: CategoryId[] = [
  "ai",
  "machine-learning",
  "nlp",
  "computer-vision",
  "python",
  "web",
  "backend",
  "data",
  "automation",
  "gui",
  "education",
];

export const categoryLabels: Record<CategoryId, LocalizedText> = {
  ai: { en: "AI", ar: "ذكاء اصطناعي" },
  "machine-learning": { en: "Machine Learning", ar: "تعلم آلي" },
  nlp: { en: "NLP", ar: "معالجة اللغات" },
  "computer-vision": { en: "Computer Vision", ar: "رؤية حاسوبية" },
  python: { en: "Python", ar: "بايثون" },
  web: { en: "Web", ar: "ويب" },
  backend: { en: "Backend", ar: "خلفية" },
  data: { en: "Data", ar: "بيانات" },
  automation: { en: "Automation", ar: "أتمتة" },
  gui: { en: "GUI", ar: "واجهة رسومية" },
  education: { en: "Education", ar: "تعليمي" },
};

export const skills: SkillGroup[] = [
  {
    id: "programming",
    title: { en: "Programming", ar: "البرمجة" },
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    id: "ai-ml",
    title: { en: "AI / Machine Learning", ar: "الذكاء الاصطناعي والتعلم الآلي" },
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "EfficientNet",
      "MobileNetV2",
      "LSTM / GRU",
    ],
  },
  {
    id: "nlp",
    title: { en: "NLP", ar: "معالجة اللغات الطبيعية" },
    items: [
      "LangChain",
      "FAISS",
      "OpenAI API",
      "Groq",
      "Hugging Face",
      "Sentence-Transformers",
      "langdetect",
    ],
  },
  {
    id: "cv",
    title: { en: "Computer Vision", ar: "الرؤية الحاسوبية" },
    items: ["OpenCV", "Pillow", "facenet-pytorch", "Grad-CAM"],
  },
  {
    id: "backend",
    title: { en: "Backend", ar: "الخلفية" },
    items: ["FastAPI", "Django", "Flask", "Express.js", "Node.js", "Gunicorn"],
  },
  {
    id: "frontend",
    title: { en: "Frontend", ar: "الواجهة" },
    items: ["React", "Vite", "Tailwind CSS", "Streamlit", "Jinja"],
  },
  {
    id: "data",
    title: { en: "Data", ar: "البيانات" },
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "MongoDB",
    ],
  },
  {
    id: "tools",
    title: { en: "Tools / Deployment", ar: "الأدوات والنشر" },
    items: ["Git", "Docker", "Jupyter", "Render", "Pygame", "PyQt5"],
  },
];
