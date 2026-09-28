import type { LocalizedText } from "../types/project";

export const profile = {
  name: "Shahd Tarraf",
  fullName: "Shahd Mazen Tarraf",
  title: {
    en: "AI Engineer & Python Developer",
    ar: "مهندسة ذكاء اصطناعي ومطوّرة بايثون",
  } satisfies LocalizedText,
  location: {
    en: "Latakia, Syria",
    ar: "اللاذقية، سوريا",
  } satisfies LocalizedText,
  education: {
    faculty: {
      en: "Faculty of Informatics Engineering, Latakia University",
      ar: "كلية الهندسة المعلوماتية، جامعة اللاذقية",
    } satisfies LocalizedText,
    specialization: {
      en: "Artificial Intelligence",
      ar: "الذكاء الاصطناعي",
    } satisfies LocalizedText,
    status: {
      en: "Graduate",
      ar: "خريجة",
    } satisfies LocalizedText,
  },
  github: {
    username: "shahdtarraf",
    url: "https://github.com/shahdtarraf",
    publicRepos: 34,
    followers: 1,
    avatar: "/media/avatar.jpg",
    primaryLanguages: ["Python", "JavaScript", "Jupyter Notebook"],
    bio: {
      en: "Graduate AI engineer focused on deep learning, computer vision, and NLP. Works with Python, PyTorch, and TensorFlow. Interested in MLOps and model deployment.",
      ar: "مهندسة ذكاء اصطناعي متخرجة متخصصة في التعلم العميق، الرؤية الحاسوبية، ومعالجة اللغات الطبيعية. تعمل ببايثون وPyTorch وTensorFlow. مهتمة بـ MLOps ونشر النماذج.",
    } satisfies LocalizedText,
  },
  hero: {
    en: "I build practical AI applications with Python, machine learning, NLP, computer vision, and modern backend tools.",
    ar: "أبني تطبيقات ذكاء اصطناعي عملية باستخدام بايثون، والتعلم الآلي، ومعالجة اللغات، والرؤية الحاسوبية، وأدوات الخلفية الحديثة.",
  } satisfies LocalizedText,
  about: {
    en: "Graduate of the Faculty of Informatics Engineering at Latakia University, specialized in Artificial Intelligence. Public work covers retrieval chatbots, medical image classifiers, FastAPI expert systems, and Python applications.",
    ar: "خريجة كلية الهندسة المعلوماتية في جامعة اللاذقية، تخصص الذكاء الاصطناعي. العمل العام يشمل روبوتات محادثة بالاسترجاع، ومصنّفات صور طبية، وأنظمة خبيرة بـ FastAPI، وتطبيقات بايثون.",
  } satisfies LocalizedText,
  contact: {
    github: "https://github.com/shahdtarraf",
    email: "shahdtrraf@gmail.com",
    linkedin: "https://www.linkedin.com/in/shahedtarraf",
    telegram: "https://t.me/Shahdtarraf44",
  },
} as const;
