import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { servicesData } from "../data/servicesData";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

const principles = [
  { icon: "compass", t: "Thesis Before Tactics", d: "Every sector initiative begins with an uncompromising multi-decade thesis about national supply independence." },
  { icon: "cog", t: "Engineering-First", d: "If it can be specified, we specify it. If it can be tested, we stress-test it to global aerospace and defense standards." },
  { icon: "users", t: "Sovereign Stewardship", d: "The group provides patient balance-sheet capital and strategic governance; our teams retain technical initiative." },
  { icon: "shield-check", t: "Documentation as Respect", d: "Transparent public accounting, rigorous phytosanitary certification, and open engineering documentation." },
  { icon: "trending-up", t: "Compound, Don't Chase", d: "We prioritize compounding real-world industrial moats over short-term speculative hype." },
  { icon: "scale", t: "Public Accountability", d: "What we claim, we demonstrate with telemetry. What we cannot measure yet, we state with complete transparency." },
];

const operatingModel = [
  { n: "01", icon: "search", t: "Deliberate Sector Selection", d: "We enter domains only where domestic supply chains are vulnerable and where scale can create durable national resilience." },
  { n: "02", icon: "layers", t: "Sovereign Standards", d: "Enforcing unified benchmarks for cryptographic data security, metallurgical tolerance, and environmental compliance." },
  { n: "03", icon: "cpu", t: "Deep Technical Execution", d: "Deploying proprietary automation, localized multilingual neural models, and precision fabrication infrastructure." },
  { n: "04", icon: "orbit", t: "Synergistic Compounding", d: "Connecting agricultural feedstocks to processing corridors and heavy civil projects to sovereign logistics arteries." },
];

export default function AboutPage() {
  usePageMeta({
    title: "About BharatX Group — Sovereign Conglomerate Architecture",
    description:
      "Why BharatX exists, how our operating sectors function as one unified system, and our charter for India's industrial sovereignty.",
    path: "/about",
  });

  return (
    <main className="min-h-screen bg-night-950 text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE MAJESTIC ABOUT HERO ────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/infrastructure-real.jpg"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.55] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              <span>◆</span>
              <span>INSTITUTIONAL CHARTER</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Built Like Infrastructure.
              <br />
              <span className="italic text-slate-300">Governed Like Institutions.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              BharatX Group is a diversified conglomerate engineering foundational capabilities across India's core industrial layers — technology, infrastructure, manufacturing, and food systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CONGLOMERATE OPERATING THESIS ────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              CORE PHILOSOPHY
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              A conglomerate posture with a deep-tech mandate.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              India's compounding growth over the next quarter-century cannot rely on leased foreign technologies or fragmented speculative businesses. It requires patient, balance-sheet capital willing to build heavy physical assets and sovereign code in lockstep.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-body">
              From sub-micron precision components exported globally to rural farm-gate processing corridors touching over 50,000 agrarian families, BharatX operates as a coherent national asset.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-6">
                Group Architecture At A Glance
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <span className="font-serif text-3xl font-bold text-white block">06</span>
                  <span className="font-mono text-[10px] uppercase text-slate-400 mt-1 block">Operating Sectors</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <span className="font-serif text-3xl font-bold text-gold-400 block">36</span>
                  <span className="font-mono text-[10px] uppercase text-slate-400 mt-1 block">Engineered Services</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <span className="font-serif text-3xl font-bold text-pulse-400 block">50k+</span>
                  <span className="font-mono text-[10px] uppercase text-slate-400 mt-1 block">Agrarian Partners</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <span className="font-serif text-3xl font-bold text-emerald-400 block">100%</span>
                  <span className="font-mono text-[10px] uppercase text-slate-400 mt-1 block">Sovereign Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX CORE SECTORS GRID (Zero company names!) ────────────── */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-black/40">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              OPERATING DIVISIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Six Foundational Sectors
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Explore our core capabilities engineered to reinforce national industrial self-reliance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 0.08}>
                <Link
                  to={`/services#${svc.id}`}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5">
                      <img
                        src={svc.image}
                        alt={svc.name}
                        className="h-full w-full object-cover filter brightness-[0.95] transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-gold-400 border border-white/10">
                        0{i + 1} · {svc.shortLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-2xs">
                        <img src={svc.companyLogo} alt={svc.companyName} className="h-full w-full object-contain" />
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {svc.companyName}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-gold-300 transition-colors">
                      {svc.name}
                    </h3>
                    <p className="mt-2 text-xs text-gold-200/90 font-medium">
                      {svc.descriptor}
                    </p>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {svc.fullNarrative}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-slate-400">
                    <span>{svc.stats[0]?.value} {svc.stats[0]?.label}</span>
                    <span className="text-gold-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OPERATING DISCIPLINE (4 STEPS) ───────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        {/* Full-bleed Operating Model Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/conglomerate-panorama.jpg"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.35] contrast-[1.15]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/85" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              EXECUTION MODEL
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              The Four Operating Stages
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operatingModel.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-gold-400 font-bold">{step.n}</span>
                    <Icon name={step.icon} width={18} height={18} className="text-slate-400" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal">{step.t}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRINCIPLES ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              NON-NEGOTIABLE STANDARDS
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Our Six Operating Principles
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.t}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                    <Icon name={p.icon} width={16} height={16} />
                  </span>
                  <h3 className="font-serif text-lg text-white font-normal">{p.t}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-3.5 text-sm font-semibold text-night-950 transition-colors"
            >
              <span>Connect with Corporate Leadership</span>
              <Icon name="arrow-right" width={15} height={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
