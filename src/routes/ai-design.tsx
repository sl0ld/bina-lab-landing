import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  FileImage,
  FolderOpen,
  Globe2,
  Home,
  ImagePlus,
  Languages,
  LayoutGrid,
  Leaf,
  Menu,
  Plus,
  Sparkles,
  Trash2,
  UserRound,
  WandSparkles,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import binaaWordmark from "@/assets/binaa-wordmark.png";
import instructorImg from "@/assets/instructor.jpg";
import { AuthDialog } from "@/components/AuthDialog";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/ai-design")({
  head: () => ({
    meta: [
      { title: "تصميم AI - binaa LAB" },
      {
        name: "description",
        content: "ابدأ مشروع تصميم داخلي بالذكاء الاصطناعي عبر اختيار المساحة، رفع الصورة، وتخصيص أسلوب التصميم.",
      },
    ],
  }),
  component: AiDesignPage,
});

const STORAGE_KEY = "binaa-ai-studio";

const defaultState = {
  step: 1,
  spaceType: "interior",
  roomType: "",
  style: "",
  intervention: "medium",
  instructions: "",
};

const copy = {
  ar: {
    newDesign: "تصميم جديد",
    allDesigns: "جميع التصاميم",
    latestOutputs: "آخر المخرجات",
    noDesigns: "لا توجد تصاميم",
    talkDesigner: "تحدث مع مصممة",
    login: "تسجيل الدخول",
    logoAlt: "binaa LAB",
    stepTitles: ["اختر مساحتك", "اختيار الصورة الأصلية", "تخصيص تصميمك"],
    selectSpaceTitle: "اختر مساحتك",
    selectSpaceSubtitle: "حدد نوع المساحة التي تريد تصميمها باستخدام الذكاء الاصطناعي",
    continue: "المتابعة",
    back: "رجوع",
    spaces: [
      {
        id: "interior",
        title: "المساحات الداخلية",
        description: "غرف المعيشة والنوم والمطابخ والمزيد",
      },
      {
        id: "exterior",
        title: "المساحات الخارجية",
        description: "واجهات المنزل، المناظر الأمامية والخلفية",
      },
      {
        id: "garden",
        title: "الحدائق",
        description: "الفناء الخلفي، الباحات، الشرفات والمساحات الخارجية",
      },
    ],
    uploadTitle: "قم بتحميل صورة للمساحة التي تريد إعادة تصميمها",
    uploadSubtitle: "اختر صورة واضحة وجيدة الإضاءة للحصول على أفضل النتائج",
    uploadEmpty: "اسحب الصورة هنا أو انقر للرفع",
    uploadHint: "PNG أو JPG أو WEBP حتى 5MB",
    removeImage: "إزالة الصورة",
    customizeTitle: "تخصيص تصميمك",
    roomLabel: "نوع الغرفة",
    roomHelp: "اختر نوع الغرفة أو المساحة التي قمت بتحميل صورها.",
    roomPlaceholder: "حدد نوع الغرفة",
    styleLabel: "أسلوب التصميم",
    styleHelp: "اختر أسلوب تصميم أو حدد بدون أسلوب لتحسين الصورة فقط.",
    stylePlaceholder: "حدد أسلوب التصميم",
    interventionLabel: "مستوى تدخل الذكاء الاصطناعي",
    interventionHelp: "التحكم في مستوى التغييرات. أفضل النتائج مع متوسط.",
    interventionNote: "توازن مثالي بين التحويل والحفاظ على الأصل.",
    instructionsLabel: "تعليمات مخصصة (اختياري)",
    instructionsHelp: "أضف تفاصيل محددة حول ما تريد تحقيقه",
    instructionsPlaceholder: "مثال: غرفة معيشة ذات مظهر نظيف مع قوام أسود وأصفر وطاولة قهوة من الخشب الصلب.",
    create: "إنشاء التصميم",
    required: "الرجاء ملء جميع الحقول المطلوبة للإنشاء",
    summaryTitle: "جاهز للإنشاء",
    summaryText: "اختياراتك محفوظة. عند ربط خدمة التوليد، سيبدأ إنشاء التصميم من هنا.",
    rooms: ["غرفة معيشة", "غرفة نوم", "مطبخ", "حمام", "مجلس", "غرفة طعام", "مكتب منزلي", "مدخل"],
    styles: [
      "مودرن",
      "مينيمال",
      "كلاسيك",
      "نيو كلاسيك",
      "جاباندي",
      "اسكندنافي",
      "فخم",
      "مغربي / أرابيسك",
      "تحسين الصورة فقط",
    ],
    intervention: {
      veryLow: "منخفض جداً",
      low: "منخفض",
      medium: "متوسط",
      high: "شديد",
    },
  },
  en: {
    newDesign: "New design",
    allDesigns: "All designs",
    latestOutputs: "Latest outputs",
    noDesigns: "No designs yet",
    talkDesigner: "Talk to a designer",
    login: "Login",
    logoAlt: "binaa LAB",
    stepTitles: ["Choose your space", "Select original image", "Customize your design"],
    selectSpaceTitle: "Choose your space",
    selectSpaceSubtitle: "Select the type of space you want to redesign with AI",
    continue: "Continue",
    back: "Back",
    spaces: [
      { id: "interior", title: "Interior spaces", description: "Living rooms, bedrooms, kitchens, and more" },
      { id: "exterior", title: "Exterior spaces", description: "Home facades, front yards, and backyards" },
      { id: "garden", title: "Gardens", description: "Backyards, patios, balconies, and outdoor spaces" },
    ],
    uploadTitle: "Upload a photo of the space you want to redesign",
    uploadSubtitle: "Choose a clear, well-lit image for the best result",
    uploadEmpty: "Drag an image here or click to upload",
    uploadHint: "PNG, JPG, or WEBP up to 5MB",
    removeImage: "Remove image",
    customizeTitle: "Customize your design",
    roomLabel: "Room type",
    roomHelp: "Choose the room or space type from your uploaded photo.",
    roomPlaceholder: "Select room type",
    styleLabel: "Design style",
    styleHelp: "Choose a style, or select image enhancement only.",
    stylePlaceholder: "Select design style",
    interventionLabel: "AI intervention level",
    interventionHelp: "Control how much the AI changes. Medium gives the best balance.",
    interventionNote: "A balanced transformation that preserves the original space.",
    instructionsLabel: "Custom instructions (optional)",
    instructionsHelp: "Add specific details about what you want to achieve",
    instructionsPlaceholder: "Example: A clean living room with black accents, warm lighting, and a solid wood coffee table.",
    create: "Create design",
    required: "Please fill all required fields before creating.",
    summaryTitle: "Ready to create",
    summaryText: "Your choices are saved. Once generation is connected, the design will start from here.",
    rooms: ["Living room", "Bedroom", "Kitchen", "Bathroom", "Majlis", "Dining room", "Home office", "Entrance"],
    styles: ["Modern", "Minimal", "Classic", "Neoclassical", "Japandi", "Scandinavian", "Luxury", "Moroccan / Arabesque", "Image enhancement only"],
    intervention: {
      veryLow: "Very low",
      low: "Low",
      medium: "Medium",
      high: "High",
    },
  },
} as const;

const spaceIcons = {
  interior: Home,
  exterior: Building2,
  garden: Leaf,
};

const interventionOptions = [
  { id: "veryLow", key: "veryLow" },
  { id: "low", key: "low" },
  { id: "medium", key: "medium" },
  { id: "high", key: "high" },
] as const;

function AiDesignPage() {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === "ar";
  const t = copy[language];
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(defaultState.step);
  const [spaceType, setSpaceType] = useState(defaultState.spaceType);
  const [roomType, setRoomType] = useState(defaultState.roomType);
  const [style, setStyle] = useState(defaultState.style);
  const [intervention, setIntervention] = useState(defaultState.intervention);
  const [instructions, setInstructions] = useState(defaultState.instructions);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as Partial<typeof defaultState> & { fileName?: string; fileSize?: string };
      setStep(Math.min(Math.max(parsed.step || 1, 1), 3));
      setSpaceType(parsed.spaceType || defaultState.spaceType);
      setRoomType(parsed.roomType || "");
      setStyle(parsed.style || "");
      setIntervention(parsed.intervention || defaultState.intervention);
      setInstructions(parsed.instructions || "");
      setFileName(parsed.fileName || "");
      setFileSize(parsed.fileSize || "");
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ step, spaceType, roomType, style, intervention, instructions, fileName, fileSize }),
    );
  }, [fileName, fileSize, instructions, intervention, mounted, roomType, spaceType, step, style]);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview);
  }, [preview]);

  const selectedSpace = useMemo(() => t.spaces.find((item) => item.id === spaceType) || t.spaces[0], [spaceType, t.spaces]);

  const resetDesign = () => {
    setStep(1);
    setSpaceType(defaultState.spaceType);
    setRoomType("");
    setStyle("");
    setIntervention(defaultState.intervention);
    setInstructions("");
    setFileName("");
    setFileSize("");
    setPreview("");
    setError("");
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const goNext = () => {
    if (step === 2 && !fileName) {
      setError(isArabic ? "ارفع صورة قبل المتابعة." : "Upload an image before continuing.");
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, 3));
  };

  const canCreate = Boolean(roomType && style && fileName);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" dir={isArabic ? "rtl" : "ltr"}>
      <aside className="fixed inset-y-0 right-0 z-30 hidden w-[260px] border-l border-[#dde4e6] bg-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center justify-between border-b border-[#edf1f2] px-6">
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleLanguage} className="flex items-center gap-1 text-sm font-bold">
              {isArabic ? "AR" : "EN"}
              <Languages className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-full p-2 text-[#1A1A1A] hover:bg-[#F5F5F5]">
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <Link to="/" aria-label={t.logoAlt}>
            <img src={binaaWordmark} alt={t.logoAlt} className="h-10 w-auto object-contain" />
          </Link>
        </div>

        <div className="space-y-5 px-5 py-6">
          <button
            type="button"
            onClick={resetDesign}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8e0e2] bg-white px-5 py-4 text-base font-bold text-[#1A5F5F] transition hover:border-[#1A5F5F]"
          >
            <Plus className="h-5 w-5" />
            {t.newDesign}
          </button>

          <button type="button" className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-right font-semibold text-[#1A1A1A]">
            <FolderOpen className="h-5 w-5" />
            {t.allDesigns}
          </button>

          <div className="pt-4 text-sm text-muted-foreground">
            <p className="mb-5 font-semibold">{t.latestOutputs}</p>
            <p>{t.noDesigns}</p>
          </div>
        </div>

        <div className="mt-auto border-t border-[#edf1f2] p-5">
          <div className="mb-5 flex items-center justify-between text-sm font-bold text-[#1A5F5F]">
            <span>{t.talkDesigner}</span>
            <img src={instructorImg} alt="" className="h-10 w-10 rounded-full object-cover" />
          </div>
          <AuthDialog>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8e0e2] bg-white px-5 py-4 font-bold text-[#1A5F5F] transition hover:border-[#1A5F5F]">
              <UserRound className="h-5 w-5" />
              {t.login}
            </button>
          </AuthDialog>
        </div>
      </aside>

      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#edf1f2] bg-white px-4 lg:hidden">
        <Link to="/" aria-label={t.logoAlt}>
          <img src={binaaWordmark} alt={t.logoAlt} className="h-9 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleLanguage} className="rounded-full border border-[#d8e0e2] px-3 py-2 text-sm font-bold">
            {isArabic ? "EN" : "AR"}
          </button>
          <AuthDialog>
            <button className="rounded-full border border-[#d8e0e2] p-2 text-[#1A5F5F]">
              <UserRound className="h-5 w-5" />
            </button>
          </AuthDialog>
        </div>
      </header>

      <main className="lg:pr-[260px]">
        <section className="border-b border-[#dde4e6] bg-[#fafafa] px-5 py-8 text-center">
          <StepIndicator step={step} labels={t.stepTitles} />
          <h1 className="mt-6 text-3xl font-bold tracking-[-0.02em] text-[#1A1A1A] md:text-4xl">
            {t.stepTitles[step - 1]}
          </h1>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-10 md:py-14">
          {step === 1 ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#1A5F5F] md:text-5xl">{t.selectSpaceTitle}</h2>
              <p className="mt-4 text-lg text-[#364347]">{t.selectSpaceSubtitle}</p>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {t.spaces.map((space) => {
                  const Icon = spaceIcons[space.id as keyof typeof spaceIcons] || LayoutGrid;
                  const active = spaceType === space.id;

                  return (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => setSpaceType(space.id)}
                      className={`relative min-h-[280px] rounded-2xl border bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-xl ${
                        active ? "border-[#1A5F5F] bg-[#f3faf9] shadow-[0_16px_40px_rgba(26,95,95,0.12)]" : "border-[#d8e0e2]"
                      }`}
                    >
                      {active ? (
                        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#1A5F5F] text-white">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : null}
                      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f6f7f7] text-[#667175]">
                        <Icon className={`h-9 w-9 ${active ? "text-[#1A5F5F]" : ""}`} />
                      </span>
                      <h3 className={`mt-9 text-2xl font-bold ${active ? "text-[#1A5F5F]" : "text-[#1A1A1A]"}`}>{space.title}</h3>
                      <p className="mt-4 leading-7 text-[#d36f42]">{space.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">{t.uploadTitle}</h2>
              <p className="mt-3 text-[#364347]">{t.uploadSubtitle}</p>

              <label className="mt-9 block cursor-pointer rounded-2xl border-2 border-[#d8e0e2] bg-white p-6 transition hover:border-[#1A5F5F]">
                {preview ? (
                  <div>
                    <div className="rounded-lg bg-[#f5f6f6] p-4">
                      <img src={preview} alt={fileName} className="mx-auto max-h-[330px] rounded object-contain" />
                    </div>
                    <div className="mt-5 flex items-center justify-between text-right">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          setPreview("");
                          setFileName("");
                          setFileSize("");
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9344c] text-white"
                        aria-label={t.removeImage}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div>
                        <p className="font-bold">{fileName}</p>
                        <p className="mt-1 text-sm text-[#d36f42]">{fileSize}</p>
                      </div>
                      <FileImage className="h-6 w-6 text-[#1A5F5F]" />
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-[330px] flex-col items-center justify-center rounded-xl bg-[#f8f9f9] text-center">
                    <ImagePlus className="h-12 w-12 text-[#1A5F5F]" />
                    <p className="mt-4 text-xl font-bold">{t.uploadEmpty}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{t.uploadHint}</p>
                  </div>
                )}
                <input
                  name="original-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    setPreview(URL.createObjectURL(file));
                    setFileName(file.name);
                    setFileSize(`${(file.size / 1024).toFixed(2)} KB`);
                    setError("");
                  }}
                />
              </label>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">{t.customizeTitle}</h2>
              </div>

              <div className="space-y-10">
                <FieldBlock label={t.roomLabel} help={t.roomHelp} required>
                  <SelectBox value={roomType} onChange={setRoomType} placeholder={t.roomPlaceholder} options={t.rooms} />
                </FieldBlock>

                <FieldBlock label={t.styleLabel} help={t.styleHelp} required>
                  <SelectBox value={style} onChange={setStyle} placeholder={t.stylePlaceholder} options={t.styles} />
                </FieldBlock>

                <FieldBlock label={t.interventionLabel} help={t.interventionHelp} required>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {interventionOptions.map((option) => {
                      const active = intervention === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setIntervention(option.id)}
                          className={`rounded-lg border p-5 text-center transition hover:border-[#1A5F5F] ${
                            active ? "border-[#1A5F5F] bg-[#eaf3ff]" : "border-[#d8e0e2] bg-white"
                          }`}
                        >
                          <span className={`mx-auto block h-5 w-5 rounded-full border-2 ${active ? "border-[#1A5F5F] bg-[#1A5F5F] ring-4 ring-[#d8eeee]" : "border-[#c9d4d7]"}`} />
                          <span className={`mt-4 block font-bold ${active ? "text-[#1A5F5F]" : ""}`}>
                            {t.intervention[option.key]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-5 text-center text-sm text-[#d36f42]">{t.interventionNote}</p>
                </FieldBlock>

                <FieldBlock label={t.instructionsLabel} help={t.instructionsHelp}>
                  <textarea
                    name="design-instructions"
                    value={instructions}
                    onChange={(event) => setInstructions(event.target.value)}
                    placeholder={t.instructionsPlaceholder}
                    className="min-h-[120px] w-full rounded-lg border border-[#d8e0e2] px-4 py-3 leading-7 outline-none transition focus:border-[#1A5F5F]"
                  />
                </FieldBlock>

                <div className="rounded-2xl border border-[#d8e0e2] bg-[#f8fafa] p-5 text-center">
                  <h3 className="text-xl font-bold text-[#1A5F5F]">{t.summaryTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.summaryText}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-bold text-[#1A5F5F]">
                    <span className="rounded-full bg-white px-3 py-1">{selectedSpace.title}</span>
                    {fileName ? <span className="rounded-full bg-white px-3 py-1">{fileName}</span> : null}
                    {roomType ? <span className="rounded-full bg-white px-3 py-1">{roomType}</span> : null}
                    {style ? <span className="rounded-full bg-white px-3 py-1">{style}</span> : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {error ? <p className="mt-8 text-center text-sm font-bold text-[#c9492d]">{error}</p> : null}

          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep((current) => Math.max(current - 1, 1));
              }}
              disabled={step === 1}
              className="inline-flex items-center gap-2 rounded-lg border border-[#8f9da2] bg-white px-7 py-3 font-bold text-[#465257] transition hover:border-[#1A5F5F] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.back}
              <ArrowRight className="h-4 w-4" />
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={goNext}
              className="turquoise-glow-btn inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-3 font-bold text-white transition hover:bg-coral/90"
              >
                {t.continue}
                <ArrowLeft className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={!canCreate}
                onClick={() => setError(canCreate ? "" : t.required)}
                className="turquoise-glow-btn inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-3 font-bold text-white transition hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Sparkles className="h-4 w-4" />
                {t.create}
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function StepIndicator({ step, labels }: { step: number; labels: readonly string[] }) {
  return (
    <div className="mx-auto flex max-w-[300px] items-center justify-center">
      {[1, 2, 3].map((item, index) => (
        <div key={item} className="flex items-center">
          <span
            title={labels[item - 1]}
            className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-base font-bold ${
              step >= item ? "border-[#1A5F5F] bg-[#1A5F5F] text-white" : "border-[#d8e0e2] bg-white text-[#a6b0b5]"
            }`}
          >
            {item}
          </span>
          {index < 2 ? <span className={`h-0.5 w-16 ${step > item ? "bg-[#1A5F5F]" : "bg-[#d8e0e2]"}`} /> : null}
        </div>
      ))}
    </div>
  );
}

function FieldBlock({
  label,
  help,
  required,
  children,
}: {
  label: string;
  help: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="text-center">
      <h3 className="text-xl font-bold">
        {label}
        {required ? <span className="ms-2 text-[#d12b2b]">*</span> : null}
      </h3>
      <p className="mt-3 text-sm text-[#d36f42]">{help}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SelectBox({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <label className="relative mx-auto block max-w-xl">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-14 w-full appearance-none rounded-lg border border-[#d8e0e2] bg-white px-5 py-3 text-base text-[#1A1A1A] outline-none transition focus:border-[#1A5F5F]"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#667175]" />
    </label>
  );
}
