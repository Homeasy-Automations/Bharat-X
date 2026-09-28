import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";
import { Reveal } from "../common/Reveal";

interface PressRelease {
  id: string;
  category: string;
  date: string;
  publisher: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
}

const pressReleases: PressRelease[] = [
  {
    id: "lead-1",
    category: "Strategic Infrastructure",
    date: "18 Sep, 2026",
    publisher: "BharatX Group Communications",
    title:
      "BharatX Group announces expansion of sovereign AI compute nodes and integrated freight corridors across 5 key states.",
    excerpt:
      "A strategic capital deployment consolidating domestic physical connectivity with indigenous multilingual automation to enhance India's industrial manufacturing competitiveness.",
    link: "/services#tech-ai",
    image: "/assets/backgrounds/infrastructure-real.jpg",
  },
  {
    id: "item-2",
    category: "Sovereign AI",
    date: "04 Sep, 2026",
    publisher: "Technology & AI Bureau",
    title:
      "Operationalisation of high-performance multilingual neural decision models across 22 regional Indian languages.",
    excerpt:
      "Delivering voice, document triage, and automated telemetry directly to enterprise operations without reliance on foreign black-box dependencies.",
    link: "/services#tech-ai",
    image: "/assets/backgrounds/ai-circuit.jpg",
  },
  {
    id: "item-3",
    category: "Food Systems & Exports",
    date: "22 Aug, 2026",
    publisher: "Food Systems Directorate",
    title:
      "Farm-gate cold chain traceability network expands across 1,200+ certified growers and 5,000+ MT commodities.",
    excerpt:
      "Delivering origin-authenticated agricultural commodities and unbroken temperature-controlled corridors directly into global export channels.",
    link: "/services#agriculture",
    image: "/assets/backgrounds/hero-field.jpg",
  },
  {
    id: "item-4",
    category: "Precision Engineering",
    date: "08 Aug, 2026",
    publisher: "Advanced Manufacturing Bureau",
    title:
      "Commissioning of automated high-tolerance robotic production line for specialized industrial hardware.",
    excerpt:
      "Sub-micron metallurgical casting and certified fatigue-resistant components engineered to stringent global aerospace and defense standards.",
    link: "/services#manufacturing",
    image: "/assets/backgrounds/craft-metal.jpg",
  },
];

export function InstitutionalNewsroom() {
  const lead = pressReleases[0];
  const listItems = pressReleases.slice(1);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-t border-white/10 bg-night-950 text-white">
      {/* Full-bleed Corporate Headquarters Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
          alt=""
          className="h-full w-full object-cover filter brightness-[0.32] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/85" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-2">
              <span>◆</span>
              <span>CORPORATE DISCLOSURES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Announcements &amp; News
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400 hover:text-gold-300 transition-colors"
          >
            <span>Media Relations Desk</span>
            <Icon
              name="arrow-right"
              width={13}
              height={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Featured Lead Announcement (RIL Style) */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-wider text-slate-400 mb-4">
                    <span className="text-gold-400 font-semibold">{lead.category}</span>
                    <span>·</span>
                    <span>{lead.publisher}</span>
                    <span>·</span>
                    <span>{lead.date}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                    {lead.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                    {lead.excerpt}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to={lead.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <span>Read official release</span>
                    <Icon name="arrow-right" width={14} height={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[300px] overflow-hidden relative">
                <img
                  src={lead.image}
                  alt=""
                  className="h-full w-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-night-950/60 lg:to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3-Card Bottom Grid (RIL Style) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <Link
                to={item.link}
                className="group flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden rounded-xl mb-5">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover filter brightness-[0.95] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-gold-400 border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-normal text-white group-hover:text-gold-300 transition-colors line-clamp-3 leading-snug">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] text-slate-400">
                  <span>{item.date}</span>
                  <span className="text-gold-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
