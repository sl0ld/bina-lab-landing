import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageProvider";
import courseMasterclass from "@/assets/course-ai-masterclass.png";
import coursePrompts from "@/assets/course-prompts.png";
import course3dModeling from "@/assets/course-3d-modeling.png";
import courseSpacePlanning from "@/assets/course-space-planning.png";
import courseFurnitureDesign from "@/assets/course-furniture-design.png";
import courseCinematicRendering from "@/assets/course-cinematic-rendering.png";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "الدورات — binaa LAB" },
      { name: "description", content: "مكتبة دورات مصنفة حسب التخصص للمصممين والمعماريين." },
      { property: "og:title", content: "الدورات — binaa LAB" },
      { property: "og:description", content: "دورات للمصممين والمعماريين. تعلّم أسرع. صمّم أفضل." },
    ],
  }),
  component: CoursesPage,
});

const categories = [
  { id: "all", labelKey: "courses.categories.all" },
  { id: "ai", labelKey: "courses.categories.ai" },
  { id: "prompts", labelKey: "courses.categories.prompts" },
  { id: "visualization", labelKey: "courses.categories.visualization" },
  { id: "planning", labelKey: "courses.categories.planning" },
  { id: "furniture", labelKey: "courses.categories.furniture" },
] as const;

type CategoryId = (typeof categories)[number]["id"];
type CourseCategory = Exclude<CategoryId, "all">;

type Course = {
  key: string;
  img: string;
  category: CourseCategory;
  levelKey:
    | "courses.levels.beginnerIntermediate"
    | "courses.levels.all"
    | "courses.levels.intermediate"
    | "courses.levels.intermediateAdvanced";
  featured?: boolean;
  isNew?: boolean;
};

const courses: Course[] = [
  {
    key: "aiComplete",
    img: courseMasterclass,
    category: "ai",
    levelKey: "courses.levels.beginnerIntermediate",
    featured: true,
  },
  {
    key: "prompts",
    img: coursePrompts,
    category: "prompts",
    levelKey: "courses.levels.all",
  },
  {
    key: "ai3d",
    img: course3dModeling,
    category: "visualization",
    levelKey: "courses.levels.intermediate",
  },
  {
    key: "spacePlanning",
    img: courseSpacePlanning,
    category: "planning",
    levelKey: "courses.levels.beginnerIntermediate",
  },
  {
    key: "dalleFurniture",
    img: courseFurnitureDesign,
    category: "furniture",
    levelKey: "courses.levels.intermediate",
  },
  {
    key: "cinematic",
    img: courseCinematicRendering,
    category: "visualization",
    levelKey: "courses.levels.intermediateAdvanced",
    isNew: true,
  },
];

type CourseCopy = {
  title: string;
  desc: string;
  duration: string;
  lessons: string;
  learn: string[];
  audience: string[];
  badges: string[];
};

const categoryLabels = {
  ar: {
    all: "كل الدورات",
    ai: "الذكاء الاصطناعي",
    prompts: "البرومبتات",
    visualization: "التصور والرندر",
    planning: "تخطيط المساحات",
    furniture: "تصميم الأثاث",
  },
  en: {
    all: "All courses",
    ai: "Artificial Intelligence",
    prompts: "Prompts",
    visualization: "Visualization & Rendering",
    planning: "Space Planning",
    furniture: "Furniture Design",
  },
} as const;

const levelLabels = {
  ar: {
    "courses.levels.beginnerIntermediate": "مبتدئ إلى متوسط",
    "courses.levels.all": "جميع المستويات",
    "courses.levels.intermediate": "متوسط",
    "courses.levels.intermediateAdvanced": "متوسط إلى متقدم",
  },
  en: {
    "courses.levels.beginnerIntermediate": "Beginner to intermediate",
    "courses.levels.all": "All levels",
    "courses.levels.intermediate": "Intermediate",
    "courses.levels.intermediateAdvanced": "Intermediate to advanced",
  },
} as const;

const sectionLabels = {
  ar: {
    learn: "ماذا ستتعلم",
  },
  en: {
    learn: "What you will learn",
  },
} as const;

const courseContent: Record<"ar" | "en", Record<string, CourseCopy>> = {
  ar: {
    aiComplete: {
      title: "دورة كاملة شاملة للتصميم بالذكاء الاصطناعي",
      desc: "انطلق في رحلة احترافية لتعلم كيفية توظيف أدوات الذكاء الاصطناعي في التصميم الداخلي من الصفر إلى الاحتراف.",
      lessons: "12 درس",
      duration: "8 ساعات",
      learn: [
        "أساسيات الذكاء الاصطناعي للمصممين",
        "استخدام Midjourney و ChatGPT و DALL-E في التصميم",
        "تحويل الأفكار النصية إلى تصاميم مرئية احترافية",
        "بناء workflow متكامل بالـ AI",
      ],
      audience: ["المصممين المبتدئين والمحترفين", "المعماريين الراغبين في تطوير مهاراتهم", "طلاب التصميم والديكور"],
      badges: ["شهادة إتمام معتمدة", "ملفات عمل تطبيقية", "مجتمع خاص للطلاب"],
    },
    prompts: {
      title: "برومبتات AI للمصممين",
      desc: "احترف فن كتابة البرومبتات واحصل على مكتبة جاهزة من البرومبتات الاحترافية للتصميم الداخلي.",
      lessons: "8 دروس",
      duration: "5 ساعات",
      learn: [
        "علم كتابة البرومبتات الاحترافية",
        "صيغ البرومبتات للديكور الداخلي",
        "التحكم في الأسلوب والإضاءة والمواد",
        "بناء مكتبة برومبتات خاصة بك",
      ],
      audience: ["مصممي الديكور الداخلي", "مصوري الريندر والتصور المعماري", "أي شخص يستخدم Midjourney أو DALL-E"],
      badges: ["مكتبة +200 برومبت جاهز", "قوالب قابلة للتعديل", "تحديثات دورية"],
    },
    ai3d: {
      title: "AI للتصميم ثلاثي الأبعاد",
      desc: "تعلم كيفية إنشاء نماذج ثلاثية الأبعاد احترافية باستخدام أدوات الذكاء الاصطناعي الحديثة.",
      lessons: "10 دروس",
      duration: "7 ساعات",
      learn: [
        "تحويل الصور 2D إلى نماذج 3D بالـ AI",
        "استخدام أدوات مثل Luma AI و Meshy",
        "تحسين النماذج ثلاثية الأبعاد",
        "تصدير النماذج للاستخدام المهني",
      ],
      audience: ["مصممي الديكور والمعماريين", "مطوري الألعاب والواقع الافتراضي", "صناع المحتوى البصري"],
      badges: ["مشاريع تطبيقية حقيقية", "أدوات مجانية ومدفوعة", "شهادات إتمام"],
    },
    spacePlanning: {
      title: "AI لتخطيط المساحات",
      desc: "اكتشف كيف يمكن للذكاء الاصطناعي مساعدتك في تخطيط المساحات وتوزيع الأثاث بذكاء وكفاءة.",
      lessons: "6 دروس",
      duration: "4 ساعات",
      learn: [
        "تحليل المساحات بالـ AI",
        "اقتراحات تخطيط الأثاث التلقائية",
        "تحسين تدفق الحركة في المساحات",
        "إنشاء floor plans احترافية",
      ],
      audience: ["مصممي الديكور الداخلي", "مخططي المساحات", "أصحاب العقارات والمكاتب العقارية"],
      badges: ["أدوات تخطيط ذكية", "دراسات حالة واقعية", "قوالب جاهزة"],
    },
    dalleFurniture: {
      title: "DALL-E لتصميم الأثاث",
      desc: "تعلم كيفية استخدام DALL-E لتصميم قطع أثاث مخصصة وفريدة من نوعها.",
      lessons: "7 دروس",
      duration: "5 ساعات",
      learn: [
        "أساسيات DALL-E للمصممين",
        "تصميم قطع أثاث مبتكرة",
        "التحكم في المواد والألوان والأشكال",
        "تحويل التصاميم إلى منتجات قابلة للتنفيذ",
      ],
      audience: ["مصممي الأثاث والمنتجات", "مصممي الديكور الداخلي", "رواد الأعمال في مجال الأثاث"],
      badges: ["مكتبة تصاميم جاهزة", "دليل التصنيع", "مجتمع مصممين"],
    },
    cinematic: {
      title: "فيديو ورندر سينمائي للمشاريع AI",
      desc: "احترف إنتاج فيديوهات ورندر سينمائية احترافية لمشاريع التصميم الداخلي باستخدام الذكاء الاصطناعي.",
      lessons: "9 دروس",
      duration: "6 ساعات",
      learn: [
        "إنشاء ريندر سينمائي بالـ AI",
        "تحريك التصاميم الثابتة",
        "إضافة الإضاءة والحركة",
        "تصدير فيديوهات بجودة احترافية",
      ],
      audience: ["مصممي الديكور والمعماريين", "صناع المحتوى العقاري", "مسوقي المشاريع العقارية"],
      badges: ["مشاريع سينمائية حقيقية", "أدوات احترافية", "بورتفوليو قوي"],
    },
  },
  en: {
    aiComplete: {
      title: "Complete AI Interior Design Course",
      desc: "Start a professional journey to learn how to use AI tools in interior design from zero to confident execution.",
      lessons: "12 lessons",
      duration: "8 hours",
      learn: ["AI foundations for designers", "Midjourney, ChatGPT, and DALL-E for design", "Turn text ideas into polished visuals", "Build a complete AI workflow"],
      audience: ["Beginner and professional designers", "Architects developing their workflow", "Interior design students"],
      badges: ["Completion certificate", "Practical working files", "Private student community"],
    },
    prompts: {
      title: "AI Prompts for Designers",
      desc: "Master prompt writing and get a ready professional prompt library for interior design.",
      lessons: "8 lessons",
      duration: "5 hours",
      learn: ["Professional prompt writing", "Interior design prompt formulas", "Control style, lighting, and materials", "Build your own prompt library"],
      audience: ["Interior designers", "Render and architectural visualization creators", "Midjourney or DALL-E users"],
      badges: ["200+ ready prompts", "Editable templates", "Regular updates"],
    },
    ai3d: {
      title: "AI for 3D Design",
      desc: "Learn how to create professional 3D models using modern artificial intelligence tools.",
      lessons: "10 lessons",
      duration: "7 hours",
      learn: ["Convert 2D images into 3D AI models", "Use tools like Luma AI and Meshy", "Improve 3D models", "Export models for professional use"],
      audience: ["Interior designers and architects", "Game and VR developers", "Visual content creators"],
      badges: ["Real practical projects", "Free and paid tools", "Completion certificates"],
    },
    spacePlanning: {
      title: "AI for Space Planning",
      desc: "Discover how AI can help you plan spaces and distribute furniture intelligently and efficiently.",
      lessons: "6 lessons",
      duration: "4 hours",
      learn: ["Analyze spaces with AI", "Automatic furniture layout suggestions", "Improve movement flow", "Create professional floor plans"],
      audience: ["Interior designers", "Space planners", "Real estate owners and agencies"],
      badges: ["Smart planning tools", "Real case studies", "Ready templates"],
    },
    dalleFurniture: {
      title: "DALL-E for Furniture Design",
      desc: "Learn how to use DALL-E to design custom and unique furniture pieces.",
      lessons: "7 lessons",
      duration: "5 hours",
      learn: ["DALL-E basics for designers", "Create innovative furniture pieces", "Control materials, colors, and forms", "Turn designs into executable products"],
      audience: ["Furniture and product designers", "Interior designers", "Furniture entrepreneurs"],
      badges: ["Ready design library", "Manufacturing guide", "Designer community"],
    },
    cinematic: {
      title: "AI Cinematic Video & Rendering",
      desc: "Master cinematic renders and videos for interior design projects using artificial intelligence.",
      lessons: "9 lessons",
      duration: "6 hours",
      learn: ["Create cinematic AI renders", "Animate static designs", "Add lighting and movement", "Export professional-quality videos"],
      audience: ["Interior designers and architects", "Real estate content creators", "Real estate project marketers"],
      badges: ["Real cinematic projects", "Professional tools", "Strong portfolio outcomes"],
    },
  },
};

function CoursesPage() {
  const { t, direction, language } = useLanguage();
  const [active, setActive] = useState<CategoryId>("all");

  const filtered = useMemo(
    () => (active === "all" ? courses : courses.filter((course) => course.category === active)),
    [active],
  );
  const featured = courses.find((course) => course.featured);

  const courseText = (course: Course) => ({
    ...courseContent[language][course.key],
  });

  return (
    <div className="min-h-screen bg-background text-foreground" dir={direction}>
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center">
        <span className="mb-5 inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t("courses.eyebrow")}
        </span>
        <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
          {t("courses.title")}
          <br />
          <span className="text-coral">{t("courses.titleAccent")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">{t("courses.intro")}</p>
      </section>

      {featured ? <FeaturedCourse course={featured} courseText={courseText(featured)} /> : null}

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <h2 className="text-2xl font-bold md:text-3xl">{t("courses.exploreTitle")}</h2>
          <span className="text-sm text-muted-foreground">
            {filtered.length} {t("courses.courseCount")}
          </span>
        </div>
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                active === category.id
                  ? "border-coral bg-coral text-white"
                  : "border-border bg-transparent text-foreground hover:border-coral hover:text-coral"
              }`}
            >
              {category.id === "all" ? `${categoryLabels[language].all} (${courses.length} ${t("courses.courseCount")})` : categoryLabels[language][category.id]}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.key} course={course} courseText={courseText(course)} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">{t("courses.noCourses")}</p>
        ) : null}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-foreground p-12 text-center text-background md:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t("courses.ctaTitle")}</h2>
          <p className="mx-auto mb-8 max-w-xl text-background/70">{t("courses.ctaText")}</p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-background px-8 py-3.5 font-bold text-foreground transition hover:opacity-90"
          >
            {t("common.contactMe")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

type CourseText = ReturnType<typeof getCourseTextShape>;

function FeaturedCourse({ course, courseText }: { course: Course; courseText: CourseText }) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid items-center overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
        <div className="order-1 aspect-[4/3] overflow-hidden md:order-2 md:h-full md:aspect-auto">
          <img src={course.img} alt={courseText.title} className="h-full w-full object-cover" />
        </div>
        <div className="order-2 p-10 md:order-1">
          <span className="mb-4 inline-block text-xs font-bold tracking-widest text-coral">
            {t("courses.featuredLabel")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{courseText.title}</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">{courseText.desc}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {courseText.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-border px-3 py-1 text-xs">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end border-t border-border pt-5">
            <Link
              to="/contact"
                    className="turquoise-glow-btn inline-block rounded-full bg-coral px-7 py-3 text-sm font-bold text-white transition hover:bg-coral/90"
            >
              {t("courses.enrollNow")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, courseText }: { course: Course; courseText: CourseText }) {
  const { t, direction, language } = useLanguage();
  const categoryLabel = categoryLabels[language][course.category];
  const arrow = direction === "rtl" ? "←" : "→";

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:border-foreground">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={course.img} alt={courseText.title} className="h-full w-full object-cover" />
        <div className="absolute right-4 top-4 flex gap-2">
          {course.isNew ? (
            <span className="rounded-full bg-coral px-3 py-1.5 text-xs font-bold text-white">{t("courses.newBadge")}</span>
          ) : null}
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold backdrop-blur">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{levelLabels[language][course.levelKey]}</span>
          <span>•</span>
          <span>{courseText.lessons}</span>
          <span>•</span>
          <span>{courseText.duration}</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">{courseText.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{courseText.desc}</p>
        <div className="mb-5 space-y-4 text-sm">
          <CourseList title={sectionLabels[language].learn} items={courseText.learn} />
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {courseText.badges.map((badge) => (
            <span key={badge} className="rounded-full bg-coral-soft/45 px-3 py-1 text-xs font-bold text-coral">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-end border-t border-border pt-4">
          <Link to="/contact" className="text-sm font-bold transition hover:text-coral">
            {t("common.details")} {arrow}
          </Link>
        </div>
      </div>
    </article>
  );
}

function CourseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-bold">{title}</h4>
      <ul className="space-y-1.5 text-muted-foreground">
        {items.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-2 leading-6">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getCourseTextShape() {
  return {
    title: "",
    desc: "",
    duration: "",
    lessons: "",
    learn: [] as string[],
    audience: [] as string[],
    badges: [] as string[],
  };
}
