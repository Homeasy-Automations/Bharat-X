import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";

interface TriadItem {
  id: string;
  tabTitle: string;
  badge: string;
  headline: string;
  description: string[];
  metrics: { label: string; value: string; color?: string }[];
  image: string;
  fallbackImage: string;
  companyName: string;
  companyLogo: string;
  route: string;
  cta: string;
}

const triadData: TriadItem[] = [
  {
    id: "sustainability",
    tabTitle: "Sustainability",
    badge: "CIRCULAR DEEP-TECH & NET-ZERO",
    headline: "Ecological Stewardship & Sovereign Circular Systems.",
    description: [
      "Our sustainability strategy is anchored in hands-on decarbonisation and sovereign circularity. Through BharatX Labs and BharatX Agro, we pioneer circular compound synthesis, sovereign carbon telemetry, and origin-traceable agricultural commodity supply chains.",
      "BharatX Group is committed to achieving net-zero carbon operations across its industrial footprint by 2035, integrating low-carbon concrete formulations, recycled compounds, and solar-supported processing corridors.",
    ],
    metrics: [
      { label: "Commodities Processed", value: "5,000+ MT", color: "#3026B3" },
      { label: "Circular Compounds", value: "100%", color: "#15966B" },
      { label: "Net-Zero Target", value: "2035", color: "#00B8D9" },
    ],
    image: "/assets/backgrounds/sustainability-story.jpg",
    fallbackImage: "/assets/backgrounds/hero-field.jpg",
    companyName: "BharatX Labs & BharatX Agro",
    companyLogo: "/Bharatxlabs_logo.svg",
    route: "/impact",
    cta: "explore sustainability charter",
  },
  {
    id: "innovation",
    tabTitle: "Innovation",
    badge: "SOVEREIGN DEEP-TECH & AI",
    headline: "Engineering India's Sovereign Multilingual Intelligence Layer.",
    description: [
      "Innovation is our core operating doctrine. Through AIxperts Labs, we engineer production neural architectures natively capable across 22 regional Indian languages, eliminating black-box cloud dependence for sovereign enterprises.",
      "From sub-micron precision manufacturing tooling at Casters Global to autonomous edge document processing with 99.8% accuracy, we build deep-tech tailored to the operational demands of the subcontinent.",
    ],
    metrics: [
      { label: "Indic Languages", value: "22 Dialects", color: "#3026B3" },
      { label: "AI Workflows", value: "45+ Deployed", color: "#00B8D9" },
      { label: "Document Precision", value: "99.8%", color: "#15966B" },
    ],
    image: "/assets/backgrounds/innovation-story.jpg",
    fallbackImage: "/assets/backgrounds/ai-circuit.jpg",
    companyName: "AIxperts Labs",
    companyLogo: "/Ai-Experts_logo.png",
    route: "/innovation",
    cta: "discover innovation agenda",
  },
  {
    id: "impact",
    tabTitle: "Our Impact",
    badge: "NATIONAL VALUE CREATION",
    headline: "Institutional Scale Grounded in Real Physical Delivery.",
    description: [
      "At BharatX, we align every enterprise with national resilience. Through BharatX Infratech, we have engineered over 150+ kilometers of arterial roadways, civil works, and industrial corridors designed for enduring 50-year service lifecycles.",
      "Backed by BharatX Ventures, our founder-led ecosystem now holds over ₹180 Cr+ in cumulative portfolio value, combining precision fabrication, export food terminals, and indigenous engineering.",
    ],
    metrics: [
      { label: "Ecosystem Portfolio", value: "₹180 Cr+", color: "#3026B3" },
      { label: "Road & Civil Works", value: "150+ KM", color: "#00B8D9" },
      { label: "Precision Casters Built", value: "500,000+", color: "#FFB000" },
    ],
    image: "/assets/backgrounds/impact-story.jpg",
    fallbackImage: "/assets/backgrounds/infrastructure-real.jpg",
    companyName: "BharatX Infratech & Casters Global",
    companyLogo: "/Infra_logo1.png",
    route: "/impact",
    cta: "view societal impact report",
  },
];

export function StrategicTriadTabs() {
  const [activeId, setActiveId] = useState<string>("sustainability");
  const current = triadData.find((t) => t.id === activeId) ?? triadData[0];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-t border-[#E3E5EF] bg-[#FAF9F6] text-[#111827] dark:bg-night-950 dark:text-white">
      <div className="container-x relative z-10">
        {/* RIL-Style Horizontal Story Tab Navigation Header */}
        <div className="border-b border-[#E3E5EF] dark:border-white/10 pb-6 mb-7 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#3026B3] dark:text-gold-400 mb-2">
                <span className="text-[#FFB000]">◆</span>
                <span>STRATEGIC STORY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] dark:text-white">
                Sovereign Commitment
              </h2>
            </div>

            {/* Tab Link Buttons — horizontally scrollable on mobile */}
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ touchAction: 'pan-x' }}>
              {triadData.map((tab) => {
                const isActive = activeId === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveId(tab.id)}
                    className={`relative rounded-full px-5 sm:px-6 py-2.5 font-serif text-sm sm:text-base transition-all duration-300 ${
                      isActive
                        ? "bg-[#3026B3] text-white shadow-md font-semibold"
                        : "border border-[#E3E5EF] bg-white text-[#596579] hover:border-[#3026B3] hover:text-[#3026B3] dark:border-white/20 dark:bg-transparent dark:text-slate-300"
                    }`}
                  >
                    {tab.tabTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
          >
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-6 xl:col-span-7">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-[#3026B3] dark:text-gold-400 font-semibold">
                {current.badge}
              </span>

              <h3 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111827] dark:text-white leading-tight">
                {current.headline}
              </h3>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-[#596579] dark:text-slate-300 leading-relaxed font-body">
                {current.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Metrics Row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#E3E5EF] pt-6">
                {current.metrics.map((m) => (
                  <div key={m.label}>
                    <span
                      className="block font-stat text-xl sm:text-2xl font-bold"
                      style={{ color: m.color || "#3026B3" }}
                    >
                      {m.value}
                    </span>
                    <span className="block font-mono text-[9.5px] uppercase tracking-wider text-[#596579] mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={current.route}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#3026B3] hover:bg-[#211B72] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300"
                >
                  <span className="capitalize">{current.cta}</span>
                  <Icon
                    name="arrow-right"
                    width={14}
                    height={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                {/* Operating Enterprise badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E3E5EF] bg-white shadow-xs dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center">
                    <img
                      src={current.companyLogo}
                      alt={current.companyName}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="font-mono text-xs text-[#596579] dark:text-slate-300">
                    {current.companyName}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Cinematic Card (5 cols) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="relative h-80 sm:h-96 lg:h-[480px] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-night-900 group">
                <img
                  src={current.image}
                  alt={current.headline}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95] contrast-[1.05]"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== current.fallbackImage) {
                      target.src = current.fallbackImage;
                    }
                  }}
                />

                {/* Ambient vignette gradient with reduced darkness */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

                {/* Top badge with Operating Company logo */}
                <div className="absolute top-5 left-5 flex items-center gap-2.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center">
                    <img
                      src={current.companyLogo}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-200 font-semibold">
                    {current.companyName}
                  </span>
                </div>

                {/* Bottom glassmorphic info bar */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#FFB000] bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB000] animate-pulse" />
                    <span>SOVEREIGNTY CHARTER</span>
                  </span>
                  <span className="text-white font-semibold">{current.tabTitle}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
