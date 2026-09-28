import { usePageMeta } from "../hooks/usePageMeta";
import { servicesData } from "../data/servicesData";
import { Icon } from "../utils/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesPage() {
  usePageMeta({
    title: "Services & Capabilities — BharatX Group",
    description:
      "Explore BharatX Group's six foundational capabilities across Technology & AI, Infrastructure, Manufacturing, Agriculture, Climate & Sustainability, and Finance.",
    path: "/services",
  });

  return (
    <main className="min-h-screen bg-night-950 text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE CAPABILITIES HERO ────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10 mb-16 sm:mb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/conglomerate-panorama.jpg"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.55] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              <span>◆</span>
              <span>CONGLOMERATE CAPABILITIES</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Sovereign Services.
              <br />
              <span className="italic text-slate-300">National Priority.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              We operate across six mission-critical sectors powering India's sovereign growth — combining patient balance sheet capital, advanced engineering, and deep execution discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST (Visual-first full-bleed cards) ──────────────── */}
      <div className="container-x space-y-16 sm:space-y-24">
        {servicesData.map((svc, idx) => (
          <section
            key={svc.id}
            id={svc.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl transition-all hover:border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image side (7 cols) */}
              <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="h-full w-full object-cover object-center filter brightness-[0.95] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-night-950/15 lg:to-night-950/80" />
                <span className="absolute top-5 left-5 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-gold-400 border border-white/10">
                  0{idx + 1} · {svc.shortLabel}
                </span>
              </div>

              {/* Text side (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                        <img src={svc.companyLogo} alt={svc.companyName} className="h-full w-full object-contain" />
                      </span>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold-400 font-semibold block">
                          OPERATING ENTERPRISE
                        </span>
                        <a
                          href={svc.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-sm sm:text-base text-white hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{svc.companyName}</span>
                          <Icon name="arrow-up-right" width={12} height={12} className="text-gold-400" />
                        </a>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400 shrink-0">
                      {svc.eyebrow}
                    </span>
                  </div>

                  <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white">
                    {svc.name}
                  </h2>
                  <p className="mt-2 text-base font-medium text-gold-200">
                    {svc.descriptor}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-body">
                    {svc.fullNarrative}
                  </p>

                  {/* Capabilities chips */}
                  <div className="mt-6">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-2.5">
                      Core Disciplines
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {svc.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics + Action */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {svc.stats.map((st) => (
                      <div key={st.label}>
                        <span className="block font-stat text-lg font-bold text-white">
                          {st.value}
                        </span>
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black px-6 py-2.5 text-xs font-semibold text-white transition-all"
                  >
                    <span>Partner in {svc.name}</span>
                    <Icon name="arrow-right" width={13} height={13} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── 3. BOTTOM SECTOR ENGAGEMENT BANNER ──────────────────────── */}
      <section className="container-x mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 p-8 sm:p-14 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/backgrounds/infrastructure-real.jpg"
              alt=""
              className="h-full w-full object-cover filter brightness-[0.45] contrast-[1.15]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.28em] text-gold-400 mb-3">
              <span>◆</span>
              <span>DIRECT EXECUTIVE ENGAGEMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Engage with our sector directorships.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              Whether capital deployment, large-scale civil infrastructure tenders, automated industrial integration, or global agricultural trade — our corporate office coordinates direct access to sector leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 hover:bg-gold-300 px-8 py-3.5 text-sm font-semibold text-night-950 transition-all shadow-[0_0_20px_rgba(245,184,77,0.3)]"
              >
                <span>Initiate Institutional Inquiry</span>
                <Icon name="arrow-right" width={15} height={15} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-medium text-white transition-colors"
              >
                <span>Group Operating Model</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
