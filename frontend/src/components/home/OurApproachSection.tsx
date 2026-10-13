import { motion } from "framer-motion";
import { Icon } from "../../utils/icons";
import { SectionTransition } from "../motion/SectionTransition";
import { SpotlightCard } from "../motion/SpotlightCard";
import { tintOnDark } from "../common/CardArt";
import { CardPhoto, cardImage } from "../common/CardSurface";

// Spotlight colours are light accent tints so the cursor glow shows over the photos.
const approachSteps: {
  num: string;
  label: string;
  description: string;
  icon: string;
  accent: string;
  image: string;
  borderHover: string;
  spotlight: string;
}[] = [
  {
    num: "01",
    label: "IDENTIFY",
    description: "Spot structural market gaps and high-conviction industrial opportunities across India.",
    icon: "target",
    accent: "#3026B3",
    image: cardImage("home-01-approach-identify"),
    borderHover: "hover:border-[#3026B3]",
    spotlight: "rgba(162, 157, 221, 0.2)",
  },
  {
    num: "02",
    label: "BUILD",
    description: "Assemble physical infrastructure, localized technology stacks, and operational leadership.",
    icon: "hard-hat",
    accent: "#E09800",
    image: cardImage("home-02-approach-build"),
    borderHover: "hover:border-[#FFB000]",
    spotlight: "rgba(241, 209, 140, 0.2)",
  },
  {
    num: "03",
    label: "INVEST",
    description: "Commit patient, long-horizon balance sheet capital and strategic resources.",
    icon: "landmark",
    accent: "#00B8D9",
    image: cardImage("home-03-approach-invest"),
    borderHover: "hover:border-[#00B8D9]",
    spotlight: "rgba(140, 223, 238, 0.2)",
  },
  {
    num: "04",
    label: "SCALE",
    description: "Expand manufacturing capacity, distribution channels, and pan-India market reach.",
    icon: "trending-up",
    accent: "#15966B",
    image: cardImage("home-04-approach-scale"),
    borderHover: "hover:border-[#15966B]",
    spotlight: "rgba(150, 208, 188, 0.2)",
  },
  {
    num: "05",
    label: "IMPACT",
    description: "Deliver compounding economic returns, job creation, and sovereign national capability.",
    icon: "sparkles",
    accent: "#4B40D4",
    image: cardImage("home-05-approach-impact"),
    borderHover: "hover:border-[#4B40D4]",
    spotlight: "rgba(174, 169, 236, 0.2)",
  },
];

export function OurApproachSection() {
  return (
    <SectionTransition
      id="our-approach"
      aria-label="Our Approach"
      className="relative overflow-hidden bg-[#FAF9F6] py-12 sm:py-16 border-b border-[#E3E5EF]"
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
            className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-sans text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs cursor-default"
          >
            <span className="h-2 w-2 rounded-full bg-[#00B8D9] transition-transform duration-300 group-hover/header:scale-125" />
            <span>OUR APPROACH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#111827] transition-colors hover:text-[#3026B3]"
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
                {/* The card box carries the photo; SpotlightCard sits on top (transparent) so its cursor glow stays visible over it */}
                <div
                  data-cursor="card"
                  className={`group relative h-full rounded-2xl border border-white/10 bg-[#0D1026] shadow-md transition-all duration-300 hover:z-20 hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3026B3] ${step.borderHover}`}
                >
                  <CardPhoto src={step.image} accent={step.accent} />

                  <SpotlightCard spotlightColor={step.spotlight} className="relative h-full rounded-[inherit] p-6 [text-shadow:0_0_2px_rgba(13,16,38,0.9),0_1px_12px_rgba(13,16,38,0.85)]">
                    {/* Step Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-sans text-xs font-bold tracking-widest transition-transform duration-300 group-hover:scale-125 inline-block origin-left"
                        style={{ color: tintOnDark(step.accent) }}
                      >
                        {step.num}
                      </span>
                      <div
                        className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 fx-icon-pop shadow-xs"
                        style={{ color: tintOnDark(step.accent) }}
                      >
                        <Icon name={step.icon} width={18} height={18} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans text-sm sm:text-base font-bold tracking-[0.16em] text-white uppercase group-hover:text-[#FFC94D] transition-colors">
                      {step.label}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2.5 text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </SpotlightCard>

                  {/* Arrow connector on desktop, centred in the gap to the next card */}
                  {idx < approachSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-white border border-[#E3E5EF] items-center justify-center text-[#3026B3] shadow-md group-hover:scale-115 group-hover:shadow-lg transition-all duration-300">
                      <Icon name="chevron-right" width={13} height={13} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
