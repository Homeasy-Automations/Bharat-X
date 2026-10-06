import { motion } from "framer-motion";
import { Icon } from "../../utils/icons";

const pillars = [
  {
    title: "Capital",
    description: "Access to capital and financial resources.",
    icon: "landmark" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    title: "Technology",
    description: "AI, automation and digital capabilities.",
    icon: "cpu" as const,
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
  },
  {
    title: "Execution",
    description: "Real operating experience across industries.",
    icon: "cog" as const,
    accent: "#D97706",
    bgAccent: "bg-[#F59E0B]/15",
    textAccent: "text-[#B45309]",
    borderHover: "hover:border-[#D97706]",
  },
  {
    title: "Ecosystem",
    description: "Cross-business capabilities, partnerships and market access.",
    icon: "network" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
];

export function WhyBharatXSection() {
  return (
    <section
      id="why-bharatx"
      aria-label="Why BharatX"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28 border-b border-[#E3E5EF]"
    >
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
            <span>05 // WHY BHARATX</span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111827]">
            More Than Capital. <span className="text-[#3026B3]">More Than Strategy.</span>
          </h2>

          <p className="mt-3 text-base text-[#596579] max-w-2xl leading-relaxed">
            Four interconnected pillars that distinguish how BharatX originates, accelerates, and compounds enterprise value.
          </p>
        </div>

        {/* 4 Pillars High-Contrast Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className={`group relative flex flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 shadow-xs transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 ${pillar.borderHover}`}
            >
              <div>
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgAccent} ${pillar.textAccent} transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                >
                  <Icon name={pillar.icon} width={22} height={22} strokeWidth={2} />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#111827] group-hover:text-[#3026B3] transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#596579] font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E5EF] flex items-center justify-between font-mono text-[10.5px] uppercase tracking-wider text-[#596579]">
                <span>Pillar 0{idx + 1}</span>
                <span className={`h-2 w-2 rounded-full ${pillar.bgAccent} ${pillar.textAccent}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strong Statement Callout Banner — Royal Indigo & Gold Institutional Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-14 relative overflow-hidden rounded-3xl border border-[#3026B3]/30 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] p-8 sm:p-12 md:p-14 text-center text-white shadow-2xl"
        >
          {/* Subtle gold line accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFB000] to-transparent opacity-80" />

          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold mb-3">
            Operating Thesis
          </p>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal leading-tight tracking-tight text-white max-w-4xl mx-auto drop-shadow-sm">
            “We don’t just back businesses.{" "}
            <span className="text-[#FFB000]">We help build them.</span>”
          </blockquote>

          <p className="mt-4 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            From direct operating leadership and patient equity to institutional market access through the BharatX ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
