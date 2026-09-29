import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";

export function WhyBharatXBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 border-y border-[#E3E5EF] bg-[#FAF9F6] text-[#111827]">
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[#3026B3]">
            <span className="text-[#FFB000]">◆</span>
            <span>WHY BHARATX</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#111827]">
            Built for Scale.
            <br />
            <span className="text-[#3026B3]">Engineered for Sovereignty.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#596579] leading-relaxed font-body">
            We build foundational capabilities that outlast short-term cycles — governed like institutions, capitalized for decades, and focused purely on India's core industrial sovereignty.
          </p>
        </div>

        {/* 3 Minimalist Pillars */}
        <div className="mt-14 sm:mt-16 grid gap-8 sm:grid-cols-3 border-t border-[#E3E5EF] pt-10">
          {[
            {
              num: "01",
              title: "Long-Term Capital Horizon",
              desc: "Deploying permanent capital with multi-decade compounding rather than quarter-to-quarter financial speculation.",
              color: "#3026B3",
            },
            {
              num: "02",
              title: "Technological Independence",
              desc: "Engineering sovereign compute, indigenous algorithms, and autonomous manufacturing to safeguard national autonomy.",
              color: "#00B8D9",
            },
            {
              num: "03",
              title: "Integrated Industrial Moat",
              desc: "Connecting primary agriculture, precision manufacturing, and arterial transport into one unified economic network.",
              color: "#15966B",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col pr-4"
            >
              <span
                className="font-mono text-xs font-bold tracking-widest"
                style={{ color: pillar.color }}
              >
                {pillar.num}
              </span>
              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-normal text-[#211B72]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-[#596579] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 rounded-full bg-[#3026B3] hover:bg-[#211B72] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all"
          >
            <span>Read Our Institutional Charter</span>
            <Icon
              name="arrow-right"
              width={14}
              height={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
