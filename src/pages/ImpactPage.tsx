import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";

interface ImpactArea {
  id: string;
  number: string;
  sector: string;
  title: string;
  description: string;
  entityName: string;
  logo?: string;
  image: string;
  accent: string;
  bgAccent: string;
  textAccent: string;
  link: string;
}

const impactAreas: ImpactArea[] = [
  {
    id: "infrastructure",
    number: "01",
    sector: "Infrastructure",
    title: "Building the Foundations of Growth",
    description:
      "Through infrastructure and engineering, BharatX contributes to the physical assets that enable communities, businesses and economies to grow.",
    entityName: "BharatX Infratech",
    logo: "/Infra_logo1.png",
    image: "/companies/bharatx-infratech/hero.jpg",
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
    link: "/services#infrastructure",
  },
  {
    id: "agriculture",
    number: "02",
    sector: "Agriculture",
    title: "Creating Value From India’s Agriculture",
    description:
      "Through processing, value addition and global trade, BharatXAgro aims to strengthen agricultural value chains and connect Indian products with wider markets.",
    entityName: "BharatXAgro",
    logo: "/Bharatxagro_logo.png",
    image: "/assets/backgrounds/agri-dusk.jpg",
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    link: "/services#agriculture",
  },
  {
    id: "manufacturing",
    number: "03",
    sector: "Manufacturing",
    title: "Strengthening Industrial Capability",
    description:
      "Our manufacturing businesses contribute to India’s industrial ecosystem by developing products, engineering capabilities and domestic production capacity.",
    entityName: "Casters Global + future manufacturing businesses",
    logo: "/Casters_logo.png",
    image: "/companies/casters-global/hero.jpg",
    accent: "#00B8D9",
    bgAccent: "bg-[#00B8D9]/15",
    textAccent: "text-[#008299]",
    link: "/services#manufacturing",
  },
  {
    id: "technology",
    number: "04",
    sector: "Technology",
    title: "Making Businesses Smarter",
    description:
      "AI, automation and digital technologies can improve productivity, decision-making and access to new capabilities.",
    entityName: "AI Xperts Labs",
    logo: "/Ai-Experts_logo.png",
    image: "/companies/aixperts-labs/hero.jpg",
    accent: "#4B40D4",
    bgAccent: "bg-[#4B40D4]/15",
    textAccent: "text-[#4B40D4]",
    link: "/services#tech-ai",
  },
  {
    id: "sustainability",
    number: "05",
    sector: "Sustainability",
    title: "Turning Waste Into Opportunity",
    description:
      "Our sustainability initiatives focus on better waste management, resource recovery, recycling and the development of circular business models.",
    entityName: "BharatX Sustainability",
    image: "/assets/backgrounds/sustainability-story.jpg",
    accent: "#059669",
    bgAccent: "bg-[#059669]/15",
    textAccent: "text-[#059669]",
    link: "/services#sustainability",
  },
  {
    id: "people-innovation",
    number: "06",
    sector: "People & Innovation",
    title: "Investing in Human Potential",
    description:
      "Through BharatX Labs Foundation and the wider Group ecosystem, we aim to support education, entrepreneurship, innovation, skills and opportunity.",
    entityName: "BharatX Labs Foundation",
    logo: "/Bharatxlabs_logo.svg",
    image: "/assets/backgrounds/impact-story.jpg",
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
    link: "/services#foundation",
  },
];

const commitmentPrinciples = [
  {
    title: "Economic Value",
    description: "Build businesses that generate sustainable economic activity.",
    icon: "landmark" as const,
    accent: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
  {
    title: "Employment & Skills",
    description: "Create meaningful opportunities and develop capable teams.",
    icon: "users" as const,
    accent: "#15966B",
    bg: "bg-[#15966B]/15",
    text: "text-[#15966B]",
  },
  {
    title: "Innovation",
    description: "Use technology and entrepreneurship to solve real problems.",
    icon: "cpu" as const,
    accent: "#00B8D9",
    bg: "bg-[#00B8D9]/15",
    text: "text-[#008299]",
  },
  {
    title: "Sustainability",
    description: "Improve resource efficiency and support more circular business models.",
    icon: "recycle" as const,
    accent: "#059669",
    bg: "bg-[#059669]/15",
    text: "text-[#059669]",
  },
];

const futureFocusAreas = [
  {
    step: "BUILD",
    headline: "Create businesses that solve meaningful problems.",
    detail: "Targeting high-friction structural deficits across physical and industrial supply lines.",
    icon: "hard-hat" as const,
    accent: "#3026B3",
    bgAccent: "bg-[#3026B3]/10",
    textAccent: "text-[#3026B3]",
  },
  {
    step: "ENABLE",
    headline: "Create jobs, capabilities and opportunities.",
    detail: "Equipping grassroots producers, industrial trades, and engineering specialists across Bharat.",
    icon: "trending-up" as const,
    accent: "#E09800",
    bgAccent: "bg-[#FFB000]/15",
    textAccent: "text-[#B87B00]",
  },
  {
    step: "SUSTAIN",
    headline: "Build more efficient and responsible systems.",
    detail: "Integrating low-carbon materials, resource recovery, and zero-effluent manufacturing standards.",
    icon: "sparkles" as const,
    accent: "#15966B",
    bgAccent: "bg-[#15966B]/15",
    textAccent: "text-[#15966B]",
  },
];

export default function ImpactPage() {
  usePageMeta({
    title: "BharatX Group Impact | Building Economic & Social Value",
    description:
      "Explore how BharatX Group creates economic, social and environmental impact through infrastructure, agriculture, manufacturing, technology, sustainability and entrepreneurship.",
    path: "/impact",
  });

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (Building Businesses. Creating Wider Value.) ─────────── */}
      <section className="relative overflow-hidden min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Full-bleed authentic hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/impact_hero.png"
            alt="BharatX Infrastructure, Agriculture, Industry and People"
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        </div>

        <div className="container-x relative z-10 w-full">
          <div className="max-w-4xl mt-8 sm:mt-12 md:mt-24">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 backdrop-blur-md px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-5 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>OUR IMPACT</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
            >
              Building Businesses.{" "}
              <span className="text-[#FFB000]">Creating Wider Value.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              At BharatX, growth is measured not only by the businesses we build, but by the opportunities, capabilities and positive change those businesses create.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="#impact-areas"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("impact-areas")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
              >
                <span>Explore Impact Areas</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all backdrop-blur-sm"
              >
                <span>Our Businesses</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. OUR IMPACT PHILOSOPHY (Growth Should Create More Than Profit.) ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#15966B]/30 bg-[#15966B]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#15966B] font-bold shadow-xs mb-4">
                <span className="h-2 w-2 rounded-full bg-[#15966B]" />
                <span>02 // OUR IMPACT PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
                Growth Should Create <span className="text-[#3026B3]">More Than Profit.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
                We believe successful businesses should strengthen the ecosystems around them.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#111827] font-medium leading-relaxed">
                Our businesses contribute to economic development through infrastructure, employment, manufacturing, agricultural value chains, technology adoption and more responsible use of resources.
              </p>
            </div>

            {/* Visual Formula: BUSINESS GROWTH -> ECONOMY | PEOPLE | ENVIRONMENT */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 sm:p-9 shadow-lg">
                {/* Root: BUSINESS GROWTH */}
                <div className="text-center">
                  <div className="inline-flex flex-col items-center rounded-2xl border border-[#3026B3]/40 bg-gradient-to-r from-[#211B72] via-[#3026B3] to-[#211B72] px-8 py-3.5 text-white shadow-lg">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFB000] font-bold">
                      FOUNDATIONAL CATALYST
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight mt-0.5">
                      BUSINESS GROWTH
                    </span>
                  </div>
                </div>

                {/* Downward Connector */}
                <div className="my-5 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3026B3] text-white shadow-md">
                    <Icon name="arrow-right" width={14} height={14} className="rotate-90" strokeWidth={2.5} />
                  </div>
                </div>

                {/* 3 Outcome Pillars: ECONOMY | PEOPLE | ENVIRONMENT */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Economy */}
                  <div className="rounded-2xl border border-[#E3E5EF] bg-white p-4 text-center shadow-xs">
                    <div className="h-8 w-8 rounded-lg bg-[#3026B3]/10 text-[#3026B3] flex items-center justify-center mx-auto mb-2">
                      <Icon name="landmark" width={16} height={16} />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#3026B3] block">
                      ECONOMY
                    </span>
                    <ul className="mt-3 space-y-1.5 text-xs text-[#596579]">
                      <li className="font-medium text-[#111827]">Jobs</li>
                      <li className="font-medium text-[#111827]">Enterprises</li>
                      <li className="font-medium text-[#111827]">Infrastructure</li>
                    </ul>
                  </div>

                  {/* People */}
                  <div className="rounded-2xl border border-[#E3E5EF] bg-white p-4 text-center shadow-xs">
                    <div className="h-8 w-8 rounded-lg bg-[#15966B]/15 text-[#15966B] flex items-center justify-center mx-auto mb-2">
                      <Icon name="users" width={16} height={16} />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#15966B] block">
                      PEOPLE
                    </span>
                    <ul className="mt-3 space-y-1.5 text-xs text-[#596579]">
                      <li className="font-medium text-[#111827]">Skills</li>
                      <li className="font-medium text-[#111827]">Opportunity</li>
                      <li className="font-medium text-[#111827]">Inclusion</li>
                    </ul>
                  </div>

                  {/* Environment */}
                  <div className="rounded-2xl border border-[#E3E5EF] bg-white p-4 text-center shadow-xs">
                    <div className="h-8 w-8 rounded-lg bg-[#00B8D9]/15 text-[#008299] flex items-center justify-center mx-auto mb-2">
                      <Icon name="recycle" width={16} height={16} />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#008299] block">
                      ENVIRONMENT
                    </span>
                    <ul className="mt-3 space-y-1.5 text-xs text-[#596579]">
                      <li className="font-medium text-[#111827]">Resource Efficiency</li>
                      <li className="font-medium text-[#111827]">Circularity</li>
                      <li className="font-medium text-[#111827]">Low-Carbon Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. WHERE WE CREATE IMPACT (Impact Across the Economy — 6 Large Cards) ── */}
      <section id="impact-areas" className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>03 // WHERE WE CREATE IMPACT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Impact Across the <span className="text-[#3026B3]">Economy</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed">
              Six foundational domains where BharatX businesses drive economic capabilities, industrial sovereignty, and societal uplift.
            </p>
          </div>

          {/* 6 Large Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {impactAreas.map((area) => (
              <div
                key={area.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E3E5EF] bg-white shadow-sm transition-all duration-300 hover:border-[#3026B3] hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with Visual Depth */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Sector Tag & Number */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-[#FFB000] border border-white/20">
                        {area.number} · {area.sector}
                      </span>
                    </div>

                    {/* Logo Overlay if present */}
                    {area.logo && (
                      <div className="absolute bottom-3 left-4 h-8 w-auto max-w-[120px] rounded-lg bg-white/95 backdrop-blur-sm p-1.5 shadow-md flex items-center justify-center">
                        <img src={area.logo} alt="" className="max-h-full max-w-full object-contain" />
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] font-bold block mb-1" style={{ color: area.accent }}>
                      {area.entityName}
                    </span>

                    <h3 className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors leading-snug">
                      {area.title}
                    </h3>

                    <p className="mt-3.5 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-[#E3E5EF] flex items-center justify-between">
                    <Link
                      to={area.link}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] hover:text-[#211B72] transition-colors group/link"
                    >
                      <span>Explore Vertical</span>
                      <Icon
                        name="arrow-up-right"
                        width={13}
                        height={13}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>

                    <div className={`h-7 w-7 rounded-lg ${area.bgAccent} ${area.textAccent} flex items-center justify-center shrink-0`}>
                      <Icon name="arrow-right" width={13} height={13} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. IMPACT IN NUMBERS (Our Growing Footprint — Measuring What Matters) ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#00B8D9]" />
              <span>04 // IMPACT IN NUMBERS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Our Growing <span className="text-[#3026B3]">Footprint</span>
            </h2>

            <p className="mt-2 font-serif text-xl sm:text-2xl text-[#3026B3] font-medium">
              Measuring What Matters
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              As the BharatX ecosystem grows, we are building a transparent framework to measure our economic, social and environmental contribution.
            </p>
          </div>

          {/* Clean 6-metric Framework Band */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3026B3] block">
                8+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                Businesses
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Operating verticals &amp; incubating platforms
              </span>
            </div>

            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#15966B] block">
                1,500+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                Jobs
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Engineers, operators, agronomists &amp; crew
              </span>
            </div>

            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#00B8D9] block">
                50+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                Projects
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Civil works, industrial runs &amp; AI pipelines
              </span>
            </div>

            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E09800] block">
                14+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                Locations
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Tier-1 and Tier-2 growth corridors across India
              </span>
            </div>

            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#4B40D4] block">
                18+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                Markets
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Domestic industrial networks &amp; export ports
              </span>
            </div>

            <div className="rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-6 sm:p-7 text-center transition-all hover:border-[#3026B3] hover:bg-white hover:shadow-md">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#15966B] block">
                10,000+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111827] font-semibold mt-1 block">
                People Reached
              </span>
              <span className="text-[11px] text-[#596579] mt-1 block">
                Agrarian growers, technicians &amp; families
              </span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-[#596579] font-mono shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Transparent telemetry &amp; validated ESG framework</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── 05. OUR COMMITMENT (Building Responsibly — Four Principles) ─────── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>05 // OUR COMMITMENT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Building <span className="text-[#3026B3]">Responsibly</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              Our ambition is to grow responsibly while building enterprises that remain valuable for the long term.
            </p>
          </div>

          {/* 4 Concise Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {commitmentPrinciples.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#E3E5EF] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className={`h-11 w-11 rounded-xl ${item.bg} ${item.text} flex items-center justify-center shrink-0 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon name={item.icon} width={20} height={20} strokeWidth={2} />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E3E5EF]/60 font-mono text-[9.5px] uppercase tracking-wider text-[#596579]">
                  Commitment Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. THE FUTURE OF IMPACT (The Opportunity Ahead & Final CTA) ─────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-20 sm:py-28">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>06 // THE FUTURE OF IMPACT</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white">
              The Opportunity Ahead
            </h2>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-3xl mx-auto">
              As BharatX expands into packaging, waste management, sustainability and new industrial businesses, our opportunity to create measurable impact grows with it.
            </p>

            {/* Three Focus Areas: Build | Enable | Sustain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 text-left">
              {futureFocusAreas.map((area) => (
                <div
                  key={area.step}
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                      {area.step}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                      <Icon name={area.icon} width={16} height={16} />
                    </div>
                  </div>

                  <h4 className="font-serif text-lg font-medium text-white mb-2 leading-snug">
                    {area.headline}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Final CTA Action */}
            <div className="mt-14 pt-10 border-t border-white/15 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-6">
                Build a Better Bharat With Us.
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact?inquiry=partner"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
                >
                  <span>Partner With BharatX</span>
                  <Icon
                    name="arrow-right"
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white shadow-xs"
                >
                  <span>Explore Our Businesses</span>
                  <Icon
                    name="arrow-right"
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                  Building Businesses. Enabling Bharat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
