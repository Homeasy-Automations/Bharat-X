import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";

// ── 02. Formula items for "Who We Are" ──────────────────────────────
const formulaInputs = [
  { label: "Businesses", icon: "layers" as const, color: "#3026B3", bg: "bg-[#3026B3]/10", text: "text-[#3026B3]" },
  { label: "Capital", icon: "landmark" as const, color: "#E09800", bg: "bg-[#FFB000]/15", text: "text-[#B87B00]" },
  { label: "Technology", icon: "cpu" as const, color: "#00B8D9", bg: "bg-[#00B8D9]/15", text: "text-[#008299]" },
  { label: "Talent", icon: "users" as const, color: "#15966B", bg: "bg-[#15966B]/15", text: "text-[#15966B]" },
  { label: "Execution", icon: "cog" as const, color: "#4B40D4", bg: "bg-[#4B40D4]/15", text: "text-[#4B40D4]" },
];

// ── 03. Three Pillars for "Why BharatX Exists" ────────────────────────
const purposePillars = [
  {
    title: "Build",
    description: "Create businesses around meaningful opportunities.",
    icon: "hard-hat" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    title: "Scale",
    description: "Strengthen them through capital, technology and execution.",
    icon: "trending-up" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
    borderHover: "hover:border-[#FFB000]",
  },
  {
    title: "Impact",
    description: "Create lasting economic and social value.",
    icon: "sparkles" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
];

// ── Group Leadership Mandates ─────────────────────────────────────────
const leadershipMandates = [
  {
    icon: "compass",
    accent: "#FFB000",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#9A6200]",
    borderHover: "hover:border-[#FFB000]/40",
    title: "Sovereign Industrial Capacity",
    desc: "Engineering domestic manufacturing, resilient infrastructure, and high-duty cycle systems designed for decades of compounding value.",
  },
  {
    icon: "cpu",
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]/30",
    title: "Indigenous Technology & Silicon",
    desc: "Fostering frontier AI foundational models, robotics, and deeptech skunkworks to eliminate reliance on foreign black-box dependencies.",
  },
  {
    icon: "orbit",
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]/40",
    title: "Interconnected Economic Engine",
    desc: "Unifying cross-sector operating businesses under one institutional standard of quality, capital discipline, and governance.",
  },
];

// ── 04. Business Ecosystem Nodes ──────────────────────────────────────
const primaryEcosystemNodes = [
  {
    sector: "Infrastructure",
    company: "BharatX Infratech",
    logo: "/Infra_logo1.png",
    link: "/services#infrastructure",
    accent: "#3026B3",
    badge: "Active",
  },
  {
    sector: "Agriculture",
    company: "BharatXAgro",
    logo: "/Bharatxagro_logo.png",
    link: "/services#agriculture",
    accent: "#15966B",
    badge: "Active",
  },
  {
    sector: "Manufacturing",
    company: "Casters Global",
    logo: "/Casters_logo.png",
    link: "/services#manufacturing",
    accent: "#00B8D9",
    badge: "Active",
  },
  {
    sector: "Technology",
    company: "AI Xperts Labs",
    logo: "/Ai-Experts_logo.png",
    link: "/services#tech-ai",
    accent: "#4B40D4",
    badge: "Active",
  },
  {
    sector: "Packaging",
    company: "SRM Enterprises",
    link: "/services#packaging",
    accent: "#D97706",
    badge: "Active",
  },
];

const secondaryEcosystemNodes = [
  {
    sector: "Sustainability",
    company: "Future Expansion",
    link: "/#what-comes-next",
    accent: "#059669",
    badge: "Incubating",
  },
  {
    sector: "Venture Building",
    company: "BharatX Ventures",
    logo: "/Ventures_logo.png",
    link: "/services#finance",
    accent: "#211B72",
    badge: "Active",
  },
];

// ── 05. Timeline steps for "How We Build" ──────────────────────────────
const buildTimeline = [
  {
    step: "01",
    title: "IDENTIFY",
    description: "Find meaningful problems and opportunities.",
    icon: "target" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    step: "02",
    title: "BUILD",
    description: "Develop products, businesses and capabilities.",
    icon: "hard-hat" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
    borderHover: "hover:border-[#FFB000]",
  },
  {
    step: "03",
    title: "INVEST",
    description: "Deploy capital, technology and talent.",
    icon: "landmark" as const,
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
  },
  {
    step: "04",
    title: "SCALE",
    description: "Expand markets, operations and capabilities.",
    icon: "trending-up" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
  {
    step: "05",
    title: "IMPACT",
    description: "Create sustainable economic and social value.",
    icon: "sparkles" as const,
    accent: "#4B40D4",
    bgAccent: "bg-[#4B40D4]/15",
    textAccent: "text-[#4B40D4]",
    borderHover: "hover:border-[#4B40D4]",
  },
];

// ── 06. Five Principles for "Our Principles" ──────────────────────────
const principles = [
  {
    title: "Entrepreneurial",
    description: "We think like builders and act with ownership.",
    icon: "rocket" as const,
    color: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
  {
    title: "Execution-Driven",
    description: "Ideas matter only when they translate into results.",
    icon: "check" as const,
    color: "#00B8D9",
    bg: "bg-[#00B8D9]/15",
    text: "text-[#008299]",
  },
  {
    title: "Long-Term",
    description: "We build businesses for enduring value, not short-term visibility.",
    icon: "trending-up" as const,
    color: "#15966B",
    bg: "bg-[#15966B]/15",
    text: "text-[#15966B]",
  },
  {
    title: "Technology-Enabled",
    description: "We use technology to improve how businesses operate and scale.",
    icon: "cpu" as const,
    color: "#4B40D4",
    bg: "bg-[#4B40D4]/15",
    text: "text-[#4B40D4]",
  },
  {
    title: "Responsible",
    description: "Growth must create value for businesses, people and the wider ecosystem.",
    icon: "shield-check" as const,
    color: "#D97706",
    bg: "bg-[#F59E0B]/15",
    text: "text-[#B45309]",
  },
];

export default function AboutPage() {
  usePageMeta({
    title: "About BharatX Group | Building Businesses for a Growing Bharat",
    description:
      "Learn about BharatX Group, a diversified Indian business group building enterprises across infrastructure, agriculture, manufacturing, technology, packaging, sustainability and venture building.",
    path: "/about",
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (Building Enterprises for a Growing Bharat) ─────── */}
      <section className="relative overflow-hidden min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Wide-format cinematic transformation image filling the entire frame */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/infrastructure-real.jpg"
            alt="India's Physical and Economic Transformation"
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full">
          <div className="max-w-4xl mt-8 sm:mt-12 md:mt-24">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 backdrop-blur-md px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-5 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>ABOUT BHARATX GROUP</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
            >
              Building Enterprises for a{" "}
              <span className="text-[#FFB000]">Growing Bharat.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              BharatX Group is a diversified Indian business group building and scaling enterprises across infrastructure, agriculture, manufacturing, technology, packaging, sustainability and venture building.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 02. WHO WE ARE (More Than a Group of Companies) ───────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
                <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
                More Than a <span className="text-[#3026B3]">Group of Companies</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
                BharatX Group brings together businesses operating across some of India’s most important growth sectors.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#596579] leading-relaxed font-normal">
                We combine entrepreneurial thinking, operational capability, technology and capital to build businesses that solve real-world problems and create long-term value.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#596579] leading-relaxed font-normal">
                Our portfolio spans infrastructure and engineering, agriculture and food, industrial manufacturing, AI and technology, packaging, sustainability, venture building and social impact.
              </p>
            </div>

            {/* Visual Formula: Businesses + Capital + Technology + Talent + Execution -> Enduring Enterprises */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 sm:p-9 shadow-lg">
                <div className="text-center mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#3026B3] font-bold block">
                    The Value Creation Formula
                  </span>
                  <span className="text-xs text-[#596579] mt-1 block">
                    How core capabilities compound across the ecosystem
                  </span>
                </div>

                {/* 5 Input Badges in a flexible grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {formulaInputs.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-xl border border-[#E3E5EF] bg-white p-3 shadow-xs transition-all hover:shadow-md"
                    >
                      <div className={`h-8 w-8 rounded-lg ${item.bg} ${item.text} flex items-center justify-center shrink-0`}>
                        <Icon name={item.icon} width={16} height={16} strokeWidth={2} />
                      </div>
                      <span className="font-serif text-sm font-medium text-[#111827]">
                        {item.label}
                      </span>
                    </div>
                  ))}

                  {/* Sixth slot: compounding operator icon */}
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-[#CBD1E1] bg-white/50 p-3">
                    <span className="font-mono text-xs text-[#596579] font-bold tracking-wider">
                      + SYNERGY
                    </span>
                  </div>
                </div>

                {/* Downward Arrow Connector */}
                <div className="my-5 flex items-center justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3026B3] text-white shadow-md">
                    <Icon name="arrow-right" width={16} height={16} className="rotate-90" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Result Node: Enduring Enterprises */}
                <div className="rounded-2xl border border-[#3026B3]/40 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] p-5 sm:p-6 text-center text-white shadow-xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold block mb-1">
                    End State
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    Enduring Enterprises
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-200 font-normal">
                    Built for generational resilience, operating independence, and national momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. WHY BHARATX EXISTS (Built Around India's Opportunity) ─── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#9A6200] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>OUR PURPOSE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Built Around India’s <span className="text-[#3026B3]">Opportunity</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
              India is entering a period of extraordinary economic transformation. Infrastructure is expanding, industries are modernising, technology is reshaping businesses, agricultural value chains are evolving and sustainability is becoming a business imperative.
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#111827] font-medium leading-relaxed">
              BharatX exists to participate in this transformation—not simply by investing in opportunities, but by building the businesses capable of capturing them.
            </p>
          </div>

          {/* Three Simple Pillars: Build, Scale, Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purposePillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`group relative flex flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.borderHover}`}
              >
                <div>
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${pillar.bgAccent} ${pillar.textAccent} transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                  >
                    <Icon name={pillar.icon} width={22} height={22} strokeWidth={2} />
                  </div>

                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#596579] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF] flex items-center justify-between font-mono text-[10.5px] uppercase tracking-wider text-[#596579]">
                  <span>Pillar Focus</span>
                  <span className={`h-2 w-2 rounded-full ${pillar.bgAccent} ${pillar.textAccent}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUP LEADERSHIP (The Visionary Behind the Standard) ─────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <Icon name="user-round" width={13} height={13} />
              <span>GROUP LEADERSHIP</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              The Visionary Behind the <span className="text-[#3026B3]">Standard.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
              BharatX Group is founded on institutional rigor, sovereign engineering, and long-term national economic leadership.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-4 sm:p-6 lg:p-8 shadow-xl">
            {/* Ambient atmospheric lighting */}
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FFB000]/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-[#3026B3]/[0.06] blur-3xl" />

            <div className="relative z-10 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Portrait Column */}
              <div className="relative flex flex-col justify-end overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] rounded-2xl border border-[#E3E5EF] bg-[#0F172A] shadow-lg group">
                <img
                  src="/pradeep-kumar.png"
                  alt="Pradeep Kumar — Founder & Leader, BharatX Group"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/25 to-transparent opacity-95" />

                {/* Floating Identity Card on Image */}
                <div className="relative z-10 p-6 sm:p-8 backdrop-blur-md bg-[#0B0F19]/85 border-t border-white/10 rounded-b-2xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000] animate-pulse" />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-[#FFB000] font-bold">
                      Founder &amp; Visionary
                    </span>
                  </div>
                  <div className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    Pradeep Kumar
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-300">
                    BharatX Group · Institutional Founder
                  </div>
                </div>
              </div>

              {/* Narrative & Quote Column */}
              <div className="flex flex-col justify-between p-2 sm:p-4 lg:p-6 lg:pl-2">
                <div>
                  {/* Vision Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#9A6200] font-bold mb-6 shadow-xs">
                    <Icon name="sparkles" width={13} height={13} />
                    <span>National Economic Vision</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111827] tracking-tight leading-tight">
                    Architecting India’s <span className="text-[#3026B3]">Next Economic Decade.</span>
                  </h3>

                  {/* Featured Decorated Quote Block */}
                  <div className="relative mt-6 rounded-2xl border-l-4 border-[#FFB000] border-y border-r border-[#E3E5EF] bg-white p-6 sm:p-7 shadow-xs">
                    <div aria-hidden className="absolute -top-3 right-6 font-serif text-7xl font-bold text-[#FFB000]/15 select-none pointer-events-none">
                      “
                    </div>
                    <blockquote className="relative z-10 text-[15.5px] sm:text-[17px] font-normal leading-relaxed text-[#1F2937] italic">
                      “Aligned with the national vision of{" "}
                      <strong className="text-[#3026B3] not-italic font-semibold">
                        Viksit Bharat 2047
                      </strong>
                      , he is committed to building sustainable, technology-driven enterprises that strengthen India’s industrial ecosystem and contribute to the country’s long-term economic leadership.”
                    </blockquote>
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E3E5EF] text-xs font-mono text-[#596579]">
                      <span className="text-[#9A6200] font-bold">— Pradeep Kumar</span>
                      <span className="font-medium text-[#111827]">BharatX Group</span>
                    </div>
                  </div>

                  {/* Three Core Leadership Mandates */}
                  <div className="mt-6 space-y-3.5">
                    {leadershipMandates.map((item) => (
                      <div
                        key={item.title}
                        className={`flex items-start gap-4 rounded-xl border border-[#E3E5EF] bg-white p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${item.borderHover}`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bgAccent} ${item.textAccent} shadow-xs`}
                        >
                          <Icon name={item.icon} width={20} height={20} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-serif text-base font-medium text-[#111827]">
                            {item.title}
                          </div>
                          <p className="mt-1 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust & Alignment Footer Bar */}
                <div className="mt-8 pt-5 border-t border-[#E3E5EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#596579]">
                  <span className="flex items-center gap-2 text-[#111827] font-medium">
                    <Icon name="shield-check" width={16} height={16} className="text-[#15966B]" />
                    Constitutional Governance Standard
                  </span>
                  <span className="text-[#9A6200] font-bold">Viksit Bharat 2047 Committed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. OUR BUSINESS ECOSYSTEM (One Group. Multiple Growth Engines) ─ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>ECOSYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              One Group. Multiple <span className="text-[#3026B3]">Growth Engines.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed">
              A cohesive institutional tree connecting physical infrastructure, agricultural commodities, industrial manufacturing, and applied intelligence.
            </p>
          </div>

          {/* Visual Architecture Tree */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-10 shadow-lg">
            {/* Tree Root: BHARATX GROUP */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex flex-col items-center rounded-2xl border border-[#3026B3]/40 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] px-8 py-4 text-white shadow-xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold">
                  CONGLOMERATE CORE
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mt-0.5">
                  BHARATX GROUP
                </span>
              </div>
              <div className="h-8 w-px bg-[#3026B3]/40 my-1" />
            </div>

            {/* Level 1: 5 Core Verticals */}
            <div className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {primaryEcosystemNodes.map((node) => {
                  const isExternal = node.link.startsWith("http");
                  const nodeClasses = "group flex flex-col justify-between rounded-xl border border-[#E3E5EF] bg-white p-4 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:shadow-md hover:-translate-y-1";

                  const nodeContent = (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[9.5px] uppercase tracking-wider font-bold" style={{ color: node.accent }}>
                            {node.sector}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-slate-200 text-[#596579]">
                            {node.badge}
                          </span>
                        </div>
                        <h4 className="font-serif text-base font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                          {node.company}
                        </h4>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#E3E5EF] flex items-center justify-between">
                        {node.logo ? (
                          <div className="h-5 w-5 rounded bg-white p-0.5 border border-[#E3E5EF] flex items-center justify-center">
                            <img src={node.logo} alt="" className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <span className="text-[10px] font-mono text-[#596579]">Horizon</span>
                        )}
                        <Icon name="arrow-up-right" width={12} height={12} className="text-[#596579] group-hover:text-[#3026B3]" />
                      </div>
                    </>
                  );

                  return isExternal ? (
                    <a key={node.sector} href={node.link} target="_blank" rel="noopener noreferrer" className={nodeClasses}>
                      {nodeContent}
                    </a>
                  ) : (
                    <Link key={node.sector} to={node.link} className={nodeClasses}>
                      {nodeContent}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Connecting Vertical Trunk */}
            <div className="flex flex-col items-center my-4">
              <div className="h-6 w-px bg-[#3026B3]/30" />
            </div>

            {/* Level 2: Sustainability & Venture Building */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryEcosystemNodes.map((node) => (
                <Link
                  key={node.sector}
                  to={node.link}
                  className="group flex flex-col justify-between rounded-xl border border-[#E3E5EF] bg-white p-4 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9.5px] uppercase tracking-wider font-bold" style={{ color: node.accent }}>
                        {node.sector}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-slate-200 text-[#596579]">
                        {node.badge}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                      {node.company}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#E3E5EF] flex items-center justify-between">
                    {node.logo ? (
                      <div className="h-5 w-5 rounded bg-white p-0.5 border border-[#E3E5EF] flex items-center justify-center">
                        <img src={node.logo} alt="" className="max-h-full max-w-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-[#596579]">Horizon</span>
                    )}
                    <Icon name="arrow-up-right" width={12} height={12} className="text-[#596579] group-hover:text-[#3026B3]" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Connecting Trunk to Anchor */}
            <div className="flex flex-col items-center my-4">
              <div className="h-6 w-px bg-[#3026B3]/30" />
            </div>

            {/* Level 3 Anchor: Knowledge & Impact / Labs Foundation */}
            <div className="max-w-md mx-auto">
              <Link
                to="/services#climate-sustainability"
                className="group flex items-center justify-between rounded-2xl border border-[#E3E5EF] bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-[#15966B] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#15966B]/15 text-[#15966B] flex items-center justify-center shrink-0">
                    <img src="/Bharatxlabs_logo.svg" alt="" className="h-5 w-5 object-contain" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#15966B] font-bold block">
                      Knowledge &amp; Impact
                    </span>
                    <h4 className="font-serif text-lg font-medium text-[#111827] group-hover:text-[#15966B] transition-colors">
                      BharatX Labs Foundation
                    </h4>
                  </div>
                </div>
                <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-[#111827] group-hover:bg-[#15966B] group-hover:text-white transition-all">
                  <Icon name="arrow-right" width={13} height={13} />
                </div>
              </Link>
            </div>

            {/* Subtext Statement */}
            <div className="mt-8 text-center pt-6 border-t border-[#E3E5EF]">
              <p className="text-xs sm:text-sm text-[#596579] max-w-2xl mx-auto leading-relaxed">
                Each business operates with its own market focus and capabilities while benefiting from the broader BharatX ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. HOW WE BUILD (From Opportunity to Enterprise) ─────────── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#00B8D9]" />
              <span>HOW WE BUILD</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              From Opportunity to <span className="text-[#3026B3]">Enterprise</span>
            </h2>

            <p className="mt-3 text-base text-[#596579]">
              A signature five-stage execution model transforming national structural opportunities into enduring institutions.
            </p>
          </div>

          {/* Horizontal 5-Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 relative">
            {buildTimeline.map((step, idx) => (
              <div
                key={step.title}
                className={`group relative flex flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${step.borderHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold tracking-widest ${step.textAccent}`}>
                      {step.step}
                    </span>
                    <div
                      className={`h-9 w-9 rounded-xl ${step.bgAccent} ${step.textAccent} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                    >
                      <Icon name={step.icon} width={18} height={18} strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="font-mono text-sm sm:text-base font-bold tracking-[0.16em] text-[#111827] uppercase">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator on desktop */}
                {idx < buildTimeline.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-white border border-[#E3E5EF] items-center justify-center text-[#3026B3] shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="chevron-right" width={13} height={13} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline Bottom Tagline */}
          <div className="mt-12 text-center">
            <p className="text-sm sm:text-base text-[#111827] font-medium max-w-xl mx-auto leading-relaxed">
              Our approach is simple: build with discipline, scale with purpose and think long term.
            </p>
          </div>
        </div>
      </section>

      {/* ── 06. OUR PRINCIPLES (What Guides Us) ────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966B]/30 bg-[#15966B]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#15966B] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#15966B]" />
              <span>WHAT GUIDES US</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Our <span className="text-[#3026B3]">Principles</span>
            </h2>

            <p className="mt-3 text-base text-[#596579]">
              Five core convictions that anchor our operating culture and enterprise stewardship.
            </p>
          </div>

          {/* 5 Principles Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className={`group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 ${idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`h-11 w-11 rounded-xl ${p.bg} ${p.text} flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                    <Icon name={p.icon} width={20} height={20} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] block">
                      Principle 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07. CLOSING / LEADERSHIP STATEMENT (The Journey Ahead) ─────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-20 sm:py-28">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>THE JOURNEY AHEAD</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white">
              The Journey Ahead
            </h2>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto">
              BharatX Group is still at the beginning of its journey.
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              As we expand into new industries, build new businesses and develop new capabilities, our ambition remains constant: to create enduring enterprises that contribute to India’s economic progress.
            </p>

            {/* Signature Statement */}
            <div className="mt-8 pt-8 border-t border-white/15 max-w-xl mx-auto">
              <p className="font-mono text-sm sm:text-base uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                Building Businesses. Enabling Bharat.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 sm:px-9 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
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
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 sm:px-9 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white shadow-xs"
              >
                <span>Partner With BharatX</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
