import { motion } from "framer-motion";
import { Icon } from "../../utils/icons";
import { SectionTransition } from "../motion/SectionTransition";

const corePillars = [
  {
    step: "01",
    label: "Build",
    subtext: "Enterprise Creation & Core Operations",
    icon: "hard-hat" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
    glowClass: "fx-lift-glow-indigo",
  },
  {
    step: "02",
    label: "Scale",
    subtext: "Capital Compounding & Market Expansion",
    icon: "trending-up" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
    borderHover: "hover:border-[#FFB000]",
    glowClass: "fx-lift-glow-gold",
  },
  {
    step: "03",
    label: "Impact",
    subtext: "Sovereign Resilience & National Progress",
    icon: "sparkles" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
    glowClass: "fx-lift-glow-cyan",
  },
];

export function AboutBharatXSection() {
  return (
    <SectionTransition
      id="about"
      aria-label="About BharatX Group"
      className="relative overflow-hidden bg-[#FAF9F6] py-12 sm:py-16 border-b border-[#E3E5EF]"
      withDivider
    >
      {/* Subtle architectural grid pattern */}
      <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-25 pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-5xl text-center group/header">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/10 px-4 py-1 font-sans text-[11px] uppercase tracking-[0.26em] text-[#9A6200] font-bold shadow-xs cursor-default"
          >
            <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000] transition-transform duration-300 group-hover/header:scale-125" />
            <span>WHO WE ARE</span>
          </motion.div>

          {/* High-Contrast Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.12] tracking-tight text-[#111827] transition-colors hover:text-[#3026B3]"
          >
            Building Across India’s{" "}
            <span className="text-[#3026B3] hover:text-[#FFB000] transition-colors">Growth Economy</span>
          </motion.h2>

          {/* Short High-Contrast Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#596579] max-w-3xl mx-auto"
          >
            BharatX Group is a diversified Indian business group bringing together businesses, capital, technology and talent to create enduring enterprises.
          </motion.p>
        </div>

        {/* Visual: Build → Scale → Impact */}
        <div className="mt-14 sm:mt-16 max-w-6xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 relative items-stretch">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * idx }}
                data-cursor="card"
                className={`group relative flex flex-col items-center text-center p-8 sm:p-9 lg:p-11 rounded-2xl border border-[#E3E5EF] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${pillar.borderHover} ${pillar.glowClass}`}
              >
                {/* Colored Icon Circle */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgAccent} ${pillar.textAccent} transition-transform duration-300 group-hover:scale-110 fx-icon-pop shadow-xs`}
                >
                  <Icon name={pillar.icon} width={22} height={22} strokeWidth={2} />
                </div>

                {/* Step indicator */}
                <span className={`font-sans text-xs font-bold tracking-[0.2em] ${pillar.textAccent} mb-1.5 transition-transform duration-300 group-hover:scale-105`}>
                  {pillar.step}
                </span>

                {/* Main Label */}
                <h3 className="font-heading text-2xl sm:text-[1.75rem] font-medium tracking-tight text-[#111827] mb-2 transition-colors group-hover:text-[#3026B3]">
                  {pillar.label}
                </h3>

                {/* Subtext */}
                <p className="text-xs sm:text-[13px] text-[#596579] font-normal leading-relaxed">
                  {pillar.subtext}
                </p>

                {/* Connecting arrow (hidden on mobile, and on last element) */}
                {idx < corePillars.length - 1 && (
                  <div className="hidden sm:flex absolute -right-3.5 sm:-right-4 lg:-right-5.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white border border-[#E3E5EF] items-center justify-center text-[#3026B3] shadow-md group-hover:scale-110 group-hover:shadow-lg transition-transform">
                    <Icon name="chevron-right" width={14} height={14} strokeWidth={2.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
