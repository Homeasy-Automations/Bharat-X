import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";

interface BusinessVertical {
  id: string;
  category: string;
  emoji: string;
  name: string;
  description: string;
  status: "Active" | "Coming Soon";
  websiteUrl?: string;
  logo?: string;
  image: string;
  accent: string;
  bgAccent: string;
  textAccent: string;
  icon: string;
}

const businessPortfolio: BusinessVertical[] = [
  {
    id: "infrastructure",
    category: "Infrastructure & Engineering",
    emoji: "🏗️",
    name: "BharatX Infratech",
    description: "Building infrastructure and engineering capabilities for a growing India.",
    status: "Active",
    websiteUrl: "https://bharatxinfratech.com",
    logo: "/Infra_logo1.png",
    image: "/companies/bharatx-infratech/hero.jpg",
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    icon: "hard-hat",
  },
  {
    id: "agriculture",
    category: "Agriculture & Food",
    emoji: "🌾",
    name: "BharatXAgro",
    description: "Connecting agricultural products, value addition and Indian capabilities with global markets.",
    status: "Active",
    websiteUrl: "https://bharatxagro.com",
    logo: "/Bharatxagro_logo.png",
    image: "/assets/backgrounds/agri-dusk.jpg",
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    icon: "sprout",
  },
  {
    id: "manufacturing",
    category: "Industrial Manufacturing",
    emoji: "⚙️",
    name: "Casters Global",
    description: "Engineering precision mobility and caster solutions for industrial applications.",
    status: "Active",
    websiteUrl: "https://castersglobal.com",
    logo: "/Casters_logo.png",
    image: "/companies/casters-global/hero.jpg",
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    icon: "cog",
  },
  {
    id: "tech-ai",
    category: "Technology & AI",
    emoji: "🤖",
    name: "AI Xperts Labs",
    description: "Building AI, automation and digital solutions for modern businesses.",
    status: "Active",
    websiteUrl: "https://aixpertslabs.com",
    logo: "/Ai-Experts_logo.png",
    image: "/companies/aixperts-labs/hero.jpg",
    accent: "#4B40D4",
    bgAccent: "bg-[#4B40D4]/15",
    textAccent: "text-[#4B40D4]",
    icon: "cpu",
  },
  {
    id: "packaging",
    category: "Packaging & Materials",
    emoji: "📦",
    name: "BharatX Packaging",
    description: "Developing efficient and sustainable packaging solutions for businesses and industries.",
    status: "Coming Soon",
    image: "/assets/backgrounds/packaging.jpg",
    accent: "#D97706",
    bgAccent: "bg-[#F59E0B]/15",
    textAccent: "text-[#B45309]",
    icon: "boxes",
  },
  {
    id: "sustainability",
    category: "Waste Management & Sustainability",
    emoji: "♻️",
    name: "BharatX Sustainability",
    description: "Building solutions around waste management, recycling, resource recovery and the circular economy.",
    status: "Coming Soon",
    image: "/assets/backgrounds/sustainability-story.jpg",
    accent: "#059669",
    bgAccent: "bg-[#059669]/15",
    textAccent: "text-[#059669]",
    icon: "recycle",
  },
  {
    id: "ventures",
    category: "Capital & Venture Building",
    emoji: "💼",
    name: "BharatX Ventures",
    description: "Combining capital, strategy and execution to build and scale enterprises.",
    status: "Active",
    websiteUrl: "https://bharatx.vc",
    logo: "/Ventures_logo.png",
    image: "/companies/bharatx-ventures/hero.jpg",
    accent: "#211B72",
    bgAccent: "bg-[#211B72]/10",
    textAccent: "text-[#211B72]",
    icon: "landmark",
  },
  {
    id: "foundation",
    category: "Knowledge & Social Impact",
    emoji: "🌱",
    name: "BharatX Labs Foundation",
    description: "Building initiatives around education, innovation, entrepreneurship and social development.",
    status: "Coming Soon",
    logo: "/Bharatxlabs_logo.svg",
    image: "/assets/backgrounds/impact-story.jpg",
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    icon: "sparkles",
  },
];

const futureHorizons = [
  {
    title: "Packaging",
    description: "Eco-conscious materials, automated barrier packaging, and supply-chain logistics containers.",
    accent: "#D97706",
    bg: "bg-[#F59E0B]/10",
    text: "text-[#B45309]",
  },
  {
    title: "Circular Economy",
    description: "Industrial waste recovery, closed-loop polymer recycling, and zero-effluent manufacturing systems.",
    accent: "#059669",
    bg: "bg-[#059669]/10",
    text: "text-[#059669]",
  },
  {
    title: "New Industrial Businesses",
    description: "Advanced metallurgy, automated robotics components, and high-spec sovereign civil technologies.",
    accent: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
];

export default function ServicesPage() {
  usePageMeta({
    title: "Our Businesses | BharatX Group — Building Across India's Growth Economy",
    description:
      "BharatX Group builds and operates businesses across infrastructure, agriculture, manufacturing, technology, packaging and sustainability — supported by capital, venture building and social impact initiatives.",
    path: "/services",
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (Our Businesses — Building Across India's Growth Economy) ── */}
      <section className="relative overflow-hidden min-h-[90vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Full-bleed background panorama */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/conglomerate-panorama.jpg"
            alt="India's Growth Economy and Industrial Transformation"
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full">
          <div className="max-w-4xl mt-8 sm:mt-12 md:mt-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 backdrop-blur-md px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-5 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>OUR BUSINESSES</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
            >
              Building Across India’s{" "}
              <span className="text-[#FFB000]">Growth Economy.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              BharatX Group builds and operates businesses across infrastructure, agriculture, manufacturing, technology, packaging and sustainability — supported by capital, venture building and social impact initiatives.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
              >
                <span>Partner With Us</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. BUSINESS PORTFOLIO (Our Business Ecosystem — 8 Verticals Grid) ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>02 // BUSINESS PORTFOLIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Our Business <span className="text-[#3026B3]">Ecosystem</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed">
              Eight operating verticals engineered for scale, operational autonomy, and compound value across Bharat.
            </p>
          </div>

          {/* Clean 8-Card Grid (4 cols on lg, 2 cols on md, 1 col on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPortfolio.map((biz) => {
              const isActive = biz.status === "Active";

              return (
                <div
                  key={biz.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] transition-all duration-300 hover:border-[#3026B3] hover:bg-white hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Top Thumbnail Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={biz.image}
                      alt={biz.name}
                      className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Tag with Emoji */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white border border-white/20">
                        <span>{biz.emoji}</span>
                        <span className="truncate max-w-[150px]">{biz.category}</span>
                      </span>

                      {/* Status Badge */}
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                          isActive
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                            : "bg-amber-500/20 text-amber-300 border-amber-400/30"
                        }`}
                      >
                        {biz.status}
                      </span>
                    </div>

                    {/* Logo Overlay if available */}
                    {biz.logo && (
                      <div className="absolute bottom-3 left-3 h-8 w-auto max-w-[110px] rounded-lg bg-white/95 backdrop-blur-sm p-1.5 shadow-md flex items-center justify-center">
                        <img src={biz.logo} alt="" className="max-h-full max-w-full object-contain" />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                        {biz.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                        {biz.description}
                      </p>
                    </div>

                    {/* Action Link / Status Footer */}
                    <div className="mt-6 pt-4 border-t border-[#E3E5EF] flex items-center justify-between">
                      {isActive && biz.websiteUrl ? (
                        <a
                          href={biz.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] hover:text-[#211B72] transition-colors group/link"
                        >
                          <span>Visit Website</span>
                          <Icon
                            name="arrow-up-right"
                            width={13}
                            height={13}
                            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          />
                        </a>
                      ) : (
                        <span className="font-mono text-xs uppercase tracking-wider text-[#9A6200] font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FFB000]" />
                          <span>Coming Soon</span>
                        </span>
                      )}

                      <div className={`h-7 w-7 rounded-lg ${biz.bgAccent} ${biz.textAccent} flex items-center justify-center shrink-0`}>
                        <Icon name={biz.icon} width={14} height={14} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. HOW THEY CONNECT (Different Businesses. One Ecosystem.) ─────────── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>03 // HOW THEY CONNECT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Different Businesses. <span className="text-[#3026B3]">One Ecosystem.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              Each BharatX business operates within its own market while benefiting from the wider Group’s capabilities, relationships, technology, talent and entrepreneurial ecosystem.
            </p>
          </div>

          {/* Interactive Flow Architecture: BUILD | OPERATE | INVEST -> IMPACT */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#E3E5EF] bg-white p-7 sm:p-12 shadow-xl">
            {/* Top Root: BHARATX GROUP */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex flex-col items-center rounded-2xl border border-[#3026B3]/40 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] px-8 py-4 text-white shadow-xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold">
                  THE ECOSYSTEM CORE
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mt-0.5">
                  BHARATX GROUP
                </span>
              </div>
              <div className="h-8 w-px bg-[#3026B3]/40 my-1" />
            </div>

            {/* Tri-Column Engine: BUILD | OPERATE | INVEST */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
              {/* Pillar 1: BUILD */}
              <div className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 text-center transition-all duration-300 hover:border-[#3026B3] hover:shadow-md">
                <div className="h-9 w-9 rounded-xl bg-[#3026B3]/10 text-[#3026B3] flex items-center justify-center mx-auto mb-3">
                  <Icon name="hard-hat" width={18} height={18} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#3026B3] font-bold block">
                  BUILD
                </span>
                <h4 className="font-serif text-xl font-medium text-[#111827] mt-1">
                  New Businesses
                </h4>
                <p className="mt-2 text-xs text-[#596579] leading-relaxed">
                  Incubating new industrial and technological opportunities with native capabilities.
                </p>
              </div>

              {/* Pillar 2: OPERATE */}
              <div className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 text-center transition-all duration-300 hover:border-[#15966B] hover:shadow-md">
                <div className="h-9 w-9 rounded-xl bg-[#15966B]/15 text-[#15966B] flex items-center justify-center mx-auto mb-3">
                  <Icon name="cog" width={18} height={18} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#15966B] font-bold block">
                  OPERATE
                </span>
                <h4 className="font-serif text-xl font-medium text-[#111827] mt-1">
                  Core Companies
                </h4>
                <p className="mt-2 text-xs text-[#596579] leading-relaxed">
                  Executing across infrastructure, agro commodities, precision casters and applied AI.
                </p>
              </div>

              {/* Pillar 3: INVEST */}
              <div className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 text-center transition-all duration-300 hover:border-[#00B8D9] hover:shadow-md">
                <div className="h-9 w-9 rounded-xl bg-[#00B8D9]/15 text-[#008299] flex items-center justify-center mx-auto mb-3">
                  <Icon name="landmark" width={18} height={18} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#008299] font-bold block">
                  INVEST
                </span>
                <h4 className="font-serif text-xl font-medium text-[#111827] mt-1">
                  Ventures
                </h4>
                <p className="mt-2 text-xs text-[#596579] leading-relaxed">
                  Deploying patient balance-sheet capital, strategy and governance to accelerate growth.
                </p>
              </div>
            </div>

            {/* Downward Connector to Impact */}
            <div className="my-6 flex items-center justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#15966B] text-white shadow-md">
                <Icon name="arrow-right" width={16} height={16} className="rotate-90" strokeWidth={2.5} />
              </div>
            </div>

            {/* Convergence Output: IMPACT */}
            <div className="rounded-2xl border border-[#15966B]/40 bg-gradient-to-r from-[#0F766E] via-[#15966B] to-[#0F766E] p-6 text-center text-white shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold block mb-1">
                NATIONAL VALUE CREATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
                IMPACT
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-100 font-normal max-w-xl mx-auto">
                Creating lasting economic resilience, high-quality jobs, and sustainable industrial progress across Bharat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. WHAT’S NEXT (The Portfolio Is Growing — 3 Small Tags/Cards) ──── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#9A6200] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#FFB000]" />
              <span>04 // WHAT’S NEXT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              The Portfolio Is <span className="text-[#3026B3]">Growing</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              BharatX continues to explore opportunities across India’s emerging industries and essential economic sectors.
            </p>
          </div>

          {/* 3 Small Tags / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {futureHorizons.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 shadow-xs transition-all duration-300 hover:bg-white hover:border-[#3026B3] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-full ${item.bg} ${item.text} px-3 py-1 font-mono text-[10px] uppercase tracking-wider font-bold`}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                    <span>Horizon</span>
                  </span>
                  <span className="text-xs font-mono text-[#596579]">2026+</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] text-[#596579] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05. FINAL CTA (Interested in Building With BharatX?) ─────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-20 sm:py-28">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>05 // PARTNER WITH US</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white">
              Interested in Building With BharatX?
            </h2>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto">
              We welcome conversations with entrepreneurs, investors, institutions, technology partners and businesses looking to create long-term opportunities.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 sm:px-9 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
              >
                <span>Partner With Us</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 sm:px-9 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white shadow-xs"
              >
                <span>Explore About Group</span>
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
