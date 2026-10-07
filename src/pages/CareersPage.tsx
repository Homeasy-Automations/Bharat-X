import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../utils/icons";
import { submitContact } from "../services/api";

const whyPillars = [
  {
    title: "Ownership",
    description: "Take responsibility. Make decisions. Create outcomes.",
    icon: "shield-check" as const,
    accent: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
  {
    title: "Learning",
    description: "Work across industries and continuously build new capabilities.",
    icon: "sparkles" as const,
    accent: "#E09800",
    bg: "bg-[#FFB000]/15",
    text: "text-[#B87B00]",
  },
  {
    title: "Execution",
    description: "Turn ideas into measurable results.",
    icon: "cog" as const,
    accent: "#00B8D9",
    bg: "bg-[#00B8D9]/15",
    text: "text-[#008299]",
  },
  {
    title: "Impact",
    description: "See how your work contributes to businesses, people and communities.",
    icon: "trending-up" as const,
    accent: "#15966B",
    bg: "bg-[#15966B]/15",
    text: "text-[#15966B]",
  },
];

const careerDomains = [
  {
    name: "Infrastructure",
    emoji: "🏗️",
    roles: "Engineering • Project Management • Operations • Procurement",
    accent: "#3026B3",
    link: "/services#infrastructure",
  },
  {
    name: "Agriculture & Food",
    emoji: "🌾",
    roles: "Operations • Supply Chain • Export • Business Development",
    accent: "#15966B",
    link: "/services#agriculture",
  },
  {
    name: "Manufacturing",
    emoji: "⚙️",
    roles: "Engineering • Production • Quality • Sales",
    accent: "#00B8D9",
    link: "/services#manufacturing",
  },
  {
    name: "Technology & AI",
    emoji: "🤖",
    roles: "Software • AI • Product • Design • Data",
    accent: "#4B40D4",
    link: "/services#tech-ai",
  },
  {
    name: "Packaging",
    emoji: "📦",
    roles: "Product • Manufacturing • Operations • Sales",
    accent: "#D97706",
    link: "/services#packaging",
  },
  {
    name: "Sustainability",
    emoji: "♻️",
    roles: "Waste Management • Operations • Sustainability • Circular Economy",
    accent: "#059669",
    link: "/services#sustainability",
  },
  {
    name: "Ventures & Strategy",
    emoji: "💼",
    roles: "Investment • Consulting • Strategy • Business Development",
    accent: "#211B72",
    link: "/services#ventures",
  },
  {
    name: "Foundation",
    emoji: "🌱",
    roles: "Education • Programs • Community • Social Impact",
    accent: "#15966B",
    link: "/services#foundation",
  },
];

const culturePrinciples = [
  {
    title: "Think Big",
    description: "Look beyond the immediate task and understand the larger opportunity.",
    icon: "target" as const,
    accent: "#3026B3",
    bg: "bg-[#3026B3]/10",
    text: "text-[#3026B3]",
  },
  {
    title: "Move Fast",
    description: "Test, learn and execute rather than waiting for perfect conditions.",
    icon: "rocket" as const,
    accent: "#00B8D9",
    bg: "bg-[#00B8D9]/15",
    text: "text-[#008299]",
  },
  {
    title: "Work Together",
    description: "Our businesses may operate in different sectors, but we share knowledge and capabilities.",
    icon: "users" as const,
    accent: "#15966B",
    bg: "bg-[#15966B]/15",
    text: "text-[#15966B]",
  },
  {
    title: "Build for the Long Term",
    description: "Create systems, products and businesses that last.",
    icon: "landmark" as const,
    accent: "#211B72",
    bg: "bg-[#211B72]/10",
    text: "text-[#211B72]",
  },
];

const verticalsList = [
  "General / Group Ecosystem",
  "Infrastructure (BharatX Infratech)",
  "Agriculture (BharatXAgro)",
  "Manufacturing (Casters Global)",
  "Technology & AI (AI Xperts Labs)",
  "Packaging (SRM Enterprises)",
  "Sustainability (BharatX Sustainability)",
  "Ventures & Strategy (BharatX Ventures)",
  "Foundation (BharatX Labs Foundation)",
];

export default function CareersPage() {
  usePageMeta({
    title: "Careers at BharatX Group | Build What Matters",
    description:
      "Explore careers at BharatX Group and join teams building businesses across infrastructure, agriculture, manufacturing, technology, packaging and sustainability.",
    path: "/careers",
  });

  // Profile submission state
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [vertical, setVertical] = useState("General / Group Ecosystem");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [intro, setIntro] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setFormError("Please provide your name and email.");
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      await submitContact({
        name,
        email,
        phone,
        organization: vertical,
        inquiryType: "Careers",
        message: `Position: ${position}\nLocation: ${location}\nLinkedIn: ${linkedin}\n\nIntroduction: ${intro}`,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* ── 01. HERO (Careers at BharatX — Build What Matters.) ────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] lg:min-h-screen w-full flex items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 border-b border-[#E3E5EF]">
        {/* Full-bleed authentic team collaboration background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/careers_hero.png"
            alt="BharatX Team Collaborating on Real Industrial and Engineering Projects"
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.10]"
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
              <span>CAREERS AT BHARATX</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
            >
              Build What{" "}
              <span className="text-[#FFB000]">Matters.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-xs"
            >
              Join a growing business ecosystem building across infrastructure, agriculture, manufacturing, technology, packaging and sustainability.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => {
                  document.getElementById("open-opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
              >
                <span>View Opportunities</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowProfileForm(true);
                  document.getElementById("open-opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all backdrop-blur-sm"
              >
                <span>Send Your Profile</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02. WHY BHARATX (More Than a Job. A Chance to Build.) ──────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>WHY BHARATX</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              More Than a Job. <span className="text-[#3026B3]">A Chance to Build.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-normal">
              BharatX is an environment for people who want to take ownership, solve meaningful problems and see their work create real-world impact.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#111827] font-medium leading-relaxed">
              Whether you’re building technology, executing infrastructure, developing markets, creating new businesses or improving operations, your work contributes to something bigger than a single company.
            </p>
          </div>

          {/* 4 Compact Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className={`h-11 w-11 rounded-xl ${p.bg} ${p.text} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                    <Icon name={p.icon} width={20} height={20} strokeWidth={2} />
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E5EF] font-mono text-[10px] uppercase tracking-wider text-[#596579]">
                  Core Value
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. WHERE YOU CAN BUILD (Find Your Place in the Ecosystem — 8 Areas) ── */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966B]/30 bg-[#15966B]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#15966B] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#15966B]" />
              <span>CAREER DOMAINS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Find Your Place in the <span className="text-[#3026B3]">Ecosystem</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#596579] leading-relaxed max-w-2xl mx-auto">
              Our multidisciplinary portfolio operates across 8 major functional areas spanning both physical and digital industrial execution.
            </p>
          </div>

          {/* 8 Career Area Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {careerDomains.map((area) => (
              <Link
                key={area.name}
                to={area.link}
                className="group flex flex-col justify-between rounded-2xl border border-[#E3E5EF] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{area.emoji}</span>
                    <Icon name="arrow-up-right" width={14} height={14} className="text-[#596579] group-hover:text-[#3026B3] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {area.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#596579] leading-relaxed font-normal">
                    {area.roles}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E3E5EF] font-mono text-[9.5px] uppercase tracking-wider text-[#596579]">
                  Explore Sector
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. HOW WE WORK (Built for People Who Take Ownership) ─────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00B8D9]/30 bg-[#00B8D9]/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#008299] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#00B8D9]" />
              <span>OUR CULTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Built for People Who <span className="text-[#3026B3]">Take Ownership</span>
            </h2>

            <p className="mt-3 text-base text-[#596579]">
              Four operating principles that shape how we collaborate, execute, and build.
            </p>
          </div>

          {/* 4 Cultural Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {culturePrinciples.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#E3E5EF] bg-[#FAF9F6] p-7 shadow-xs transition-all duration-300 hover:border-[#3026B3] hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className={`h-11 w-11 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                    <Icon name={item.icon} width={20} height={20} strokeWidth={2} />
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#111827] group-hover:text-[#3026B3] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#596579] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E3E5EF] font-mono text-[10px] uppercase tracking-wider text-[#596579]">
                  Operating Norm
                </div>
              </div>
            ))}
          </div>

          {/* Central Anchor Statement */}
          <div className="mt-14 max-w-2xl mx-auto rounded-2xl border border-[#3026B3]/30 bg-[#3026B3]/5 p-6 text-center shadow-xs">
            <p className="font-serif text-base sm:text-lg font-medium text-[#111827] leading-relaxed">
              “We value initiative over hierarchy and outcomes over activity.”
            </p>
          </div>
        </div>
      </section>

      {/* ── 05. OPEN OPPORTUNITIES (Find Your Next Opportunity / Send Profile) ── */}
      <section id="open-opportunities" className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-28 border-b border-[#E3E5EF]">
        <div className="container-x relative z-10">
          <div className="max-w-3xl text-center mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/25 bg-[#3026B3]/8 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] font-bold shadow-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-[#3026B3]" />
              <span>OPEN OPPORTUNITIES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] leading-tight tracking-tight">
              Find Your Next <span className="text-[#3026B3]">Opportunity</span>
            </h2>

            <p className="mt-2 font-serif text-xl text-[#3026B3] font-medium">
              We’re Growing
            </p>

            <p className="mt-3 text-base text-[#596579] max-w-2xl mx-auto">
              New opportunities are added as our businesses and teams expand across India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Opportunities Table / Clean Status Card */}
            <div className="rounded-3xl border border-[#E3E5EF] bg-white overflow-hidden shadow-md mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#E3E5EF] bg-[#FAF9F6] font-mono text-xs uppercase tracking-wider text-[#596579]">
                      <th className="py-4 px-6">Role</th>
                      <th className="py-4 px-6">Business</th>
                      <th className="py-4 px-6">Location</th>
                      <th className="py-4 px-6">Type</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E3E5EF] hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-[#111827]">Civil Project Director</td>
                      <td className="py-4 px-6 text-[#596579]">BharatX Infratech</td>
                      <td className="py-4 px-6 text-[#596579]">New Delhi / On-site</td>
                      <td className="py-4 px-6 text-xs font-mono text-[#3026B3]">Full-time</td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setPosition("Civil Project Director");
                            setVertical("Infrastructure (BharatX Infratech)");
                            setShowProfileForm(true);
                          }}
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] hover:underline"
                        >
                          Apply →
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E3E5EF] hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-[#111827]">Lead Applied AI Engineer</td>
                      <td className="py-4 px-6 text-[#596579]">AI Xperts Labs</td>
                      <td className="py-4 px-6 text-[#596579]">Bengaluru / Hybrid</td>
                      <td className="py-4 px-6 text-xs font-mono text-[#3026B3]">Full-time</td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setPosition("Lead Applied AI Engineer");
                            setVertical("Technology & AI (AI Xperts Labs)");
                            setShowProfileForm(true);
                          }}
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] hover:underline"
                        >
                          Apply →
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E3E5EF] hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-[#111827]">Industrial Quality &amp; Tooling Lead</td>
                      <td className="py-4 px-6 text-[#596579]">Casters Global</td>
                      <td className="py-4 px-6 text-[#596579]">Industrial Corridor / Plant</td>
                      <td className="py-4 px-6 text-xs font-mono text-[#3026B3]">Full-time</td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setPosition("Industrial Quality & Tooling Lead");
                            setVertical("Manufacturing (Casters Global)");
                            setShowProfileForm(true);
                          }}
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#3026B3] hover:underline"
                        >
                          Apply →
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* No suitable openings banner & CTA */}
              <div className="p-8 bg-[#FAF9F6] border-t border-[#E3E5EF] text-center">
                <p className="text-sm text-[#596579] max-w-lg mx-auto">
                  Don't see your specific role listed? We are always interested in meeting talented people who want to build with us.
                </p>
                <button
                  type="button"
                  onClick={() => setShowProfileForm((prev) => !prev)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3026B3] hover:bg-[#211B72] text-white px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  <span>{showProfileForm ? "Hide Application Form" : "Send Your Profile →"}</span>
                </button>
              </div>
            </div>

            {/* Profile Application Form (Collapsible/Dynamic) */}
            <AnimatePresence>
              {showProfileForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-3xl border border-[#E3E5EF] bg-white p-7 sm:p-12 shadow-xl mb-12">
                    <div className="text-center mb-8">
                      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#3026B3] font-bold block">
                        TALENT BUREAU
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111827] mt-1">
                        Submit Your Profile
                      </h3>
                      <p className="text-xs sm:text-sm text-[#596579] mt-2 max-w-md mx-auto">
                        Share your background, portfolio, or target vertical. Our talent leadership reviews every submission.
                      </p>
                    </div>

                    {submitted ? (
                      <div className="text-center py-10">
                        <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                          <Icon name="check" width={28} height={28} strokeWidth={2.5} />
                        </div>
                        <h4 className="font-serif text-2xl font-medium text-[#111827]">
                          Profile Received
                        </h4>
                        <p className="text-sm text-[#596579] mt-2 max-w-md mx-auto">
                          Thank you for your interest in building with BharatX Group. Our recruiting leadership will review your credentials and connect with you.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitProfile} className="space-y-5">
                        {formError && (
                          <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 font-medium">
                            {formError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your full name"
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="name@email.com"
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Position / Domain Interested In
                            </label>
                            <input
                              type="text"
                              value={position}
                              onChange={(e) => setPosition(e.target.value)}
                              placeholder="e.g. Mechanical Engineer, AI Specialist"
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Business / Vertical
                            </label>
                            <select
                              value={vertical}
                              onChange={(e) => setVertical(e.target.value)}
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            >
                              {verticalsList.map((v) => (
                                <option key={v} value={v}>
                                  {v}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                              Location / Preferred Base
                            </label>
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder="e.g. New Delhi, Bengaluru, Plant Site"
                              className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                            LinkedIn Profile / Portfolio Link
                          </label>
                          <input
                            type="url"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                            Short Introduction / What You Build
                          </label>
                          <textarea
                            rows={4}
                            value={intro}
                            onChange={(e) => setIntro(e.target.value)}
                            placeholder="Tell us about the problems you've solved and what capabilities you bring."
                            className="w-full rounded-xl border border-[#E3E5EF] bg-[#FAF9F6] px-4 py-3 text-sm text-[#111827] focus:border-[#3026B3] focus:bg-white focus:outline-none resize-y"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center gap-2 rounded-full bg-[#3026B3] hover:bg-[#211B72] text-white px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider shadow-md transition-all disabled:opacity-60"
                          >
                            <span>{submitting ? "Submitting..." : "Submit Profile →"}</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 06. FINAL CTA (Ready to Build With Us?) ───────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-20 sm:py-28">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
              <span>JOIN THE BUILDERS</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white">
              Ready to Build With Us?
            </h2>

            {/* Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto">
              If you are curious, driven and excited by the opportunity to build businesses that matter, we’d like to hear from you.
            </p>

            {/* Dual CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("open-opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
              >
                <span>Explore Open Roles</span>
                <Icon
                  name="arrow-right"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowProfileForm(true);
                  document.getElementById("open-opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all backdrop-blur-sm"
              >
                <span>Send Your Profile</span>
              </button>
            </div>

            {/* Signature Conclusion */}
            <div className="mt-12 pt-8 border-t border-white/15 max-w-xl mx-auto">
              <p className="font-mono text-sm sm:text-base uppercase tracking-[0.24em] text-[#FFB000] font-bold">
                Building Businesses. Enabling Bharat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
