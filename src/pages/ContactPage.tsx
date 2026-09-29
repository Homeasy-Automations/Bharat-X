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
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827] pt-24 pb-20">
      {/* ── 1. RIL-STYLE CONTACT HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover object-top filter brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] mb-4">
              <span>◆</span>
              <span className="text-white">INSTITUTIONAL RELATIONS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-white">
              Partner with BharatX.
              <br />
              <span className="italic text-[#FFB000]">Executive Secretariat.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Connect with our corporate office and sector directorships for strategic partnerships, capital deployment, infrastructure tenders, and institutional inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SECTOR INQUIRY DESKS ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              COMMUNICATION CHANNELS
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Sector Desks
            </h2>
            <p className="mt-3 text-[#596579] text-sm sm:text-base font-body">
              Select a specialized desk below to pre-configure your inquiry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inquiryDesks.map((desk, idx) => {
              const deskColors = ["#3026B3", "#FFB000", "#00B8D9", "#15966B"];
              const color = deskColors[idx % deskColors.length];
              return (
                <button
                  key={desk.t}
                  type="button"
                  onClick={() => handleSelectDesk(desk.sector, desk.type)}
                  className="group flex flex-col justify-between text-left rounded-2xl border border-[#E3E5EF] bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#3026B3] hover:shadow-md"
                >
                  <div>
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF9F6] border border-[#E3E5EF] mb-4"
                      style={{ color }}
                    >
                      <Icon name={desk.icon} width={18} height={18} />
                    </span>
                    <h3 className="font-serif text-lg text-[#111827] font-normal group-hover:text-[#3026B3] transition-colors">
                      {desk.t}
                    </h3>
                    <p className="mt-2 text-xs text-[#596579] leading-relaxed font-body">
                      {desk.d}
                    </p>
                  </div>
                  <span
                    className="mt-4 font-mono text-[10.5px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold"
                    style={{ color }}
                  >
                    Connect →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. FORM & HEADQUARTERS COORDINATES ───────────────────────────── */}
      <section id="contact-form-section" className="relative py-20 sm:py-28 bg-white border-b border-[#E3E5EF]">
        <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              OFFICIAL TRANSMISSION
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#111827] font-normal mb-8">
              Submit Institutional Inquiry
            </h2>
            <ContactForm
              initialCompany={selectedSector}
              initialInquiry={selectedType}
            />
          </div>

          {/* Right Headquarters Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-8 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#3026B3] font-semibold block mb-4">
                Corporate Headquarters
              </span>
              <h3 className="font-serif text-2xl text-[#111827] font-normal mb-4">
                BharatX Group
              </h3>
              <div className="space-y-4 text-sm text-[#596579] font-body">
                <div className="flex items-start gap-3">
                  <Icon name="map-pin" width={18} height={18} className="text-[#3026B3] shrink-0 mt-0.5" />
                  <span>{brandConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="phone" width={18} height={18} className="text-[#00B8D9] shrink-0" />
                  <a href={`tel:${brandConfig.contact.phoneTel}`} className="hover:text-[#3026B3] transition-colors">
                    {brandConfig.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="mail" width={18} height={18} className="text-[#15966B] shrink-0" />
                  <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-[#3026B3] transition-colors">
                    {brandConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-8 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#15966B] font-semibold block mb-4">
                Security &amp; Data Residency
              </span>
              <p className="text-xs sm:text-sm text-[#596579] leading-relaxed font-body">
                All communications sent to BharatX Group are strictly confidential and archived under domestic cryptographic data protection standards. We do not transmit or process corporate inquiries on foreign cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FREQUENTLY ASKED QUESTIONS ───────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-[#FAF9F6]">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#3026B3] font-semibold">
              DISCLOSURES
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827]">
              Institutional FAQs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {faqs.map((faq, idx) => {
              const borderAccent = ["border-l-[#3026B3]", "border-l-[#00B8D9]", "border-l-[#FFB000]", "border-l-[#15966B]"][idx % 4];
              const qColor = ["text-[#3026B3]", "text-[#211B72]", "text-[#111827]", "text-[#211B72]"][idx % 4];
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border border-[#E3E5EF] border-l-4 ${borderAccent} bg-white p-7 shadow-xs`}
                >
                  <h3 className={`font-serif text-xl ${qColor} font-normal mb-3`}>
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596579] leading-relaxed font-body">
                    {faq.a}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
