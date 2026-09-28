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
    <main className="min-h-screen bg-night-950 text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE IMPACT HERO ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.55] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              <span>◆</span>
              <span>SUSTAINABILITY &amp; IMPACT</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Growth That Enriches Lives.
              <br />
              <span className="italic text-slate-300">Measured by National Resilience.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              True conglomerate scale is proven by the enduring prosperity generated across communities. We measure impact through tangible agrarian livelihood security, circular carbon transition, and sovereign physical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BANNER ───────────────────────────────────────────── */}
      <section className="border-b border-white/10 py-12 bg-black/40">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block">₹180 Cr+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Portfolio Enterprise Valuation
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400 block">1,200+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Rural Growers &amp; Producers
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-emerald-400 block">150+ KM</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Arterial Roadways &amp; Civil Works
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-pulse-400 block">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Founder-Led Domestic Value Creation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX IMPACT PILLARS ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              NATIONAL VALUE CREATION
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Six Dimensions of Impact
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base font-body">
              How our operating companies create tangible, quantifiable progress across India.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]">
                  <div>
                    {/* Operating Company Header */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-white p-1 flex items-center justify-center shadow-sm">
                          <img
                            src={p.companyLogo}
                            alt={p.companyName}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                          {p.companyName}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-gold-400 font-bold px-2 py-0.5 rounded border border-gold-400/25 bg-gold-400/10">
                        {p.stat}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                        <Icon name={p.icon} width={16} height={16} />
                      </span>
                      <h3 className="font-serif text-xl text-white font-normal">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                      {p.statLabel}
                    </span>
                    <Link
                      to={`/services#${p.companySlug}`}
                      className="font-mono text-[10px] text-gold-400/80 hover:text-gold-300 uppercase tracking-widest inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <Icon name="arrow-right" width={10} height={10} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SUSTAINABILITY CHARTER CALLOUT ────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 p-8 sm:p-14 shadow-2xl">
            {/* Full-bleed Renewable Ecology Backdrop */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/backgrounds/hero-field.jpg"
                alt=""
                className="h-full w-full object-cover filter brightness-[0.45] contrast-[1.15]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 via-night-950/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 block mb-3 font-semibold">
                NET-ZERO CARBON BY 2035
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Pioneering Circular Materials &amp; Renewable Corridors
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                We believe industrial growth and ecological integrity must compound together. We are actively converting our logistics corridors to solar-supported microgrids and substituting high-emission alloys with certified circular polymers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-3 text-sm font-semibold text-night-950 transition-colors"
                >
                  <span>Request ESG &amp; Sustainability Report</span>
                  <Icon name="arrow-right" width={14} height={14} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black px-6 py-3 text-sm font-medium text-white transition-all"
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
