import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "₹180 Cr+", label: "Ecosystem Portfolio Valuation", color: "#3026B3" },
  { value: "6", label: "Operating Enterprises", color: "#00B8D9" },
  { value: "150+", label: "Completed Projects & Deployments", color: "#FFB000" },
  { value: "100%", label: "Founder-Led & Sovereign", color: "#15966B" },
];

const operatingCompanies = [
  { name: "BharatX Ventures", logo: "/Ventures_logo.png", sector: "Finance", link: "/services#finance" },
  { name: "Aixperts Labs", logo: "/Ai-Experts_logo.png", sector: "AI & Tech", link: "/services#tech-ai" },
  { name: "BharatX Infratech", logo: "/Infra_logo1.png", sector: "Infrastructure", link: "/services#infrastructure" },
  { name: "Casters Global", logo: "/Casters_logo.png", sector: "Manufacturing", link: "/services#manufacturing" },
  { name: "BharatX Agro", logo: "/Bharatxagro_logo.png", sector: "Agriculture", link: "/services#agriculture" },
  { name: "BharatX Labs", logo: "/Bharatxlabs_logo.svg", sector: "Climate & Sustainability", link: "/services#climate-sustainability" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[#E3E5EF] bg-[#FAF9F6] py-12 md:py-16">
      <div className="container-x relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start lg:items-center text-left lg:text-center border-l lg:border-l-0 lg:border-r last:border-r-0 border-[#E3E5EF] pl-5 lg:pl-0 lg:px-6"
            >
              <span
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight"
                style={{ color: item.color }}
              >
                {item.value}
              </span>
              <span className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#596579] max-w-[200px]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Operating Companies Portfolio Trust Strip
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.26em] text-gold-400 shrink-0">
            <span>◆</span>
            <span>PORTFOLIO ENTERPRISES</span>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
            {operatingCompanies.map((c) => (
              <Link
                key={c.name}
                to={c.link}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-gold-400/40 hover:bg-white/[0.08] px-3.5 py-1.5 transition-all"
                title={`${c.name} — ${c.sector}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-sm">
                  <img src={c.logo} alt={c.name} className="h-full w-full object-contain" />
                </span>
                <span className="font-mono text-[11px] font-medium text-slate-300 group-hover:text-white transition-colors">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
