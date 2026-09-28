import { Link } from "react-router-dom";
import { Icon } from "../../utils/icons";
import { brandConfig } from "../../config/brand";

export function ContactCTAStrip() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-night-950 py-16 sm:py-20 text-white">
      {/* Full-bleed Economic Network Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/backgrounds/conglomerate-panorama.jpg"
          alt=""
          className="h-full w-full object-cover filter brightness-[0.35] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 via-night-950/50 to-night-950/85" />
      </div>

      <div className="container-x relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-sm">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.26em] text-gold-400 mb-3">
              <span>◆</span>
              <span>INSTITUTIONAL ENGAGEMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
              Partner with BharatX
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-body">
              For sector collaborations, joint ventures, sovereign infrastructure tenders, and institutional inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-3.5 text-sm font-semibold text-night-950 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            >
              <span>Start an Inquiry</span>
              <Icon name="arrow-right" width={15} height={15} />
            </Link>

            <a
              href={`mailto:${brandConfig.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors"
            >
              <Icon name="mail" width={14} height={14} className="text-gold-400" />
              <span>{brandConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
