import type { LocalizedText } from "../types/project";

export interface CaseStudy {
  outputs: LocalizedText[];
  contribution: LocalizedText;
}

/** Extra verified narrative for featured repositories. No invented metrics. */
export const caseStudies: Record<string, CaseStudy> = {
  "fodwa-ai-chatbot": {
    outputs: [
      {
        en: "The public URL returns JSON: status ok, service fodwa-ai-chatbot, version 1.0.0. That is an API health check, not a chat screen.",
        ar: "يعيد الرابط العام JSON بحالة سليمة واسم الخدمة fodwa-ai-chatbot والإصدار 1.0.0. هذا فحص صحة للواجهة، وليس شاشة محادثة.",
      },
      {
        en: "The repository includes a Docker file, a Procfile, and RENDER_DEPLOY_GUIDE.md.",
        ar: "يتضمن المستودع ملف Docker وProcfile ودليل النشر RENDER_DEPLOY_GUIDE.md.",
      },
    ],
    contribution: {
      en: "Django API, FAISS retrieval, OpenAI generation, language detection, and the Render deployment files in this repository.",
      ar: "واجهة Django، واسترجاع FAISS، وتوليد OpenAI، وكشف اللغة، وملفات النشر على Render في هذا المستودع.",
    },
  },
  "madar-chatbot": {
    outputs: [
      {
        en: "No public demo URL was found. The repo contains the API, a React chat component, a standalone HTML client, a vectorstore folder, Docker, and render.yaml.",
        ar: "لم يُعثر على رابط تجريبي عام. يحتوي المستودع على الواجهة، ومكوّن محادثة React، وعميل HTML مستقل، ومجلد متجهات، وDocker، وrender.yaml.",
      },
    ],
    contribution: {
      en: "FastAPI service in main_api.py, LLM memory scripts, an embeddable MadarChatBot.jsx component, and madar-chatbot.html.",
      ar: "خدمة FastAPI في main_api.py، ونصوص ذاكرة النموذج، ومكوّن MadarChatBot.jsx القابل للتضمين، وملف madar-chatbot.html.",
    },
  },
  "skin-disease-classification": {
    outputs: [
      {
        en: "Documented outputs include a Streamlit app, training and evaluation scripts, Grad-CAM, and RESEARCH_REPORT.md. No accuracy figure is repeated here.",
        ar: "المخرجات الموثّقة تشمل تطبيق Streamlit ونصوص التدريب والتقييم وGrad-CAM وملف RESEARCH_REPORT.md. لا يُعاد هنا رقم دقة.",
      },
    ],
    contribution: {
      en: "Published under this GitHub account. The README names the research team as Reem, Ghazal, and Leen.",
      ar: "منشور ضمن حساب GitHub هذا. يذكر README فريق البحث: Reem وGhazal وLeen.",
    },
  },
  "ocular-disease-classification": {
    outputs: [
      {
        en: "plots/final_results.png and plots/metrics_results.png are training artifacts in the repository: loss and accuracy curves, plus a confusion matrix. README screenshot paths are not present as files.",
        ar: "الملفان plots/final_results.png وplots/metrics_results.png نواتج تدريب في المستودع: منحنيات الخسارة والدقة ومصفوفة ارتباك. مسارات لقطات README غير موجودة كملفات.",
      },
    ],
    contribution: {
      en: "FastAPI app, EfficientNet-B3 inference, preprocessing aligned with training, and a Jinja web UI.",
      ar: "تطبيق FastAPI، واستدلال EfficientNet-B3، ومعالجة مطابقة للتدريب، وواجهة ويب بـ Jinja.",
    },
  },
  "heart-failure-prediction": {
    outputs: [
      {
        en: "The app loads best_model.pth with scaler.pkl and encoders.pkl. README documents English and Arabic routes and a browser theme toggle. No score is quoted here.",
        ar: "يحمّل التطبيق best_model.pth مع scaler.pkl وencoders.pkl. يوثّق README مساري العربية والإنجليزية وتبديل المظهر في المتصفح. لا يُذكر هنا أي رقم أداء.",
      },
    ],
    contribution: {
      en: "Flask interface around the saved PyTorch model, with bilingual templates and a local test script.",
      ar: "واجهة Flask حول نموذج PyTorch المحفوظ، مع قوالب ثنائية اللغة وسكربت اختبار محلي.",
    },
  },
  "medical-image-compression": {
    outputs: [
      {
        en: "plots/reconstruction_comparison.png and plots/loss_trajectory.png are in the repository. Sample X-ray files are data, not interface screenshots.",
        ar: "الملفان plots/reconstruction_comparison.png وplots/loss_trajectory.png موجودان في المستودع. ملفات الأشعة العيّنة بيانات وليست لقطات واجهة.",
      },
    ],
    contribution: {
      en: "FastAPI service for a PyTorch convolutional autoencoder, with a static page that reports PSNR, SSIM, and MSE.",
      ar: "خدمة FastAPI لمرمّز تلقائي التفافي بـ PyTorch، مع صفحة ثابتة تعرض PSNR وSSIM وMSE.",
    },
  },
};
