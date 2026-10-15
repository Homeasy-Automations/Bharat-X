import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";
import { SectionTransition } from "../motion/SectionTransition";
import { Stagger, StaggerItem } from "../motion/Stagger";
import { TiltCard } from "../three/TiltCard";
import { CardFill } from "../common/CardSurface";

interface EcosystemCard {
  id: string;
  sector: string;
  description: string;
  to: string;
  logo?: string;
  accent: string;
  /** Darker accent shade for the arrow icon on its white circle. */
  accentText: string;
  borderHover: string;
}

const ecosystemCards: EcosystemCard[] = [
  {
    id: "labs",
    sector: "Innovation & Research",
    description: "Deep-tech climate R&D, open environmental telemetry and applied research.",
    to: "/verticals#labs",
    logo: "/Bharatxlabs_logo.svg",
    accent: "#0D9488",
    accentText: "text-[#0F766E]",
    borderHover: "hover:border-[#0D9488]",
  },
  {
    id: "ventures",
    sector: "Capital & Venture Building",
    description: "Patient balance-sheet capital, venture architecture and generational enterprise scaling.",
    to: "/verticals#ventures",
    logo: "/Ventures_logo.png",
    accent: "#211B72",
    accentText: "text-[#211B72]",
    borderHover: "hover:border-[#211B72]",
  },
  {
    id: "tech-ai",
    sector: "Deep-Tech & AI",
    description: "Enterprise artificial intelligence platforms, sovereign compute and automation systems.",
    to: "/verticals#tech-ai",
    logo: "/Ai-Experts_logo.png",
    accent: "#4B40D4",
    accentText: "text-[#4B40D4]",
    borderHover: "hover:border-[#4B40D4]",
  },
  {
    id: "agri",
    sector: "Agriculture & Food",
    description: "Origin sourcing, certified processing and high-integrity agri-commodity supply chains.",
    to: "/verticals#agriculture",
    logo: "/Bharatxagro_logo.png",
    accent: "#15966B",
    accentText: "text-[#15966B]",
    borderHover: "hover:border-[#15966B]",
  },
  {
    id: "infra",
    sector: "Infrastructure & Engineering",
    description: "Arterial transport, civil engineering and sovereign industrial infrastructure.",
    to: "/verticals#infrastructure",
    logo: "/Infra_logo1.png",
    accent: "#3026B3",
    accentText: "text-[#3026B3]",
    borderHover: "hover:border-[#3026B3]",
  },
  {
    id: "foundation",
    sector: "Education & Social Impact",
    description: "Education, skills and community programmes that widen opportunity across India.",
    to: "/verticals#foundation",
    accent: "#E06901",
    accentText: "text-[#B45309]",
    borderHover: "hover:border-[#E06901]",
  },
  {
    id: "manuf",
    sector: "Industrial Manufacturing",
    description: "Precision mobility solutions, heavy-duty industrial casters and automation engineering.",
    to: "/verticals#manufacturing",
    logo: "/Casters_logo.png",
    accent: "#00B8D9",
    accentText: "text-[#008299]",
    borderHover: "hover:border-[#00B8D9]",
  },
  {
    id: "packaging",
    sector: "Packaging & Materials",
    description: "High-efficiency sustainable packaging materials, corrugated boxes and industrial protection.",
    to: "/verticals#packaging",
    accent: "#D97706",
    accentText: "text-[#B45309]",
    borderHover: "hover:border-[#D97706]",
  },
];

export function BusinessEcosystemGrid() {
  return (
    <SectionTransition
      id="businesses"
      aria-label="Our Business Ecosystem"
      className="relative overflow-hidden bg-white py-6 sm:py-9"
    >
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 group/header">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-sans text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs cursor-default">
            <span className="h-2 w-2 rounded-full bg-[#3026B3] transition-transform duration-300 group-hover/header:scale-125" />
            <span>CORE VERTICALS</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#111827] transition-colors hover:text-[#3026B3]">
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
                className={`group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1026] p-5 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3026B3] ${card.borderHover}`}
              >
                <CardFill accent={card.accent} />

                {/* Top: Vertical Name & Logo */}
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl sm:text-[1.35rem] font-medium leading-snug tracking-tight text-white group-hover:text-[#FEA04D] transition-colors">
                      {card.sector}
                    </h3>

                    {card.logo ? (
                      <div className="h-8 w-8 rounded-lg bg-white p-1 border border-white/60 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110 fx-icon-pop">
                        <img
                          src={card.logo}
                          alt=""
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* One-Line Description */}
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-white/90 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom: Action & Arrow */}
                <div className="relative mt-6 flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="font-sans text-[10.5px] uppercase tracking-[0.16em] text-white/85 font-semibold group-hover:text-[#FEA04D] transition-colors">
                    {isExternal ? "Visit Website" : "Explore Entity"}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-white border border-white ${card.accentText} transition-all duration-300 group-hover:bg-[#FEA04D] group-hover:border-[#FEA04D] group-hover:text-[#211B72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs`}
                  >
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
