import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, CheckCircle2, Clock, Gift, Infinity, WalletCards } from "lucide-react";
import ba01After from "@/assets/ba-01-after-furnished-room.png";
import ba01Before from "@/assets/ba-01-before-empty-room.png";
import ba02After from "@/assets/ba-02-after-bathroom-render.png";
import ba02Before from "@/assets/ba-02-before-bathroom-sketch.png";
import ba03After from "@/assets/ba-03-after-color-variant.png";
import ba03Before from "@/assets/ba-03-before-palette-room.png";
import ba04After from "@/assets/ba-04-after-floorplan-colored.png";
import ba04Before from "@/assets/ba-04-before-floorplan-line.png";
import ba05After from "@/assets/ba-05-after-furnished-living.png";
import ba05Before from "@/assets/ba-05-before-furniture-board.png";
import ba06After from "@/assets/ba-06-after-kitchen-render.png";
import ba06Before from "@/assets/ba-06-before-kitchen-sketch.png";
import ba07After from "@/assets/ba-07-after-office-night.png";
import ba07Before from "@/assets/ba-07-before-office-day.png";
import ba08After from "@/assets/ba-08-after-bedroom-render.png";
import ba08Before from "@/assets/ba-08-before-bed-spec.png";
import ba09After from "@/assets/ba-09-after-table-detail.png";
import ba09Before from "@/assets/ba-09-before-table-detail.png";
import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import before3 from "@/assets/before-3.jpg";
import heroAiLabImg from "@/assets/home-process-banner.png";
import heroImg from "@/assets/hero-interior.jpg";
import renderGallery01 from "@/assets/render-gallery-01.png";
import renderGallery02 from "@/assets/render-gallery-02.png";
import renderGallery03 from "@/assets/render-gallery-03.png";
import renderGallery04 from "@/assets/render-gallery-04.png";
import renderGallery05 from "@/assets/render-gallery-05.png";
import renderGallery06 from "@/assets/render-gallery-06.png";
import renderGallery07 from "@/assets/render-gallery-07.png";
import renderGallery08 from "@/assets/render-gallery-08.png";
import renderGallery09 from "@/assets/render-gallery-09.png";
import show1 from "@/assets/showcase-1.jpg";
import show2 from "@/assets/showcase-2.jpg";
import show3 from "@/assets/showcase-3.jpg";
import show4 from "@/assets/showcase-4.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "binaa LAB - دورة الذكاء الاصطناعي لمصممي الديكور" },
      {
        name: "description",
        content:
          "تعلم كيف يستخدم مصممو الديكور الذكاء الاصطناعي لتوفير الوقت وتقديم تصاميم أفضل وتوسيع أعمالهم.",
      },
      { property: "og:title", content: "binaa LAB - الذكاء الاصطناعي لمصممي الديكور" },
      {
        property: "og:description",
        content:
          "دورة عملية لمصممي الديكور الداخلي لاستخدام AI في توليد الأفكار، الرندر، والعروض.",
      },
    ],
  }),
  component: Index,
});

const heroStats = [
  { icon: Clock, label: "11+ ساعة محتوى عملي" },
  { icon: CheckCircle2, label: "52 درس فيديو" },
  { icon: Gift, label: "بونصات حصرية" },
  { icon: Infinity, label: "وصول مدى الحياة" },
  { icon: WalletCards, label: "ضمان استرداد 7 أيام" },
];
const featureItems = [
  [
    "اعرض المفاهيم في أول اجتماع مع العميل",
    "ولّد أجواء ومراجع بصرية تساعد العميل يفهم اتجاهك من البداية بدل انتظار أيام.",
  ],
  [
    "جرّب أكثر من اتجاه قبل اعتماد الفكرة",
    "اختبر ألوانًا وخامات وأنماطًا متعددة بدون إعادة بناء كل شيء من الصفر.",
  ],
  [
    "حوّل السكيتش إلى تصور قريب من الرندر",
    "استخدم الرسومات والصور الأولية لتوضيح الفكرة بصريًا قبل الدخول في التفاصيل التقنية.",
  ],
  [
    "اختصر ساعات من البحث والتجريب",
    "حوّل البحث عن المراجع إلى خطوات منظمة تساعدك تنتج خيارات أفضل بسرعة.",
  ],
  [
    "قدّم عروضًا تقنع العميل أسرع",
    "رتّب النتائج داخل قصة بصرية واضحة تجعل قرار التصميم أسهل وأكثر ثقة.",
  ],
  [
    "ابنِ Workflow احترافي يناسب المصمم الداخلي",
    "تعلم متى تستخدم Midjourney و ChatGPT و Nano Banana داخل سير عمل حقيقي.",
  ],
];

const roadmapItems = [
  ["01", "تطوير المفهوم", "صياغة الفكرة، النمط، والمراجع بطريقة يفهمها AI."],
  ["02", "الاستلهام البصري", "توليد اتجاهات متعددة واختيار الأنسب للمشروع."],
  ["03", "من المود بورد للمخطط", "ربط الألوان والخامات والفراغ بفكرة واحدة قابلة للتطبيق."],
  ["04", "النمذجة قبل الإخراج", "تجهيز الصورة أو السكيتش أو المشهد قبل المعالجة."],
  ["05", "تحرير الصور والمعالجة", "تحسين التفاصيل وإصلاح النتائج لتصبح قابلة للعرض."],
  ["06", "القصة البصرية والفيديو", "تجهيز العرض النهائي بطريقة أوضح وأكثر إقناعًا."],
];

const faqs = [
  [
    "ما هي منصة Binaa Lab؟",
    "منصة عربية متخصصة في تمكين مصممي الديكور الداخلي والمهندسين المعماريين من إتقان الذكاء الاصطناعي. نقدم دورات شاملة، قوالب احترافية، وبرومبتات جاهزة تغطي كامل سير العمل من الفكرة الأولى حتى التسليم النهائي.",
  ],
  [
    "ما الذي يميز Binaa Lab عن غيرها؟",
    "نركز على التطبيقات العملية المباشرة في مجال التصميم الداخلي تحديداً. جميع أدواتنا مصممة خصيصاً للمصمم العربي: برومبتات احترافية، أنظمة رندر ذكية، قوالب عروض عملاء، ولوحات مزاج تفاعلية، كل ذلك بلغة عربية واضحة وبخطوات عملية.",
  ],
  [
    "هل أحتاج خبرة سابقة في الذكاء الاصطناعي؟",
    "لا نهائياً! منصتنا وأدواتنا مصممة للمبتدئين والمحترفين على حد سواء. كل دورة وقالب يأتي مع شرح تفصيلي، أمثلة تطبيقية، وفيديوهات توضيحية. تبدأ من الصفر وتصل للاحتراف بشكل تدريجي.",
  ],
  [
    "ما الأدوات التي أحتاجها للبدء؟",
    "تحتاج فقط حسابات مجانية أو مدفوعة في Midjourney و DALL-E، برنامج عرض تقديمي مثل PowerPoint أو Google Slides، اتصال بالإنترنت، والرغبة في التعلم والتطبيق. كل الأدوات الأخرى والبرومبتات متوفرة في المنصة.",
  ],
  [
    "هل المحتوى متوفر باللغة العربية؟",
    "نعم! جميع الدروس، البرومبتات، والقوالب متاحة بالعربية والإنجليزية. الشروحات مفصلة ومترجمة، مع أمثلة من السوق العربي والعالمي لتناسب احتياجاتك المحلية والدولية.",
  ],
  [
    "هل أحصل على تحديثات بعد الشراء؟",
    "نعم! الحزمة الشاملة تشمل تحديثات شهرية للبرومبتات، إضافات دورية للأدوات والقوالب، وصول لمجتمع خاص للمصممين، وخصومات حصرية على المنتجات المستقبلية.",
  ],
  [
    "كيف أحصل على الدعم الفني؟",
    "نوفر لك دعم فني عبر البريد الإلكتروني والواتساب، مجتمع خاص على Discord للتواصل مع مصممين آخرين، جلسات أسئلة مباشرة دورية، ودليل شامل لحل المشاكل الشائعة.",
  ],
  [
    "كم من الوقت أحتاج لإكمال الدورة؟",
    "الدورة مصممة بشكل مرن. تحتوي على أكثر من 11 ساعة من المحتوى المسجل، 43 درس مقسمة لوحدات واضحة، تتعلم بسرعتك الخاصة مع وصول مدى الحياة للمحتوى. معظم المصممين يكملون خلال 4 إلى 6 أسابيع.",
  ],
  [
    "هل هناك ضمان أو سياسة استرجاع؟",
    "نعم! نوفر ضمان جرب بدون مخاطر. 7 أيام ضمان استرجاع كامل، إذا لم تناسبك الدورة استرجع أموالك بدون أسئلة. نؤمن بجودة محتواها وقيمتها العملية.",
  ],
  [
    "ما الذي سأحصل عليه بالضبط؟",
    "عند الاشتراك تحصل على 7 وحدات تعليمية شاملة، أكثر من 500 برومبت احترافي، قوالب جاهزة للعروض ولوحات المزاج والعقود، فيديوهات عالية الجودة، كتب عمل وتمارين تطبيقية، دخول لمجتمع خاص، تحديثات مستمرة، ودعم فني مباشر.",
  ],
];

const beforeAfterExamples = [
  {
    before: before1,
    after: show1,
    title: "مثال سريع يوضح قيمة AI في عرض الفكرة",
    text: "لما العميل يشوف الفرق بصريًا، القرار يصير أسرع. هذه الطريقة مفيدة خصوصًا في المراحل الأولى من المشروع، قبل الدخول في التفاصيل التقنية.",
    bullets: ["مناسب لعروض المفهوم الأولي", "يوضح التحول بسرعة", "يساعد في اعتماد الاتجاه العام"],
  },
  {
    before: before3,
    after: show3,
    title: "من سكيتش إلى رندر",
    text: "حوّل خطوطًا أولية أو تصورًا بسيطًا إلى لقطة قريبة من الرندر تساعدك تختبر الفكرة بسرعة.",
  },
  {
    before: before2,
    after: show2,
    title: "تغيير الإضاءة والخامات",
    text: "اختبر مزاجات مختلفة لنفس الغرفة من إضاءة هادئة إلى إخراج أوضح وجاهز للعرض.",
  },
  {
    before: before1,
    after: show4,
    title: "تأثيث الفراغ",
    text: "حوّل فراغًا بسيطًا إلى مشهد مؤثث يشرح الإحساس العام للعميل بسرعة.",
  },
  {
    before: before3,
    after: show2,
    title: "تجربة ألوان جريئة",
    text: "جرّب جدارًا لونيًا وخامات دافئة قبل اعتماد لوحة الألوان النهائية.",
  },
  {
    before: before2,
    after: show3,
    title: "تحسين مشهد داخلي",
    text: "استخدم AI لتحسين الإضاءة، توزيع العناصر، وإظهار جودة الفكرة بصريًا.",
  },
  {
    before: before1,
    after: heroImg,
    title: "من فراغ إلى غرفة معيشة",
    text: "اعرض احتمالات مختلفة للفراغ الواحد بدون بناء موديل كامل في كل مرة.",
  },
];

const aiShowcaseExamples = [
  {
    before: ba01Before,
    after: ba01After,
    title: "من فراغ إلى غرفة معيشة جاهزة",
    text: "ابدأ من صورة مساحة فارغة، ثم اعرض للعميل تصوراً مؤثثاً بكامل التفاصيل: جلسة، إضاءة، نباتات، وسجادة توضح الإحساس النهائي للمكان.",
  },
  {
    before: ba02Before,
    after: ba02After,
    title: "من سكتش حمام إلى رندر واقعي",
    text: "حوّل الرسم الأولي والملاحظات التقنية إلى مشهد واضح يشرح الخامات، الإضاءة، منطقة الشاور، والقطع الأساسية قبل الدخول في التنفيذ.",
  },
  {
    before: ba03Before,
    after: ba03After,
    title: "تعديل لوحة الألوان داخل المشهد",
    text: "اختبر لوحة ألوان جديدة على نفس الفراغ، من الأقمشة والإكسسوارات إلى اللوحات والكرسي، بدون إعادة بناء المشهد من البداية.",
  },
  {
    before: ba04Before,
    after: ba04After,
    title: "إضفاء الطابع على المخطط",
    text: "حوّل المخطط الأبيض إلى بلان ملون ومقروء يوضح توزيع الأثاث، الخامات، والمناطق الوظيفية بطريقة أسهل للعرض والمناقشة.",
  },
  {
    before: ba05Before,
    after: ba05After,
    title: "من لوحة أثاث إلى غرفة مكتملة",
    text: "استخدم مرجع الأثاث والستايل لتحويل مساحة مفتوحة إلى غرفة معيشة دافئة، مع توزيع واضح للكنب، الطاولة، الإضاءة، والنباتات.",
  },
  {
    before: ba06Before,
    after: ba06After,
    title: "من سكتش داخلي إلى رندر نهائي",
    text: "حوّل الرسم التخطيطي لغرفة المعيشة والمطبخ إلى رندر غني بالخامات والإضاءة، مع الحفاظ على نفس الفكرة والتكوين العام.",
  },
  {
    before: ba07Before,
    after: ba07After,
    title: "تغيير وقت اليوم والإضاءة",
    text: "حوّل المكتب من مشهد نهاري طبيعي إلى أجواء مسائية دافئة، مع إبراز الإضاءة المخفية والتفاصيل الخشبية بطريقة أكثر تأثيراً.",
  },
  {
    before: ba08After,
    after: ba08Before,
    title: "من مشهد غرفة نوم إلى تفكيك تقني",
    text: "ابدأ من مشهد غرفة النوم النهائي، ثم اعرض تفكيك السرير والخامات والمقاسات بطريقة واضحة تصلح للعروض والوثائق الفنية.",
  },
  {
    before: ba09Before,
    after: ba09After,
    title: "تحسين الخامات والإضاءة في التفاصيل",
    text: "قارن نفس لقطة الطاولة بعد تحسين لمعان الرخام، عمق الخامة، ودفء الإضاءة حتى تصبح التفاصيل أقرب للعرض النهائي.",
  },
];

const renderGallery = [
  renderGallery01,
  renderGallery02,
  renderGallery03,
  renderGallery04,
  renderGallery05,
  renderGallery06,
  renderGallery07,
  renderGallery08,
  renderGallery09,
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <div className="bg-[#1f7f82] px-4 py-3 text-center text-[13px] font-semibold text-white">
        ضاعف إنتاجيتك 10x مع منصة Binaa Lab — مختبر التصميم بالذكاء الاصطناعي
      </div>
      <SiteHeader />

      <main>

        <section className="mx-auto max-w-[1320px] px-4 pb-14 pt-14 text-center sm:px-6 sm:pt-24 lg:pt-28">
          <h1 className="hero-title mx-auto max-w-[1120px]">
            مشروع تصميم داخلي كامل... بالذكاء الاصطناعي.
            <span className="block">7 مراحل احترافية في دورة واحدة.</span>
          </h1>

          <p className="hero-description">
            تعلّم كيف تستخدم AI في كل مرحلة من مراحل التصميم الداخلي الحقيقي — من أول اجتماع مع العميل وحتى تسليم المشروع النهائي. برومبتات جاهزة، قوالب عملية، وسير عمل (Workflow) مجرّب يوفّر عليك أشهر من العمل التقليدي.
          </p>

          <div className="mx-auto mt-7 flex max-w-[860px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-border py-4 text-[12px] font-bold text-muted-foreground sm:text-[14px]">
            {heroStats.map((item) => {
              const Icon = item.icon;

              return (
                <span key={item.label} className="inline-flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-coral" />
                  {item.label}
                </span>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[12px] text-muted-foreground sm:text-[14px]">
            <div className="flex items-center">
              {[show1, show2, show3, show4].map((img) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className="-ms-2 h-9 w-9 rounded-full border-2 border-background object-cover first:ms-0"
                />
              ))}
            </div>
            <span>
              يثق بنا أكثر من <strong className="text-foreground">1500</strong> مصمم
            </span>
          </div>

          <Link
            to="/contact"
            className="turquoise-glow-btn mt-7 inline-flex items-center justify-center rounded-full bg-coral px-9 py-3.5 text-[14px] font-bold text-white transition hover:bg-coral/90"
          >
            سجّل في الدورة الآن →
          </Link>

        </section>

        <section className="w-full overflow-hidden">
          <img src={heroAiLabImg} alt="binaa LAB design workflow" className="block aspect-[16/9] w-full object-cover" />
        </section>

        <section className="bg-[#20282b] px-4 py-14 text-center text-white sm:py-16">
          <div className="mx-auto max-w-[690px]">
            <h2 className="text-[30px] font-bold leading-tight sm:text-[44px]">
              في 2026، الذكاء الاصطناعي لم يعد خياراً، أصبح هو المعيار
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8">
              المصممون الذين يتقنون AI ينتجون 3x أسرع، يقدمون تصاميم أكثر إبداعاً، ويكسبون عملاء أكثر. السؤال ليس
              "هل أستخدم AI؟" بل "كيف أتقنه قبل المنافسين؟"
            </p>
            <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8">
              هذه الدورة مصممة خصيصاً للمصممين الداخليين الذين يريدون الانتقال من التقليد إلى الابتكار، ومن البطء إلى
              السرعة، ومن العشوائية إلى الاحتراف.
            </p>
            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-[#5fd7d8] transition hover:text-[#8ee8e8]"
            >
              شاهد محتوى الدورة
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[790px] px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-[28px] font-bold sm:text-[40px]">هنا يصنع الذكاء الاصطناعي الفرق</h2>
          <div className="mt-9 grid gap-x-10 gap-y-7 text-right sm:grid-cols-2">
            {featureItems.map(([title, text]) => (
              <article key={title} className="grid grid-cols-[auto_1fr] gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 fill-foreground text-background" />
                <div>
                  <h3 className="text-[16px] font-bold sm:text-[18px]">{title}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f4f6f6] px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-[28px] font-bold sm:text-[40px]">لمحة عما يمكن لـ AI فعله لتصاميمك</h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-7 text-muted-foreground sm:text-[16px]">
                أمثلة أكثر توضح كيف يتحول الفراغ أو السكيتش إلى تصور بصري يساعدك في العرض والقرار.
              </p>
            </div>

            {false && (<>
              <BeforeAfter
                beforeSrc={beforeAfterExamples[0].before}
                afterSrc={beforeAfterExamples[0].after}
                alt={beforeAfterExamples[0].title}
              />
              <div className="text-right">
                <p className="text-[13px] font-bold text-coral">قبل / بعد</p>
                <h3 className="mt-3 text-[32px] font-bold leading-tight sm:text-[42px]">
                  {beforeAfterExamples[0].title}
                </h3>
                <p className="mt-5 text-[14px] leading-8 text-muted-foreground">{beforeAfterExamples[0].text}</p>
                <ul className="mt-6 space-y-3 text-[13px] font-semibold text-foreground">
                  {beforeAfterExamples[0].bullets?.map((item) => (
                    <li key={item} className="flex items-center justify-end gap-3">
                      <span>{item}</span>
                      <Check className="h-4 w-4 text-coral" />
                    </li>
                  ))}
                </ul>
              </div>
            </>)}

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {aiShowcaseExamples.map((example) => (
                <article
                  key={example.title}
                  className="rounded-2xl border border-border bg-background p-3 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(26,95,95,0.12)]"
                >
                  <BeforeAfter beforeSrc={example.before} afterSrc={example.after} alt={example.title} />
                  <h3 className="mt-4 px-1 text-[16px] font-bold leading-7">{example.title}</h3>
                  <p className="mt-1 px-1 text-[12px] leading-6 text-muted-foreground">{example.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f0e8] px-4 py-14 text-center sm:px-6 sm:py-16">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="text-[30px] font-bold leading-tight sm:text-[46px]">
              رندر بهذه الجودة خلال دقائق.
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-7 text-muted-foreground sm:text-[17px]">
              هذا ما يمكن لأدوات الذكاء الاصطناعي فعله لمشاريعك.
            </p>

            <div className="mx-auto mt-10 flex max-w-[1120px] flex-wrap justify-center gap-3">
              {renderGallery.map((image, index) => (
                <figure
                  key={image}
                  className="group w-full max-w-[236px] overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(26,26,26,0.12)] sm:w-[calc(50%-0.375rem)] lg:w-[210px]"
                >
                  <img
                    src={image}
                    alt={`مثال رندر داخلي ${index + 1}`}
                    loading="lazy"
                    className="aspect-[1.35/1] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>

            <Link
              to="/courses"
              className="turquoise-glow-btn mt-10 inline-flex items-center justify-center rounded-lg bg-coral px-6 py-3 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-coral/90"
            >
              ابدأ التعلم الآن!
            </Link>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-14">
          <div className="mx-auto max-w-[410px] rounded-lg bg-[#20282b] px-8 py-10 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <p className="text-[13px] font-bold text-white/80">احجز مقعدك في الدورة</p>
            <h2 className="mt-3 text-[34px] font-bold">جاهز تبدأ؟</h2>
            <p className="mt-2 text-[12px] text-white/55">سجل اهتمامك وراح نرسل لك تفاصيل الانضمام.</p>
            <ul className="mx-auto mt-7 max-w-[270px] space-y-2 text-right text-[12px] leading-6 text-white/85">
              {[
                "52 درس فيديو عالي الجودة",
                "11+ ساعة محتوى عملي",
                "بونصات وقوالب حصرية",
                "وصول مدى الحياة",
                "ضمان استرداد خلال 7 أيام",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[12px] font-bold text-[#20282b] transition hover:opacity-90"
            >
              سجّل في الدورة الآن →
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20 pt-6">
          <h2 className="mb-3 text-center text-4xl font-bold md:text-5xl">أسئلتك، إجاباتنا.</h2>
          <p className="mb-12 text-center text-muted-foreground">الأسئلة والأجوبة الشائعة عن منصة Binaa Lab.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                  {question}
                  <span className="text-coral transition group-open:rotate-90">›</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
