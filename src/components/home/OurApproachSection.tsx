import { motion } from "framer-motion";
import { Icon } from "../../utils/icons";
import { SectionTransition } from "../motion/SectionTransition";
import { SpotlightCard } from "../motion/SpotlightCard";

const approachSteps = [
  {
    num: "01",
    label: "IDENTIFY",
    description: "Spot structural market gaps and high-conviction industrial opportunities across India.",
    icon: "target" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
    spotlight: "rgba(48, 38, 179, 0.12)",
  },
  {
    num: "02",
    label: "BUILD",
    description: "Assemble physical infrastructure, localized technology stacks, and operational leadership.",
    icon: "hard-hat" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
    borderHover: "hover:border-[#FFB000]",
    spotlight: "rgba(255, 176, 0, 0.15)",
  },
  {
    num: "03",
    label: "INVEST",
    description: "Commit patient, long-horizon balance sheet capital and strategic resources.",
    icon: "landmark" as const,
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
    spotlight: "rgba(0, 184, 217, 0.14)",
  },
  {
    num: "04",
    label: "SCALE",
    description: "Expand manufacturing capacity, distribution channels, and pan-India market reach.",
    icon: "trending-up" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
    spotlight: "rgba(21, 150, 107, 0.14)",
  },
  {
    num: "05",
    label: "IMPACT",
    description: "Deliver compounding economic returns, job creation, and sovereign national capability.",
    icon: "sparkles" as const,
    accent: "#4B40D4",
    bgAccent: "bg-[#4B40D4]/15",
    textAccent: "text-[#4B40D4]",
    borderHover: "hover:border-[#4B40D4]",
    spotlight: "rgba(75, 64, 212, 0.14)",
  },
];

export function OurApproachSection() {
  return (
    <SectionTransition
      id="our-approach"
      aria-label="Our Approach"
      className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 md:py-28 border-b border-[#E3E5EF]"
      withDivider
    >
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center group/header">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs cursor-default"
          >
            <span className="h-2 w-2 rounded-full bg-[#00B8D9] transition-transform duration-300 group-hover/header:scale-125" />
            <span>OUR APPROACH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111827] transition-colors hover:text-[#3026B3]"
          >
            From Opportunity to <span className="text-[#3026B3]">Enterprise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[#596579] font-normal"
          >
            We combine capital, technology, talent and execution to turn opportunities into scalable enterprises.
          </motion.p>
        </div>

        {/* High-Contrast Visual Horizontal Flow with SpotlightCard */}
        <div className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 relative">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
              >
                <SpotlightCard
                  spotlightColor={step.spotlight}
                  data-cursor="card"
                  className={`group relative flex h-full flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3026B3] ${step.borderHover}`}
                >
                  {/* Step Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-xs font-bold tracking-widest ${step.textAccent} transition-transform duration-300 group-hover:scale-125 inline-block origin-left`}>
                        {step.num}
                      </span>
                      <div
                        className={`h-9 w-9 rounded-xl ${step.bgAccent} ${step.textAccent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 fx-icon-pop shadow-xs`}
                      >
                        <Icon name={step.icon} width={18} height={18} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-[0.16em] text-[#111827] uppercase group-hover:text-[#3026B3] transition-colors">
                      {step.label}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2.5 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector indicator on desktop */}
                  {idx < approachSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-white border border-[#E3E5EF] items-center justify-center text-[#3026B3] shadow-md group-hover:scale-115 group-hover:shadow-lg transition-all duration-300">
                      <Icon name="chevron-right" width={13} height={13} strokeWidth={2.5} />
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
