import { companies } from "../../data/companies";
import { Stagger, StaggerItem } from "../motion/Stagger";
import { CompanyCard } from "./CompanyCard";

/**
 * Six-company showcase with alternating layouts (Section 14).
 */
export function CompanyGrid() {
  return (
    <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {companies.map((c) => (
        <StaggerItem key={c.id} className="h-full">
          <CompanyCard
            company={c}
            layout="stacked"
            className="h-full"
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
