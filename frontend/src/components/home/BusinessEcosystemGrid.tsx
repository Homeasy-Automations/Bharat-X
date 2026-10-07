import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";
import { SectionTransition } from "../motion/SectionTransition";
import { Stagger, StaggerItem } from "../motion/Stagger";
import { TiltCard } from "../three/TiltCard";

interface EcosystemCard {
  id: string;
  sector: string;
  company: string;
  description: string;
  to: string;
  logo?: string;
  accent: string;
  accentBg: string;
  accentText: string;
  borderHover: string;
  isUpcoming?: boolean;
}

const ecosystemCards: EcosystemCard[] = [
  {
    id: "infra",
    sector: "Infrastructure & Engineering",
    company: "BharatX Infratech",
    description: "Arterial transport, civil engineering and sovereign industrial infrastructure.",
    to: "/services#infrastructure",
    logo: "/Infra_logo1.png",
    accent: "#3026B3",
    accentBg: "bg-[#3026B3]/10",
    accentText: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    id: "agri",
    sector: "Agriculture & Food",
    company: "BharatX Agro",
    description: "Origin sourcing, certified processing and high-integrity agri-commodity supply chains.",
    to: "/services#agriculture",
    logo: "/Bharatxagro_logo.png",
    accent: "#15966B",
    accentBg: "bg-[#15966B]/10",
    accentText: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
  {
    id: "ventures",
    sector: "Capital & Venture Building",
    company: "BharatX Ventures",
    description: "Patient balance-sheet capital, venture architecture and generational enterprise scaling.",
    to: "/services#finance",
    logo: "/Ventures_logo.png",
    accent: "#211B72",
    accentBg: "bg-[#211B72]/10",
    accentText: "text-[#211B72]",
    borderHover: "hover:border-[#211B72]",
  },
  {
    id: "labs",
    sector: "Knowledge & Impact",
    company: "BharatX Labs Foundation",
    description: "Deep-tech climate R&D, open environmental telemetry and societal impact initiatives.",
    to: "/services#climate-sustainability",
    logo: "/Bharatxlabs_logo.svg",
    accent: "#0D9488",
    accentBg: "bg-[#14B8A6]/10",
    accentText: "text-[#0F766E]",
    borderHover: "hover:border-[#0D9488]",
  },
  {
    id: "manuf",
    sector: "Industrial Manufacturing",
    company: "Casters Global",
    description: "Precision mobility solutions, heavy-duty industrial casters and automation engineering.",
    to: "/services#manufacturing",
    logo: "/Casters_logo.png",
    accent: "#00B8D9",
    accentBg: "bg-[#00B8D9]/10",
    accentText: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
  },
  {
    id: "tech-ai",
    sector: "Technology & AI",
    company: "Aixperts Labs",
    description: "Enterprise artificial intelligence platforms, sovereign compute and automation systems.",
    to: "/services#tech-ai",
    logo: "/Ai-Experts_logo.png",
    accent: "#4B40D4",
    accentBg: "bg-[#4B40D4]/10",
    accentText: "text-[#4B40D4]",
    borderHover: "hover:border-[#4B40D4]",
  },
  {
    id: "packaging",
    sector: "Packaging & Materials",
    company: "SRM Enterprises",
    description: "High-efficiency sustainable packaging materials, corrugated boxes and industrial protection.",
    to: "/services#packaging",
    accent: "#D97706",
    accentBg: "bg-[#F59E0B]/10",
    accentText: "text-[#B45309]",
    borderHover: "hover:border-[#D97706]",
  },
  {
    id: "sustainability",
    sector: "Sustainability & Circular Economy",
    company: "Coming Soon",
    description: "Industrial resource recovery, closed-loop waste management and zero-effluent technologies.",
    to: "#what-comes-next",
    accent: "#059669",
    accentBg: "bg-[#10B981]/10",
    accentText: "text-[#047857]",
    borderHover: "hover:border-[#059669]",
    isUpcoming: true,
  },
];

export function BusinessEcosystemGrid() {
  return (
    <SectionTransition
      id="businesses"
      aria-label="Our Business Ecosystem"
      className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-[#E3E5EF]"
      withDivider
    >
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 group/header">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs cursor-default">
            <span className="h-2 w-2 rounded-full bg-[#3026B3] transition-transform duration-300 group-hover/header:scale-125" />
            <span>CORE VERTICALS</span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111827] transition-colors hover:text-[#3026B3]">
            Our Business Ecosystem
          </h2>

          <p className="mt-3 text-base text-[#596579] max-w-2xl leading-relaxed">
            Eight foundational verticals powering modern India across physical infrastructure, real-economy production, intelligent technology, and strategic capital.
          </p>
        </div>

        {/* 4×2 Compact High-Contrast Grid with Stagger & TiltCard */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ecosystemCards.map((card) => {
            const isExternal = card.to.startsWith("http");

            const cardContent = (
              <TiltCard
                maxTilt={5}
                glare={true}
                data-cursor="card"
                className={`group relative flex h-full flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-5 sm:p-6 shadow-xs transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3026B3] ${card.borderHover}`}
              >
                {/* Top: Sector Tag & Logo / Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                      className={`inline-block font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-md ${card.accentBg} ${card.accentText}`}
                    >
                      {card.sector}
                    </span>

                    {card.isUpcoming ? (
                      <span className="inline-block rounded-md border border-amber-500/30 bg-amber-50 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-700">
                        Upcoming
                      </span>
                    ) : card.logo ? (
                      <div className="h-8 w-8 rounded-lg bg-white p-1 border border-[#E3E5EF] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110 fx-icon-pop">
                        <img
                          src={card.logo}
                          alt=""
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Company Name */}
                  <h3 className="font-serif text-xl sm:text-[1.35rem] font-medium tracking-tight text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {card.company}
                  </h3>

                  {/* One-Line Description */}
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#596579] font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom: Action & Arrow */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E3E5EF]">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#596579] font-semibold group-hover:text-[#3026B3] transition-colors">
                    {isExternal ? "Visit Website" : card.isUpcoming ? "Learn More" : "Explore Entity"}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#E3E5EF] text-[#111827] transition-all duration-300 group-hover:bg-[#3026B3] group-hover:text-white group-hover:border-[#3026B3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
                    <Icon name="arrow-up-right" width={14} height={14} strokeWidth={2.2} />
                  </div>
                </div>
              </TiltCard>
            );

            return (
              <StaggerItem key={card.id}>
                {isExternal ? (
                  <a href={card.to} target="_blank" rel="noopener noreferrer" data-cursor="card" className="block h-full fx-lift">
                    {cardContent}
                  </a>
                ) : (
                  <Link to={card.to} data-cursor="card" className="block h-full fx-lift">
                    {cardContent}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </SectionTransition>
  );
}
