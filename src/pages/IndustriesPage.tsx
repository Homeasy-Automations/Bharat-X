import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { servicesData } from "../data/servicesData";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

export default function IndustriesPage() {
  usePageMeta({
    title: "Industries & Sectors — BharatX Group",
    description:
      "Explore the core strategic industries BharatX Group operates across: Technology & AI, Infrastructure, Manufacturing, Agriculture, Food Systems, and Venture Building.",
    path: "/industries",
  });

  return (
    <main className="min-h-screen bg-night-950 text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE SECTOR HERO ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.55] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              <span>◆</span>
              <span>STRATEGIC DOMAINS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Sovereign Sectors.
              <br />
              <span className="italic text-slate-300">National Priority.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              BharatX Group operates deliberately in sectors that determine India's macroeconomic autonomy: computing infrastructure, heavy civil arteries, precision manufacturing, and sovereign food security.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SECTORS SHOWCASE (Visual cards with zero company names) ──── */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 0.08}>
                <div className="group flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]">
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.name}
                        className="h-full w-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-gold-400 border border-white/10">
                        0{i + 1} · {svc.shortLabel}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                          {svc.eyebrow}
                        </span>
                        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-2xs">
                            <img src={svc.companyLogo} alt={svc.companyName} className="h-full w-full object-contain" />
                          </span>
                          <span className="font-mono text-[9px] text-slate-300">
                            {svc.companyName}
                          </span>
                        </div>
                      </div>
                      <h2 className="mt-2 font-serif text-2xl font-normal text-white">
                        {svc.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-gold-200">
                        {svc.descriptor}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                        {svc.fullNarrative}
                      </p>

                      {/* Capabilities */}
                      <div className="mt-5">
                        <span className="block font-mono text-[9.5px] uppercase tracking-wider text-slate-400 mb-2">
                          Key Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.capabilities.slice(0, 3).map((cap) => (
                            <span
                              key={cap}
                              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 sm:p-7 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block font-stat text-lg font-bold text-white">
                        {svc.stats[0]?.value}
                      </span>
                      <span className="block font-mono text-[9px] uppercase text-slate-400">
                        {svc.stats[0]?.label}
                      </span>
                    </div>

                    <Link
                      to={`/services#${svc.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black px-4 py-2 text-xs font-semibold text-white transition-all"
                    >
                      <span>Deep Dive</span>
                      <Icon name="arrow-right" width={12} height={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA with Infrastructure Visual */}
          <div className="relative overflow-hidden mt-20 rounded-3xl border border-white/10 bg-night-900 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/backgrounds/infrastructure-real.jpg"
                alt=""
                className="h-full w-full object-cover filter brightness-[0.45] contrast-[1.15]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/55 to-night-950/75" />
            </div>

            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 block mb-3">
                CROSS-SECTOR COOPERATION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Explore Institutional Sector Collaborations
              </h3>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-body">
              Engage with our sector directors for infrastructure engineering, sovereign AI integration, and large-scale industrial partnerships.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-3.5 text-sm font-semibold text-night-950 transition-colors"
              >
                <span>Initiate Sector Inquiry</span>
                <Icon name="arrow-right" width={14} height={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);
}
