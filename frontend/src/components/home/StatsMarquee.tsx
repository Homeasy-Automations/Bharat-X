import { servicesData } from "../../data/servicesData";

/**
 * Scrolling stats ticker under the home hero. Figures are looked up by business id and stat label in
 * servicesData, so they always match what the rest of the site says about each company.
 */
const picks: { id: string; label: string; color: string }[] = [
  { id: "ventures", label: "Portfolio Enterprise Value", color: "#FEA04D" },
  { id: "infrastructure", label: "Roads & Civil Works", color: "#8F88FF" },
  { id: "agriculture", label: "Sourced & Processed", color: "#34D399" },
  { id: "manufacturing", label: "Precision Casters Built", color: "#5EE4F8" },
  { id: "tech-ai", label: "AI Workflows Deployed", color: "#C4B5FD" },
  { id: "ventures", label: "Ventures Shaped & Scaled", color: "#FEA04D" },
  { id: "infrastructure", label: "Civil Projects Completed", color: "#8F88FF" },
  { id: "agriculture", label: "Export Partner Ports", color: "#34D399" },
  { id: "manufacturing", label: "Export Destinations", color: "#5EE4F8" },
  { id: "tech-ai", label: "Indic Languages Tested", color: "#C4B5FD" },
];

const stats = picks.flatMap((p) => {
  const service = servicesData.find((s) => s.id === p.id);
  const stat = service?.stats.find((s) => s.label === p.label);
  return service && stat ? [{ ...stat, color: p.color, company: service.companyName, logo: service.companyLogo }] : [];
});

const BRAND_LIGHT =
  "radial-gradient(55% 140% at 12% 50%, rgba(0, 184, 217, 0.16), transparent 70%), radial-gradient(55% 140% at 88% 50%, rgba(254, 119, 1, 0.14), transparent 70%)";

function StatsRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {stats.map((s) => (
        <li key={`${s.company}-${s.label}`} className="flex items-center">
          <div className="flex items-center gap-4 px-7 sm:px-9">
            <span className="font-heading text-2xl sm:text-[1.75rem] font-medium leading-none tracking-tight" style={{ color: s.color }}>
              {s.value}
            </span>
            <span className="flex flex-col">
              <span className="whitespace-nowrap text-sm font-medium text-white/90">{s.label}</span>
              <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-white p-px">
                  <img src={s.logo} alt="" className="max-h-full max-w-full object-contain" />
                </span>
                {s.company}
              </span>
            </span>
          </div>
          <svg aria-hidden viewBox="0 0 12 12" className="h-2.5 w-2.5 shrink-0 text-[#FE7701]">
            <path d="M6 0 L7.4 4.6 L12 6 L7.4 7.4 L6 12 L4.6 7.4 L0 6 L4.6 4.6 Z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export function StatsMarquee() {
  return (
    <section aria-label="BharatX Group at a glance" className="marquee relative overflow-hidden bg-[#16124A] py-4 sm:py-5">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: BRAND_LIGHT }} />

      {/* Two identical rows: the track slides by half its width, so the loop is seamless */}
      <div className="marquee-track relative" style={{ animationDuration: "55s" }}>
        <StatsRow />
        <StatsRow hidden />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#16124A] to-transparent sm:w-28" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#16124A] to-transparent sm:w-28" />
    </section>
  );
}
