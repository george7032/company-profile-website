import { createFileRoute } from "@tanstack/react-router";
import { Globe, Workflow } from "lucide-react";

import { PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const websiteServices = [
  "Company and corporate websites",
  "E-commerce stores with M-Pesa and cards",
  "Customer and client portals",
  "Booking and reservation platforms",
  "School and institution websites",
  "Landing pages and portfolios",
];

const managementSystems = [
  "Hospital management",
  "School management",
  "Wholesale management",
  "Pharmaceutical management",
  "Mini mart management",
  "Point of sale (POS)",
  "Property management",
  "Hardware and electronics",
  "Bookshop and stationery",
  "Groceries and fruit shops",
  "Laundry systems",
  "Auto spares shops",
  "Retail shops",
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="service-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export const Route = createFileRoute("/services")({
  head: () => profilePageHead("What we do", "Websites and custom management systems for businesses and institutions."),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="content-page">
      <PageIntro number={5} eyebrow="WHAT WE DO" title="Two ways we help." />
      <section className="service-band service-band-light">
        <div className="service-band-heading">
          <span className="service-number">01</span>
          <div>
            <Globe className="service-icon" aria-hidden="true" />
            <h2>Websites</h2>
          </div>
        </div>
        <p className="service-lead">Fast, responsive and easy to maintain, from a simple company site to a full online platform.</p>
        <ServiceList items={websiteServices} />
      </section>
      <section className="service-band service-band-dark">
        <div className="service-band-heading">
          <span className="service-number">02</span>
          <div>
            <Workflow className="service-icon" aria-hidden="true" />
            <h2>Management systems</h2>
          </div>
        </div>
        <p className="service-lead">Custom web-based systems that run daily operations, connect to M-Pesa, other payment gateways and WhatsApp, and report in real time.</p>
        <ServiceList items={managementSystems} />
      </section>
      <p className="page-note">Don’t see your sector? We build custom systems for other operations on request. Every system comes with hosting, training, support and monthly reporting, wherever you are.</p>
    </main>
  );
}