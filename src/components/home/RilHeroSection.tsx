import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { Icon } from "../../utils/icons";

const SLIDE_DURATION = 5000; // 5.0 seconds per slide

export function RilHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all 6 images immediately on mount
  useEffect(() => {
    servicesData.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  }, []);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Automatic Infinite Loop Timer (re-arms whenever currentIndex changes)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex, handleNext]);

  const current = servicesData[currentIndex];

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="BharatX Group Conglomerate Hero"
      className="relative flex min-h-[92vh] lg:min-h-screen w-full items-center justify-start overflow-hidden bg-black select-none"
    >
      {/* ── BACKGROUND FULL-BLEED IMAGERY CROSSFADE ─────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Persistent base image to prevent any blank screen flashes */}
        <img
          src={current.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
        />

        {/* Smooth animated crossfade layer */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={current.image}
              alt={current.name}
              className="h-full w-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Overlays with light touch */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30 lg:via-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent max-w-4xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night-950/80 via-night-950/30 to-transparent" />
      </div>

      {/* ── HERO CONTENT (RIL Conglomerate Style) ──────────────────────── */}
      <div className="container-x relative z-10 w-full pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          {/* Subtle Conglomerate Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 sm:mb-6 flex items-center gap-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.32em] text-gold-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_#f5b84d]" />
            <span>BHARATX GROUP</span>
            <span aria-hidden className="h-px w-10 sm:w-16 bg-gold-400/40" />
          </motion.div>

          {/* 3-5 Words Punchy Headline in Majestic Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[5.9rem] font-normal leading-[1.02] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            Building Bharat's Future
          </motion.h1>

          {/* RIL Signature Warm Gold Accent Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left mt-5 sm:mt-6 h-[3.5px] w-28 sm:w-36 md:w-44 rounded-full bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 shadow-[0_0_12px_rgba(234,179,8,0.5)]"
          />

          {/* Punchy Sub-Lead with Minimal Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-slate-200/90 leading-relaxed font-body font-normal drop-shadow-md"
          >
            Scaling sovereign technology, infrastructure, manufacturing, and food systems across India.
          </motion.p>

          {/* RIL Style Clean Pill Buttons with Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToServices}
              className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-6 sm:px-7 py-3 text-[14px] sm:text-[15px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
            >
              <span>explore services</span>
              <Icon
                name="arrow-right"
                width={15}
                height={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 sm:px-7 py-3 text-[14px] sm:text-[15px] font-medium text-white/90 transition-all duration-300 hover:border-gold-400/80 hover:bg-gold-400/10 hover:text-gold-300"
            >
              <span>our vision</span>
              <Icon
                name="arrow-right"
                width={15}
                height={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── CORNER CURRENT INDUSTRY LABEL & PROGRESS BAR (RIL Style) ─── */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-14 z-20 flex flex-col items-end gap-2.5">
        {/* Industry Tag & Play/Pause State */}
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/70 backdrop-blur-xl px-4 py-2 shadow-2xl">
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? "Play slide rotation" : "Pause slide rotation"}
            className="flex h-5 w-5 items-center justify-center rounded-full text-gold-400 hover:scale-110 transition-transform"
          >
            <span
              className={`block h-2 w-2 rounded-full bg-gold-400 ${
                isPaused ? "opacity-40" : "animate-pulse"
              }`}
            />
          </button>

          <span className="font-mono text-[11px] font-bold text-gold-400 tracking-wider">
            0{currentIndex + 1} / 0{servicesData.length}
          </span>

          <span className="h-3 w-px bg-white/20" />

          {/* Company Mini Logo */}
          <div className="w-4 h-4 rounded bg-white p-0.5 flex items-center justify-center shrink-0">
            <img
              src={current.companyLogo}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            {current.shortLabel}
          </span>
        </div>

        {/* Thin Linear Progress Bar (Synchronized with SLIDE_DURATION) */}
        <div className="w-56 sm:w-64 h-[2.5px] bg-white/20 rounded-full overflow-hidden">
          <motion.div
            key={`bar-${currentIndex}-${isPaused}`}
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? "0%" : "100%" }}
            transition={{
              duration: isPaused ? 0 : SLIDE_DURATION / 1000,
              ease: "linear",
            }}
            onAnimationComplete={() => {
              if (!isPaused) {
                handleNext();
              }
            }}
            className="h-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
          />
        </div>

        {/* Navigation Dots and Chevrons */}
        <div className="flex items-center gap-2 pt-0.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="p-1 rounded-full text-white/50 hover:text-white transition-colors"
          >
            <Icon name="chevron-left" width={12} height={12} />
          </button>

          <div className="flex items-center gap-1.5">
            {servicesData.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-label={`Jump to ${s.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-gold-400 shadow-[0_0_8px_#f5b84d]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="p-1 rounded-full text-white/50 hover:text-white transition-colors"
          >
            <Icon name="chevron-right" width={12} height={12} />
          </button>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/50 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">scroll</span>
        <span className="h-5 w-px bg-gradient-to-b from-gold-400/80 to-transparent" />
      </div>
    </section>
  );
}
