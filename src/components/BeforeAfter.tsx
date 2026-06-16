import { ArrowLeftRight } from "lucide-react";
import { useRef, useState } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  autoPlay?: boolean;
  className?: string;
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "قبل",
  afterLabel = "بعد",
  alt = "",
  autoPlay = true,
  className = "",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, x)));
  };

  return (
    <div
      ref={ref}
      dir="ltr"
      className={`relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-lg bg-[#f7f6f2] ${className}`}
      onMouseLeave={() => {
        dragging.current = false;
      }}
      onMouseMove={(event) => {
        if (autoPlay && !dragging.current) update(event.clientX);
      }}
      onPointerDown={(event) => {
        dragging.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        update(event.clientX);
      }}
      onPointerMove={(event) => {
        if (dragging.current) update(event.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <img src={afterSrc} alt={alt} draggable={false} className="absolute inset-0 h-full w-full object-contain" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-[#303038]/90 px-2.5 py-1 text-[11px] font-bold text-white">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-[#303038]/90 px-2.5 py-1 text-[11px] font-bold text-white">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.95),0_0_18px_rgba(26,95,95,0.75),0_0_36px_rgba(26,95,95,0.45)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-[0_0_18px_rgba(255,255,255,0.95),0_0_34px_rgba(26,95,95,0.45)]"
        style={{ left: `${pos}%` }}
      >
        <ArrowLeftRight className="h-4 w-4" />
      </div>
    </div>
  );
}
