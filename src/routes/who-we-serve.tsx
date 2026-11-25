import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Building2, Compass, HeartPulse, ShieldCheck, ShoppingCart, Sparkles, Truck } from "lucide-react";

import { FeatureTile, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const sectors = [
  { icon: ShoppingCart, title: "Retail and wholesale", description: "Mini marts, groceries and fruit shops, hardware and electronics, bookshops, auto spares and general retail." },
  { icon: HeartPulse, title: "Healthcare", description: "Hospitals, clinics and pharmacies that need reliable records, stock and billing." },
  { icon: BookOpen, title: "Schools and institutions", description: "Boarding and day schools managing admissions, records, fees and facilities." },
  { icon: Building2, title: "Property", description: "Landlords, estate agents and property managers with residential and commercial portfolios." },
  { icon: Compass, title: "Tours, travel and transport", description: "Safari companies, tour operators and transport operators handling bookings, fleets and daily revenue." },
  { icon: ShieldCheck, title: "Security and facilities", description: "Companies managing guards, rosters, incidents, contracts and billing." },
  { icon: Truck, title: "Laundry and services", description: "Service businesses tracking orders, pickups, payments and customers." },
  { icon: Sparkles, title: "Growing businesses", description: "Organizations that need a professional website or a custom operations system." },
];

export const Route = createFileRoute("/who-we-serve")({
  head: () => profilePageHead("Who we serve", "Technology for retail, healthcare, education, property, travel and growing organizations."),
  component: WhoWeServePage,
});

function WhoWeServePage() {
  return (
    <main className="content-page">
      <PageIntro number={9} eyebrow="WHO WE SERVE" title="Organizations that run on records." />
      <div className="feature-grid feature-grid-four">
        {sectors.map((sector) => <FeatureTile key={sector.title} icon={sector.icon} title={sector.title}>{sector.description}</FeatureTile>)}
      </div>
    </main>
  );
}