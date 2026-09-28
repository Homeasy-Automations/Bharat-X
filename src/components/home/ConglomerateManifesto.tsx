import { Reveal } from "../common/Reveal";
import { Icon } from "../../utils/icons";

export function ConglomerateManifesto() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-night-950 py-24 sm:py-32 text-white">
      {/* Full-bleed Sovereign Conglomerate Landscape Story Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/backgrounds/sovereign-conglomerate.jpg"
          alt="Sovereign Conglomerate Landscape of India"
          className="h-full w-full object-cover object-center filter brightness-[0.70] contrast-[1.08] saturate-[1.15]"
          loading="eager"
        />
        {/* Balanced Vignette & Atmosphere Overlays with reduced darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/25 to-night-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/45 via-transparent to-night-950/45" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Institutional Eyebrow */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-black/60 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold-300 backdrop-blur-md shadow-lg">
              <span className="text-gold-400">◆</span>
              <span>CONGLOMERATE SCALE &amp; PURPOSE</span>
            </div>
          </Reveal>

          {/* Grand Headline in Serif (RIL 'We Care' style) */}
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.18] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              An integrated conglomerate building{" "}
              <span className="italic text-gold-300">critical technologies, infrastructure,</span>{" "}
              and sovereign capabilities for Bharat.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200 font-body drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Operating across artificial intelligence, precision engineering, heavy infrastructure, and resilient food systems — engineered for generational longevity and national impact.
            </p>
          </Reveal>
        </div>

        {/* 4-Pillar Scale Deck */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {[
            {
              badge: "36 SERVICES",
              title: "Engineered Disciplines",
              desc: "Specialised services across deeptech, civil infrastructure, robotics, and global food trade.",
              icon: "layers",
              accent: "#f5b84d",
            },
            {
              badge: "06 SECTORS",
              title: "Strategic Domains",
              desc: "From sovereign AI compute & robotics to primary food systems and arterial transport.",
              icon: "orbit",
              accent: "#00bcd4",
            },
            {
              badge: "GLOBAL REACH",
              title: "Export Corridors",
              desc: "Deploying high-tolerance components and origin-certified agro commodities worldwide.",
              icon: "globe",
              accent: "#8b5cf6",
            },
            {
              badge: "100% SOVEREIGN",
              title: "Engineered In India",
              desc: "Designed, tested, and scaled with complete national data and IP independence.",
              icon: "shield-check",
              accent: "#10b981",
            },
          ].map((item, idx) => (
            <Reveal key={item.badge} delay={0.15 + idx * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/15 bg-night-950/75 p-5 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-gold-400/40 hover:bg-night-950/90 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: item.accent }}
                  >
                    {item.badge}
                  </span>
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform group-hover:scale-110 shadow-sm"
                    style={{
                      background: `${item.accent}20`,
                      color: item.accent,
                    }}
                  >
                    <Icon name={item.icon} width={15} height={15} />
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-lg font-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
