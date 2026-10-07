import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { brandConfig } from "../config/brand";
import { submitContact } from "../services/api";
import { SectionTransition } from "../components/motion/SectionTransition";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { AnimatedHeading } from "../components/motion/AnimatedHeading";
import { MagneticButton } from "../components/common/MagneticButton";

const interestOptions = [
  "Business Partnership",
  "Investment / Capital",
  "Venture Building",
  "Technology Partnership",
  "Supplier / Vendor Partnership",
  "Careers",
  "Media / Press",
  "Other",
];

function toInquiryType(interest: string): string {
  const map: Record<string, string> = {
    "Business Partnership": "partnerships",
    "Investment / Capital": "venture-building",
    "Venture Building": "venture-building",
    "Technology Partnership": "ai-automation",
    "Supplier / Vendor Partnership": "partnerships",
    Careers: "careers",
    "Media / Press": "partnerships",
    Other: "partnerships",
  };
  return map[interest] || "partnerships";
}

export default function ContactPage() {
  usePageMeta({
    title: "Contact BharatX Group | Let’s Build What Comes Next",
    description:
      "Whether you’re looking to partner, invest, build a business, explore an opportunity or work with BharatX, we’d like to hear from you.",
    path: "/contact",
  });

  const [searchParams] = useSearchParams();
  const inquiryParam = searchParams.get("inquiry");

  const getInitialInterest = () => {
    if (inquiryParam === "partner") return "Business Partnership";
    if (inquiryParam === "capital") return "Investment / Capital";
    if (inquiryParam === "build") return "Venture Building";
    return "Business Partnership";
  };

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [interest, setInterest] = useState(getInitialInterest());
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (message.trim().length < 5) {
      setErrorMsg("Please provide a message with at least 5 characters.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      await submitContact({
        name: fullName,
        email,
        phone,
        organization,
        inquiryType: toInquiryType(interest),
        company: interest,
        message: `[Topic: ${interest}]\n\n${message}`,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("[ContactPage] Submission failed:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please check your details and try again.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSelectOption = (selectedInterest: string) => {
    setInterest(selectedInterest);
    document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (Contact BharatX — Let's Build What Comes Next.) ─────── */}
      <SectionTransition divider={false} className="relative overflow-hidden min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Full-bleed authentic panoramic visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/contact_hero.png"
            alt="BharatX Leadership, Infrastructure, and City Skyline"
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.10] fx-zoom-img transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-transparent" />
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
              <span>CONTACT BHARATX</span>
            </motion.div>

            {/* H1 Headline */}
            <AnimatedHeading
              as="h1"
              effect="words"
              hover="gradient"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
            >
              Let’s Build What <span className="text-[#FFB000]">Comes Next.</span>
            </AnimatedHeading>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              Whether you’re looking to partner, invest, build a business, explore an opportunity or work with BharatX, we’d like to hear from you.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <button
                  type="button"
                  data-cursor="button"
                  onClick={() => {
                    document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 fx-shine"
                >
                  <span>Start a Conversation</span>
                  <Icon
                    name="arrow-right"
                    width={16}
                    height={16}
                    className="rotate-90 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </button>
              </MagneticButton>

              <button
                type="button"
                data-cursor="button"
                onClick={() => {
                  document.getElementById("contact-options")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all backdrop-blur-sm fx-lift"
              >
                <span>View Pathways</span>
              </button>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 02. CONTACT OPTIONS (Clear Pathways for Visitors) ─────────────── */}
      <SectionTransition divider className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>CONTACT PATHWAYS</span>
            </div>

            <AnimatedHeading
              as="h2"
              effect="mask"
              hover="color"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight"
            >
              Choose Your <span className="text-[#3026B3]">Pathway</span>
            </AnimatedHeading>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              Direct routing to ensure your inquiry reaches the right leadership team immediately.
            </p>
          </div>

          {/* 4 Clear Option Cards Grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* 1. Business Partnerships */}
            <StaggerItem>
              <div data-cursor="card" className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:bg-white hover:shadow-xl fx-lift flex flex-col justify-between h-full">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#3026B3]/10 text-[#3026B3] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name="handshake" width={22} height={22} />
                  </div>

                  <AnimatedHeading as="h3" effect="blur" hover="shift" className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    Business Partnerships
                  </AnimatedHeading>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    For companies, institutions and organisations interested in partnerships, projects or commercial opportunities.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF]">
                  <button
                    type="button"
                    data-cursor="button"
                    onClick={() => handleSelectOption("Business Partnership")}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] group/link"
                  >
                    <span>Discuss a Partnership</span>
                    <Icon name="arrow-right" width={13} height={13} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* 2. Investors & Capital */}
            <StaggerItem>
              <div data-cursor="card" className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#211B72] hover:bg-white hover:shadow-xl fx-lift flex flex-col justify-between h-full">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#211B72]/10 text-[#211B72] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name="landmark" width={22} height={22} />
                  </div>

                  <AnimatedHeading as="h3" effect="blur" hover="shift" className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#211B72] transition-colors">
                    Investors &amp; Capital
                  </AnimatedHeading>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    For investors, funds and strategic partners interested in BharatX and its venture-building ecosystem.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF]">
                  <button
                    type="button"
                    data-cursor="button"
                    onClick={() => handleSelectOption("Investment / Capital")}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#211B72] group/link"
                  >
                    <span>Connect With Ventures</span>
                    <Icon name="arrow-right" width={13} height={13} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* 3. Entrepreneurs & Founders */}
            <StaggerItem>
              <div data-cursor="card" className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#00B8D9] hover:bg-white hover:shadow-xl fx-lift flex flex-col justify-between h-full">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#00B8D9]/15 text-[#008299] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name="rocket" width={22} height={22} />
                  </div>

                  <AnimatedHeading as="h3" effect="blur" hover="shift" className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#008299] transition-colors">
                    Entrepreneurs &amp; Founders
                  </AnimatedHeading>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    For entrepreneurs interested in building, partnering or exploring opportunities with BharatX.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF]">
                  <button
                    type="button"
                    data-cursor="button"
                    onClick={() => handleSelectOption("Venture Building")}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#008299] group/link"
                  >
                    <span>Build With Us</span>
                    <Icon name="arrow-right" width={13} height={13} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* 4. Careers */}
            <StaggerItem>
              <div data-cursor="card" className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#15966B] hover:bg-white hover:shadow-xl fx-lift flex flex-col justify-between h-full">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#15966B]/15 text-[#15966B] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name="briefcase" width={22} height={22} />
                  </div>

                  <AnimatedHeading as="h3" effect="blur" hover="shift" className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#15966B] transition-colors">
                    Careers
                  </AnimatedHeading>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    Looking to join one of the businesses within the BharatX ecosystem?
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF]">
                  <Link
                    to="/careers"
                    data-cursor="button"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#15966B] group/link"
                  >
                    <span>Explore Careers</span>
                    <Icon name="arrow-right" width={13} height={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </SectionTransition>

      {/* ── 03. MAIN CONTACT FORM (Start a Conversation) ──────────────────── */}
      <SectionTransition divider className="relative overflow-hidden bg-[#FAF9F6] py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
                <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
                <span>DIRECT INQUIRY</span>
              </div>

              <AnimatedHeading
                as="h2"
                effect="words"
                hover="gradient"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight"
              >
                Start a <span className="text-[#3026B3]">Conversation</span>
              </AnimatedHeading>

              <p className="mt-3 text-base sm:text-lg text-[#596579]">
                Share your proposal, project specifications, or collaboration concept with us.
              </p>
            </div>

            {/* Form Container */}
            <div data-cursor="card" className="rounded-3xl border border-[#E3E5EF] bg-white p-7 sm:p-12 shadow-xl fx-lift">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm fx-icon-pop">
                      <Icon name="check" width={32} height={32} strokeWidth={2.5} />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] mb-3 transition-colors duration-300 hover:text-[#3026B3]">
                      Message Received
                    </h3>

                    <p className="text-base sm:text-lg text-[#596579] max-w-lg mx-auto leading-relaxed">
                      Thank you for reaching out to BharatX. Our team will review your message and get back to you.
                    </p>

                    <button
                      type="button"
                      data-cursor="button"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage("");
                      }}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E3E5EF] bg-[#FAF9F6] hover:bg-slate-100 text-[#111827] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors fx-lift"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-700">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name* */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] placeholder:text-[#8E9BAE] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50"
                        />
                      </div>

                      {/* Work Email* */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] placeholder:text-[#8E9BAE] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] placeholder:text-[#8E9BAE] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50"
                        />
                      </div>

                      {/* Organisation / Company */}
                      <div>
                        <label htmlFor="organization" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                          Organisation / Company
                        </label>
                        <input
                          id="organization"
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Your company"
                          className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] placeholder:text-[#8E9BAE] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50"
                        />
                      </div>
                    </div>

                    {/* I'm interested in* Dropdown */}
                    <div>
                      <label htmlFor="interest" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                        I’m interested in <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50"
                      >
                        {interestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tell us briefly about your opportunity* */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Tell us briefly about your opportunity <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we work together?"
                        className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] placeholder:text-[#8E9BAE] transition-all duration-200 focus:border-[#3026B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3026B3]/20 hover:border-[#3026B3]/50 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        data-cursor="button"
                        disabled={submitting}
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#3026B3] hover:bg-[#211B72] text-white px-9 py-4 text-[15px] font-bold shadow-lg shadow-[#3026B3]/25 transition-all duration-300 fx-shine disabled:opacity-60"
                      >
                        <span>{submitting ? "Sending..." : "Send Message"}</span>
                        <Icon name="arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 04. BHARATX GROUP OFFICE (Clean Office & Contact Directory) ───── */}
      <SectionTransition divider className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966B]/30 bg-[#15966B]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#15966B] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#15966B]" />
              <span>GROUP OFFICE</span>
            </div>

            <AnimatedHeading
              as="h2"
              effect="mask"
              hover="color"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight"
            >
              BharatX Group <span className="text-[#3026B3]">Office</span>
            </AnimatedHeading>

            <p className="mt-3 text-base text-[#596579]">
              Corporate headquarters and official communications directorate.
            </p>
          </div>

          <div data-cursor="card" className="max-w-4xl mx-auto rounded-3xl border border-[#E3E5EF] bg-[#FAF9F6] p-8 sm:p-12 shadow-lg fx-lift">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#3026B3] font-bold block mb-1">
                  BHARATX GROUP
                </span>
                <AnimatedHeading as="h3" effect="blur" hover="shift" className="font-serif text-2xl font-medium text-[#111827] mb-4">
                  Registered / Corporate Office
                </AnimatedHeading>

                <p className="text-sm text-[#596579] leading-relaxed mb-6 font-normal">
                  {brandConfig.address.full}
                </p>

                <div className="space-y-3 font-mono text-xs text-[#111827]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#596579] uppercase tracking-wider w-24">Email</span>
                    <a
                      href="mailto:contact@bharatx.group"
                      data-cursor="link"
                      className="font-bold text-[#3026B3] hover:underline"
                    >
                      contact@bharatx.group
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#596579] uppercase tracking-wider w-24">Phone</span>
                    <a
                      href={`tel:${brandConfig.contact.phoneTel}`}
                      data-cursor="link"
                      className="font-bold text-[#111827] hover:text-[#3026B3] transition-colors"
                    >
                      {brandConfig.contact.phoneFormatted}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <span className="text-[#596579] uppercase tracking-wider w-24">Hours</span>
                    <div>
                      <span className="font-semibold block">Monday – Saturday</span>
                      <span className="text-[#596579] text-[11px] block">10:00 AM – 6:00 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(brandConfig.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E3E5EF] hover:border-[#3026B3] hover:text-[#3026B3] text-[#111827] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider shadow-xs transition-all fx-lift"
                  >
                    <span>Get Directions</span>
                    <Icon name="arrow-up-right" width={14} height={14} />
                  </a>
                </div>
              </div>

              {/* Visual Map / Graphic Panel */}
              <div data-cursor="card" className="rounded-2xl border border-[#E3E5EF] bg-white p-6 shadow-sm flex flex-col justify-between h-full min-h-[220px] fx-lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 font-bold">
                      Secretariat Active
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#596579]">New Delhi, India</span>
                </div>

                <div className="my-6 text-center">
                  <div className="h-12 w-12 rounded-2xl bg-[#3026B3]/10 text-[#3026B3] flex items-center justify-center mx-auto mb-3 fx-icon-pop">
                    <Icon name="building-2" width={24} height={24} />
                  </div>
                  <span className="font-serif text-lg font-medium text-[#111827] block">
                    Pan-India Operating Presence
                  </span>
                  <span className="text-xs text-[#596579] mt-1 block">
                    Anchoring civil, agrarian, industrial &amp; digital operations
                  </span>
                </div>

                <div className="pt-3 border-t border-[#E3E5EF] text-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E9BAE]">
                    ISO Certified Corporate Governance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 05. FINAL CTA (Have an Idea Worth Building?) ──────────────────── */}
      <SectionTransition divider={false} className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-12 sm:py-16">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>CO-BUILD THE FUTURE</span>
            </div>

            {/* Headline */}
            <AnimatedHeading
              as="h2"
              effect="words"
              hover="gradient"
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white"
            >
              Have an Idea Worth Building?
            </AnimatedHeading>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto">
              The next BharatX business could begin with a conversation.
            </p>

            {/* Action */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <button
                  type="button"
                  data-cursor="button"
                  onClick={() => {
                    document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-9 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 fx-shine"
                >
                  <span>Talk to Us</span>
                  <Icon
                    name="arrow-right"
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </MagneticButton>

              <Link
                to="/services"
                data-cursor="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all backdrop-blur-sm fx-lift"
              >
                <span>Explore Ecosystem</span>
              </Link>
            </div>

            {/* Signature Conclusion */}
            <div className="mt-12 pt-8 border-t border-white/15 max-w-xl mx-auto">
              <p className="font-mono text-sm sm:text-base uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                Building Businesses. Enabling Bharat.
              </p>
            </div>
          </div>
        </div>
      </SectionTransition>
    </main>
  );
}
