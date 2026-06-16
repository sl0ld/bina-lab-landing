import { useEffect } from "react";
import { type Language } from "./LanguageProvider";

const arToEn: Record<string, string> = {
  "التسجيل في دورة binaa LAB للذكاء الاصطناعي والتصميم الداخلي متاح الآن":
    "Enrollment for the binaa LAB AI and interior design course is now open",
  "هكذا يستخدم مصممو الديكور الذكاء الاصطناعي لتوفير الوقت، وتقديم تصاميم أفضل، وتوسيع أعمالهم":
    "How interior designers use AI to save time, create better designs, and grow their business",
  "سأرشدك خلال مشروع تصميم داخلي كامل، من الأفكار الأولى حتى التصاميم النهائية. ستتعلم متى وكيف تستخدم أدوات الذكاء الاصطناعي مثل Midjourney و ChatGPT و Nano Banana، لتتناسب مع سير عملك باحترافية.":
    "I will guide you through a full interior design project, from first ideas to final visuals. You will learn when and how to use AI tools like Midjourney, ChatGPT, and Nano Banana so they fit your workflow professionally.",
  "11+ ساعة محتوى عملي": "11+ hours of practical content",
  "52 درس فيديو": "52 video lessons",
  "بونصات حصرية": "Exclusive bonuses",
  "وصول مدى الحياة": "Lifetime access",
  "ضمان استرداد 7 أيام": "7-day money-back guarantee",
  "يثق بنا أكثر من": "Trusted by more than",
  "مصمم": "designers",
  "يثق بنا أكثر من 1500 مصمم": "Trusted by more than 1,500 designers",
  "سجّل الآن": "Enroll now",
  "في 2026، الذكاء الاصطناعي لم يعد خياراً، أصبح هو المعيار":
    "In 2026, AI is no longer optional. It is the new standard.",
  "المصممون الذين يتقنون AI ينتجون 3x أسرع، يقدمون تصاميم أكثر إبداعاً، ويكسبون عملاء أكثر. السؤال ليس \"هل أستخدم AI؟\" بل \"كيف أتقنه قبل المنافسين؟\"":
    "Designers who master AI produce 3x faster, present more creative concepts, and win more clients. The question is not “Should I use AI?” but “How do I master it before my competitors?”",
  "هذه الدورة مصممة خصيصاً للمصممين الداخليين الذين يريدون الانتقال من التقليد إلى الابتكار، ومن البطء إلى السرعة، ومن العشوائية إلى الاحتراف.":
    "This course is made for interior designers who want to move from imitation to innovation, from slow execution to speed, and from randomness to a professional workflow.",
  "شاهد محتوى الدورة": "View course content",
  "هنا يصنع الذكاء الاصطناعي الفرق": "Where AI makes the difference",
  "اعرض المفاهيم في أول اجتماع مع العميل": "Present concepts in the first client meeting",
  "ولّد أجواء ومراجع بصرية تساعد العميل يفهم اتجاهك من البداية بدل انتظار أيام.":
    "Generate moods and visual references that help clients understand your direction from day one instead of waiting for days.",
  "جرّب أكثر من اتجاه قبل اعتماد الفكرة": "Test multiple directions before approving a concept",
  "اختبر ألواناً وخامات وأنماطاً متعددة بدون إعادة بناء كل شيء من الصفر.":
    "Test colors, materials, and styles without rebuilding everything from scratch.",
  "اختبر ألوانًا وخامات وأنماطًا متعددة بدون إعادة بناء كل شيء من الصفر.":
    "Test colors, materials, and styles without rebuilding everything from scratch.",
  "حوّل السكيتش إلى تصور قريب من الرندر": "Turn sketches into render-like visuals",
  "استخدم الرسومات والصور الأولية لتوضيح الفكرة بصرياً قبل الدخول في التفاصيل التقنية.":
    "Use sketches and early images to explain the idea visually before going into technical details.",
  "استخدم الرسومات والصور الأولية لتوضيح الفكرة بصريًا قبل الدخول في التفاصيل التقنية.":
    "Use sketches and early images to explain the idea visually before going into technical details.",
  "اختصر ساعات من البحث والتجريب": "Save hours of research and iteration",
  "حوّل البحث عن المراجع إلى خطوات منظمة تساعدك تنتج خيارات أفضل بسرعة.":
    "Turn reference hunting into organized steps that help you produce better options faster.",
  "قدّم عروضاً تقنع العميل أسرع": "Create presentations that convince clients faster",
  "قدّم عروضًا تقنع العميل أسرع": "Create presentations that convince clients faster",
  "رتّب النتائج داخل قصة بصرية واضحة تجعل قرار التصميم أسهل وأكثر ثقة.":
    "Organize results into a clear visual story that makes design decisions easier and more confident.",
  "ابنِ Workflow احترافي يناسب المصمم الداخلي": "Build a professional workflow for interior designers",
  "تعلم متى تستخدم Midjourney و ChatGPT و Nano Banana داخل سير عمل حقيقي.":
    "Learn when to use Midjourney, ChatGPT, and Nano Banana inside a real workflow.",
  "لمحة عما يمكن لـ AI فعله لتصاميمك": "A glimpse of what AI can do for your designs",
  "أمثلة أكثر توضح كيف يتحول الفراغ أو السكيتش إلى تصور بصري يساعدك في العرض والقرار.":
    "More examples showing how a space or sketch can become a visual concept that helps with presentation and decisions.",
  "قبل / بعد": "Before / After",
  "مثال سريع يوضح قيمة AI في عرض الفكرة": "A quick example showing the value of AI in concept presentation",
  "لما العميل يشوف الفرق بصرياً، القرار يصير أسرع. هذه الطريقة مفيدة خصوصاً في المراحل الأولى من المشروع، قبل الدخول في التفاصيل التقنية.":
    "When the client sees the difference visually, decisions become faster. This is especially useful in early project stages before technical details.",
  "مناسب لعروض المفهوم الأولي": "Ideal for early concept presentations",
  "يوضح التحول بسرعة": "Shows the transformation quickly",
  "يساعد في اعتماد الاتجاه العام": "Helps approve the overall direction",
  "من سكيتش إلى رندر": "From sketch to render",
  "حوّل خطوطاً أولية أو تصوراً بسيطاً إلى لقطة قريبة من الرندر تساعدك تختبر الفكرة بسرعة.":
    "Turn early lines or a simple concept into a render-like shot that helps you test the idea quickly.",
  "تغيير الإضاءة والخامات": "Change lighting and materials",
  "اختبر مزاجات مختلفة لنفس الغرفة من إضاءة هادئة إلى إخراج أوضح وجاهز للعرض.":
    "Test different moods for the same room, from soft lighting to a clearer presentation-ready look.",
  "تأثيث الفراغ": "Furnish the space",
  "حوّل فراغاً بسيطاً إلى مشهد مؤثث يشرح الإحساس العام للعميل بسرعة.":
    "Turn a simple empty space into a furnished scene that quickly communicates the overall feeling.",
  "تجربة ألوان جريئة": "Try bold colors",
  "جرّب جداراً لونياً وخامات دافئة قبل اعتماد لوحة الألوان النهائية.":
    "Test an accent wall and warm materials before approving the final palette.",
  "تحسين مشهد داخلي": "Improve an interior scene",
  "استخدم AI لتحسين الإضاءة، توزيع العناصر، وإظهار جودة الفكرة بصرياً.":
    "Use AI to improve lighting, object placement, and the visual quality of the idea.",
  "من فراغ إلى غرفة معيشة": "From empty space to living room",
  "اعرض احتمالات مختلفة للفراغ الواحد بدون بناء موديل كامل في كل مرة.":
    "Show different possibilities for one space without building a full model every time.",
  "خارطة طريق الدورة": "Course roadmap",
  "من تطوير المفهوم حتى تجهيز العرض النهائي للعميل.": "From concept development to the final client presentation.",
  "تطوير المفهوم": "Concept development",
  "صياغة الفكرة، النمط، والمراجع بطريقة يفهمها AI.": "Shape the idea, style, and references in a way AI understands.",
  "الاستلهام البصري": "Visual inspiration",
  "توليد اتجاهات متعددة واختيار الأنسب للمشروع.": "Generate multiple directions and choose the best fit.",
  "من المود بورد للمخطط": "From mood board to plan",
  "ربط الألوان والخامات والفراغ بفكرة واحدة قابلة للتطبيق.": "Connect colors, materials, and space into one applicable idea.",
  "النمذجة قبل الإخراج": "Modeling before output",
  "تجهيز الصورة أو السكيتش أو المشهد قبل المعالجة.": "Prepare the image, sketch, or scene before processing.",
  "تحرير الصور والمعالجة": "Image editing and refinement",
  "تحسين التفاصيل وإصلاح النتائج لتصبح قابلة للعرض.": "Improve details and fix results so they are presentation-ready.",
  "القصة البصرية والفيديو": "Visual story and video",
  "تجهيز العرض النهائي بطريقة أوضح وأكثر إقناعاً.": "Prepare the final presentation in a clearer, more convincing way.",
  "المدربة": "Instructor",
  "مصممة داخلية، تبني": "An interior designer building",
  "لمصممين مثلك.": "for designers like you.",
  "محتوى الدورة مبني على مشاريع تصميم حقيقية، مع تركيز على الوضوح والسرعة ورفع جودة العرض النهائي للعميل.":
    "The course content is based on real design projects, with a focus on clarity, speed, and improving the final client presentation.",
  "آراء طلابي": "Student reviews",
  "شاهد كيف تغيرت طريقة عمل مصممين بعد الدورة.": "See how designers changed their workflow after the course.",
  "احجز مقعدك في الدورة": "Reserve your seat in the course",
  "دفعة واحدة ووصول مدى الحياة": "One payment and lifetime access",
  "52 درس فيديو عالي الجودة": "52 high-quality video lessons",
  "بونصات وقوالب حصرية": "Exclusive bonuses and templates",
  "ضمان استرداد خلال 7 أيام": "7-day refund guarantee",

  "قوالب لمصممي الديكور والمعماريين": "Templates for interior designers and architects",
  "قوالب لمصممي الديكور": "Templates for interior designers",
  "والمعماريين": "and architects",
  "سوّيت هذه القوالب للمصممين اللي يبغون يشتغلون أسرع ويقدمون رندر أفضل. كل ما تحتاجه من سير عمل عملي وواضح، تستخدمه يومياً.":
    "These templates are made for designers who want to work faster and present better renders. Everything you need for a practical, clear workflow you can use every day.",
  "استبيان استقبال العملاء": "Client onboarding questionnaire",
  "نموذج احترافي لاستقبال العملاء وبناء انطباع أول مميز.": "A professional form for welcoming clients and creating a strong first impression.",
  "قالب الخدمات والتسعير": "Services and pricing template",
  "القالب اللي تستخدمه لإرسال عروض تسعير واضحة ومقنعة للعملاء.": "The template you use to send clear and persuasive pricing proposals to clients.",
  "دليل مصادر 3D": "3D resources guide",
  "وصول فوري لأفضل مواقع الموديلات والخامات والإضاءة لمصممي الديكور.":
    "Instant access to the best model, material, and lighting sources for interior designers.",
  "حزمة الإنتاجية الكاملة": "Complete productivity bundle",
  "كل قوالب Notion و Canva لإدارة عملك من الألف إلى الياء.": "All Notion and Canva templates to manage your work from A to Z.",
  "متعقّب المشاريع": "Project tracker",
  "قالب Notion لإدارة المشاريع والمواعيد والعملاء في مكان واحد.": "A Notion template for managing projects, deadlines, and clients in one place.",
  "احصل عليه": "Get it",
  "أسئلتك، إجاباتنا.": "Your questions, our answers.",
  "إجابات للأسئلة الشائعة من الطلاب.": "Answers to common student questions.",

  "المدونة": "Blog",
  "رؤى وأدوات للمصممين.": "Insights and tools for designers.",
  "نصائح عملية، تجارب حقيقية، وأحدث ما يحدث في عالم الذكاء الاصطناعي و Enscape للتصميم الداخلي.":
    "Practical tips, real experiments, and the latest in AI and Enscape for interior design.",
  "إضاءة Enscape كالمحترفين": "Enscape lighting like a pro",
  "تقنيات الإضاءة الواقعية اللي تفرق بين الرندر الهاوي والاحترافي.": "Realistic lighting techniques that separate amateur renders from professional ones.",
  "Nano Banana Pro: ثورة في تحرير الرندر": "Nano Banana Pro: a revolution in render editing",
  "نظرة عميقة على أحدث أدوات تحرير الصور بالذكاء الاصطناعي.": "A deep look at the latest AI image-editing tools.",
  "5 طرق لاستخدام Midjourney في عرض المفاهيم": "5 ways to use Midjourney in concept presentations",
  "كيف توفّر ساعات من العمل بعرض أفكارك للعميل من أول جلسة.": "How to save hours by presenting ideas to clients from the first session.",
  "كيف تسعّر مشاريع التصميم الداخلي": "How to price interior design projects",
  "دليل عملي لتسعير خدماتك بثقة وبدون تردد.": "A practical guide to pricing your services confidently.",
  "أفضل 10 مكتبات خامات مجانية": "Top 10 free material libraries",
  "قائمة منقاة لأفضل مصادر الخامات لرندر واقعي.": "A curated list of the best material sources for realistic renders.",
  "من SketchUp إلى رندر نهائي في 30 دقيقة": "From SketchUp to final render in 30 minutes",
  "سير عمل متكامل لتسريع تسليم المشاريع.": "A complete workflow to speed up project delivery.",

  "مرحبًا بك في Binaa Lab.": "Welcome to Binaa Lab.",
  "نساعد مصممي الديكور على إتقان الرندر بالذكاء الاصطناعي و Enscape.":
    "We help interior designers master AI rendering and Enscape.",
  "منصة تعليمية متخصصة في التصميم الداخلي والذكاء الاصطناعي. نقدم دورات عملية، قوالب جاهزة، وأدوات حديثة تساعد المصممين العرب على تطوير مهاراتهم وتسريع سير عملهم.":
    "A specialized learning platform for interior design and AI. We provide practical courses, ready templates, and modern tools that help Arab designers improve their skills and speed up their workflow.",
  "عن Binaa Lab": "About Binaa Lab",
  "Binaa Lab هو مختبر التصميم الداخلي والذكاء الاصطناعي للمصممين العرب.":
    "Binaa Lab is an interior design and AI lab for Arab designers.",
  "انطلقت المنصة من رؤية واضحة: تمكين المصممين العرب من استخدام أحدث التقنيات، خاصة الذكاء الاصطناعي و Enscape، لتحسين جودة أعمالهم وتوفير وقتهم.":
    "The platform started with a clear vision: empowering Arab designers to use the latest technologies, especially AI and Enscape, to improve quality and save time.",
  "ما نقدمه:": "What we offer:",
  "دورات عملية خطوة بخطوة": "Step-by-step practical courses",
  "قوالب جاهزة للاستخدام الفوري": "Ready-to-use templates",
  "برومبتات ذكاء اصطناعي مخصصة للتصميم الداخلي": "AI prompts customized for interior design",
  "مجتمع دعم وتفاعل": "Supportive interactive community",
  "هدفنا بسيط: نساعدك تصمم أفضل، أسرع، وباحترافية أعلى.": "Our goal is simple: help you design better, faster, and more professionally.",
  "انضم لأكثر من 1500 مصمم طوروا مهاراتهم معنا.": "Join more than 1,500 designers who improved their skills with us.",
  "فريق Binaa Lab": "The Binaa Lab team",
  "لماذا Binaa Lab؟": "Why Binaa Lab?",
  "محتوى عملي 100%": "100% practical content",
  "كل دورة مبنية على مشاريع حقيقية قابلة للتطبيق فوراً في عملك.": "Every course is built around real projects you can apply immediately.",
  "أدوات جاهزة": "Ready tools",
  "قوالب وبرومبتات توفر عليك ساعات من العمل.": "Templates and prompts that save you hours of work.",
  "تحديثات مستمرة": "Continuous updates",
  "المحتوى يُحدّث باستمرار لمواكبة أحدث أدوات الذكاء الاصطناعي و Enscape.":
    "Content is continuously updated to keep up with the latest AI and Enscape tools.",

  "تواصل معنا!": "Contact us!",
  "عندك سؤال، تحتاج دعم، أو تبغي تسلّم؟ اقرأ كل رسالة وأرد شخصيًا. للتعاون والمشاريع الإبداعية حول AI و Enscape، لا تتردد بالتواصل.":
    "Have a question, need support, or want to collaborate? We read every message personally. For creative projects around AI and Enscape, feel free to reach out.",
  "أرسل لنا رسالة": "Send us a message",
  "على النموذج وراح نرجع لك بأسرع وقت.": "Fill out the form and we will get back to you as soon as possible.",
  "عبّي النموذج وراح نرجع لك بأسرع وقت.": "Fill out the form and we will get back to you as soon as possible.",
  "إرسال": "Send",
  "اشترك في النشرة": "Join the newsletter",
  "انضم لنشرتنا للحصول على نصائح وأدوات وتحديثات.": "Join our newsletter for tips, tools, and updates.",
  "احصل على خصم 15% على كل الدورات والقوالب.": "Get 15% off all courses and templates.",
  "انضم الآن!": "Join now!",
};

const enToAr = Object.fromEntries(Object.entries(arToEn).map(([ar, en]) => [en, ar]));

function translateText(value: string, dictionary: Record<string, string>) {
  let next = value;
  for (const [from, to] of Object.entries(dictionary)) {
    const trimmed = next.trim();
    if (trimmed === from) {
      return next.replace(from, to);
    }

    if (from.length < 8) continue;

    if (next.includes(from)) {
      next = next.split(from).join(to);
    }
  }
  return next;
}

export function useStaticPageTranslations(language: Language) {
  useEffect(() => {
    const dictionary = language === "en" ? arToEn : enToAr;

    const apply = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const ignored = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);
      const textNodes: Text[] = [];

      while (walker.nextNode()) {
        const node = walker.currentNode as Text;
        const parent = node.parentElement;
        if (!parent || ignored.has(parent.tagName)) continue;
        if (!node.nodeValue?.trim()) continue;
        textNodes.push(node);
      }

      textNodes.forEach((node) => {
        const next = translateText(node.nodeValue || "", dictionary);
        if (next !== node.nodeValue) node.nodeValue = next;
      });

      document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[placeholder]").forEach((element) => {
        const current = element.getAttribute("placeholder") || "";
        const next = translateText(current, dictionary);
        if (next !== current) element.setAttribute("placeholder", next);
      });
    };

    const frame = window.requestAnimationFrame(apply);
    const timeouts = [80, 180, 360, 720, 1200].map((delay) => window.setTimeout(apply, delay));
    const observer = new MutationObserver(() => apply());
    observer.observe(document.body, { childList: true, subtree: true });
    const observerStop = window.setTimeout(() => observer.disconnect(), 1800);

    return () => {
      window.cancelAnimationFrame(frame);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      window.clearTimeout(observerStop);
      observer.disconnect();
    };
  }, [language]);
}
