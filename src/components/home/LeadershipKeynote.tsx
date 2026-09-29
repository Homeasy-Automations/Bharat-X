import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "../../utils/icons";
import { Reveal } from "../common/Reveal";

const transcriptChapters = [
  {
    id: "chapter-1",
    number: "01",
    title: "National Imperative & Foundational Scale",
    content: [
      "Distinguished partners, institutions, and citizens: We stand at a pivotal juncture in India's industrial and technological evolution. The mandate before our generation is unequivocal — we must build sovereign capability in every critical layer of the modern economy.",
      "Self-reliance is no longer merely an economic ambition; it is an existential prerequisite for national resilience. At BharatX Group, our mission from inception has been to engineer foundational systems that do not merely consume global technologies, but originate them directly on Indian soil for multi-decade compounding.",
    ],
  },
  {
    id: "chapter-2",
    number: "02",
    title: "Multi-Sector Integration & Sovereign Corridors",
    content: [
      "Over the past fiscal period, our operating sectors have demonstrated the compounding strength of an integrated industrial ecosystem. Rather than fragmented efforts, our sectors reinforce one another at every link in the value chain.",
      "Our heavy civil engineering has set benchmarks in durable transport arteries; our advanced precision mobility lines have scaled high-spec component exports to international standards; and our agrarian food networks have established traceable, origin-certified supply corridors that empower over 1,200 rural smallholder farming families.",
    ],
  },
  {
    id: "chapter-3",
    number: "03",
    title: "Sovereign Deep-Tech & AI Leadership",
    content: [
      "In artificial intelligence and digital infrastructure, BharatX has taken a decisive leap. We reject the paradigm that Indian enterprise must permanently lease foreign proprietary black-box software.",
      "We are actively deploying production-grade, multilingual neural workflows natively capable across 22 regional Indian languages. By integrating automated telemetry directly into factories, farms, and logistics arteries, we deliver AI that operates reliably in the field with 100% domestic data sovereignty.",
    ],
  },
  {
    id: "chapter-4",
    number: "04",
    title: "The 2035 Horizon: Net-Zero & Sovereign Resilience",
    content: [
      "As we chart our course toward 2035, BharatX Group will continue to adhere to three permanent principles: patient balance-sheet capital, uncompromising engineering rigor, and transparent public accountability.",
      "We do not build for the next quarter's headlines. We build for the next generation of Indian prosperity. When corporate ambition is aligned with the collective potential of 1.4 billion citizens, there is no limit to what Bharat can achieve.",
    ],
  },
];

export function LeadershipKeynote() {
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-t border-[#E3E5EF] bg-[#FAF9F6] text-[#111827] dark:bg-night-950 dark:text-white">
      <div className="container-x relative z-10">
        {/* Section Tag */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3026B3]/20 bg-[#F1F6FF] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.26em] text-[#3026B3] dark:border-gold-400/30 dark:bg-gold-400/10 dark:text-gold-400 backdrop-blur-md">
              <span className="text-[#FFB000]">◆</span>
              <span>ANNUAL EXECUTIVE ADDRESS</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#111827] dark:text-white">
              “Building sovereign industrial depth for a Viksit Bharat.”
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#596579] dark:text-slate-300 font-body">
              Executive address on technological self-reliance, capital discipline, and our 2035 national milestones.
            </p>
          </Reveal>
        </div>

        {/* Widescreen Keynote Card (RIL AGM Presentation Style) */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5EF] bg-white shadow-lg dark:border-white/10 dark:bg-night-900">
            {/* Visual Header / Banner */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src="/assets/backgrounds/conglomerate-panorama.jpg"
                alt="BharatX Annual Executive Keynote"
                className="h-full w-full object-cover filter brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFB000] mb-3">
                  CONGLOMERATE STEWARDSHIP
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal max-w-2xl">
                  Chairman's Statement &amp; Institutional Charter
                </h3>
                <span className="mt-2 text-xs font-mono text-slate-200">
                  Annual General Assembly · New Delhi
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 border-t border-[#E3E5EF] bg-[#F7F7FC] dark:border-white/10 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#15966B] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#596579] dark:text-slate-300 font-semibold">
                  Official Public Disclosure
                </span>
              </div>

              {/* RIL Styled "View Transcript" Button */}
              <button
                type="button"
                onClick={() => setShowTranscript((v) => !v)}
                className="inline-flex items-center gap-3 rounded-full bg-[#3026B3] hover:bg-[#211B72] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm"
              >
                <span>{showTranscript ? "Hide Transcript" : "View Official Transcript"}</span>
                <Icon
                  name={showTranscript ? "chevron-up" : "chevron-down"}
                  width={14}
                  height={14}
                />
              </button>
            </div>

            {/* Expandable Transcript Panel (Exact RIL AGM feature) */}
            <AnimatePresence>
              {showTranscript && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-[#E3E5EF] bg-[#FAF9F6] dark:border-white/10 dark:bg-black/50"
                >
                  <div className="p-6 sm:p-10">
                    {/* Chapter selector tabs */}
                    <div className="flex flex-wrap gap-2 border-b border-[#E3E5EF] dark:border-white/10 pb-5 mb-8">
                      {transcriptChapters.map((ch, idx) => (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => setActiveChapter(idx)}
                          className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                            activeChapter === idx
                              ? "bg-[#3026B3] text-white font-semibold"
                              : "border border-[#E3E5EF] text-[#596579] hover:text-[#111827] hover:border-[#3026B3] dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
                          }`}
                        >
                          {ch.number}. {ch.title}
                        </button>
                      ))}
                    </div>

                    {/* Chapter Content */}
                    <div>
                      <span className="font-mono text-xs text-[#FFB000] font-semibold uppercase tracking-widest">
                        CHAPTER {transcriptChapters[activeChapter].number}
                      </span>
                      <h4 className="mt-2 font-serif text-2xl text-[#111827] dark:text-white">
                        {transcriptChapters[activeChapter].title}
                      </h4>
                      <div className="mt-4 space-y-4 text-sm sm:text-base text-[#596579] dark:text-slate-300 leading-relaxed font-body">
                        {transcriptChapters[activeChapter].content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
