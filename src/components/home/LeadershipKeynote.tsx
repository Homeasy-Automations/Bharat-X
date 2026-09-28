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
    <section className="relative overflow-hidden py-20 sm:py-28 border-t border-white/10 bg-night-950 text-white">
      {/* Full-bleed Executive Assembly Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/backgrounds/strategic-story-panorama.jpg"
          alt=""
          className="h-full w-full object-cover filter brightness-[0.35] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/60 to-night-950/85" />
      </div>

      <div className="container-x relative z-10">
        {/* Section Tag */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.26em] text-gold-400 backdrop-blur-md">
              <span>◆</span>
              <span>ANNUAL EXECUTIVE ADDRESS</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
              “Building sovereign industrial depth for a Viksit Bharat.”
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 font-body">
              Executive address on technological self-reliance, capital discipline, and our 2035 national milestones.
            </p>
          </Reveal>
        </div>

        {/* Widescreen Keynote Card (RIL AGM Presentation Style) */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900 shadow-2xl">
            {/* Visual Header / Banner */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src="/assets/backgrounds/conglomerate-panorama.jpg"
                alt="BharatX Annual Executive Keynote"
                className="h-full w-full object-cover filter brightness-[0.90] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-night-900/25 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 mb-3">
                  CONGLOMERATE STEWARDSHIP
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal max-w-2xl">
                  Chairman's Statement &amp; Institutional Charter
                </h3>
                <span className="mt-2 text-xs font-mono text-slate-400">
                  Annual General Assembly · New Delhi
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Official Public Disclosure
                </span>
              </div>

              {/* RIL Styled "View Transcript" Button */}
              <button
                type="button"
                onClick={() => setShowTranscript((v) => !v)}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black px-6 py-2.5 text-xs sm:text-sm font-medium text-white transition-all"
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
                  className="overflow-hidden border-t border-white/10 bg-black/50"
                >
                  <div className="p-6 sm:p-10">
                    {/* Chapter selector tabs */}
                    <div className="flex flex-wrap gap-2 border-b border-white/10 pb-5 mb-8">
                      {transcriptChapters.map((ch, idx) => (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => setActiveChapter(idx)}
                          className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                            activeChapter === idx
                              ? "bg-gold-500 text-night-950 font-semibold"
                              : "border border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          {ch.number}. {ch.title}
                        </button>
                      ))}
                    </div>

                    {/* Chapter Content */}
                    <div>
                      <span className="font-mono text-xs text-gold-400 font-semibold uppercase tracking-widest">
                        CHAPTER {transcriptChapters[activeChapter].number}
                      </span>
                      <h4 className="mt-2 font-serif text-2xl text-white">
                        {transcriptChapters[activeChapter].title}
                      </h4>
                      <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
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
