import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

const governance = [
  { icon: "scale", t: "Clear Division of Decision Rights", d: "Group stewardship governs capital discipline, risk management, and shared standards. Tactical execution belongs to sector teams.", color: "#3026B3" },
  { icon: "file-check", t: "Standardised Quality & Safety", d: "Quality, material integrity, and cryptographic data protocols are applied uniformly with auditable public accounting.", color: "#00B8D9" },
  { icon: "eye", t: "Independent Standards Oversight", d: "Each operating sector is benchmarked against international standards by the group's standards oversight council.", color: "#FFB000" },
  { icon: "shield-check", t: "Institutional Compliance", d: "Regulatory, phytosanitary, and trade compliance is embedded into foundational processes from day one.", color: "#15966B" },
];

const operating = [
  { n: "01", t: "The group sets the standard; the sector sets the pace.", d: "Standards are non-negotiable. Execution is owned at the sector level, with authentic decision rights and measurable KPIs.", color: "#3026B3" },
  { n: "02", t: "Capital discipline, not bureaucratic delay.", d: "Capital allocation follows evidence and multi-decade compounding — reviewed transparently across all sectors.", color: "#00B8D9" },
  { n: "03", t: "Synergies are proved, not mandated.", d: "Any cross-sector collaboration must create demonstrable economic and operational value before resources are committed.", color: "#00B8D9" },
  { n: "04", t: "Data sovereignty is absolute.", d: "Confidentiality, client data residency, and cryptographic isolation between sectors are maintained as constitutional rules.", color: "#15966B" },
];

export default function LeadershipPage() {
  usePageMeta({
    title: "Leadership & Governance — BharatX Group",
    description:
      "Leadership charter, corporate stewardship, and operational governance across BharatX Group's six foundational sectors.",
    path: "/leadership",
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] pt-24 pb-20">
      {/* ── 1. RIL-STYLE LEADERSHIP HERO ────────────────────────────────── */}
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
              <span className="text-white">CORPORATE STEWARDSHIP</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Led Like an Institution.
              <br />
              <span className="italic text-[#FFB000]">Driven by National Purpose.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              The leadership of BharatX Group operates with long-term capital horizons, rigorous corporate governance, and an unwavering commitment to India's industrial sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FOUNDER'S CHARTER PROFILE ───────────────────────────────── */}
      <section className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5EF] bg-white shadow-xl p-6 sm:p-10 lg:p-12">
            <div className="grid items-stretch gap-10 lg:grid-cols-12">
              {/* Portrait */}
              <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[400px] lg:h-[610px] rounded-2xl overflow-hidden border border-[#E3E5EF]">
                <img
                  src="/leadership/pradeep-kumar.png"
                  alt="Pradeep Kumar — Founder & Leader, BharatX Group"
                  className="h-full w-full object-cover object-top filter brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Narrative & Quote */}
              <div className="lg:col-span-7">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
                  NATIONAL ECONOMIC VISION
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight">
                  Architecting <span className="text-[#3026B3]">Sovereign Industrial Depth</span> for Bharat.
                </h2>

                <div className="mt-6 rounded-2xl border-l-4 border-[#3026B3] bg-[#FAF9F6] p-6 shadow-xs">
                  <blockquote className="text-base sm:text-lg font-serif italic text-[#211B72] leading-relaxed">
                    “Aligned with the national vision of <span className="text-[#3026B3] font-semibold not-italic">Viksit Bharat 2047</span>, we are committed to building sustainable, technology-driven industrial foundations that eliminate critical external dependencies and secure multi-generational prosperity.”
                  </blockquote>
                  <div className="mt-3 text-xs font-mono text-[#3026B3] font-semibold flex items-center gap-1.5">
                    <span className="text-[#FFB000]">◆</span>
                    <span>Pradeep Kumar, Institutional Founder</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      icon: "compass",
                      title: "Sovereign Industrial Capacity",
                      desc: "Deploying permanent capital across civil infrastructure, heavy logistics, and automated precision robotics.",
                      color: "#3026B3",
                    },
                    {
                      icon: "cpu",
                      title: "Indigenous Deep-Tech & AI",
                      desc: "Engineering domestic neural intelligence models across 22 Indian regional languages with 100% data residency.",
                      color: "#00B8D9",
                    },
                    {
                      icon: "orbit",
                      title: "Integrated Macroeconomic Network",
                      desc: "Unifying agriculture, manufacturing, and transport into one self-reinforcing national supply chain.",
                      color: "#15966B",
                    },
                  ].map((m) => (
                    <div key={m.title} className="flex items-start gap-3 rounded-xl border border-[#E3E5EF] bg-[#F7F7FC] p-3.5">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 mt-0.5"
                        style={{ backgroundColor: `${m.color}15`, color: m.color }}
                      >
                        <Icon name={m.icon} width={18} height={18} />
                      </div>
                      <div>
                        <span className="font-serif text-base text-[#211B72] block font-medium">{m.title}</span>
                        <span className="text-xs text-[#596579] leading-relaxed block mt-0.5 font-body">{m.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. GOVERNANCE & DIVISION OF POWER ────────────────────────────── */}
      <section className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              BOARDROOM ARCHITECTURE
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Institutional Governance
            </h2>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              Four pillars safeguarding constitutional discipline and long-term shareholder trust.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {governance.map((g) => (
              <div
                key={g.t}
                className="rounded-2xl border border-[#E3E5EF] bg-white p-7 flex gap-4 items-start shadow-sm cursor-card hover:border-[#3026B3]/40 transition-all"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E3E5EF]"
                  style={{ backgroundColor: `${g.color}15`, color: g.color }}
                >
                  <Icon name={g.icon} width={20} height={20} />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-[#211B72] font-normal">{g.t}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#596579] leading-relaxed font-body">{g.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OPERATING PRINCIPLES ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              EXECUTIVE CONSTITUTION
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Four Operating Doctrines
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operating.map((op) => (
              <div
                key={op.n}
                className="rounded-2xl border border-[#E3E5EF] bg-white p-6 flex flex-col justify-between shadow-sm cursor-card hover:border-[#3026B3]/40 transition-all"
              >
                <div>
                  <span
                    className="font-mono text-xs font-bold block mb-3"
                    style={{ color: op.color }}
                  >
                    {op.n}
                  </span>
                  <h3 className="font-serif text-lg text-[#211B72] font-normal">{op.t}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#596579] leading-relaxed font-body">{op.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#3026B3] text-white hover:bg-[#211B72] px-8 py-3.5 text-sm font-semibold transition-all shadow-md"
            >
              <span>Connect with Corporate Secretariat</span>
              <Icon name="arrow-right" width={15} height={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
