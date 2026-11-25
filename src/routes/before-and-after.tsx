import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3 } from "lucide-react";

import { PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const beforeItems = [
  "Rent and fees recorded in notebooks and chased by phone call",
  "Stock counted by hand, shortages found too late",
  "Month-end spent piecing together reports",
  "Cash and sales that are hard to reconcile",
  "Records in one person’s head or one computer",
];

const afterItems = [
  "Every payment recorded and matched automatically, reminders sent on WhatsApp",
  "Live stock levels with alerts before items run out or expire",
  "Dashboards and reports ready any day, in one click",
  "Every sale, receipt and M-Pesa payment on the record",
  "One secure system with roles, audit trails and daily backups",
];

export const Route = createFileRoute("/before-and-after")({
  head: () => profilePageHead("Before and after", "See how dependable systems change everyday operational work."),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  return (
    <main className="content-page">
      <PageIntro number={15} eyebrow="BEFORE AND AFTER" title="What changes when the system goes live." />
      <div className="comparison-grid">
        <section className="comparison-column comparison-before">
          <div className="comparison-heading"><Clock3 aria-hidden="true" /><h2>Before</h2></div>
          <ul>{beforeItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="comparison-column comparison-after">
          <div className="comparison-heading"><Check aria-hidden="true" /><h2>With Zebnex</h2></div>
          <ul>{afterItems.map((item) => <li key={item}>{item}<ArrowRight aria-hidden="true" /></li>)}</ul>
        </section>
      </div>
      <p className="page-note">Every organization is different. We start by looking at how yours runs today, and build from there.</p>
    </main>
  );
}