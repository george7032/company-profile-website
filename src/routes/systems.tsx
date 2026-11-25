import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, ProjectImage } from "@/components/profile-site";
import { profileAssets } from "@/lib/profile-assets";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/systems")({
  head: () => profilePageHead("Systems we build", "Selected property and transport platforms developed by Zebnex Tech Solutions."),
  component: SystemsPage,
});

function SystemsPage() {
  return (
    <main className="content-page">
      <PageIntro number={11} eyebrow="SELECTED WORK" title="Systems we build." />
      <article className="project-entry">
        <ProjectImage src={profileAssets.tenantManager.url} alt="Tenant Manager units and occupancy dashboard" label="Tenant Manager · Units and occupancy" />
        <div className="project-description">
          <div className="project-title-block"><span className="project-number">01</span><div><h2>Tenant Management System</h2><p className="project-category">Property</p></div></div>
          <div><p>A property platform covering units, leases, rent invoicing and maintenance requests. Landlords get a live view of collections and arrears, with M-Pesa payments matched to units.</p><div className="tag-list"><span>Units and leases</span><span>Rent invoicing</span><span>Arrears tracking</span><span>Maintenance</span></div></div>
        </div>
      </article>
      <article className="project-entry">
        <ProjectImage src={profileAssets.ticketpointLive.url} alt="TicketPoint Live operations dashboard" label="TicketPoint Live · Daily operations" />
        <div className="project-description">
          <div className="project-title-block"><span className="project-number">02</span><div><h2>TUK Ticketing System</h2><p className="project-category">Transport</p></div></div>
          <div><p>A digital ticketing platform for a tuk tuk transport operator, with mobile ticket purchase, kiosk issuing, driver verification and daily revenue reporting in one system.</p><div className="tag-list"><span>Mobile tickets</span><span>Kiosk issuing</span><span>Driver verification</span><span>Daily revenue</span></div></div>
        </div>
      </article>
      <p className="fine-print">Interfaces shown with sample data.</p>
    </main>
  );
}