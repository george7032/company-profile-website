import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BarChart3, Bot, Code2, Globe, Layers3, Network } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NetworkDiagram } from "@/components/profile-site";
import { profileAssets } from "@/lib/profile-assets";
import { profilePageHead } from "@/lib/profile-metadata";

const homeCapabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Software built around your work",
    description: "Custom management systems and websites shaped around the way your team handles daily operations.",
    detail: "Web platforms · Portals · Online services",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Clearer operational insight",
    description: "Connected records, reports and dashboards help teams understand what is happening and decide what comes next.",
    detail: "Records · Reporting · Decision support",
  },
  {
    number: "03",
    icon: Network,
    title: "Reliable digital foundations",
    description: "Networking and connectivity expertise helps keep systems secure, available and useful where work happens.",
    detail: "Connectivity · Integration · Support",
  },
];

const homeSystems = [
  {
    name: "Tenant Management System",
    category: "Property operations",
    image: profileAssets.tenantManager.url,
    alt: "Tenant Manager units and occupancy dashboard",
    description: "Manage units, leases, rent invoicing, arrears and maintenance requests in one connected workspace.",
    features: ["Units and leases", "Rent and arrears", "Maintenance"],
    to: "/systems" as const,
  },
  {
    name: "TicketPoint Live",
    category: "Transport ticketing",
    image: profileAssets.ticketpointLive.url,
    alt: "TicketPoint Live daily operations dashboard",
    description: "Bring mobile ticket purchases, kiosk issuing, driver verification and daily revenue into one system.",
    features: ["Mobile tickets", "Driver verification", "Revenue reports"],
    to: "/systems" as const,
  },
  {
    name: "SchoolDesk",
    category: "Education management",
    image: profileAssets.schooldeskStatement.url,
    alt: "SchoolDesk student fee statement",
    description: "Keep admissions, student records, fee collection, receipts and parent communication connected.",
    features: ["Student records", "Fees and receipts", "Parent updates"],
    to: "/selected-work" as const,
  },
  {
    name: "SafariDesk",
    category: "Tours and travel",
    image: profileAssets.safarideskFleet.url,
    alt: "SafariDesk fleet schedule",
    description: "Track bookings, itineraries, vehicles, drivers and quotations from first enquiry through payment.",
    features: ["Bookings", "Fleet planning", "Quotations"],
    to: "/selected-work" as const,
  },
];

const homeSectors = [
  "Education and institutions",
  "Property and facilities",
  "Tours, travel and transport",
  "Retail and wholesale",
  "Healthcare and pharmacies",
  "Security and services",
];

const homeStages = [
  { number: "01", title: "Understand", description: "Review your current workflows, priorities and operating environment." },
  { number: "02", title: "Plan", description: "Agree on a focused solution, practical targets and a clear rollout." },
  { number: "03", title: "Deliver", description: "Configure, launch and train your team with support along the way." },
  { number: "04", title: "Improve", description: "Monitor progress, share regular reporting and refine the system together." },
];

export const Route = createFileRoute("/")({
  head: () =>
    profilePageHead(
      "Zebnex Tech Solutions",
      "Dependable management systems, websites and AI agents for businesses and institutions worldwide.",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <>
    <main className="cover-page">
      <NetworkDiagram />
      <div className="cover-topline">
        <img className="cover-logo" src={profileAssets.logo.url} alt="Zebnex" />
        <div className="cover-edition">
          <strong>2026</strong>
          <span>Company profile</span>
        </div>
      </div>

      <section className="cover-copy">
        <p className="eyebrow">Management systems · Websites · AI agents</p>
        <h1 className="cover-title">
          <span>Zebnex</span>
          <span>
            Tech <em>Solutions</em>
          </span>
        </h1>
        <div className="cover-accent-line" />
        <p className="cover-description">
          Dependable systems for businesses and institutions, wherever they operate.
        </p>
        <div className="cover-capabilities" aria-label="Our areas of work">
          <span><b>01</b> Software</span>
          <span><b>02</b> Data</span>
          <span><b>03</b> Networking</span>
        </div>
        <Button asChild size="lg" className="cover-button">
          <Link to="/contents">
            Explore the profile <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </section>

      <div className="cover-bottomline">
        <a href="https://www.zebnextechsolutions.co.ke">www.zebnextechsolutions.co.ke</a>
        <span>Nairobi, Kenya · Serving clients worldwide</span>
      </div>
      <Link to="/about" className="cover-next-preview">
        <span><b>03</b> About Zebnex</span>
        <span>Software, data and networking in one team <ArrowRight aria-hidden="true" /></span>
      </Link>
    </main>

    <div className="home-corporate-content">
      <section className="home-overview home-corporate-section" aria-labelledby="home-overview-title">
        <div className="home-section-heading">
          <p className="eyebrow">A technology partner for operations</p>
          <span className="home-section-index">ZEBNEX · NAIROBI, KENYA</span>
        </div>
        <div className="home-overview-grid">
          <h2 id="home-overview-title">Technology that works the way your organization does.</h2>
          <div className="home-overview-copy">
            <p>Zebnex Tech Solutions brings software development, data analysis and networking together to help businesses and institutions run their day-to-day operations with confidence.</p>
            <p>From a company website to a complete management system, we work alongside your team to understand the need, deliver a practical solution and support it as your organization grows.</p>
            <Link to="/about" className="home-text-link">Get to know Zebnex <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="home-facts-row" aria-label="Zebnex at a glance">
          <div className="home-fact"><strong>03</strong><span>Connected disciplines</span><p>Software, data and networking in one team.</p></div>
          <div className="home-fact"><strong>04</strong><span>Featured platforms</span><p>Solutions for education, property, travel and transport.</p></div>
          <div className="home-fact home-fact-location"><Globe aria-hidden="true" /><span>Nairobi, Kenya</span><p>Working with organizations wherever they operate.</p></div>
        </div>
      </section>

      <section className="home-capabilities home-corporate-section" aria-labelledby="home-capabilities-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">What we bring together</p><h2 id="home-capabilities-title">Three disciplines. One connected partner.</h2></div>
          <Link to="/services" className="home-text-link">Explore our services <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-capability-grid">
          {homeCapabilities.map(({ number, icon: Icon, title, description, detail }) => (
            <article className="home-capability" key={number}>
              <div className="home-capability-top"><span>{number}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="home-capability-detail">{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-systems home-corporate-section" aria-labelledby="home-systems-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">Selected platforms</p><h2 id="home-systems-title">Systems made for the work behind the scenes.</h2></div>
          <Link to="/systems" className="home-text-link">View our systems <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-system-grid">
          {homeSystems.map((system) => (
            <article className="home-system-card" key={system.name}>
              <Link to={system.to} className="home-system-image-link" aria-label={`Explore ${system.name}`}>
                <img src={system.image} alt={system.alt} loading="lazy" />
              </Link>
              <div className="home-system-copy">
                <p className="home-system-category">{system.category}</p>
                <h3><Link to={system.to}>{system.name}</Link></h3>
                <p className="home-system-description">{system.description}</p>
                <div className="tag-list">{system.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
                <Link to={system.to} className="home-text-link">Explore platform <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-sectors home-corporate-section" aria-labelledby="home-sectors-title">
        <div className="home-sector-intro">
          <p className="eyebrow">Built for real operating environments</p>
          <h2 id="home-sectors-title">Technology shaped around your sector.</h2>
          <p>Different organizations have different demands. We tailor the system, workflow and support to the people who use it every day.</p>
          <Link to="/who-we-serve" className="home-text-link">See who we serve <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="home-sector-list">
          {homeSectors.map((sector, index) => <li key={sector}><span>{String(index + 1).padStart(2, "0")}</span>{sector}</li>)}
        </ul>
      </section>

      <section className="home-delivery home-corporate-section" aria-labelledby="home-delivery-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">A clear path from idea to everyday use</p><h2 id="home-delivery-title">Thoughtful delivery. Ongoing partnership.</h2></div>
          <Link to="/how-we-work" className="home-text-link">How we work <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-delivery-grid">
          {homeStages.map((stage) => (
            <article className="home-delivery-stage" key={stage.number}>
              <div className="home-delivery-number"><span>{stage.number}</span><Layers3 aria-hidden="true" /></div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
        <div className="home-ai-note">
          <span className="home-ai-icon"><Bot aria-hidden="true" /></span>
          <div><p className="eyebrow">Automation, when it makes sense</p><p>Optional AI agents can help handle routine enquiries, reminders, bookings and reporting—alongside your management system and using your organization’s data.</p></div>
          <Link to="/ai-agents" aria-label="Explore AI agents"><ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-clients home-corporate-section" aria-labelledby="home-clients-title">
        <div className="home-section-heading">
          <div><p className="eyebrow">Trusted by organizations</p><h2 id="home-clients-title">Built with the people who put it to work.</h2></div>
          <Link to="/trusted-by" className="home-text-link">Meet our clients <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-client-strip">
          {profileAssets.clients.map((client) => (
            <div className="home-client-mark" key={client.name}>
              <img src={client.image.url} alt={client.name} loading="lazy" />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-contact-band" aria-labelledby="home-contact-title">
        <div className="home-contact-copy">
          <p className="eyebrow">Start with a conversation</p>
          <h2 id="home-contact-title">Let’s make your next step a practical one.</h2>
          <p>Tell us what your team is managing today and what you want to improve. We’ll help you explore the right way forward.</p>
        </div>
        <div className="home-contact-actions">
          <Button asChild size="lg"><Link to="/contact">Talk to our team <ArrowRight aria-hidden="true" /></Link></Button>
          <a href="tel:+254115339092">+254 115 339 092</a>
          <a href="mailto:info@zebnextechsolutions.co.ke">info@zebnextechsolutions.co.ke</a>
        </div>
      </section>
    </div>
    </>
  );
}