import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";

export function HomeFinalCTA() {
  return (
    <section
      aria-label="Final Call to Action"
      className="relative overflow-hidden bg-gradient-to-br from-[#211B72] via-[#1D1763] to-[#120E3E] text-white py-20 sm:py-24 md:py-28"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-r from-[#3026B3]/30 via-[#FFB000]/20 to-transparent blur-[140px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFB000]/40 bg-[#FFB000]/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000] font-bold shadow-xs"
          >
            <span className="h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_8px_#FFB000]" />
            <span>LET'S COLLABORATE</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
          >
            Let’s Build{" "}
            <span className="text-[#FFB000]">What Comes Next.</span>
          </motion.h2>

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl mx-auto"
          >
            Whether you’re a business partner, investor, entrepreneur, institution or technology partner, let’s explore what we can build together.
          </motion.p>

          {/* Action Suite */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB000] hover:bg-[#e09800] text-[#111827] px-8 sm:px-10 py-4 text-[15px] font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
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
              <span>Explore Businesses</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
