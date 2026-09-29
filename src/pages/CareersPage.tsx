import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

const careerStreams = [
  {
    icon: "brain-circuit",
    title: "Sovereign AI & Deep-Tech",
    desc: "Architecting multilingual neural models, edge compute telemetry, and autonomous decision systems for mission-critical industrial deployment.",
    tag: "Priority Hiring",
  },
  {
    icon: "hard-hat",
    title: "Civil & Infrastructure Engineering",
    desc: "Project directors, structural engineers, and site managers executing arterial transport highways and heavy utility corridors across India.",
    tag: "Project-Linked",
  },
  {
    icon: "factory",
    title: "Precision Robotics & Manufacturing",
    desc: "Robotics automation engineers, metallurgical specialists, and tooling designers delivering sub-micron components certified for global export.",
    tag: "Active Roles",
  },
  {
    icon: "sprout",
    title: "Agronomy & Food Systems",
    desc: "Field agronomists, cold chain logistics specialists, and phytosanitary quality managers connecting farm-gate harvest to global value chains.",
    tag: "Active Roles",
  },
  {
    icon: "compass",
    title: "Strategic Capital & Enterprise Architecture",
    desc: "Institutional finance, capital formation, cross-sector syndication, and macro-industrial strategy compounding generational value.",
    tag: "Continuous Intake",
  },
];

const hiringProcess = [
  {
    number: "01",
    title: "Direct Introduction",
    desc: "Submit your credentials, engineering artifacts, or portfolio directly to our executive talent bureau.",
  },
  {
    number: "02",
    title: "In-Depth Technical Dialogue",
    desc: "A focused discussion on real operational challenges, systems design, and your domain ambitions — not generic interview theatre.",
  },
  {
    number: "03",
    title: "Collaborative Work Review",
    desc: "Work through a genuine operational case study with the sector leadership team you would be joining.",
  },
  {
    number: "04",
    title: "Institutional Offer",
    desc: "A transparent, structured compensation package with long-term alignment, documented milestones, and rapid operational autonomy.",
  },
];

export default function CareersPage() {
  usePageMeta({
    title: "Careers & Culture — BharatX Group",
    description:
      "Build your career across India's core industrial sectors — sovereign AI, heavy infrastructure, precision manufacturing, and resilient food systems.",
    path: "/careers",
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] pt-24 pb-20">
      {/* ── 1. RIL-STYLE CAREERS HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover object-top filter brightness-[0.92] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-4">
              <span>◆</span>
              <span className="text-white">TALENT &amp; CULTURE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Engineering with Purpose.
              <br />
              <span className="italic text-[#FFB000]">Building for a Nation.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              At BharatX Group, we offer deep-end technical ownership across six foundational sectors. We do not hire for transient buzzwords — we hire specialists who want to build assets that outlast economic cycles.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SECTOR CAREER TRACKS ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              DISCIPLINES IN DEMAND
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Core Career Streams
            </h2>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              Discover opportunities across our operating sectors.
            </p>
          </div>

          <div className="space-y-4">
            {careerStreams.map((stream, idx) => {
              const streamColors = ["#3026B3", "#00B8D9", "#FFB000", "#15966B", "#3026B3"];
              const sColor = streamColors[idx % streamColors.length];
              return (
                <Reveal key={stream.title} delay={idx * 0.08}>
                  <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl border border-[#E3E5EF] bg-white p-6 sm:p-7 transition-all duration-300 hover:border-[#3026B3] hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E3E5EF] mt-1"
                        style={{ backgroundColor: `${sColor}15`, color: sColor }}
                      >
                        <Icon name={stream.icon} width={22} height={22} />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111827] group-hover:text-[#3026B3] transition-colors">
                            {stream.title}
                          </h3>
                          <span
                            className="rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold"
                            style={{
                              borderColor: `${sColor}40`,
                              backgroundColor: `${sColor}10`,
                              color: sColor,
                            }}
                          >
                            {stream.tag}
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-[#596579] leading-relaxed font-body max-w-3xl">
                          {stream.desc}
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start md:self-center shrink-0 rounded-full bg-[#3026B3] text-white hover:bg-[#211B72] px-5 py-2.5 text-xs font-semibold transition-all shadow-md"
                    >
                      <span>Apply for Stream</span>
                      <Icon name="arrow-right" width={13} height={13} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. HIRING PHILOSOPHY & PROCESS ───────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-t border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              CANDIDATE EXPERIENCE
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              The Four-Step Assessment
            </h2>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              A transparent, substantive process designed to evaluate genuine depth of execution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hiringProcess.map((step, hIdx) => {
              const hColors = ["#3026B3", "#00B8D9", "#FFB000", "#15966B"];
              const hColor = hColors[hIdx % hColors.length];
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#E3E5EF] bg-white p-6 flex flex-col justify-between shadow-sm cursor-card hover:border-[#3026B3]/40 transition-all"
                >
                  <div>
                    <span className="font-mono text-xs font-bold block mb-3" style={{ color: hColor }}>
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg text-[#211B72] font-normal">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#596579] leading-relaxed font-body">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#3026B3] text-white hover:bg-[#211B72] px-8 py-3.5 text-sm font-semibold transition-all shadow-md"
            >
              <span>Submit General Application</span>
              <Icon name="arrow-right" width={15} height={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
