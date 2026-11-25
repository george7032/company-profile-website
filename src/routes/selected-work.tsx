import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, ProjectImage } from "@/components/profile-site";
import { profileAssets } from "@/lib/profile-assets";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/selected-work")({
  head: () => profilePageHead("Selected work", "School and safari management systems designed for everyday operations."),
  component: SelectedWorkPage,
});

function SelectedWorkPage() {
  return (
    <main className="content-page">
      <PageIntro number={12} eyebrow="SELECTED WORK" title="Institutions and tours." />
      <article className="project-entry">
        <ProjectImage src={profileAssets.schooldeskStatement.url} alt="SchoolDesk student fee statement" label="SchoolDesk · Student fee statement" />
        <div className="project-description">
          <div className="project-title-block"><span className="project-number">03</span><div><h2>School Management System</h2><p className="project-category">Education</p></div></div>
          <div><p>Admissions, student records, fee collection, receipts and parent communication. Fee balances and reminders go out over WhatsApp, and receipts are issued as M-Pesa payments arrive.</p><div className="tag-list"><span>Fees and receipts</span><span>Student records</span><span>Parent messaging</span><span>Report cards</span></div></div>
        </div>
      </article>
      <article className="project-entry">
        <ProjectImage src={profileAssets.safarideskFleet.url} alt="SafariDesk fleet schedule" label="SafariDesk · Fleet schedule" />
        <div className="project-description">
          <div className="project-title-block"><span className="project-number">04</span><div><h2>Tours and Safari Management System</h2><p className="project-category">Tours and travel</p></div></div>
          <div><p>Bookings, itineraries, vehicles and drivers, quotations, invoices and receipts for a tours operator, so every trip is tracked from first enquiry to final payment.</p><div className="tag-list"><span>Bookings</span><span>Itineraries</span><span>Quotations</span><span>Fleet and drivers</span></div></div>
        </div>
      </article>
      <p className="fine-print">Interfaces shown with sample data.</p>
    </main>
  );
}