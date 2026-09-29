import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { ContactForm, inquiryTypes } from "../components/forms/ContactForm";
import { brandConfig } from "../config/brand";
import { Icon } from "../utils/icons";
import { Reveal } from "../components/common/Reveal";

const inquiryDesks = [
  { icon: "brain-circuit", t: "Technology & AI", d: "Enterprise neural models, edge compute, and automation", sector: "tech-ai", type: "ai-automation" },
  { icon: "hard-hat", t: "Infrastructure", d: "Arterial transport, heavy civil works, and utility grids", sector: "infrastructure", type: "infrastructure" },
  { icon: "factory", t: "Manufacturing", d: "Precision robotics, industrial mobility, and tooling", sector: "manufacturing", type: "manufacturing" },
  { icon: "sprout", t: "Agriculture", d: "Origin sourcing, certified processing, and export corridors", sector: "agriculture", type: "agriculture" },
  { icon: "leaf", t: "Climate & Sustainability", d: "Decarbonisation, sovereign carbon telemetry, and circular materials", sector: "climate-sustainability", type: "infrastructure" },
  { icon: "landmark", t: "Finance & Capital", d: "Strategic capital structuring, balance sheet advisory, and scaling", sector: "finance", type: "partnerships" },
  { icon: "handshake", t: "Strategic Partnerships", d: "Industrial joint ventures and institutional tenders", sector: "", type: "partnerships" },
  { icon: "globe", t: "Media & Disclosures", d: "Official group announcements and investor communications", sector: "", type: "partnerships" },
  { icon: "briefcase", t: "Executive Careers", d: "Engineering leadership and specialized talent recruitment", sector: "", type: "careers" },
];

const faqs = [
  {
    q: "How does BharatX Group structure sector partnerships?",
    a: "We collaborate with global tier-1 industrial players, government bodies, and domestic enterprises through structured joint ventures, long-term supply commitments, and institutional capital partnerships.",
  },
  {
    q: "How is proprietary and confidential information protected?",
    a: "All inquiries submitted through our institutional portal are protected by strict corporate non-disclosure protocols and encrypted domestic storage adhering to sovereign data standards.",
  },
  {
    q: "Where is the BharatX Group headquarters located?",
    a: "Our corporate headquarters and executive secretariat are situated in New Delhi, India, anchoring operations across our Pan-India industrial corridors.",
  },
  {
    q: "How can suppliers and contractors participate in group tenders?",
    a: "Submit an inquiry under Strategic Partnerships selecting the relevant sector. Our procurement directorate reviews credentials against strict technical and quality specifications.",
  },
];

export default function ContactPage() {
  usePageMeta({
    title: "Contact & Institutional Inquiries — BharatX Group",
    description:
      "Connect with the BharatX Group corporate secretariat, sector leadership desks, and institutional partnership offices.",
    path: "/contact",
  });

  const [params] = useSearchParams();
  const initialSector = params.get("sector") || "";
  const initialType = params.get("type") || "";

  const [selectedSector, setSelectedSector] = useState(initialSector);
  const [selectedType, setSelectedType] = useState(initialType);

  const handleSelectDesk = (sector: string, type: string) => {
    setSelectedSector(sector);
    setSelectedType(type);
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-night-950 text-ink-900 dark:text-white pt-24 pb-20">
      {/* ── 1. RIL-STYLE CONTACT HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#E3E5EF] dark:border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.92] dark:brightness-[0.55] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/80 to-night-950/40 dark:from-night-950 dark:via-night-950/40 dark:to-night-950/20" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#3026B3] dark:text-gold-400 mb-4">
              <span>◆</span>
              <span>INSTITUTIONAL RELATIONS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-ink-900 dark:text-white">
              Partner with BharatX.
              <br />
              <span className="italic text-[#596579] dark:text-slate-300">Executive Secretariat.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#596579] dark:text-slate-300 leading-relaxed font-body">
              Connect with our corporate office and sector directorships for strategic partnerships, capital deployment, infrastructure tenders, and institutional inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SECTOR INQUIRY DESKS ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-[#E3E5EF] dark:border-white/10">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] dark:text-gold-400 font-semibold">
              COMMUNICATION CHANNELS
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink-900 dark:text-white">
              Sector Desks
            </h2>
            <p className="mt-3 text-[#596579] dark:text-slate-400 text-sm sm:text-base font-body">
              Select a specialized desk below to pre-configure your inquiry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inquiryDesks.map((desk) => (
              <button
                key={desk.t}
                type="button"
                onClick={() => handleSelectDesk(desk.sector, desk.type)}
                className="group flex flex-col justify-between text-left rounded-2xl border border-[#E3E5EF] bg-white dark:border-white/10 dark:bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-[#3026B3] hover:shadow-md dark:hover:border-gold-400/50 dark:hover:bg-white/[0.05]"
              >
                <div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1F6FF] dark:bg-gold-400/10 text-[#3026B3] dark:text-gold-400 mb-4">
                    <Icon name={desk.icon} width={18} height={18} />
                  </span>
                  <h3 className="font-serif text-lg text-ink-900 dark:text-white font-normal group-hover:text-[#3026B3] dark:group-hover:text-gold-300 transition-colors">
                    {desk.t}
                  </h3>
                  <p className="mt-2 text-xs text-[#596579] dark:text-slate-400 leading-relaxed font-body">
                    {desk.d}
                  </p>
                </div>
                <span className="mt-4 font-mono text-[10.5px] text-[#3026B3] dark:text-gold-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                  Connect →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FORM & HEADQUARTERS COORDINATES ───────────────────────────── */}
      <section id="contact-form-section" className="relative overflow-hidden py-20 sm:py-28 border-b border-white/10">
        {/* Full-bleed Corporate Headquarters Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover filter brightness-[0.30] contrast-[1.2]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/85" />
        </div>

        <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              OFFICIAL TRANSMISSION
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white font-normal mb-8">
              Submit Institutional Inquiry
            </h2>
            <ContactForm
              initialCompany={selectedSector}
              initialInquiry={selectedType}
            />
          </div>

          {/* Right Headquarters Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-4">
                Corporate Headquarters
              </span>
              <h3 className="font-serif text-2xl text-white font-normal mb-4">
                BharatX Group
              </h3>
              <div className="space-y-4 text-sm text-slate-300 font-body">
                <div className="flex items-start gap-3">
                  <Icon name="map-pin" width={18} height={18} className="text-gold-400 shrink-0 mt-0.5" />
                  <span>{brandConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="phone" width={18} height={18} className="text-gold-400 shrink-0" />
                  <a href={`tel:${brandConfig.contact.phoneTel}`} className="hover:text-gold-400 transition-colors">
                    {brandConfig.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="mail" width={18} height={18} className="text-gold-400 shrink-0" />
                  <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-gold-400 transition-colors">
                    {brandConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-4">
                Security &amp; Data Residency
              </span>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                All communications sent to BharatX Group are strictly confidential and archived under domestic cryptographic data protection standards. We do not transmit or process corporate inquiries on foreign cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FREQUENTLY ASKED QUESTIONS ───────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-gold-400">
              DISCLOSURES
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Institutional FAQs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
              >
                <h3 className="font-serif text-xl text-white font-normal mb-3">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
