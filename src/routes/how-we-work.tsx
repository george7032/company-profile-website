import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Gauge, Handshake, Layers3 } from "lucide-react";

import { NumberedStep, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const stages = [
  { icon: Gauge, number: "01", title: "Assess", copy: "We visit your facility or meet online, review how it runs today and agree what to measure and improve." },
  { icon: ClipboardCheck, number: "02", title: "Pilot", copy: "We deploy a small, well-defined pilot with clear targets, such as reduced arrears, faster stock counts or quicker billing." },
  { icon: Layers3, number: "03", title: "Roll out", copy: "We extend the system across units, rooms, shops or branches, and train your staff." },
  { icon: Handshake, number: "04", title: "Manage", copy: "We host, monitor and support the system, report monthly, and keep improving it with you." },
];

export const Route = createFileRoute("/how-we-work")({
  head: () => profilePageHead("How we work", "A four-stage approach from first visit through steady support and improvement."),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <main className="content-page">
      <PageIntro number={14} eyebrow="HOW WE WORK" title="From first visit to steady running." />
      <div className="workflow-line" aria-hidden="true" />
      <div className="workflow-grid">
        {stages.map((stage) => {
          const Icon = stage.icon;
          return (
            <article className="workflow-stage" key={stage.number}>
              <div className="workflow-stage-top"><span>{stage.number}</span><Icon aria-hidden="true" /></div>
              <h2>{stage.title}</h2>
              <p>{stage.copy}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}