import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { SectionTransition } from "../components/motion/SectionTransition";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { AnimatedHeading } from "../components/motion/AnimatedHeading";
import { MagneticButton } from "../components/common/MagneticButton";

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
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] pt-24 pb-20">
      {/* ── 1. RIL-STYLE INNOVATION HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover object-top filter brightness-[0.92] contrast-[1.15] transition-transform duration-1000 ease-out hover:scale-105"
            data-cursor="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-4">
              <span className="animate-pulse">◆</span>
              <span className="text-white">INNOVATION AGENDA</span>
            </div>
            <AnimatedHeading as="h1" effect="words" hover="color" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Innovation is a Way of Life.
              <br />
              <span className="italic text-[#FFB000]">Engineered for Sovereignty.</span>
            </AnimatedHeading>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Our growth is propelled by bold research and development. We build foundational AI, precision robotics, and agrarian sciences engineered to operate without external dependency.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BANNER ───────────────────────────────────────────── */}
      <SectionTransition className="border-b border-[#E3E5EF] py-10 bg-[#FAF9F6]">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div data-cursor="card" className="p-4 rounded-2xl transition-all duration-300 fx-lift hover:bg-white hover:shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3026B3] block transition-transform hover:scale-105">22+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Regional Indian Dialects Supported
              </span>
            </div>
            <div data-cursor="card" className="p-4 rounded-2xl transition-all duration-300 fx-lift hover:bg-white hover:shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#FFB000] block transition-transform hover:scale-105">Sub-Micron</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Precision Tolerance Standards
              </span>
            </div>
            <div data-cursor="card" className="p-4 rounded-2xl transition-all duration-300 fx-lift hover:bg-white hover:shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#00B8D9] block transition-transform hover:scale-105">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Domestic Data Residency
              </span>
            </div>
            <div data-cursor="card" className="p-4 rounded-2xl transition-all duration-300 fx-lift hover:bg-white hover:shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#15966B] block transition-transform hover:scale-105">&lt; 28ms</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#596579] mt-1 block">
                Edge Model Inference Latency
              </span>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 3. SIX INNOVATION PILLARS ───────────────────────────────────── */}
      <SectionTransition withDivider className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              CORE DISCIPLINES
            </span>
            <AnimatedHeading as="h2" effect="words" hover="color" className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Six Frontiers of Technology
            </AnimatedHeading>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              How we translate frontier engineering into real-world production capability.
            </p>
          </div>

          <Stagger staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {innovationPillars.map((p, i) => {
              const colors = ["#3026B3", "#00B8D9", "#FFB000", "#15966B", "#3026B3", "#00B8D9"];
              const pillarColor = colors[i % colors.length];
              return (
                <StaggerItem key={p.title}>
                  <div
                    data-cursor="card"
                    className="group flex flex-col justify-between h-full rounded-2xl border border-[#E3E5EF] bg-white p-7 transition-all duration-300 hover:border-[#3026B3] hover:shadow-2xl fx-lift"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E3E5EF] transition-transform duration-300 group-hover:scale-110 fx-icon-bounce"
                          style={{ backgroundColor: `${pillarColor}15`, color: pillarColor }}
                        >
                          <Icon name={p.icon} width={20} height={20} />
                        </span>
                        <span
                          className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border transition-transform group-hover:scale-105"
                          style={{
                            borderColor: `${pillarColor}40`,
                            backgroundColor: `${pillarColor}10`,
                            color: pillarColor,
                          }}
                        >
                          {p.metric}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#211B72] font-normal group-hover:text-[#3026B3] transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-body">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </SectionTransition>

      {/* ── 4. ROADMAP TIMELINE ─────────────────────────────────────────── */}
      <SectionTransition withDivider className="relative overflow-hidden py-20 sm:py-28 border-t border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              DEVELOPMENT HORIZON
            </span>
            <AnimatedHeading as="h2" effect="words" hover="color" className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              The Path to Deep-Tech Autonomy
            </AnimatedHeading>
          </div>

          <Stagger staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapPhases.map((phase, idx) => {
              const phaseColors = ["#3026B3", "#00B8D9", "#FFB000", "#15966B"];
              const pColor = phaseColors[idx % phaseColors.length];
              return (
                <StaggerItem key={phase.number}>
                  <div
                    data-cursor="card"
                    className="group rounded-2xl border border-[#E3E5EF] bg-white p-6 flex flex-col justify-between shadow-sm cursor-card hover:border-[#3026B3] transition-all duration-300 fx-lift hover:shadow-xl h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold transition-transform duration-300 group-hover:scale-125" style={{ color: pColor }}>
                          {phase.number}
                        </span>
                        <span className="font-mono text-[10px] uppercase text-[#596579]">{phase.phase}</span>
                      </div>
                      <h3 className="font-serif text-lg text-[#211B72] font-normal group-hover:text-[#3026B3] transition-colors">{phase.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#596579] leading-relaxed font-body">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-16 text-center">
            <MagneticButton strength={0.25}>
              <Link
                to="/contact"
                data-cursor="button"
                data-motion="true"
                className="inline-flex items-center gap-3 rounded-full bg-[#3026B3] text-white hover:bg-[#211B72] px-8 py-3.5 text-sm font-semibold transition-all shadow-md fx-shine active:scale-95"
              >
                <span>Inquire on Technology Licensing &amp; R&amp;D</span>
                <Icon name="arrow-right" width={15} height={15} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </SectionTransition>
    </main>
  );
}

