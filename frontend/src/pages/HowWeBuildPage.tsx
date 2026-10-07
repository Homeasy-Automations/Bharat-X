import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { SectionTransition } from "../components/motion/SectionTransition";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { AnimatedHeading } from "../components/motion/AnimatedHeading";
import { MagneticButton } from "../components/common/MagneticButton";

// ── 02. Formula items for "Our Philosophy" ───────────────────────────
const philosophyInputs = [
  { label: "Opportunity", icon: "target" as const, color: "#3026B3", bg: "bg-[#3026B3]/10", text: "text-[#3026B3]" },
  { label: "People", icon: "users" as const, color: "#15966B", bg: "bg-[#15966B]/15", text: "text-[#15966B]" },
  { label: "Capital", icon: "landmark" as const, color: "#E09800", bg: "bg-[#FFB000]/15", text: "text-[#B87B00]" },
  { label: "Technology", icon: "cpu" as const, color: "#00B8D9", bg: "bg-[#00B8D9]/15", text: "text-[#008299]" },
  { label: "Execution", icon: "cog" as const, color: "#4B40D4", bg: "bg-[#4B40D4]/15", text: "text-[#4B40D4]" },
];

// ── 03. Five-Step Build Cycle ─────────────────────────────────────────
const buildCycleSteps = [
  {
    step: "01",
    name: "IDENTIFY",
    tagline: "Find the opportunity.",
    description: "We look for meaningful problems, market gaps and emerging opportunities where a strong business can be built.",
    icon: "target" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    step: "02",
    name: "BUILD",
    tagline: "Turn opportunity into capability.",
    description: "We develop the product, business model, team and operating foundation required to create a viable enterprise.",
    icon: "hard-hat" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
    borderHover: "hover:border-[#FFB000]",
  },
  {
    step: "03",
    name: "INVEST",
    tagline: "Put resources behind potential.",
    description: "We bring together capital, technology, talent, partnerships and strategic capabilities.",
    icon: "landmark" as const,
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
  },
  {
    step: "04",
    name: "SCALE",
    tagline: "Build for sustainable growth.",
    description: "We strengthen operations, distribution, technology, market access and organisational capability.",
    icon: "trending-up" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
  {
    step: "05",
    name: "IMPACT",
    tagline: "Create lasting value.",
    description: "We measure success through business performance, jobs, innovation, infrastructure, sustainability and wider economic contribution.",
    icon: "sparkles" as const,
    accent: "#4B40D4",
    bgAccent: "bg-[#4B40D4]/15",
    textAccent: "text-[#4B40D4]",
    borderHover: "hover:border-[#4B40D4]",
  },
];

// ── 04. Five Pillars of BharatX Advantage ─────────────────────────────
const bharatxAdvantage = [
  {
    pillar: "Capital",
    description: "Financial resources and access to strategic capital.",
    icon: "landmark" as const,
    color: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
  {
    pillar: "Technology",
    description: "AI, automation and digital capabilities.",
    icon: "cpu" as const,
    color: "#4B40D4",
    bg: "bg-[#4B40D4]/15",
    text: "text-[#4B40D4]",
  },
  {
    pillar: "Talent",
    description: "Entrepreneurs, operators, specialists and domain expertise.",
    icon: "users" as const,
    color: "#15966B",
    bg: "bg-[#15966B]/15",
    text: "text-[#15966B]",
  },
  {
    pillar: "Execution",
    description: "Hands-on operating and implementation capability.",
    icon: "cog" as const,
    color: "#00B8D9",
    bg: "bg-[#00B8D9]/15",
    text: "text-[#008299]",
  },
  {
    pillar: "Ecosystem",
    description: "Partnerships, businesses, networks and market access.",
    icon: "layers" as const,
    color: "#D97706",
    bg: "bg-[#F59E0B]/15",
    text: "text-[#B45309]",
  },
];

// ── 05. Eight Sectors Where We Build ──────────────────────────────────
const buildSectors = [
  { name: "Infrastructure", tag: "Civil & Transport Assets", emoji: "🏗️", link: "/services#infrastructure", accent: "#3026B3" },
  { name: "Agriculture", tag: "Agro Commodities & Export", emoji: "🌾", link: "/services#agriculture", accent: "#15966B" },
  { name: "Manufacturing", tag: "Precision Casters & Mobility", emoji: "⚙️", link: "/services#manufacturing", accent: "#00B8D9" },
  { name: "Technology", tag: "Applied AI & Automation", emoji: "🤖", link: "/services#tech-ai", accent: "#4B40D4" },
  { name: "Packaging", tag: "Sustainable Industrial Barriers", emoji: "📦", link: "/services#packaging", accent: "#D97706" },
  { name: "Sustainability", tag: "Circularity & Net-Zero Systems", emoji: "♻️", link: "/services#sustainability", accent: "#059669" },
  { name: "Venture Building", tag: "Capital & Enterprise GTM", emoji: "💼", link: "/services#ventures", accent: "#211B72" },
  { name: "Social Impact", tag: "Knowledge & Education Labs", emoji: "🌱", link: "/services#foundation", accent: "#15966B" },
];

export default function HowWeBuildPage() {
  usePageMeta({
    title: "How We Build — BharatX Group | From Opportunity to Impact",
    description:
      "We identify opportunities, build businesses, bring together capital and technology, and scale them with disciplined execution. Build. Scale. Impact.",
    path: "/how-we-build",
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (From Opportunity to Impact) ─────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Abstract/Industrial Progression Background Image: Blueprint -> Factory -> Tech -> People */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/backgrounds/how-we-build-hero.jpg"
            alt="From Blueprint and Infrastructure to Technology and People"
            className="h-full w-full object-cover object-center filter brightness-[0.85] contrast-[1.12] transition-transform duration-1000 ease-out hover:scale-105"
            data-cursor="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full">
          <div className="max-w-4xl mt-8 sm:mt-12 md:mt-24">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 backdrop-blur-md px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-5 shadow-sm group hover:border-[#FFB000]/60 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000] group-hover:scale-125 transition-transform" />
              <span>HOW WE BUILD</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm cursor-text"
              data-cursor="text"
            >
              From Opportunity to{" "}
              <span className="text-[#FFB000] hover:text-[#ffd166] transition-colors duration-300">Impact.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              We identify opportunities, build businesses, bring together capital and technology, and scale them with disciplined execution.
            </motion.p>

            {/* Sub-tagline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 font-mono text-xs uppercase tracking-[0.22em] text-[#FFB000] font-bold shadow-sm">
                <span>Build.</span>
                <span className="text-white/40">•</span>
                <span>Scale.</span>
                <span className="text-white/40">•</span>
                <span>Impact.</span>
              </div>

              <Link
                to="#build-cycle"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("build-cycle")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 hover:bg-white/20 px-5 py-2 text-xs font-semibold text-white transition-all backdrop-blur-sm fx-lift"
              >
                <span>Explore The Process</span>
                <Icon name="arrow-right" width={14} height={14} className="rotate-90" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. OUR PHILOSOPHY (We Are Builders, Not Just Investors.) ─────── */}
      <SectionTransition withDivider className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4 hover:border-[#3026B3] transition-colors">
                <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
                <span>OUR PHILOSOPHY</span>
              </div>

              <AnimatedHeading as="h2" effect="words" hover="color" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
                We Are Builders, <span className="text-[#3026B3]">Not Just Investors.</span>
              </AnimatedHeading>

              <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
                BharatX was built around a simple belief: meaningful businesses are created by combining a strong opportunity with the right people, technology, capital and execution.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#111827] font-medium leading-relaxed">
                We don’t believe in building businesses for the sake of having a portfolio. We build where we see a genuine opportunity to create long-term value.
              </p>
            </div>

            {/* Visual Formula: Opportunity + People + Capital + Technology + Execution -> Enterprise */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 sm:p-9 shadow-lg fx-lift">
                <div className="text-center mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#3026B3] font-bold block">
                    The Enterprise Engine
                  </span>
                  <span className="text-xs text-[#596579] mt-1 block">
                    How core capabilities assemble into enduring institutions
                  </span>
                </div>

                {/* 5 Input Badges */}
                <Stagger staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {philosophyInputs.map((item) => (
                    <StaggerItem key={item.label}>
                      <div
                        data-cursor="card"
                        className="flex items-center gap-2.5 rounded-xl border border-[#E3E5EF] bg-white p-3 shadow-xs transition-all hover:shadow-md fx-lift h-full"
                      >
                        <div className={`h-8 w-8 rounded-lg ${item.bg} ${item.text} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                          <Icon name={item.icon} width={16} height={16} strokeWidth={2} />
                        </div>
                        <span className="font-serif text-sm font-medium text-[#111827]">
                          {item.label}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}

                  {/* 6th Slot: Compounding Catalyst */}
                  <StaggerItem>
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-[#CBD1E1] bg-white/50 p-3 h-full">
                      <span className="font-mono text-xs text-[#596579] font-bold tracking-wider">
                        + DISCIPLINE
                      </span>
                    </div>
                  </StaggerItem>
                </Stagger>

                {/* Downward Connector */}
                <div className="my-5 flex items-center justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3026B3] text-white shadow-md animate-bounce">
                    <Icon name="arrow-right" width={16} height={16} className="rotate-90" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Result Node: Enterprise */}
                <div
                  data-cursor="card"
                  className="rounded-2xl border border-[#3026B3]/40 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] p-5 sm:p-6 text-center text-white shadow-xl transition-all duration-300 hover:scale-[1.02] fx-glow-indigo"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold block mb-1">
                    CENTRAL OUTCOME
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white transition-colors duration-300 hover:text-gold-400">
                    Enterprise
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-200 font-normal">
                    Self-sustaining, profitable, and structurally vital to India’s compounding growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 03. THE BHARATX BUILD CYCLE (Our Five-Step Approach) ─────────── */}
      <SectionTransition withDivider id="build-cycle" className="relative overflow-hidden bg-[#FAF9F6] py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#00B8D9]" />
              <span>THE BHARATX BUILD CYCLE</span>
            </div>

            <AnimatedHeading as="h2" effect="words" hover="color" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Our Five-Step <span className="text-[#3026B3]">Approach</span>
            </AnimatedHeading>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              A systematic progression transforming market challenges into scalable industrial champions.
            </p>
          </div>

          {/* 5-Step Interactive Timeline */}
          <Stagger staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 relative">
            {buildCycleSteps.map((step, idx) => (
              <StaggerItem key={step.name}>
                <div
                  data-cursor="card"
                  className={`group relative flex flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-2xl fx-lift h-full ${step.borderHover}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-xs font-bold tracking-widest ${step.textAccent} transition-transform duration-300 group-hover:scale-110`}>
                        {step.step}
                      </span>
                      <div
                        className={`h-9 w-9 rounded-xl ${step.bgAccent} ${step.textAccent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xs`}
                      >
                        <Icon name={step.icon} width={18} height={18} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-[0.16em] text-[#111827] uppercase group-hover:text-[#3026B3] transition-colors">
                      {step.name}
                    </h3>

                    <p className="mt-1 text-xs font-serif font-semibold text-[#3026B3]">
                      {step.tagline}
                    </p>

                    <p className="mt-3 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting arrow indicator on desktop */}
                  {idx < buildCycleSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-white border border-[#E3E5EF] items-center justify-center text-[#3026B3] shadow-md group-hover:scale-110 transition-transform">
                      <Icon name="chevron-right" width={13} height={13} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12 text-center">
            <p className="text-sm sm:text-base text-[#111827] font-medium max-w-xl mx-auto leading-relaxed">
              Our approach is simple: build with discipline, scale with purpose and think long term.
            </p>
          </div>
        </div>
      </SectionTransition>

      {/* ── 04. WHAT WE BRING (The BharatX Advantage — Five Pillars) ───────── */}
      <SectionTransition withDivider className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966B]/30 bg-[#15966B]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#15966B] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#15966B]" />
              <span>WHAT WE BRING</span>
            </div>

            <AnimatedHeading as="h2" effect="words" hover="color" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              The BharatX <span className="text-[#3026B3]">Advantage</span>
            </AnimatedHeading>

            <p className="mt-3 text-base text-[#596579]">
              Five foundational pillars deployed synchronously across every venture.
            </p>
          </div>

          {/* 5 Pillars Grid */}
          <Stagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {bharatxAdvantage.map((item) => (
              <StaggerItem key={item.pillar}>
                <div
                  data-cursor="card"
                  className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 shadow-xs transition-all duration-300 hover:bg-white hover:border-[#3026B3] hover:shadow-2xl fx-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <div className={`h-11 w-11 rounded-xl ${item.bg} ${item.text} flex items-center justify-center shrink-0 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon name={item.icon} width={20} height={20} strokeWidth={2} />
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors duration-300">
                      {item.pillar}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E3E5EF]/60 font-mono text-[9px] uppercase tracking-wider text-[#596579]">
                    Institutional Pillar
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Central Anchor Line */}
          <div className="mt-14 max-w-2xl mx-auto rounded-2xl border border-[#3026B3]/30 bg-[#3026B3]/5 p-6 text-center shadow-xs fx-lift">
            <p className="font-serif text-base sm:text-lg font-medium text-[#111827] leading-relaxed">
              “When these capabilities come together, opportunities become scalable businesses.”
            </p>
          </div>
        </div>
      </SectionTransition>

      {/* ── 05. WHERE WE BUILD (Building Across the Real and Digital Economy) ── */}
      <SectionTransition withDivider className="relative overflow-hidden bg-[#FAF9F6] py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>OPERATING FOOTPRINT</span>
            </div>

            <AnimatedHeading as="h2" effect="words" hover="color" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Building Across the <span className="text-[#3026B3]">Real and Digital Economy</span>
            </AnimatedHeading>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              Our sectors may differ, but the underlying approach remains the same: identify real opportunities, build strong businesses and create long-term value.
            </p>
          </div>

          {/* Clean Set of 8 Sectors */}
          <Stagger staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {buildSectors.map((sector) => (
              <StaggerItem key={sector.name}>
                <Link
                  to={sector.link}
                  data-cursor="card"
                  className="group flex items-center justify-between rounded-xl border border-[#E3E5EF] bg-white p-4 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:shadow-xl fx-lift h-full"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl transition-transform group-hover:scale-125 duration-300">{sector.emoji}</span>
                    <div>
                      <h4 className="font-serif text-base font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                        {sector.name}
                      </h4>
                      <span className="text-[11px] font-mono text-[#596579] block">
                        {sector.tag}
                      </span>
                    </div>
                  </div>
                  <Icon name="arrow-up-right" width={14} height={14} className="text-[#596579] group-hover:text-[#3026B3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionTransition>

      {/* ── 06. CLOSING CTA (The Next Business Could Be Built Here.) ─────────── */}
      <SectionTransition className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-12 sm:py-16">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>THE NEXT VENTURE</span>
            </div>

            {/* Headline */}
            <AnimatedHeading as="h2" effect="words" hover="color" className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white">
              The Next Business Could Be Built Here.
            </AnimatedHeading>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto">
              We are always looking for entrepreneurs, partners, investors and opportunities that can become the foundation of the next BharatX business.
            </p>

            {/* Three CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton strength={0.25}>
                <Link
                  to="/contact?inquiry=partner"
                  data-cursor="button"
                  data-motion="true"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 fx-shine active:scale-95"
                >
                  <span>Partner With Us</span>
                  <Icon
                    name="arrow-right"
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>

              <Link
                to="/services"
                data-cursor="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white shadow-xs fx-lift"
              >
                <span>Explore Our Businesses</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact?inquiry=build"
                data-cursor="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white shadow-xs fx-lift"
              >
                <span>Build With BharatX</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Signature Tagline */}
            <div className="mt-12 pt-8 border-t border-white/15 max-w-xl mx-auto">
              <p className="font-mono text-sm sm:text-base uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                Building Businesses. Enabling Bharat.
              </p>
            </div>
          </div>
        </div>
      </SectionTransition>
    </main>
  );
}
