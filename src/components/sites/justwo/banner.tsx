"use client";

import { useEffect, useState } from "react";
import { heroSlides, noticeMessages } from "@/data/products";

/** 상단 공지 롤링 배너 */
export function NoticeBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % noticeMessages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-neutral-900 text-white">
      <p className="flex h-9 items-center justify-center px-4 text-[11px] font-medium tracking-wide">
        <span key={index} className="animate-in fade-in duration-500">
          {noticeMessages[index]}
        </span>
      </p>
    </div>
  );
}

/** 메인 기획전 히어로 슬라이더 */
export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100" aria-label="기획전 배너">
      <div className="aspect-[9/13] w-full">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`배너 ${i + 1}번 보기`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-4 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
