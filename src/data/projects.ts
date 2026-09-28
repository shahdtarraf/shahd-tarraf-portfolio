import type { Project } from "../types/project";

/**
 * Featured selection (not a ranking):
 * - AI / NLP / CV / FastAPI / Django applications
 * - documented repositories
 * - verified live API when present
 * - real plots when present
 * Data source: GitHub user shahdtarraf, retrieved 2026-09-28.
 * Excluded: shahdtarraf/shahdtarraf (profile README, not an application).
 * EduPilot AI: not found on this GitHub account.
 */
export const projects: Project[] = [
  {
    id: "fodwa-ai-chatbot",
    slug: "fodwa-ai-chatbot",
    repoName: "FODWA-ai-chatbot",
    title: {
      en: "FODWA AI Chatbot",
      ar: "روبوت فودوا للذكاء الاصطناعي",
    },
    description: {
      en: "Django RAG microservice for Arabic FODWA support. Uses FAISS retrieval, OpenAI, language detection, and Docker/Render deployment files.",
      ar: "خدمة Django لاسترجاع التوليد (RAG) لدعم فودوا بالعربية. تستخدم FAISS وOpenAI وكشف اللغة، مع ملفات نشر Docker/Render.",
    },
    problem: {
      en: "Answer Arabic questions about FODWA processes from an indexed knowledge base instead of an unconstrained chatbot.",
      ar: "الإجابة عن أسئلة عربية حول إجراءات فودوا من قاعدة معرفة مفهرسة بدل روبوت غير مقيد.",
    },
    solution: {
      en: "Django + Django REST Framework API with lazy-loaded FAISS index, JWT-related auth packages, local PDF ingestion scripts, and a Render/Docker deploy path.",
      ar: "واجهة Django وDRF مع فهرس FAISS يُحمَّل عند أول طلب، وحزم مصادقة JWT، ونصوص إدخال PDF محلية، ومسار نشر Render/Docker.",
    },
    features: [
      { en: "POST /chat JSON API", ar: "واجهة JSON عبر POST /chat" },
      { en: "GET / health JSON", ar: "فحص صحة الخدمة GET /" },
      { en: "FAISS index + chunk JSON", ar: "فهرس FAISS وملفات القطع" },
      { en: "langdetect for language handling", ar: "كشف اللغة عبر langdetect" },
      { en: "Local ingestion with PyMuPDF / pdfplumber", ar: "إدخال محلي عبر PyMuPDF وpdfplumber" },
      { en: "Tests: backend, NLP, RAG", ar: "اختبارات للخلفية وNLP وRAG" },
    ],
    technicalHighlights: [
      {
        en: "RENDER_DEPLOY_GUIDE.md documents lazy FAISS loading to stay within Render free-tier RAM.",
        ar: "دليل النشر يوثّق تحميل FAISS عند الطلب للبقاء ضمن حد الذاكرة في Render.",
      },
      {
        en: "Production requirements keep LangChain ingest packages out of the runtime path.",
        ar: "متطلبات التشغيل تفصل مكتبات الإدخال (LangChain) عن مسار الإنتاج.",
      },
    ],
    architecture: [
      { en: "Client / integrator", ar: "العميل أو النظام المدمج" },
      { en: "Django API (Gunicorn)", ar: "واجهة Django (Gunicorn)" },
      { en: "FAISS retrieval + OpenAI generation", ar: "استرجاع FAISS وتوليد OpenAI" },
      { en: "Indexed FODWA knowledge", ar: "معرفة فودوا المفهرسة" },
      { en: "JSON response", ar: "استجابة JSON" },
    ],
    stack: {
      backend: ["Django", "Django REST Framework", "Gunicorn", "WhiteNoise"],
      aiml: ["FAISS", "OpenAI", "langdetect", "NumPy"],
      database: ["FAISS index files"],
      deployment: ["Docker", "Render", "Procfile"],
    },
    categories: ["ai", "nlp", "python", "backend", "web"],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "FAISS",
      "OpenAI",
      "langdetect",
      "Docker",
      "Gunicorn",
    ],
    github: "https://github.com/shahdtarraf/FODWA-ai-chatbot",
    demo: "https://fodwa-ai-chatbot.onrender.com",
    linkKind: "api",
    demoLabel: {
      en: "Live API",
      ar: "واجهة حية",
    },
    images: [],
    featured: true,
    featuredReason: {
      en: "Most complete FODWA RAG service: Django, tests, Docker, and a verified live health endpoint.",
      ar: "أكمل نسخة لخدمة فودوا RAG: Django واختبارات وDocker ونقطة صحة حية تم التحقق منها.",
    },
    status: "completed",
    hasReadme: false,
    relatedSlugs: ["fodwa-aichatbot", "fodowa-chatbot", "fodowa-assistant"],
    notes: {
      en: "No root README. Deploy guide lives in RENDER_DEPLOY_GUIDE.md. Live URL returns health JSON, not a chat UI.",
      ar: "لا يوجد README في الجذر. دليل النشر في RENDER_DEPLOY_GUIDE.md. الرابط الحي يعيد JSON للصحة وليس واجهة محادثة.",
    },
    updatedAt: "2026-04-27",
    primaryLanguage: "Python",
  },
  {
    id: "madar-chatbot",
    slug: "madar-chatbot",
    repoName: "madar_chatbot",
    title: { en: "Madar Chatbot", ar: "روبوت مدار" },
    description: {
      en: "FastAPI chatbot with vectorstore memory, a React widget, a standalone HTML client, Docker, and a Render blueprint.",
      ar: "روبوت FastAPI مع ذاكرة متجهات، ومكوّن React، وعميل HTML، وDocker، ومخطط Render.",
    },
    problem: {
      en: "Serve Madar-domain answers through an API that can be embedded in a web page.",
      ar: "تقديم إجابات ضمن مجال مدار عبر واجهة يمكن تضمينها في صفحة ويب.",
    },
    solution: {
      en: "main_api.py FastAPI service, LLM memory scripts, FAISS vectorstore directory, MadarChatBot.jsx, and madar-chatbot.html.",
      ar: "خدمة FastAPI في main_api.py، ونصوص ذاكرة للنموذج، ومجلد vectorstore، وملف MadarChatBot.jsx، وmadar-chatbot.html.",
    },
    features: [
      { en: "FastAPI HTTP API", ar: "واجهة FastAPI" },
      { en: "Vector store directory in repo", ar: "مجلد متجهات داخل المستودع" },
      { en: "React chat component", ar: "مكوّن محادثة React" },
      { en: "Standalone HTML client", ar: "عميل HTML مستقل" },
      { en: "Dockerfile + render.yaml", ar: "Dockerfile وrender.yaml" },
    ],
    technicalHighlights: [
      {
        en: "README is Hugging Face Spaces front matter (Docker SDK), not a product write-up.",
        ar: "ملف README هو ترويسة مساحات Hugging Face (Docker) وليس توثيقاً منتجياً.",
      },
      {
        en: "Runtime requirements list FastAPI, Uvicorn, Pydantic, python-dotenv. LLM wiring is in Python modules.",
        ar: "متطلبات التشغيل: FastAPI وUvicorn وPydantic وpython-dotenv. ربط النموذج موجود في وحدات بايثون.",
      },
    ],
    architecture: [
      { en: "Web client (HTML / React)", ar: "عميل ويب (HTML / React)" },
      { en: "FastAPI (main_api.py)", ar: "FastAPI (main_api.py)" },
      { en: "LLM + vector memory", ar: "نموذج لغوي وذاكرة متجهات" },
      { en: "Chat response", ar: "رد المحادثة" },
    ],
    stack: {
      frontend: ["React", "HTML"],
      backend: ["FastAPI", "Uvicorn"],
      aiml: ["Vector store", "LLM memory scripts"],
      database: ["vectorstore/"],
      deployment: ["Docker", "Render (render.yaml)"],
    },
    categories: ["ai", "nlp", "python", "backend", "web"],
    technologies: ["Python", "FastAPI", "Uvicorn", "React", "Docker"],
    github: "https://github.com/shahdtarraf/madar_chatbot",
    images: [],
    featured: true,
    featuredReason: {
      en: "FastAPI NLP chatbot with embeddable frontend and deployment files.",
      ar: "روبوت NLP بـ FastAPI مع واجهة قابلة للتضمين وملفات نشر.",
    },
    status: "completed",
    hasReadme: true,
    notes: {
      en: "No verified public demo URL. Hugging Face user shahdtarraf was not found. Do not treat unrelated HF spaces as this project.",
      ar: "لا يوجد رابط تجريبي عام موثّق. حساب Hugging Face باسم shahdtarraf غير موجود. لا تُنسب مساحات أخرى لهذا المشروع.",
    },
    updatedAt: "2026-04-10",
    primaryLanguage: "Python",
  },
  {
    id: "skin-disease-classification",
    slug: "skin-disease-classification",
    repoName: "An-AI-Powered-System-for-Skin-Disease-Classification",
    title: {
      en: "Skin Disease Classification (DermAI)",
      ar: "تصنيف أمراض الجلد (DermAI)",
    },
    description: {
      en: "Medical imaging project that classifies eczema, atopic dermatitis, and psoriasis, with a Streamlit app, training scripts, and a research report.",
      ar: "مشروع تصوير طبي يصنّف الإكزيما والتهاب الجلد التأتبي والصدفية، مع تطبيق Streamlit ونصوص تدريب وتقرير بحثي.",
    },
    problem: {
      en: "Classify three common skin conditions from photographs for research and education, not clinical diagnosis.",
      ar: "تصنيف ثلاث حالات جلدية شائعة من الصور لأغراض البحث والتعليم، وليس للتشخيص السريري.",
    },
    solution: {
      en: "Pipeline under src/ (prep, train, evaluate, Grad-CAM, medical engine, inference) plus app/ Streamlit UI and config.yaml.",
      ar: "مسار عمل في src/ (تجهيز، تدريب، تقييم، Grad-CAM، محرك طبي، استدلال) مع واجهة Streamlit في app/ وملف config.yaml.",
    },
    features: [
      { en: "Three-class skin image classification", ar: "تصنيف صور الجلد إلى ثلاث فئات" },
      { en: "Grad-CAM explainability module", ar: "وحدة تفسير Grad-CAM" },
      { en: "Medical reasoning / knowledge-base module", ar: "وحدة استدلال طبي / قاعدة معرفة" },
      { en: "Streamlit UI", ar: "واجهة Streamlit" },
      { en: "RESEARCH_REPORT.md", ar: "تقرير بحثي RESEARCH_REPORT.md" },
    ],
    technicalHighlights: [
      {
        en: "requirements.txt installs PyTorch, torchvision, OpenCV, and Streamlit. The README also describes EfficientNetV2S and TensorFlow; that description is not used as the confirmed stack.",
        ar: "يثبّت requirements.txt مكتبات PyTorch وtorchvision وOpenCV وStreamlit. يصف README أيضاً EfficientNetV2S وTensorFlow، ولا يُعتمد ذلك الوصف كمكدس مؤكد.",
      },
      {
        en: "README authors listed as Reem · Ghazal · Leen. Repository owner on GitHub is shahdtarraf.",
        ar: "README يذكر المؤلفين Reem وGhazal وLeen. مالك المستودع على GitHub هو shahdtarraf.",
      },
    ],
    architecture: [
      { en: "Uploaded skin image", ar: "صورة جلد مرفوعة" },
      { en: "Preprocess (CLAHE / resize)", ar: "معالجة مسبقة (CLAHE / تغيير الحجم)" },
      { en: "CNN classifier", ar: "مصنّف شبكي التفافي" },
      { en: "Grad-CAM + medical engine", ar: "Grad-CAM والمحرك الطبي" },
      { en: "Streamlit result", ar: "نتيجة Streamlit" },
    ],
    stack: {
      frontend: ["Streamlit"],
      aiml: ["PyTorch", "OpenCV", "scikit-learn"],
      deployment: ["Local Streamlit"],
    },
    categories: ["ai", "machine-learning", "computer-vision", "python"],
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Streamlit",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
    github:
      "https://github.com/shahdtarraf/An-AI-Powered-System-for-Skin-Disease-Classification",
    images: [],
    featured: true,
    featuredReason: {
      en: "Documented computer-vision medical classifier with training, evaluation, Grad-CAM, and a Streamlit app.",
      ar: "مصنّف رؤية حاسوبية طبي موثّق يشمل التدريب والتقييم وGrad-CAM وتطبيق Streamlit.",
    },
    status: "completed",
    hasReadme: true,
    notes: {
      en: "The dependency file lists PyTorch. The README describes EfficientNetV2S and TensorFlow, so that backbone is not treated as confirmed.",
      ar: "ملف المتطلبات يذكر PyTorch. ملف README يصف EfficientNetV2S وTensorFlow، لذلك لا يُعرض ذلك النموذج كحقيقة مؤكدة.",
    },
    updatedAt: "2026-08-07",
    primaryLanguage: "Jupyter Notebook",
  },
  {
    id: "ocular-disease-classification",
    slug: "ocular-disease-classification",
    repoName: "Ocular-Disease-Classification-System",
    title: {
      en: "Ocular Disease Classification",
      ar: "تصنيف أمراض العين",
    },
    description: {
      en: "FastAPI web app that classifies retinal fundus photos into cataract, diabetic retinopathy, glaucoma, or normal using EfficientNet-B3.",
      ar: "تطبيق FastAPI يصنّف صور قاع العين إلى ساد أو اعتلال شبكية سكري أو زرق أو طبيعي باستخدام EfficientNet-B3.",
    },
    problem: {
      en: "Run local inference on fundus photographs and show class probabilities in a browser.",
      ar: "تشغيل استدلال محلي على صور قاع العين وعرض احتمالات الفئات في المتصفح.",
    },
    solution: {
      en: "FastAPI app.py, PyTorch model module, training-identical preprocessing, Jinja/HTML UI, and committed training plots.",
      ar: "تطبيق FastAPI ووحدة نموذج PyTorch ومعالجة مطابقة للتدريب وواجهة Jinja/HTML ومخططات تدريب محفوظة.",
    },
    features: [
      { en: "Upload JPG/PNG/BMP up to 10 MB", ar: "رفع JPG/PNG/BMP حتى 10MB" },
      { en: "POST /api/predict", ar: "POST /api/predict" },
      { en: "Per-class probabilities", ar: "احتمالات لكل فئة" },
      { en: "History panel (documented in README)", ar: "لوحة سجل (موثّقة في README)" },
      { en: "Automated test_runner.py", ar: "سكربت اختبار آلي test_runner.py" },
    ],
    technicalHighlights: [
      {
        en: "Preprocess: resize 224×224, contrast boost, ImageNet normalization.",
        ar: "المعالجة: تغيير الحجم إلى 224×224 وتحسين التباين وتطبيع ImageNet.",
      },
      {
        en: "README screenshot table points to screenshots/*.png that are not in the repository; plots/ images are real training artifacts.",
        ar: "جدول لقطات README يشير إلى screenshots/*.png غير الموجودة في المستودع؛ صور plots/ هي نواتج تدريب حقيقية.",
      },
    ],
    architecture: [
      { en: "Browser UI", ar: "واجهة المتصفح" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "EfficientNet-B3 (PyTorch)", ar: "EfficientNet-B3 (PyTorch)" },
      { en: "JSON prediction", ar: "تنبؤ JSON" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript", "Jinja"],
      backend: ["FastAPI", "Uvicorn"],
      aiml: ["PyTorch", "EfficientNet-B3", "OpenCV"],
      deployment: ["Local"],
    },
    categories: [
      "ai",
      "machine-learning",
      "computer-vision",
      "python",
      "web",
      "backend",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "OpenCV",
      "EfficientNet-B3",
    ],
    github:
      "https://github.com/shahdtarraf/Ocular-Disease-Classification-System",
    images: [
      {
        src: "/media/ocular-final-results.png",
        kind: "plot",
        alt: {
          en: "Training loss/accuracy curves and 4-class confusion matrix from the repository plots folder.",
          ar: "منحنيات الخسارة والدقة ومصفوفة الارتباك الرباعية من مجلد المخططات في المستودع.",
        },
      },
      {
        src: "/media/ocular-metrics.png",
        kind: "plot",
        alt: {
          en: "Additional evaluation metrics plot from the Ocular repository.",
          ar: "مخطط مقاييس تقييم إضافي من مستودع تصنيف العين.",
        },
      },
    ],
    featured: true,
    featuredReason: {
      en: "Documented FastAPI computer-vision app with real training plots in the repo.",
      ar: "تطبيق رؤية حاسوبية بـ FastAPI موثّق مع مخططات تدريب حقيقية في المستودع.",
    },
    status: "completed",
    hasReadme: true,
    notes: {
      en: "README UI screenshots are placeholders. Graduation-project wording in the README.",
      ar: "لقطات واجهة README غير موجودة فعلياً. README يصفه كمشروع تخرج.",
    },
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "heart-failure-prediction",
    slug: "heart-failure-prediction",
    repoName: "Smart-Heart-Failure-Prediction-System",
    title: {
      en: "Smart Heart Failure Prediction",
      ar: "التنبؤ الذكي بفشل القلب",
    },
    description: {
      en: "Flask web app that loads a saved PyTorch model plus scaler/encoders to estimate heart-failure risk locally, with Arabic/English UI and a theme toggle.",
      ar: "تطبيق Flask يحمّل نموذج PyTorch محفوظاً مع scaler/encoders لتقدير خطر فشل القلب محلياً، مع واجهة عربية/إنجليزية وتبديل مظهر.",
    },
    problem: {
      en: "Turn a medical training notebook into a local, bilingual prediction interface without retraining on each run.",
      ar: "تحويل دفتر تدريب طبي إلى واجهة تنبؤ محلية ثنائية اللغة دون إعادة تدريب في كل تشغيل.",
    },
    solution: {
      en: "Flask entrypoint, feature order in config.py, core inference package, templates/static frontend, and test_model.py.",
      ar: "مدخل Flask وترتيب الميزات في config.py وحزمة استدلال وقوالب/ملفات ثابتة وملف test_model.py.",
    },
    features: [
      { en: "Local Flask server on port 5000", ar: "خادم Flask محلي على المنفذ 5000" },
      { en: "English and Arabic via ?lang=", ar: "الإنجليزية والعربية عبر ?lang=" },
      { en: "Light/dark theme stored in the browser", ar: "مظهر فاتح/داكن يُحفظ في المتصفح" },
      { en: "Uses best_model.pth, scaler.pkl, encoders.pkl", ar: "يستخدم best_model.pth وscaler.pkl وencoders.pkl" },
    ],
    technicalHighlights: [
      {
        en: "README states inference logic is unchanged when language and theme UI are added.",
        ar: "README يوضح أن منطق الاستدلال لا يتغير عند إضافة اللغة والمظهر.",
      },
    ],
    architecture: [
      { en: "Browser form", ar: "نموذج المتصفح" },
      { en: "Flask", ar: "Flask" },
      { en: "Saved scaler / encoders / PyTorch model", ar: "scaler وencoders ونموذج PyTorch" },
      { en: "Risk output", ar: "ناتج الخطر" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Flask"],
      aiml: ["PyTorch", "scikit-learn", "Pandas", "NumPy"],
      deployment: ["Local"],
    },
    categories: ["ai", "machine-learning", "python", "web", "data"],
    technologies: [
      "Python",
      "Flask",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
    github:
      "https://github.com/shahdtarraf/Smart-Heart-Failure-Prediction-System",
    images: [],
    featured: true,
    featuredReason: {
      en: "Bilingual Flask machine-learning app with persisted model artifacts and tests.",
      ar: "تطبيق تعلم آلي بـ Flask ثنائي اللغة مع نماذج محفوظة واختبارات.",
    },
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "medical-image-compression",
    slug: "medical-image-compression",
    repoName: "High-Fidelity-Medical-Image-Compression-System-",
    title: {
      en: "Medical Image Compression",
      ar: "ضغط الصور الطبية",
    },
    description: {
      en: "FastAPI + PyTorch convolutional autoencoder dashboard for X-ray compression with PSNR, SSIM, and MSE.",
      ar: "لوحة FastAPI وPyTorch لضغط صور الأشعة بمُرمّز تلقائي التفافي مع مقاييس PSNR وSSIM وMSE.",
    },
    problem: {
      en: "Compress medical X-rays while reporting reconstruction quality.",
      ar: "ضغط صور الأشعة الطبية مع قياس جودة إعادة البناء.",
    },
    solution: {
      en: "FastAPI backend hosts a PyTorch autoencoder; a static HTML/CSS/JS frontend uploads images and shows metrics.",
      ar: "خلفية FastAPI تشغّل مرمّزاً تلقائياً بـ PyTorch، وواجهة HTML/CSS/JS ثابتة ترفع الصور وتعرض المقاييس.",
    },
    features: [
      { en: "Image or folder upload", ar: "رفع صورة أو مجلد" },
      { en: "Size before/after", ar: "الحجم قبل وبعد" },
      { en: "Original vs reconstructed comparison", ar: "مقارنة الأصل مع إعادة البناء" },
      { en: "PSNR / SSIM / MSE", ar: "PSNR / SSIM / MSE" },
    ],
    technicalHighlights: [
      {
        en: "Repository includes training plots and sample X-ray files. sample_xray_* are data samples, not UI screenshots.",
        ar: "المستودع يتضمن مخططات تدريب وملفات أشعة عيّنة. ملفات sample_xray_* بيانات وليست لقطات واجهة.",
      },
    ],
    architecture: [
      { en: "Static frontend", ar: "واجهة ثابتة" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "PyTorch autoencoder", ar: "مرمّز تلقائي PyTorch" },
      { en: "Quality metrics", ar: "مقاييس الجودة" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI", "Uvicorn"],
      aiml: ["PyTorch", "torchvision", "scikit-image"],
      deployment: ["Local"],
    },
    categories: [
      "ai",
      "machine-learning",
      "computer-vision",
      "python",
      "web",
      "backend",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Pillow",
      "scikit-image",
    ],
    github:
      "https://github.com/shahdtarraf/High-Fidelity-Medical-Image-Compression-System-",
    images: [
      {
        src: "/media/compression-reconstruction.png",
        kind: "plot",
        alt: {
          en: "Original vs reconstructed X-ray comparison plot from the repository.",
          ar: "مخطط مقارنة الأشعة الأصلية مع إعادة البناء من المستودع.",
        },
      },
      {
        src: "/media/compression-loss.png",
        kind: "plot",
        alt: {
          en: "Training loss trajectory plot from the compression repository.",
          ar: "منحنى خسارة التدريب من مستودع الضغط.",
        },
      },
    ],
    featured: true,
    featuredReason: {
      en: "FastAPI + PyTorch vision system with real reconstruction plots in the repo.",
      ar: "نظام رؤية بـ FastAPI وPyTorch مع مخططات إعادة بناء حقيقية في المستودع.",
    },
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Jupyter Notebook",
  },
  {
    id: "dental-disease-classification",
    slug: "dental-disease-classification",
    repoName: "-Dental-Disease-Classification-System",
    title: {
      en: "Dental Disease Classification",
      ar: "تصنيف أمراض الأسنان",
    },
    description: {
      en: "Flask web app that loads a PyTorch MobileNetV2 checkpoint and classifies dental images as calculus, caries, or tooth discoloration.",
      ar: "تطبيق Flask يحمّل نقطة تحقق MobileNetV2 ويصنّف صور الأسنان إلى قلح أو نخر أو تغيّر لون.",
    },
    problem: {
      en: "Run local inference on dental photographs with a trained classifier and a small knowledge base of class information.",
      ar: "تشغيل استدلال محلي على صور الأسنان بمصنّف مدرَّب وقاعدة معرفة صغيرة لمعلومات الفئات.",
    },
    solution: {
      en: "Flask UI, core/model_engine.py for preprocess/inference, knowledge_base for class text, and validation scripts.",
      ar: "واجهة Flask ومحرك نموذج للمعالجة والاستدلال وقاعدة معرفة لنص الفئات ونصوص تحقق.",
    },
    features: [
      { en: "Three classes: Calculus, Caries, Tooth Discoloration", ar: "ثلاث فئات: قلح، نخر، تغيّر لون" },
      { en: "ImageNet-style 224×224 preprocessing", ar: "معالجة بأسلوب ImageNet بحجم 224×224" },
      { en: "test_model.py validation helpers", ar: "مساعدات تحقق في test_model.py" },
    ],
    technicalHighlights: [
      {
        en: "Inference: resize 256, center crop 224, ImageNet mean/std.",
        ar: "الاستدلال: تغيير الحجم 256 ثم قص مركزي 224 وتطبيع ImageNet.",
      },
    ],
    architecture: [
      { en: "Flask web UI", ar: "واجهة Flask" },
      { en: "MobileNetV2 (PyTorch)", ar: "MobileNetV2 (PyTorch)" },
      { en: "Class + confidence", ar: "الفئة والثقة" },
    ],
    stack: {
      frontend: ["HTML templates"],
      backend: ["Flask"],
      aiml: ["PyTorch", "MobileNetV2", "OpenCV"],
      deployment: ["Local"],
    },
    categories: [
      "ai",
      "machine-learning",
      "computer-vision",
      "python",
      "web",
    ],
    technologies: ["Python", "Flask", "PyTorch", "OpenCV", "MobileNetV2"],
    github:
      "https://github.com/shahdtarraf/-Dental-Disease-Classification-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Jupyter Notebook",
  },
  {
    id: "face-identity-verification",
    slug: "face-identity-verification",
    repoName: "Face-Identity-Verification-Enterprise-System",
    title: {
      en: "Face Identity Verification",
      ar: "التحقق من هوية الوجه",
    },
    description: {
      en: "Streamlit app that embeds two face images with InceptionResnetV1 and compares Euclidean distance against a threshold of 1.0.",
      ar: "تطبيق Streamlit يضمّن صورتي وجه عبر InceptionResnetV1 ويقارن المسافة الإقليدية بعتبة 1.0.",
    },
    problem: {
      en: "Decide whether two photographs likely show the same person.",
      ar: "تقرير ما إذا كانت صورتان ترجّحان الشخص نفسه.",
    },
    solution: {
      en: "model_loader.py loads custom weights into facenet_pytorch InceptionResnetV1; app.py is a Streamlit verification UI.",
      ar: "model_loader.py يحمّل أوزاناً مخصّصة في InceptionResnetV1؛ app.py واجهة تحقق Streamlit.",
    },
    features: [
      { en: "Pairwise verification", ar: "تحقق ثنائي الصور" },
      { en: "Distance-to-confidence mapping", ar: "تحويل المسافة إلى ثقة" },
      { en: "Cached model load in Streamlit", ar: "تحميل نموذج مخزّن في Streamlit" },
    ],
    technicalHighlights: [
      {
        en: "Input size 160×160, mean/std 0.5. Weights expected at models/best_siamese_model.pth — that folder is not in the public tree.",
        ar: "حجم الدخل 160×160. الأوزان المتوقعة في models/best_siamese_model.pth — المجلد غير موجود في الشجرة العامة.",
      },
    ],
    architecture: [
      { en: "Two uploaded faces", ar: "صورتان مرفوعتان" },
      { en: "Streamlit UI", ar: "واجهة Streamlit" },
      { en: "Face embeddings", ar: "تضمينات الوجه" },
      { en: "Distance vs threshold", ar: "المسافة مقابل العتبة" },
    ],
    stack: {
      frontend: ["Streamlit"],
      aiml: ["PyTorch", "facenet-pytorch"],
      deployment: ["Local Streamlit"],
    },
    categories: ["ai", "machine-learning", "computer-vision", "python"],
    technologies: ["Python", "Streamlit", "PyTorch", "facenet-pytorch"],
    github:
      "https://github.com/shahdtarraf/Face-Identity-Verification-Enterprise-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: false,
    notes: {
      en: "No README and no requirements.txt. Custom weights are referenced but not present in the public file list.",
      ar: "لا يوجد README ولا requirements.txt. الأوزان المخصّصة مذكورة وغير موجودة في قائمة الملفات العامة.",
    },
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "medical-chatbot-python",
    slug: "medical-chatbot-python",
    repoName: "Medical_ChatBot_With-Python",
    title: {
      en: "Medical Chatbot (RAG)",
      ar: "روبوت طبي (RAG)",
    },
    description: {
      en: "Retrieval-augmented medical Q&A over PDFs using FAISS, Sentence-Transformers, and Hugging Face or Groq LLMs.",
      ar: "أسئلة طبية مع استرجاع من ملفات PDF باستخدام FAISS وSentence-Transformers ونماذج Hugging Face أو Groq.",
    },
    problem: {
      en: "Ground answers in a local medical document collection instead of unconstrained generation.",
      ar: "تقييد الإجابات بمجموعة وثائق طبية محلية بدل التوليد غير المقيد.",
    },
    solution: {
      en: "create_memory_for_llm.py builds FAISS; connect_memory_with_llm.py is a CLI; app.py is in the repo root. README also names medibot.py, which was not in the root listing.",
      ar: "create_memory_for_llm.py يبني FAISS؛ connect_memory_with_llm.py واجهة سطر أوامر؛ app.py في جذر المستودع. README يذكر medibot.py غير الظاهر في قائمة الجذر.",
    },
    features: [
      { en: "FAISS vector store", ar: "مخزن متجهات FAISS" },
      { en: "all-MiniLM-L6-v2 embeddings (documented)", ar: "تضمينات all-MiniLM-L6-v2 (موثّقة)" },
      { en: "Source-document return", ar: "إرجاع مقاطع المصادر" },
      { en: "HF or Groq backends (documented)", ar: "خلفيات HF أو Groq (موثّقة)" },
    ],
    technicalHighlights: [
      {
        en: "Educational disclaimer: not medical advice.",
        ar: "تنويه تعليمي: ليس نصيحة طبية.",
      },
    ],
    architecture: [
      { en: "PDFs in data/", ar: "ملفات PDF في data/" },
      { en: "Chunk + embed", ar: "تقطيع وتضمين" },
      { en: "FAISS", ar: "FAISS" },
      { en: "LLM generation", ar: "توليد النموذج" },
      { en: "Answer + sources", ar: "إجابة ومصادر" },
    ],
    stack: {
      frontend: ["Streamlit (documented)"],
      aiml: ["LangChain", "FAISS", "Hugging Face", "Groq"],
      database: ["FAISS vectorstore/"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "machine-learning"],
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "Groq",
      "Streamlit",
    ],
    github: "https://github.com/shahdtarraf/Medical_ChatBot_With-Python",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    notes: {
      en: "The README names medibot.py. The repository root contains app.py.",
      ar: "يذكر README الملف medibot.py، بينما جذر المستودع يحتوي app.py.",
    },
    updatedAt: "2025-12-02",
    primaryLanguage: "Python",
  },
  {
    id: "stock-prediction",
    slug: "stock-prediction",
    repoName: "-stock-prediction-system",
    title: { en: "Stock Prediction System", ar: "نظام التنبؤ بالأسهم" },
    description: {
      en: "Streamlit graduation app for next-day stock movement using LSTM, GRU, and BiLSTM models with walk-forward evaluation.",
      ar: "تطبيق Streamlit لمشروع تخرج للتنبؤ بحركة السهم لليوم التالي باستخدام LSTM وGRU وBiLSTM مع تقييم walk-forward.",
    },
    problem: {
      en: "Forecast next-day price or direction from historical CSV series.",
      ar: "التنبؤ بسعر أو اتجاه اليوم التالي من سلاسل CSV تاريخية.",
    },
    solution: {
      en: "stock_pipeline.py plus Streamlit app.py, TensorFlow models, and evaluation scripts.",
      ar: "stock_pipeline.py وتطبيق Streamlit ونماذج TensorFlow ونصوص تقييم.",
    },
    features: [
      { en: "LSTM / GRU / BiLSTM options (README)", ar: "خيارات LSTM / GRU / BiLSTM (README)" },
      { en: "Walk-forward metrics (README)", ar: "مقاييس walk-forward (README)" },
      { en: "Plotly dashboard", ar: "لوحة Plotly" },
    ],
    technicalHighlights: [
      {
        en: "README metric figures are examples in documentation, not independently re-measured here.",
        ar: "أرقام المقاييس في README أمثلة توثيقية ولم تُعاد قياسها هنا.",
      },
    ],
    architecture: [
      { en: "CSV datasets", ar: "مجموعات CSV" },
      { en: "Sequence models (TensorFlow)", ar: "نماذج تسلسل (TensorFlow)" },
      { en: "Streamlit dashboard", ar: "لوحة Streamlit" },
    ],
    stack: {
      frontend: ["Streamlit", "Plotly"],
      aiml: ["TensorFlow", "LSTM", "GRU", "scikit-learn"],
      database: ["CSV files"],
      deployment: ["Local"],
    },
    categories: ["ai", "machine-learning", "python", "data"],
    technologies: [
      "Python",
      "Streamlit",
      "TensorFlow",
      "Plotly",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/shahdtarraf/-stock-prediction-system",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Jupyter Notebook",
  },
  {
    id: "ecg-image-classification",
    slug: "ecg-image-classification",
    repoName: "ECG-Image-Classification-App",
    title: {
      en: "ECG Image Classification",
      ar: "تصنيف صور تخطيط القلب",
    },
    description: {
      en: "ECG lead-image classifier with a Streamlit web UI and a PyQt5 desktop app that can emit Grad-CAM visualizations.",
      ar: "مصنّف لصور تخطيط القلب مع واجهة Streamlit وتطبيق سطح مكتب PyQt5 يمكنه إخراج Grad-CAM.",
    },
    problem: {
      en: "Classify ECG images into MIT-BIH-style beat classes N/S/V/F/Q.",
      ar: "تصنيف صور التخطيط إلى فئات نبض بأسلوب MIT-BIH: N/S/V/F/Q.",
    },
    solution: {
      en: "streamlit_app.py uses TensorFlow/Keras; desktop_app uses PyQt5 and Grad-CAM.",
      ar: "streamlit_app.py يستخدم TensorFlow/Keras؛ desktop_app يستخدم PyQt5 وGrad-CAM.",
    },
    features: [
      { en: "Streamlit upload and predict", ar: "رفع وتنبؤ عبر Streamlit" },
      { en: "Desktop Grad-CAM output", ar: "مخرج Grad-CAM لسطح المكتب" },
    ],
    technicalHighlights: [
      {
        en: "Root listing did not include model weight files; Streamlit stops if the model path is missing.",
        ar: "قائمة الجذر لم تتضمن ملفات أوزان النموذج؛ يتوقف Streamlit إذا كان المسار مفقوداً.",
      },
    ],
    architecture: [
      { en: "ECG image", ar: "صورة تخطيط" },
      { en: "Keras classifier", ar: "مصنّف Keras" },
      { en: "Streamlit or PyQt5", ar: "Streamlit أو PyQt5" },
    ],
    stack: {
      frontend: ["Streamlit", "PyQt5"],
      aiml: ["TensorFlow", "Keras", "OpenCV"],
      deployment: ["Local"],
    },
    categories: ["ai", "machine-learning", "computer-vision", "python", "gui"],
    technologies: [
      "Python",
      "TensorFlow",
      "Streamlit",
      "OpenCV",
      "PyQt5",
    ],
    github: "https://github.com/shahdtarraf/ECG-Image-Classification-App",
    images: [
      {
        src: "/media/ecg-gradcam.jpg",
        kind: "plot",
        alt: {
          en: "Grad-CAM / waveform visualization from desktop_app/cam_output.jpg in the repository.",
          ar: "تصور Grad-CAM / موجة من desktop_app/cam_output.jpg في المستودع.",
        },
      },
    ],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "movie-recommender",
    slug: "movie-recommender",
    repoName: "movie-recommender-system",
    title: { en: "Movie Recommender", ar: "موصي الأفلام" },
    description: {
      en: "Content-based movie recommender using cosine similarity on TMDB metadata, served with Streamlit.",
      ar: "موصي أفلام قائم على المحتوى باستخدام تشابه جيب التمام على بيانات TMDB عبر Streamlit.",
    },
    problem: {
      en: "Recommend similar movies from a catalog after a one-time similarity build.",
      ar: "اقتراح أفلام مشابهة من كتالوج بعد بناء مصفوفة التشابه مرة واحدة.",
    },
    solution: {
      en: "build.py / documented build_model.py creates pickle files; app.py is the Streamlit UI. README expects tmdb_5000 CSV files.",
      ar: "build.py / build_model.py الموثّق ينشئ ملفات pickle؛ app.py واجهة Streamlit. README يتوقع ملفات CSV من TMDB.",
    },
    features: [
      { en: "Cosine similarity recommender", ar: "توصية بتشابه جيب التمام" },
      { en: "Streamlit app", ar: "تطبيق Streamlit" },
    ],
    technicalHighlights: [
      {
        en: "README run command names build_model.py; repository listing included build.py.",
        ar: "أمر التشغيل في README يذكر build_model.py بينما القائمة تضمنت build.py.",
      },
    ],
    architecture: [
      { en: "TMDB CSVs", ar: "ملفات TMDB" },
      { en: "Similarity matrix", ar: "مصفوفة التشابه" },
      { en: "Streamlit", ar: "Streamlit" },
    ],
    stack: {
      frontend: ["Streamlit"],
      aiml: ["Cosine similarity"],
      deployment: ["Local"],
    },
    categories: ["python", "machine-learning", "data"],
    technologies: ["Python", "Streamlit"],
    github: "https://github.com/shahdtarraf/movie-recommender-system",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    notes: {
      en: "The README expects TMDB CSV files and a local similarity build before the Streamlit app can run.",
      ar: "يتوقع README ملفات CSV من TMDB وبناء التشابه محلياً قبل تشغيل تطبيق Streamlit.",
    },
    updatedAt: "2025-12-04",
    primaryLanguage: "Python",
  },
  {
    id: "pfa-expert-system",
    slug: "pfa-expert-system",
    repoName: "-Psychological-First-Aid-PFA-Expert-System",
    title: {
      en: "Psychological First Aid Expert System",
      ar: "نظام خبير للإسعاف النفسي الأولي",
    },
    description: {
      en: "Rule-based PFA decision-support tool (not a diagnosis system) with FastAPI, bilingual NLP mapping, and a React/Vite frontend.",
      ar: "أداة دعم قرار للإسعاف النفسي الأولي قائمة على القواعد (ليست نظام تشخيص) مع FastAPI ومعالجة لغوية ثنائية وواجهة React/Vite.",
    },
    problem: {
      en: "Map crisis-related text to PFA-style guidance with explicit non-diagnostic intent.",
      ar: "ربط نص الأزمة بإرشاد بأسلوب الإسعاف النفسي مع التنويه أنه ليس تشخيصاً.",
    },
    solution: {
      en: "Knowledge-base generator, NLP processor, forward-chaining inference, FastAPI backend, React UI.",
      ar: "مولّد قاعدة معرفة ومعالج لغوي واستدلال أمامي وخلفية FastAPI وواجهة React.",
    },
    features: [
      { en: "Bilingual rule mapping", ar: "ربط قواعد ثنائي اللغة" },
      { en: "Session / working memory (README)", ar: "ذاكرة جلسة (README)" },
      { en: "React + Tailwind frontend", ar: "واجهة React وTailwind" },
    ],
    technicalHighlights: [
      {
        en: "README claims 25 rules referencing DSM-5/ICD-11/WHO PFA as documentation, not independently audited here.",
        ar: "README يذكر 25 قاعدة بالإحالة إلى DSM-5/ICD-11/WHO دون تدقيق مستقل هنا.",
      },
    ],
    architecture: [
      { en: "React UI", ar: "واجهة React" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "Rules + NLP mapping", ar: "قواعد وربط لغوي" },
      { en: "PFA-style output", ar: "مخرج بأسلوب الإسعاف النفسي" },
    ],
    stack: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["FastAPI"],
      aiml: ["Rule-based expert system"],
      database: ["JSON rules"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: ["Python", "FastAPI", "React", "Vite", "Tailwind CSS"],
    github:
      "https://github.com/shahdtarraf/-Psychological-First-Aid-PFA-Expert-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "programming-error-diagnostic",
    slug: "programming-error-diagnostic",
    repoName: "Programming-Error-Diagnostic-System",
    title: {
      en: "Programming Error Diagnostic System",
      ar: "نظام تشخيص أخطاء البرمجة",
    },
    description: {
      en: "FastAPI expert system that maps stack traces and error text to causes and fixes from a generated JSON knowledge base.",
      ar: "نظام خبير FastAPI يربط آثار المكدس ونص الخطأ بأسباب وحلول من قاعدة JSON مولَّدة.",
    },
    problem: {
      en: "Turn raw programming errors into structured explanations.",
      ar: "تحويل أخطاء البرمجة الخام إلى شروح منظّمة.",
    },
    solution: {
      en: "generate_kb.py writes knowledge_base/errors.json; inference_engine.py scores matches; static dashboard calls POST /analyze.",
      ar: "generate_kb.py يكتب قاعدة الأخطاء؛ inference_engine.py يقيّم التطابق؛ لوحة ثابتة تستدعي POST /analyze.",
    },
    features: [
      { en: "200+ documented error entries (README)", ar: "أكثر من 200 مدخل خطأ (README)" },
      { en: "Confidence and alternatives", ar: "ثقة وبدائل" },
      { en: "Static HTML dashboard", ar: "لوحة HTML ثابتة" },
    ],
    technicalHighlights: [
      {
        en: "A legacy React folder exists but is unused according to the project analysis.",
        ar: "يوجد مجلد React قديم غير مستخدم وفق تحليل المشروع.",
      },
    ],
    architecture: [
      { en: "Error text", ar: "نص الخطأ" },
      { en: "FastAPI /analyze", ar: "FastAPI /analyze" },
      { en: "JSON knowledge base", ar: "قاعدة معرفة JSON" },
      { en: "Diagnosis card", ar: "بطاقة التشخيص" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      aiml: ["Keyword / heuristic expert system"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "education", "backend"],
    technologies: ["Python", "FastAPI", "Pydantic"],
    github:
      "https://github.com/shahdtarraf/Programming-Error-Diagnostic-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "JavaScript",
  },
  {
    id: "serverguard-expert-system",
    slug: "serverguard-expert-system",
    repoName: "-ServerGuard-Expert-System",
    title: { en: "ServerGuard Expert System", ar: "نظام ServerGuard الخبير" },
    description: {
      en: "Bilingual FastAPI expert system for mapping server-problem text to severity, cause, and suggested fixes.",
      ar: "نظام خبير FastAPI ثنائي اللغة يربط نص مشكلة الخادم بالشدة والسبب والإصلاح المقترح.",
    },
    problem: {
      en: "Diagnose infrastructure issues from free-text descriptions.",
      ar: "تشخيص مشاكل البنية من وصف نصي حر.",
    },
    solution: {
      en: "generate_kb.py produces EN/AR entries; FastAPI POST /analyze; static frontend with history export.",
      ar: "generate_kb.py يولّد مدخلات إنجليزية/عربية؛ FastAPI POST /analyze؛ واجهة ثابتة مع تصدير السجل.",
    },
    features: [
      { en: "Arabic and English", ar: "العربية والإنجليزية" },
      { en: "Severity badges", ar: "شارات الشدة" },
      { en: "Diagnosis history JSON export", ar: "تصدير سجل التشخيص JSON" },
    ],
    technicalHighlights: [
      {
        en: "README documents 30 English and 30 Arabic knowledge-base entries.",
        ar: "README يوثّق 30 مدخلاً إنجليزياً و30 عربياً في قاعدة المعرفة.",
      },
    ],
    architecture: [
      { en: "Static UI", ar: "واجهة ثابتة" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "JSON KB", ar: "قاعدة JSON" },
      { en: "Diagnosis", ar: "التشخيص" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "python", "web", "backend"],
    technologies: ["Python", "FastAPI", "Pydantic"],
    github: "https://github.com/shahdtarraf/-ServerGuard-Expert-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "smart-lighting",
    slug: "smart-lighting",
    repoName: "-Smart-Lighting-Management-Expert-System",
    title: {
      en: "Smart Lighting Expert System",
      ar: "نظام الإضاءة الذكي الخبير",
    },
    description: {
      en: "Bilingual lighting/energy expert system with FastAPI, fuzzy matching, session memory, and a static dashboard.",
      ar: "نظام خبير للإضاءة والطاقة ثنائي اللغة مع FastAPI ومطابقة ضبابية وذاكرة جلسة ولوحة ثابتة.",
    },
    problem: {
      en: "Recommend lighting configurations from room, occupancy, and time context.",
      ar: "اقتراح إعدادات إضاءة من سياق الغرفة والإشغال والوقت.",
    },
    solution: {
      en: "Modular FastAPI (matching, scoring, memory) plus JSON knowledge base and vanilla frontend.",
      ar: "FastAPI معياري (مطابقة، تقييم، ذاكرة) مع قاعدة JSON وواجهة تقليدية.",
    },
    features: [
      { en: "Weighted scoring (README)", ar: "تقييم موزون (README)" },
      { en: "Dual-language knowledge base", ar: "قاعدة معرفة ثنائية اللغة" },
      { en: "tests/ directory present", ar: "مجلد tests/ موجود" },
    ],
    technicalHighlights: [
      {
        en: "Default GitHub branch is master.",
        ar: "الفرع الافتراضي على GitHub هو master.",
      },
    ],
    architecture: [
      { en: "Dashboard", ar: "لوحة التحكم" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "Scoring + KB", ar: "التقييم وقاعدة المعرفة" },
      { en: "Recommendation", ar: "التوصية" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: ["Python", "FastAPI"],
    github:
      "https://github.com/shahdtarraf/-Smart-Lighting-Management-Expert-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "hobby-advisor",
    slug: "hobby-advisor",
    repoName: "-Smart-Hobby-Advisor-Run-Guide",
    title: { en: "Smart Hobby Advisor", ar: "مستشار الهوايات الذكي" },
    description: {
      en: "FastAPI hobby recommender with a JSON knowledge base, fuzzy matching, and a vanilla frontend.",
      ar: "موصي هوايات FastAPI مع قاعدة JSON ومطابقة ضبابية وواجهة تقليدية.",
    },
    problem: {
      en: "Recommend hobbies from natural-language text, including Arabic.",
      ar: "اقتراح هوايات من نص طبيعي يشمل العربية.",
    },
    solution: {
      en: "POST /api/recommend against a JSON knowledge base using thefuzz / python-Levenshtein.",
      ar: "POST /api/recommend على قاعدة JSON باستخدام thefuzz وpython-Levenshtein.",
    },
    features: [
      { en: "POST /api/recommend", ar: "POST /api/recommend" },
      { en: "Health endpoint /api/health", ar: "فحص الصحة /api/health" },
      { en: "language_override and top_n", ar: "language_override وtop_n" },
    ],
    technicalHighlights: [
      {
        en: "Root README is title-only; run instructions live in docs/RUN_GUIDE.md.",
        ar: "README الجذر عنوان فقط؛ تعليمات التشغيل في docs/RUN_GUIDE.md.",
      },
    ],
    architecture: [
      { en: "Vanilla UI", ar: "واجهة تقليدية" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "Fuzzy match + JSON KB", ar: "مطابقة ضبابية وقاعدة JSON" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      aiml: ["Fuzzy matching"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "python", "web", "backend"],
    technologies: ["Python", "FastAPI", "thefuzz"],
    github: "https://github.com/shahdtarraf/-Smart-Hobby-Advisor-Run-Guide",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "therapeutic-nutrition",
    slug: "therapeutic-nutrition",
    repoName: "-Run-Guide-Therapeutic-Nutrition-DSS",
    title: {
      en: "Therapeutic Nutrition DSS",
      ar: "نظام دعم القرار للتغذية العلاجية",
    },
    description: {
      en: "Rule-based bilingual nutrition decision-support system with FastAPI, fuzzy matching, and localStorage session memory.",
      ar: "نظام دعم قرار تغذية علاجي ثنائي اللغة قائم على القواعد مع FastAPI ومطابقة ضبابية وذاكرة localStorage.",
    },
    problem: {
      en: "Produce nutrition suggestions from health, diet, and symptom text.",
      ar: "إنتاج اقتراحات تغذية من نص الحالة والنظام الغذائي والأعراض.",
    },
    solution: {
      en: "FastAPI POST /analyze, JSON knowledge base, static bilingual frontend.",
      ar: "FastAPI POST /analyze وقاعدة JSON وواجهة ثابتة ثنائية اللغة.",
    },
    features: [
      { en: "Arabic / English UI", ar: "واجهة عربية / إنجليزية" },
      { en: "Scoring engine", ar: "محرك تقييم" },
      { en: "SYSTEM_ARCHITECTURE.md in repo", ar: "SYSTEM_ARCHITECTURE.md في المستودع" },
    ],
    technicalHighlights: [
      {
        en: "Documented as retrieval-based expert system, not a trained neural network.",
        ar: "موثّق كنظام خبير استرجاعي وليس شبكة عصبية مدرَّبة.",
      },
    ],
    architecture: [
      { en: "Bilingual UI", ar: "واجهة ثنائية" },
      { en: "FastAPI /analyze", ar: "FastAPI /analyze" },
      { en: "JSON facts + scoring", ar: "حقائق JSON وتقييم" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: ["Python", "FastAPI", "Pydantic"],
    github:
      "https://github.com/shahdtarraf/-Run-Guide-Therapeutic-Nutrition-DSS",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "scholarship-expert-system",
    slug: "scholarship-expert-system",
    repoName: "Scholarship-Expert-System",
    title: { en: "Scholarship Expert System", ar: "نظام المنح الخبير" },
    description: {
      en: "FastAPI scholarship matcher with JSON facts, alias normalization, scoring, tests, and a dedicated frontend folder.",
      ar: "مطابق منح FastAPI مع حقائق JSON وتطبيع أسماء مستعارة وتقييم واختبارات ومجلد واجهة.",
    },
    problem: {
      en: "Match users to scholarships from queries.",
      ar: "مطابقة المستخدمين مع منح من الاستعلامات.",
    },
    solution: {
      en: "Separated knowledge_base JSON, inference engine, Pydantic API, frontend_scholarship/.",
      ar: "قاعدة JSON مفصولة ومحرك استدلال وواجهة Pydantic ومجلد frontend_scholarship/.",
    },
    features: [
      { en: "External JSON facts", ar: "حقائق JSON خارجية" },
      { en: "Alias / normalization utilities", ar: "أدوات أسماء مستعارة / تطبيع" },
      { en: "tests/ present", ar: "مجلد tests/ موجود" },
    ],
    technicalHighlights: [
      {
        en: "Root README is title-only; architecture is in FINAL_EXPERT_SYSTEM_ARCHITECTURE.md.",
        ar: "README الجذر عنوان فقط؛ المعمارية في FINAL_EXPERT_SYSTEM_ARCHITECTURE.md.",
      },
    ],
    architecture: [
      { en: "Frontend folder", ar: "مجلد الواجهة" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "Scholarships JSON + scoring", ar: "JSON المنح والتقييم" },
    ],
    stack: {
      frontend: ["frontend_scholarship/"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "python", "education", "web", "backend"],
    technologies: ["Python", "FastAPI", "Pydantic"],
    github: "https://github.com/shahdtarraf/Scholarship-Expert-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "furniture-expert-system",
    slug: "furniture-expert-system",
    repoName: "Smart-Furniture-Selection-Expert-System",
    title: {
      en: "Smart Furniture Selection",
      ar: "اختيار الأثاث الذكي",
    },
    description: {
      en: "Furniture advisor with FastAPI, JSON knowledge base, fuzzy Arabic/English matching, and localStorage sessions.",
      ar: "مستشار أثاث بـ FastAPI وقاعدة JSON ومطابقة ضبابية عربية/إنجليزية وجلسات localStorage.",
    },
    problem: {
      en: "Recommend furniture from budget, style, and material constraints.",
      ar: "اقتراح أثاث وفق الميزانية والأسلوب والمواد.",
    },
    solution: {
      en: "FastAPI backend, vanilla frontend, JSON KB, session memory in the browser.",
      ar: "خلفية FastAPI وواجهة تقليدية وقاعدة JSON وذاكرة جلسة في المتصفح.",
    },
    features: [
      { en: "Fuzzy AR/EN matching", ar: "مطابقة ضبابية عربية/إنجليزية" },
      { en: "Working memory / sessions", ar: "ذاكرة عمل / جلسات" },
    ],
    technicalHighlights: [
      {
        en: "RUN_GUIDE.md and RUN_GUIDE_COMPLETE.md are present.",
        ar: "ملفات RUN_GUIDE.md وRUN_GUIDE_COMPLETE.md موجودة.",
      },
    ],
    architecture: [
      { en: "Vanilla UI", ar: "واجهة تقليدية" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "JSON KB + fuzzy match", ar: "قاعدة JSON ومطابقة ضبابية" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: ["Python", "FastAPI"],
    github:
      "https://github.com/shahdtarraf/Smart-Furniture-Selection-Expert-System",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "vehicle-licensing",
    slug: "vehicle-licensing",
    repoName: "Smart-Vehicle-Licensing-Expert-System-",
    title: {
      en: "Smart Vehicle Licensing Expert System",
      ar: "نظام ترخيص المركبات الخبير",
    },
    description: {
      en: "Advisor for vehicle registration/licensing from usage, fuel, weight, and seats, with fuzzy Arabic/English matching.",
      ar: "مستشار لتسجيل وترخيص المركبات من الاستخدام والوقود والوزن والمقاعد مع مطابقة ضبابية عربية/إنجليزية.",
    },
    problem: {
      en: "Determine licensing procedures from vehicle specs or text.",
      ar: "تحديد إجراءات الترخيص من مواصفات المركبة أو النص.",
    },
    solution: {
      en: "JSON knowledge base, inference, FastAPI, vanilla government-style UI.",
      ar: "قاعدة JSON واستدلال وFastAPI وواجهة تقليدية بطابع إداري.",
    },
    features: [
      { en: "Fuzzy AR/EN matching", ar: "مطابقة ضبابية عربية/إنجليزية" },
      { en: "Session / working memory", ar: "ذاكرة جلسة" },
    ],
    technicalHighlights: [
      {
        en: "Same expert-system template as furniture and lighting projects.",
        ar: "نفس قالب النظام الخبير المستخدم في مشروعي الأثاث والإضاءة.",
      },
    ],
    architecture: [
      { en: "Static UI", ar: "واجهة ثابتة" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "JSON KB", ar: "قاعدة JSON" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: ["Python", "FastAPI"],
    github:
      "https://github.com/shahdtarraf/Smart-Vehicle-Licensing-Expert-System-",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "phone-addiction-expert",
    slug: "phone-addiction-expert",
    repoName: "Phone-Addiction-Expert-System---Startup-Guide",
    title: {
      en: "Phone Addiction Expert System",
      ar: "نظام إدمان الهاتف الخبير",
    },
    description: {
      en: "Supportive (non-diagnostic) phone-use assessment with FastAPI, a JSON knowledge base, and a React/Vite/Tailwind frontend.",
      ar: "تقييم داعم (غير تشخيصي) لاستخدام الهاتف مع FastAPI وقاعدة JSON وواجهة React/Vite/Tailwind.",
    },
    problem: {
      en: "Offer structured, non-clinical guidance about phone-use issues.",
      ar: "تقديم إرشاد منظّم غير سريري حول مشاكل استخدام الهاتف.",
    },
    solution: {
      en: "backend/phone_addiction_main.py, knowledge_base/phone_addiction_kb.json, React frontend, run_phone_addiction.bat.",
      ar: "الخلفية phone_addiction_main.py وقاعدة phone_addiction_kb.json وواجهة React وملف التشغيل.",
    },
    features: [
      { en: "Bilingual RTL/LTR (documented)", ar: "اتجاه ثنائي RTL/LTR (موثّق)" },
      { en: "Dark/light UI (documented)", ar: "مظهر داكن/فاتح (موثّق)" },
      { en: "Session export as JSON", ar: "تصدير الجلسة JSON" },
      { en: "Health reports entries_loaded: 60 (documented)", ar: "فحص الصحة يذكر 60 مدخلاً (موثّق)" },
    ],
    technicalHighlights: [
      {
        en: "Root README is title-only; Arabic دليل_التشغيل.md holds run steps.",
        ar: "README الجذر عنوان فقط؛ دليل_التشغيل.md يحتوي خطوات التشغيل.",
      },
    ],
    architecture: [
      { en: "React (Vite)", ar: "React (Vite)" },
      { en: "FastAPI :8000", ar: "FastAPI :8000" },
      { en: "JSON KB (60 entries)", ar: "قاعدة JSON (60 مدخلاً)" },
    ],
    stack: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["FastAPI"],
      database: ["JSON KB"],
      deployment: ["Local"],
    },
    categories: ["ai", "python", "web", "backend"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/shahdtarraf/Phone-Addiction-Expert-System---Startup-Guide",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "JavaScript",
  },
  {
    id: "order-chatbot",
    slug: "order-chatbot",
    repoName: "order",
    title: { en: "Delivery Order Chatbot API", ar: "واجهة روبوت طلبات التوصيل" },
    description: {
      en: "FastAPI chatbot that collects delivery-order details in Arabic or English using LangChain with Groq (OpenAI optional in code comments).",
      ar: "روبوت FastAPI يجمع تفاصيل طلب التوصيل بالعربية أو الإنجليزية عبر LangChain وGroq (OpenAI اختياري في التعليقات).",
    },
    problem: {
      en: "Gather structured order fields through chat.",
      ar: "جمع حقول الطلب المنظّمة عبر المحادثة.",
    },
    solution: {
      en: "main_api.py, chatbot.py, order_handler.py, render.yaml. Endpoints include POST /chat and GET /orders.",
      ar: "main_api.py وchatbot.py وorder_handler.py وrender.yaml. المسارات تشمل POST /chat وGET /orders.",
    },
    features: [
      { en: "POST /chat", ar: "POST /chat" },
      { en: "GET /orders", ar: "GET /orders" },
      { en: "Health GET /", ar: "فحص الصحة GET /" },
    ],
    technicalHighlights: [
      {
        en: "README clone URL is a placeholder (YOUR_USERNAME/delivery-chatbot). Render URL in docs is also a placeholder.",
        ar: "رابط النسخ في README عنصر نائب. رابط Render في التوثيق عنصر نائب أيضاً.",
      },
    ],
    architecture: [
      { en: "Chat client", ar: "عميل المحادثة" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "LLM (Groq)", ar: "نموذج Groq" },
      { en: "Order handler", ar: "معالج الطلب" },
    ],
    stack: {
      backend: ["FastAPI", "Uvicorn"],
      aiml: ["LangChain", "Groq"],
      deployment: ["Render documented (no verified live URL)"],
    },
    categories: ["ai", "nlp", "python", "backend"],
    technologies: ["Python", "FastAPI", "LangChain", "Groq"],
    github: "https://github.com/shahdtarraf/order",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-05-11",
    primaryLanguage: "Python",
  },
  {
    id: "fodwa-aichatbot",
    slug: "fodwa-aichatbot",
    repoName: "FODWA-AIchatbot",
    title: {
      en: "FODWA AI Chatbot (Django duplicate)",
      ar: "روبوت فودوا (نسخة Django موازية)",
    },
    description: {
      en: "Near-duplicate of FODWA-ai-chatbot: Django, FAISS, OpenAI, Docker, and Render guide, without a root README or test_nlp.py.",
      ar: "نسخة شبه مطابقة لـ FODWA-ai-chatbot: Django وFAISS وOpenAI وDocker ودليل Render، دون README في الجذر ودون test_nlp.py.",
    },
    problem: {
      en: "Same FODWA Arabic support chatbot problem as the featured Django service.",
      ar: "نفس مسألة روبوت دعم فودوا العربية كما في الخدمة المميزة.",
    },
    solution: {
      en: "Django project fodwa_project + chatbot/ + ingest_data.py.",
      ar: "مشروع Django باسم fodwa_project مع chatbot/ وingest_data.py.",
    },
    features: [
      { en: "Django RAG stack", ar: "مكدس Django RAG" },
      { en: "Render Docker guide", ar: "دليل Render بـ Docker" },
    ],
    technicalHighlights: [
      {
        en: "requirements.txt lacks langdetect compared with FODWA-ai-chatbot.",
        ar: "requirements.txt يفتقد langdetect مقارنة بـ FODWA-ai-chatbot.",
      },
    ],
    architecture: [
      { en: "Django API", ar: "واجهة Django" },
      { en: "FAISS + OpenAI", ar: "FAISS وOpenAI" },
    ],
    stack: {
      backend: ["Django", "Gunicorn"],
      aiml: ["FAISS", "OpenAI"],
      deployment: ["Docker", "Render"],
    },
    categories: ["ai", "nlp", "python", "backend", "web"],
    technologies: ["Python", "Django", "FAISS", "OpenAI", "Docker"],
    github: "https://github.com/shahdtarraf/FODWA-AIchatbot",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: false,
    relatedSlugs: ["fodwa-ai-chatbot"],
    notes: {
      en: "Earlier/parallel Django snapshot. Prefer FODWA-ai-chatbot as the documented production-oriented copy.",
      ar: "لقطة Django موازية. يُفضَّل FODWA-ai-chatbot كنسخة أوضح.",
    },
    updatedAt: "2026-04-15",
    primaryLanguage: "Python",
  },
  {
    id: "fodowa-chatbot",
    slug: "fodowa-chatbot",
    repoName: "Fodowa_chatbot",
    title: {
      en: "FODOWA Chatbot (FastAPI + Streamlit)",
      ar: "روبوت فودوا (FastAPI + Streamlit)",
    },
    description: {
      en: "Earlier FODWA Arabic assistant: FastAPI RAG + FAISS + Hugging Face Inference, with a Streamlit client. Documented Render URL is suspended.",
      ar: "نسخة أقدم لمساعد فودوا: FastAPI RAG وFAISS وHugging Face مع عميل Streamlit. رابط Render الموثّق معلّق.",
    },
    problem: {
      en: "Answer Arabic FODWA questions from a knowledge base.",
      ar: "الإجابة عن أسئلة فودوا العربية من قاعدة معرفة.",
    },
    solution: {
      en: "backend FastAPI RAG; frontend Streamlit posts to /chat. Default README model: Qwen/Qwen2.5-7B-Instruct.",
      ar: "خلفية FastAPI RAG؛ واجهة Streamlit ترسل إلى /chat. النموذج الافتراضي في README: Qwen/Qwen2.5-7B-Instruct.",
    },
    features: [
      { en: "Pre-built FAISS", ar: "فهرس FAISS جاهز" },
      { en: "conversation_id", ar: "معرّف محادثة" },
      { en: "GET /health", ar: "GET /health" },
    ],
    technicalHighlights: [
      {
        en: "https://fodowa-chatbot.onrender.com was checked and is suspended — not shown as a demo.",
        ar: "تم فحص https://fodowa-chatbot.onrender.com وهو معلّق — لا يُعرض كتجربة.",
      },
    ],
    architecture: [
      { en: "Streamlit", ar: "Streamlit" },
      { en: "FastAPI /chat", ar: "FastAPI /chat" },
      { en: "FAISS + HF LLM", ar: "FAISS ونموذج HF" },
    ],
    stack: {
      frontend: ["Streamlit"],
      backend: ["FastAPI"],
      aiml: ["LangChain", "FAISS", "Hugging Face"],
      deployment: ["Render (suspended)"],
    },
    categories: ["ai", "nlp", "python", "web", "backend"],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Streamlit",
      "Hugging Face",
    ],
    github: "https://github.com/shahdtarraf/Fodowa_chatbot",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    relatedSlugs: ["fodwa-ai-chatbot"],
    updatedAt: "2026-03-25",
    primaryLanguage: "Python",
  },
  {
    id: "fodowa-assistant",
    slug: "fodowa-assistant",
    repoName: "FODOWA_Assistant",
    title: { en: "FODOWA Assistant (FAQ)", ar: "مساعد فودوا (أسئلة شائعة)" },
    description: {
      en: "Lightweight FAQ FastAPI bot with keyword/substring/difflib matching. README states there is no ML.",
      ar: "روبوت أسئلة شائعة خفيف بـ FastAPI عبر كلمات مفتاحية وdifflib. README يوضح أنه بلا تعلم آلي.",
    },
    problem: {
      en: "Answer FAQs with low RAM and fast startup.",
      ar: "الإجابة عن الأسئلة الشائعة بذاكرة منخفضة وإقلاع سريع.",
    },
    solution: {
      en: "app/chatbot.py + data/faq.json + static/index.html. Endpoints: /chat /validate /logs /health.",
      ar: "app/chatbot.py وdata/faq.json وstatic/index.html. المسارات: /chat /validate /logs /health.",
    },
    features: [
      { en: "difflib fuzzy FAQ match", ar: "مطابقة FAQ عبر difflib" },
      { en: "pytest present", ar: "pytest موجود" },
      { en: "Static HTML chat page", ar: "صفحة محادثة HTML ثابتة" },
    ],
    technicalHighlights: [
      {
        en: "README example https://faq-chatbot.onrender.com is generic and not verified live.",
        ar: "مثال README على Render عام ولم يُتحقق منه كرابط حي.",
      },
    ],
    architecture: [
      { en: "static/index.html", ar: "static/index.html" },
      { en: "FastAPI", ar: "FastAPI" },
      { en: "faq.json matcher", ar: "مطابقة faq.json" },
    ],
    stack: {
      frontend: ["HTML"],
      backend: ["FastAPI"],
      database: ["faq.json"],
      deployment: ["Dockerfile"],
    },
    categories: ["nlp", "python", "backend", "web"],
    technologies: ["Python", "FastAPI", "Pydantic"],
    github: "https://github.com/shahdtarraf/FODOWA_Assistant",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    relatedSlugs: ["fodwa-ai-chatbot"],
    updatedAt: "2026-03-25",
    primaryLanguage: "Python",
  },
  {
    id: "chat-bot-software",
    slug: "chat-bot-software",
    repoName: "chat_bot_software",
    title: {
      en: "Arabic Medical Consult Chatbot",
      ar: "روبوت استشارة طبية عربي",
    },
    description: {
      en: "Streamlit RAG chatbot for medical questions over PDF/TXT using LangChain, Groq, FAISS, and Hugging Face embeddings.",
      ar: "روبوت Streamlit بنمط RAG لأسئلة طبية من PDF/TXT باستخدام LangChain وGroq وFAISS وتضمينات Hugging Face.",
    },
    problem: {
      en: "Answer medical questions from a local document store.",
      ar: "الإجابة عن أسئلة طبية من مخزن وثائق محلي.",
    },
    solution: {
      en: "create_memory_for_llm.py builds FAISS; Streamlit app.py chats. Procfile present. Localhost-only in README.",
      ar: "create_memory_for_llm.py يبني FAISS؛ app.py محادثة Streamlit. يوجد Procfile. README يذكر localhost فقط.",
    },
    features: [
      { en: "FAISS vectorstore/", ar: "مخزن FAISS" },
      { en: "Groq LLM", ar: "نموذج Groq" },
      { en: "Arabic RTL UI (claimed in README)", ar: "واجهة عربية RTL (مذكورة في README)" },
    ],
    technicalHighlights: [
      {
        en: "Educational tool; not a substitute for a clinician.",
        ar: "أداة تعليمية وليست بديلاً عن طبيب.",
      },
    ],
    architecture: [
      { en: "PDF/TXT ingest", ar: "إدخال PDF/TXT" },
      { en: "FAISS", ar: "FAISS" },
      { en: "Streamlit + Groq", ar: "Streamlit وGroq" },
    ],
    stack: {
      frontend: ["Streamlit"],
      aiml: ["LangChain", "Groq", "FAISS", "Hugging Face"],
      database: ["FAISS"],
      deployment: ["Procfile (local documented)"],
    },
    categories: ["ai", "nlp", "python", "machine-learning"],
    technologies: ["Python", "Streamlit", "LangChain", "Groq", "FAISS"],
    github: "https://github.com/shahdtarraf/chat_bot_software",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2025-12-06",
    primaryLanguage: "Python",
  },
  {
    id: "signup-course-telegram-bot",
    slug: "signup-course-telegram-bot",
    repoName: "singup_course_telegram_bot",
    title: {
      en: "Course Signup Telegram Bot",
      ar: "بوت تيليغرام للتسجيل في الدورات",
    },
    description: {
      en: "Telegram bot for course registration, payments, and admin flows, with MongoDB (Beanie/Motor) and optional FastAPI webhook.",
      ar: "بوت تيليغرام لتسجيل الدورات والدفع والإدارة، مع MongoDB (Beanie/Motor) وFastAPI اختياري للويب هوك.",
    },
    problem: {
      en: "Handle course signup through Telegram instead of a web form.",
      ar: "إدارة التسجيل في الدورات عبر تيليغرام بدل نموذج ويب.",
    },
    solution: {
      en: "python-telegram-bot Application with registration/courses/payment/admin handlers; Mongo via beanie/motor.",
      ar: "تطبيق python-telegram-bot مع معالجات التسجيل والدورات والدفع والإدارة؛ Mongo عبر beanie/motor.",
    },
    features: [
      { en: "Registration / courses / payment / admin handlers", ar: "معالجات التسجيل والدورات والدفع والإدارة" },
      { en: "Webhook or polling", ar: "ويب هوك أو polling" },
    ],
    technicalHighlights: [
      {
        en: "Dockerfile and fly.toml in the repo were empty (1-byte) placeholders when inspected. No public bot username in README.",
        ar: "Dockerfile وfly.toml كانا عنصرين نائبين فارغين عند الفحص. لا يوجد اسم مستخدم عام للبوت في README.",
      },
    ],
    architecture: [
      { en: "Telegram user", ar: "مستخدم تيليغرام" },
      { en: "Bot handlers", ar: "معالجات البوت" },
      { en: "MongoDB", ar: "MongoDB" },
    ],
    stack: {
      backend: ["python-telegram-bot", "FastAPI"],
      database: ["MongoDB"],
      deployment: ["Replit files present"],
    },
    categories: ["python", "backend", "automation", "education"],
    technologies: [
      "Python",
      "python-telegram-bot",
      "MongoDB",
      "FastAPI",
      "Beanie",
    ],
    github: "https://github.com/shahdtarraf/singup_course_telegram_bot",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    notes: {
      en: "The repository name misspells signup. No public bot username is published in the README.",
      ar: "اسم المستودع يخطئ كتابة signup. لا ينشر README اسم المستخدم العام للبوت.",
    },
    updatedAt: "2026-01-04",
    primaryLanguage: "Python",
  },
  {
    id: "mange-student",
    slug: "mange-student",
    repoName: "mange_student",
    title: {
      en: "Arohan School Management System",
      ar: "نظام إدارة مدرسة Arohan",
    },
    description: {
      en: "School operations web app for students, staff, classes, fees, and role-based access, with a React client and an Express server.",
      ar: "تطبيق ويب لإدارة الطلاب والموظفين والصفوف والرسوم والصلاحيات، بعميل React وخادم Express.",
    },
    problem: {
      en: "Administer school records, fees, and role-based access.",
      ar: "إدارة سجلات المدرسة والرسوم وصلاحيات الأدوار.",
    },
    solution: {
      en: "client/ React + Tailwind/shadcn; server/ Express + JWT + Joi; Prisma mentioned; render.yaml present.",
      ar: "عميل React وTailwind/shadcn؛ خادم Express وJWT وJoi؛ Prisma مذكور؛ يوجد render.yaml.",
    },
    features: [
      { en: "JWT auth and RBAC (README)", ar: "مصادقة JWT وصلاحيات (README)" },
      { en: "Fee / payment tracking", ar: "تتبع الرسوم والدفع" },
      { en: "Dashboard charts (Recharts)", ar: "رسوم لوحة التحكم (Recharts)" },
    ],
    technicalHighlights: [
      {
        en: "The README describes PostgreSQL with Prisma. render.yaml references MongoDB, so the database is not stated as a single confirmed system.",
        ar: "يصف README قاعدة PostgreSQL مع Prisma، بينما render.yaml يذكر MongoDB، لذلك لا تُعرض قاعدة واحدة كأمر مؤكد.",
      },
    ],
    architecture: [
      { en: "React client", ar: "عميل React" },
      { en: "Express API", ar: "واجهة Express" },
    ],
    stack: {
      frontend: ["React", "Tailwind CSS", "shadcn/ui", "Recharts"],
      backend: ["Node.js", "Express", "JWT"],
      deployment: ["Render blueprint (no public live URL)"],
    },
    categories: ["web", "backend", "education"],
    technologies: [
      "JavaScript",
      "React",
      "Express.js",
      "Node.js",
      "JWT",
    ],
    github: "https://github.com/shahdtarraf/mange_student",
    images: [],
    featured: false,
    status: "active",
    hasReadme: true,
    notes: {
      en: "Repository name misspells manage. No verified public demo.",
      ar: "اسم المستودع يخطئ إملاء manage. لا توجد تجربة عامة موثّقة.",
    },
    updatedAt: "2026-09-02",
    primaryLanguage: "JavaScript",
  },
  {
    id: "snake-ai-pathfinding",
    slug: "snake-ai-pathfinding",
    repoName: "A-Snake-game-with-AI-assisted-pathfinding",
    title: {
      en: "Snake Symphony (AI Pathfinding)",
      ar: "Snake Symphony (بحث مسار)",
    },
    description: {
      en: "Pygame Snake game with BFS and A* pathfinding, Arabic UI helpers, and audio.",
      ar: "لعبة ثعبان Pygame مع بحث BFS وA* وواجهة عربية وملفات صوت.",
    },
    problem: {
      en: "Play Snake manually or let a search algorithm path to food.",
      ar: "لعب الثعبان يدوياً أو بترك خوارزمية بحث تجد الطعام.",
    },
    solution: {
      en: "snake_ai_music.py implements PathFinder.bfs and PathFinder.a_star (Manhattan).",
      ar: "snake_ai_music.py ينفّذ PathFinder.bfs وPathFinder.a_star (مانهاتن).",
    },
    features: [
      { en: "BFS and A* modes", ar: "وضعا BFS وA*" },
      { en: "Arabic UI via arabic-reshaper and python-bidi", ar: "واجهة عربية عبر arabic-reshaper وpython-bidi" },
    ],
    technicalHighlights: [
      {
        en: "Classic search, not a learned policy. Default branch: master.",
        ar: "بحث كلاسيكي وليس سياسة متعلَّمة. الفرع الافتراضي: master.",
      },
    ],
    architecture: [
      { en: "Pygame loop", ar: "حلقة Pygame" },
      { en: "BFS / A* planner", ar: "مخطّط BFS / A*" },
      { en: "Grid actions", ar: "حركات الشبكة" },
    ],
    stack: {
      frontend: ["Pygame"],
      aiml: ["BFS", "A*"],
    },
    categories: ["ai", "python", "gui"],
    technologies: ["Python", "Pygame", "arabic-reshaper", "python-bidi"],
    github:
      "https://github.com/shahdtarraf/A-Snake-game-with-AI-assisted-pathfinding",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "forgotten-realm",
    slug: "forgotten-realm",
    repoName: "The-Forgotten-Realm",
    title: { en: "The Forgotten Realm", ar: "The Forgotten Realm" },
    description: {
      en: "Pygame Flappy-style game with a human mode and a greedy jump heuristic. No README in the repository.",
      ar: "لعبة Pygame بأسلوب Flappy مع وضع بشري وقاعدة قفز جشعة. لا يوجد README في المستودع.",
    },
    problem: {
      en: "Pass obstacles and reach a score of 5 (from game.py).",
      ar: "تجاوز العوائق والوصول إلى نقاط 5 (من game.py).",
    },
    solution: {
      en: "Single game.py plus assets. Optional greedy AI jumps if bird_y is below the gap center.",
      ar: "ملف game.py مع الأصول. ذكاء جشع يقفز إذا كان موضع الطائر تحت مركز الفجوة.",
    },
    features: [
      { en: "HUMAN vs GREEDY modes (H/G keys)", ar: "وضعا HUMAN وGREEDY (مفتاحا H/G)" },
      { en: "Menu, instructions, stats", ar: "قائمة وتعليمات وإحصاءات" },
    ],
    technicalHighlights: [
      {
        en: "Heuristic control, not a trained agent. Window 800×600.",
        ar: "تحكم إرشادي وليس وكيلاً مدرَّباً. النافذة 800×600.",
      },
    ],
    architecture: [
      { en: "Pygame window", ar: "نافذة Pygame" },
      { en: "Greedy gap heuristic (optional)", ar: "قاعدة الفجوة الجشعة (اختياري)" },
    ],
    stack: {
      frontend: ["Pygame"],
      aiml: ["Greedy heuristic"],
    },
    categories: ["python", "ai", "gui"],
    technologies: ["Python", "Pygame"],
    github: "https://github.com/shahdtarraf/The-Forgotten-Realm",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: false,
    updatedAt: "2026-08-07",
    primaryLanguage: "Python",
  },
  {
    id: "password-generator",
    slug: "password-generator",
    repoName: "Password-Generator",
    title: { en: "Password Generator", ar: "مولّد كلمات المرور" },
    description: {
      en: "Command-line Python tool that builds random passwords from letters, digits, and symbols with a minimum length of 4.",
      ar: "أداة سطر أوامر بايثون تولّد كلمات مرور عشوائية من أحرف وأرقام ورموز بطول أدنى 4.",
    },
    problem: {
      en: "Generate a random password of a chosen length.",
      ar: "توليد كلمة مرور عشوائية بطول يختاره المستخدم.",
    },
    solution: {
      en: "stdlib random + string in main.py. Arabic RUN_GUIDE.md present.",
      ar: "مكتبتا random وstring في main.py. يوجد RUN_GUIDE.md بالعربية.",
    },
    features: [
      { en: "User-chosen length", ar: "طول يختاره المستخدم" },
      { en: "Minimum length 4", ar: "الحد الأدنى 4" },
      { en: "Non-numeric input handling", ar: "معالجة إدخال غير رقمي" },
    ],
    technicalHighlights: [
      { en: "No third-party requirements.txt.", ar: "لا يوجد requirements.txt لمكتبات خارجية." },
    ],
    architecture: [
      { en: "CLI prompt", ar: "موجّه سطر أوامر" },
      { en: "random.choice over character sets", ar: "random.choice على مجموعات الأحرف" },
    ],
    stack: {
      backend: ["Python CLI"],
    },
    categories: ["python", "education"],
    technologies: ["Python"],
    github: "https://github.com/shahdtarraf/Password-Generator",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-09-06",
    primaryLanguage: "Python",
  },
  {
    id: "number-guessing-game",
    slug: "number-guessing-game",
    repoName: "Number_Gussing_Game",
    title: { en: "Number Guessing Game", ar: "لعبة تخمين الرقم" },
    description: {
      en: "CLI game: guess a secret number from 1–100 with high/low feedback, counters, and an optional extra round.",
      ar: "لعبة سطر أوامر: تخمين رقم بين 1 و100 مع تلميح أعلى/أسفل وعدّادات وجولة إضافية اختيارية.",
    },
    problem: {
      en: "Practice basic Python control flow with an interactive game.",
      ar: "التدرّب على تدفق التحكم في بايثون عبر لعبة تفاعلية.",
    },
    solution: {
      en: "Number Guessing Game.py using random. PDF and RUN_GUIDE.md included. MIT license.",
      ar: "ملف Number Guessing Game.py يستخدم random. يتضمن PDF وRUN_GUIDE.md. رخصة MIT.",
    },
    features: [
      { en: "High/low feedback", ar: "تلميح أعلى/أسفل" },
      { en: "Invalid input rejected", ar: "رفض الإدخال غير الصالح" },
      { en: "Play-again loop", ar: "حلقة إعادة اللعب" },
    ],
    technicalHighlights: [
      { en: "Repository name misspells Guessing.", ar: "اسم المستودع يخطئ إملاء Guessing." },
    ],
    architecture: [{ en: "Single Python script", ar: "سكربت بايثون واحد" }],
    stack: { backend: ["Python CLI"] },
    categories: ["python", "education"],
    technologies: ["Python"],
    github: "https://github.com/shahdtarraf/Number_Gussing_Game",
    images: [],
    featured: false,
    status: "completed",
    hasReadme: true,
    updatedAt: "2026-09-06",
    primaryLanguage: "Python",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getUsedCategories() {
  const used = new Set(projects.flatMap((project) => project.categories));
  return used;
}
