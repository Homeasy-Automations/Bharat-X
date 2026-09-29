import { Link } from "react-router-dom";
import { brandConfig } from "../../config/brand";
import { footerColumns } from "../../data/navigation";
import { Icon } from "../../utils/icons";
import { Logo } from "./Logo";
import FooterOrbScene from "../three/FooterOrbScene";

const columnMeta: { key: "explore" | "services" | "company"; icon: string; title: string }[] = [
  { key: "explore", icon: "compass", title: "Explore" },
  { key: "services", icon: "layers", title: "Capabilities" },
  { key: "company", icon: "users", title: "Corporate" },
];

const socialIcons: Record<string, string> = {
  LinkedIn: "arrow-up-right",
  Instagram: "arrow-up-right",
  YouTube: "arrow-up-right",
  X: "arrow-up-right",
};

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
    <footer className="relative overflow-hidden border-t border-[#E3E5EF] bg-[#FAF9F6]">
      <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-20" />
      <div className="container-x relative z-10 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-8 md:pt-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* Brand */}
          <div className="w-full max-w-sm lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col items-center text-center lg:items-center lg:text-center">
            <Link to="/" aria-label="BharatX Group home" className="mb-2">
              <img
                src="/bharatxgroup.png"
                alt="BharatX Group"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#596579]">
              BharatX Group is a diversified conglomerate operating across technology &amp; AI, infrastructure, manufacturing, agriculture, food systems, and venture building.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {brandConfig.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3E5EF] text-[#596579] bg-white transition-all duration-300 hover:border-[#3026B3] hover:text-[#3026B3] hover:shadow-xs"
                >
                  <Icon name={socialIcons[s.label] ?? "arrow-up-right"} width={14} height={14} />
                </a>
              ))}
            </div>

            {/* Location & Contact */}
            <div className="mt-5 space-y-2 border-t border-[#E3E5EF] pt-4 font-mono text-[11px] text-[#596579]">
              <div className="flex items-start gap-2">
                <Icon name="map-pin" width={13} height={13} className="shrink-0 mt-0.5 text-[#3026B3]" />
                <span className="leading-snug">{brandConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" width={13} height={13} className="shrink-0 text-[#00B8D9]" />
                <a
                  href={`tel:${brandConfig.contact.phoneTel}`}
                  className="transition-colors hover:text-[#3026B3]"
                >
                  {brandConfig.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Columns in the same row */}
          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8 xl:gap-12">
            {/* Nav Columns */}
            {columnMeta.map((col) => {
              const items = footerColumns[col.key] || [];
              return (
                <nav key={col.key} aria-label={col.title}>
                  <div className="mb-4 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.26em] text-[#111827] font-semibold">
                    <Icon name={col.icon} width={13} height={13} className="text-[#3026B3]" />
                    {col.title}
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="group inline-flex items-center gap-2 text-[13.5px] text-[#596579] transition-colors hover:text-[#3026B3]"
                        >
                          <span
                            aria-hidden
                            className="h-px w-0 bg-[#3026B3] transition-all duration-300 group-hover:w-3"
                          />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>

        {/* Signature watermark */}
        <div
          aria-hidden
          className="pointer-events-none mt-12 select-none overflow-hidden"
        >
          <div className="whitespace-nowrap text-center font-display text-[15vw] font-extrabold leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#3026B3]/15 via-[#3026B3]/5 to-transparent lg:text-[10.5rem] transition-all duration-300">
            BHARATX GROUP
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-[#E3E5EF] pt-6 md:flex-row">
          <p className="text-center sm:text-left font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#596579]">
            © {new Date().getFullYear()} BharatX Group. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#596579] transition-colors hover:text-[#3026B3]">
              Privacy
            </Link>
            <Link to="/terms" className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#596579] transition-colors hover:text-[#3026B3]">
              Terms
            </Link>
            <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#596579]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966B]" />
              Made in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
