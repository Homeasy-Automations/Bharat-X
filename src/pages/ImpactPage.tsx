import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

interface ImpactPillar {
  icon: string;
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
  companyName: string;
  companyLogo: string;
  companySlug: string;
}

const impactPillars: ImpactPillar[] = [
  {
    icon: "leaf",
    title: "Deep-Tech Climate & Circularity",
    stat: "2035",
    statLabel: "Net-Zero Carbon Horizon",
    desc: "Sovereign carbon telemetry, low-carbon material synthesis, and circular compounds developed for sustainable industrial compounding.",
    companyName: "BharatX Labs",
    companyLogo: "/Bharatxlabs_logo.svg",
    companySlug: "bharatx-labs",
  },
  {
    icon: "users",
    title: "Precision Manufacturing",
    stat: "500,000+",
    statLabel: "Precision Units Fabricated",
    desc: "Skilled industrial careers created across Tier-2 corridors, engineering high-load polyurethane and nylon casters exported across 12+ countries.",
    companyName: "Casters Global",
    companyLogo: "/Casters_logo.png",
    companySlug: "casters-global",
  },
  {
    icon: "sprout",
    title: "Sovereign Agriculture",
    stat: "5,000+ MT",
    statLabel: "Agro Commodities Processed",
    desc: "100% origin-traceable aggregation of non-GMO grains and agricultural commodities, enforcing rigorous phytosanitary standards across 18+ international ports.",
    companyName: "BharatX Agro",
    companyLogo: "/Bharatxagro_logo.png",
    companySlug: "bharatx-agro",
  },
  {
    icon: "landmark",
    title: "Arterial Civil Assets",
    stat: "150+ KM",
    statLabel: "Roadways & Civil Corridors",
    desc: "Heavy industrial earthworks, commercial corridors, and utility networks engineered for enduring 50-year lifecycles.",
    companyName: "BharatX Infratech",
    companyLogo: "/Infra_logo1.png",
    companySlug: "bharatx-infratech",
  },
  {
    icon: "cpu",
    title: "Sovereign AI Access",
    stat: "22",
    statLabel: "Indic Languages Supported",
    desc: "Democratising multilingual enterprise intelligence across non-metro economic clusters with 99.8% precision document comprehension.",
    companyName: "AIxperts Labs",
    companyLogo: "/Ai-Experts_logo.png",
    companySlug: "aixperts-labs",
  },
  {
    icon: "shield-check",
    title: "Strategic Finance & Scaling",
    stat: "₹180 Cr+",
    statLabel: "Portfolio Enterprise Value",
    desc: "Founder-led strategic finance studio providing patient balance-sheet capital, financial architecture, and long-term governance for industrial compounding.",
    companyName: "BharatX Ventures",
    companyLogo: "/Ventures_logo.png",
    companySlug: "bharatx-ventures",
  },
];

export default function ImpactPage() {
  usePageMeta({
    title: "Sustainability & Social Impact — BharatX Group",
    description:
      "How BharatX Group drives circular sustainability, grassroots agrarian prosperity, and sovereign infrastructure for India.",
    path: "/impact",
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] pt-24 pb-20">
      {/* ── 1. RIL-STYLE IMPACT HERO ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.92] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-4">
              <span>◆</span>
              <span className="text-white">SUSTAINABILITY &amp; IMPACT</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Growth That Enriches Lives.
              <br />
              <span className="italic text-[#FFB000]">Measured by National Resilience.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              True conglomerate scale is proven by the enduring prosperity generated across communities. We measure impact through tangible agrarian livelihood security, circular carbon transition, and sovereign physical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BANNER ───────────────────────────────────────────── */}
      <section className="border-b border-[#E3E5EF] py-12 bg-[#FAF9F6]">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3026B3] block">₹180 Cr+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Portfolio Enterprise Valuation
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#FFB000] block">1,200+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Rural Growers &amp; Producers
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#15966B] block">150+ KM</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Arterial Roadways &amp; Civil Works
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#00B8D9] block">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Founder-Led Domestic Value Creation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX IMPACT PILLARS ───────────────────────────────────────── */}
      <section className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              NATIONAL VALUE CREATION
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Six Dimensions of Impact
            </h2>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              How our operating companies create tangible, quantifiable progress across India.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactPillars.map((p, i) => {
              const pillColors = ["#15966B", "#3026B3", "#00B8D9", "#3026B3", "#00B8D9", "#15966B"];
              const pColor = pillColors[i % pillColors.length];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex flex-col justify-between h-full rounded-2xl border border-[#E3E5EF] bg-white p-7 transition-all duration-300 hover:border-[#3026B3] hover:shadow-lg">
                    <div>
                      {/* Operating Company Header */}
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E3E5EF]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-[#FAF9F6] p-1 flex items-center justify-center shadow-sm border border-[#E3E5EF]">
                            <img
                              src={p.companyLogo}
                              alt={p.companyName}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold">
                            {p.companyName}
                          </span>
                        </div>
                        <span
                          className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border"
                          style={{
                            borderColor: `${pColor}40`,
                            backgroundColor: `${pColor}10`,
                            color: pColor,
                          }}
                        >
                          {p.stat}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E3E5EF]"
                          style={{ backgroundColor: `${pColor}15`, color: pColor }}
                        >
                          <Icon name={p.icon} width={16} height={16} />
                        </span>
                        <h3 className="font-serif text-xl text-[#211B72] font-normal">
                          {p.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#596579] leading-relaxed font-body">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#E3E5EF] pt-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase text-[#596579] tracking-wider">
                        {p.statLabel}
                      </span>
                      <Link
                        to={`/services#${p.companySlug}`}
                        className="font-mono text-[10px] text-[#3026B3] hover:text-[#211B72] uppercase tracking-widest inline-flex items-center gap-1 font-semibold"
                      >
                        <span>Explore</span>
                        <Icon name="arrow-right" width={10} height={10} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. SUSTAINABILITY CHARTER CALLOUT ────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5EF] dark:border-white/10 bg-white dark:bg-night-900 p-8 sm:p-14 shadow-xl">
            {/* Full-bleed Renewable Ecology Backdrop */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/backgrounds/hero-field.jpg"
                alt=""
                className="h-full w-full object-cover filter brightness-[0.9] dark:brightness-[0.45] contrast-[1.15]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-night-950/90 dark:via-night-950/50 dark:to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#15966B] block mb-3 font-semibold">
                NET-ZERO CARBON BY 2035
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 dark:text-white leading-tight">
                Pioneering Circular Materials &amp; Renewable Corridors
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#596579] dark:text-slate-300 leading-relaxed font-body">
                We believe industrial growth and ecological integrity must compound together. We are actively converting our logistics corridors to solar-supported microgrids and substituting high-emission alloys with certified circular polymers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#3026B3] text-white hover:bg-[#211B72] dark:bg-gold-500 dark:text-night-950 dark:hover:bg-gold-400 px-8 py-3 text-sm font-semibold transition-all shadow-md"
                >
                  <span>Request ESG &amp; Sustainability Report</span>
                  <Icon name="arrow-right" width={14} height={14} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E3E5EF] bg-white text-[#111827] hover:border-[#3026B3] hover:text-[#3026B3] dark:border-white/20 dark:bg-white/5 dark:text-white px-6 py-3 text-sm font-medium transition-all shadow-xs"
                >
                  <span>About Our Governance</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
