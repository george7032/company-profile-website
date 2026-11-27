import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye } from "lucide-react";

import { PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/vision-and-mission")({
  head: () => profilePageHead("Vision and mission", "The vision and mission guiding Zebnex Tech Solutions."),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <main className="content-page">
      <PageIntro number={4} eyebrow="VISION AND MISSION" title="What we’re working towards." />
      <div className="vision-mission-grid">
        <section className="statement-block">
          <Eye className="statement-icon" aria-hidden="true" />
          <p className="eyebrow">Vision</p>
          <h2>Every organization, everywhere, runs on dependable systems.</h2>
          <p>From a rental portfolio to a school or clinic, we want every organization to be well-run and accountable.</p>
        </section>
        <section className="statement-block statement-block-dark">
          <Compass className="statement-icon" aria-hidden="true" />
          <p className="eyebrow">Mission</p>
          <h2>Systems that show what is happening, reduce losses and automate routine work.</h2>
          <p>We give businesses and institutions around the world dependable management systems and professional websites.</p>
        </section>
      </div>
    </main>
  );
}