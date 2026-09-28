import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

const innovationPillars = [
  {
    icon: "brain-circuit",
    title: "Applied Multilingual AI",
    desc: "Production-grade neural architectures natively tuned across 22 Indian regional dialects, eliminating black-box cloud dependence.",
    metric: "22+ Dialects",
  },
  {
    icon: "cpu",
    title: "Sovereign Edge Computing",
    desc: "Industrial telemetry and real-time decision algorithms deployed on-premise for mission-critical manufacturing and civil works.",
    metric: "< 28ms Latency",
  },
  {
    icon: "factory",
    title: "Precision Robotics & Tooling",
    desc: "Sub-micron computer vision inspection, automated weld robotics, and metallurgical casting certified to aerospace specifications.",
    metric: "Sub-Micron",
  },
  {
    icon: "sprout",
    title: "Agronomic Deep-Tech",
    desc: "Sensor-guided soil nutrient diagnostics, autonomous field mechanisation, and harvest optimization for resilient domestic yields.",
    metric: "2.4x Yield Multiplier",
  },
  {
    icon: "shield-check",
    title: "Cryptographic Data Sovereignty",
    desc: "Complete domestic data residency and auditable operational intelligence protecting strategic national supply chains.",
    metric: "100% In-Country",
  },
  {
    icon: "layers",
    title: "Cold Chain Traceability",
    desc: "Continuous IoT temperature monitoring and phytosanitary tracking from farm gate to international deepwater export terminals.",
    metric: "< 2% Post-Harvest Loss",
  },
];

const roadmapPhases = [
  {
    number: "01",
    phase: "Foundational Telemetry",
    title: "Clean Data & Industrial Baselining",
    desc: "Instrumenting core physical operations with robust telemetry, standardized interfaces, and transparent operational baselines.",
  },
  {
    number: "02",
    phase: "Production Intelligence",
    title: "Autonomous Decision Workflows",
    desc: "Deploying proprietary neural workflows in live production — automating document processing, predictive civil maintenance, and sorting lines.",
  },
  {
    number: "03",
    phase: "Sovereign Scaling",
    title: "National Industrial Compounding",
    desc: "Expanding domestic computing capacity, automated robotics lines, and climate-controlled agricultural arteries across Pan-India corridors.",
  },
  {
    number: "04",
    phase: "Global Frontier",
    title: "Exporting Sovereign Standards",
    desc: "Commercializing certified Indian precision hardware, bio-agricultural formulations, and resilient enterprise software on global markets.",
  },
];

export default function InnovationPage() {
  usePageMeta({
    title: "Innovation & Deep-Tech — BharatX Group",
    description:
      "How BharatX engineers sovereign artificial intelligence, precision industrial robotics, and resilient agricultural deep-tech for India.",
    path: "/innovation",
  });

  return (
    <main className="min-h-screen bg-night-950 text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE INNOVATION HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.55] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-4">
              <span>◆</span>
              <span>INNOVATION AGENDA</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Innovation is a Way of Life.
              <br />
              <span className="italic text-slate-300">Engineered for Sovereignty.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              Our growth is propelled by bold research and development. We build foundational AI, precision robotics, and agrarian sciences engineered to operate without external dependency.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BANNER ───────────────────────────────────────────── */}
      <section className="border-b border-white/10 py-10 bg-black/40">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block">22+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Regional Indian Dialects Supported
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400 block">Sub-Micron</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Precision Tolerance Standards
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-pulse-400 block">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Domestic Data Residency
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-emerald-400 block">&lt; 28ms</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-1 block">
                Edge Model Inference Latency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX INNOVATION PILLARS ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              CORE DISCIPLINES
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Six Frontiers of Technology
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base font-body">
              How we translate frontier engineering into real-world production capability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {innovationPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                        <Icon name={p.icon} width={20} height={20} />
                      </span>
                      <span className="font-mono text-xs text-gold-300 font-semibold px-2.5 py-1 rounded-full border border-gold-400/20 bg-gold-400/5">
                        {p.metric}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ROADMAP TIMELINE ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-t border-white/10">
        {/* Full-bleed Deep-Tech Computing Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/ai-circuit.jpg"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.32] contrast-[1.2]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/85" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              DEVELOPMENT HORIZON
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              The Path to Deep-Tech Autonomy
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div
                key={phase.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-gold-400 font-bold">{phase.number}</span>
                    <span className="font-mono text-[10px] uppercase text-slate-400">{phase.phase}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal">{phase.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-3.5 text-sm font-semibold text-night-950 transition-colors"
            >
              <span>Inquire on Technology Licensing &amp; R&amp;D</span>
              <Icon name="arrow-right" width={15} height={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
