import { Link } from "react-router-dom";
import type { Company } from "../../types";
import { Icon } from "../../utils/icons";
import { Stagger, StaggerItem } from "../motion/Stagger";

/** Compact cross-link cards used on company pages. */
export function RelatedCompanies({ companies: list }: { companies: Company[] }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <StaggerItem key={c.id}>
          <Link
            to={`/companies/${c.slug}`}
            data-cursor="card"
            className="group fx-lift flex items-center gap-4 rounded-xl border border-white/8 bg-night-850 p-4 transition-all duration-300 hover:border-gold-400/40 hover:bg-night-800"
          >
            {c.logo ? (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-full w-full object-contain"
                />
              </span>
            ) : (
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center font-sans text-[12px] font-semibold text-ink-300 transition-colors duration-300 group-hover:text-gold-400"
              >
                {c.monogram}
              </span>
            )}
            <span className="min-w-0 flex-1">
              <span className="block truncate font-sans text-[15px] font-semibold text-ink-50 transition-colors duration-300 group-hover:text-gold-400">
                {c.name}
              </span>
              <span className="block truncate font-sans text-[10px] uppercase tracking-[0.14em] text-ink-500">
                {c.category}
              </span>
            </span>
            <Icon
              name="arrow-right"
              width={15}
              height={15}
              className="shrink-0 text-ink-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-400"
            />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
