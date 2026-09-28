import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";

export function WhyBharatXBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-black text-white">
      {/* Full-Bleed Atmospheric Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/backgrounds/sovereign-conglomerate.jpg"
          alt=""
          className="h-full w-full object-cover filter brightness-[0.45] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/85 via-night-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-night-950/60" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">
            <span>◆</span>
            <span>WHY BHARATX</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-white">
            Built for Scale.
            <br />
            <span className="text-slate-300">Engineered for Sovereignty.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
            We build foundational capabilities that outlast short-term cycles — governed like institutions, capitalized for decades, and focused purely on India's core industrial sovereignty.
          </p>
        </div>

        {/* 3 Minimalist Pillars */}
        <div className="mt-14 sm:mt-16 grid gap-8 sm:grid-cols-3 border-t border-white/10 pt-10">
          {[
            {
              num: "01",
              title: "Long-Term Capital Horizon",
              desc: "Deploying permanent capital with multi-decade compounding rather than quarter-to-quarter financial speculation.",
            },
            {
              num: "02",
              title: "Technological Independence",
              desc: "Engineering sovereign compute, indigenous algorithms, and autonomous manufacturing to safeguard national autonomy.",
            },
            {
              num: "03",
              title: "Integrated Industrial Moat",
              desc: "Connecting primary agriculture, precision manufacturing, and arterial transport into one unified economic network.",
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
              <span className="font-mono text-xs text-gold-400 font-bold tracking-widest">
                {pillar.num}
              </span>
              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-normal text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-md px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
          >
            <span>read our institutional charter</span>
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
