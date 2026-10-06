import { Link } from "react-router-dom";
import { brandConfig } from "../../config/brand";
import { footerSections } from "../../data/navigation";
import { Icon } from "../../utils/icons";
import FooterOrbScene from "../three/FooterOrbScene";

export function FooterCTA() {
  return (
    <section className="gold-glow relative overflow-hidden border-t border-slate-200/80 dark:border-white/5 py-14 sm:py-16 md:py-20">
      <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-40 dark:opacity-60" />
      <div className="container-x relative flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#FFB000]/30 bg-[#FFB000]/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#FFB000]">
            <Icon name="sparkles" width={12} height={12} />
            <span>Connect with BharatX Group</span>
          </div>
          <h2 className="font-serif text-3xl font-normal leading-[1.05] tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl md:text-5xl lg:text-6xl">
            BUILDING THE FOUNDATIONS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3026B3] via-[#FFB000] to-[#00B8D9]">
              OF MODERN BHARAT.
            </span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[#596579] dark:text-ink-300">
            For sector partnerships, infrastructure development, industrial mobility, advanced agriculture and sovereign technology — connect with the group.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#3026B3] px-8 py-4 text-[15px] font-semibold text-white shadow-md shadow-[#3026B3]/25 transition-all duration-300 hover:bg-[#211B72] hover:shadow-[0_10px_35px_-8px_rgba(48,38,179,0.45)] dark:bg-[#FFB000] dark:text-[#111827] dark:hover:bg-[#e69e00]"
            >
              Talk to BharatX
              <Icon
                name="arrow-right"
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-[#E3E5EF] bg-white px-8 py-4 text-[15px] font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:border-[#3026B3] hover:text-[#3026B3] hover:shadow-md dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-[#FFB000]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* 3D Footer ecosystem scene */}
        <div className="relative flex w-full shrink-0 items-center justify-center lg:w-[480px] xl:w-[560px] 2xl:w-[620px]">
          <FooterOrbScene className="h-[340px] w-full sm:h-[400px] md:h-[440px] lg:h-[480px]" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E3E5EF] bg-[#FAF9F6] text-[#111827]">
      <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-20" />
      <div className="container-x relative z-10 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-10 md:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Institutional Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" aria-label="BharatX Group home" className="inline-block">
              <img
                src="/bharatxgroup.png"
                alt="BharatX Group"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            
            <div className="mt-4 font-serif text-xl sm:text-2xl font-normal text-[#111827] tracking-tight">
              BharatX Group
            </div>
            <p className="mt-1 font-mono text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#FFB000] font-semibold">
              Building Businesses. Enabling Bharat.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#596579] max-w-sm">
              A diversified Indian business group bringing together businesses, capital, technology and talent to create enduring enterprises across key growth sectors.
            </p>

            {/* Location & Contact Info */}
            <div className="mt-6 space-y-2.5 border-t border-[#E3E5EF] pt-4 font-mono text-[11.5px] text-[#596579] w-full max-w-sm">
              <div className="flex items-start gap-2.5">
                <Icon name="map-pin" width={14} height={14} className="shrink-0 mt-0.5 text-[#3026B3]" />
                <span className="leading-snug">{brandConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="phone" width={14} height={14} className="shrink-0 text-[#00B8D9]" />
                <a
                  href={`tel:${brandConfig.contact.phoneTel}`}
                  className="transition-colors hover:text-[#3026B3]"
                >
                  {brandConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="mail" width={14} height={14} className="shrink-0 text-[#FFB000]" />
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  className="transition-colors hover:text-[#3026B3]"
                >
                  {brandConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Navigation 4-Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* 1. Businesses */}
            <nav aria-label="Businesses">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#111827] font-bold">
                <Icon name="layers" width={13} height={13} className="text-[#3026B3]" />
                Businesses
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerSections.businesses.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-[#596579] transition-colors hover:text-[#3026B3]"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-[#3026B3] transition-all duration-300 group-hover:w-2.5"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2. Group */}
            <nav aria-label="Group">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#111827] font-bold">
                <Icon name="building-2" width={13} height={13} className="text-[#3026B3]" />
                Group
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerSections.group.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-[#596579] transition-colors hover:text-[#3026B3]"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-[#3026B3] transition-all duration-300 group-hover:w-2.5"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 3. Connect */}
            <nav aria-label="Connect">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#111827] font-bold">
                <Icon name="share-2" width={13} height={13} className="text-[#3026B3]" />
                Connect
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerSections.connect.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[13px] text-[#596579] transition-colors hover:text-[#3026B3]"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-[#3026B3] transition-all duration-300 group-hover:w-2.5"
                      />
                      <span>{item.label}</span>
                      <Icon
                        name="arrow-up-right"
                        width={11}
                        height={11}
                        className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 4. Legal */}
            <nav aria-label="Legal">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#111827] font-bold">
                <Icon name="shield-check" width={13} height={13} className="text-[#3026B3]" />
                Legal
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerSections.legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-[#596579] transition-colors hover:text-[#3026B3]"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-[#3026B3] transition-all duration-300 group-hover:w-2.5"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#E3E5EF] pt-5 md:flex-row">
          <p className="text-center sm:text-left font-mono text-[11px] uppercase tracking-[0.16em] text-[#596579]">
            © {new Date().getFullYear()} BharatX Group. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#596579] transition-colors hover:text-[#3026B3]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#596579] transition-colors hover:text-[#3026B3]">
              Terms of Use
            </Link>
            <Link to="/privacy#cookies" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#596579] transition-colors hover:text-[#3026B3]">
              Cookie Policy
            </Link>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#596579]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966B]" />
              Made in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
