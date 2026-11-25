import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Code2, Globe, MapPin, Network, Phone, Mail, UserRound } from "lucide-react";

import { ContactItem, FeatureTile, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/about")({
  head: () => profilePageHead("About Zebnex", "Meet the team building connected software, data and networking solutions."),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="content-page">
      <PageIntro
        number={3}
        eyebrow="ABOUT ZEBNEX"
        title="Software, data and networking in one team."
        lead="We build the systems that run day-to-day operations, and the AI agents that take routine work off your team."
      />
      <div className="about-copy-grid">
        <p>
          Zebnex Tech Solutions is a technology company building management systems and websites
          for businesses and institutions worldwide: software that runs day-to-day operations,
          with AI agents that automate routine work.
        </p>
        <p>
          We combine software development, data analysis and networking know-how in one team, so
          the systems we build are secure, connected and ready to report.
        </p>
      </div>
      <div className="feature-grid feature-grid-three">
        <FeatureTile icon={Code2} title="Software">
          Web-based systems and websites, designed around how your organization actually works.
        </FeatureTile>
        <FeatureTile icon={BarChart3} title="Data">
          Dashboards and reports that turn daily records into decisions.
        </FeatureTile>
        <FeatureTile icon={Network} title="Networking">
          Secure, reliable connectivity so your systems stay available where you work.
        </FeatureTile>
      </div>
      <section className="company-details" aria-labelledby="company-details-title">
        <p className="eyebrow" id="company-details-title">Company details</p>
        <div className="company-details-grid">
          <ContactItem icon={UserRound} label="Founder and CEO">George Kimani</ContactItem>
          <ContactItem icon={Phone} label="Phone / WhatsApp">
            <a href="tel:+254115339092">+254 115 339 092</a>
          </ContactItem>
          <ContactItem icon={Mail} label="Email">
            <a href="mailto:info@zebnextechsolutions.co.ke">info@zebnextechsolutions.co.ke</a>
          </ContactItem>
          <ContactItem icon={Globe} label="Website">
            <a href="https://www.zebnextechsolutions.co.ke">www.zebnextechsolutions.co.ke</a>
          </ContactItem>
          <ContactItem icon={MapPin} label="Location" >
            Benedicta, Utawala (Pioneer Trading Centre – P19), Nairobi
          </ContactItem>
        </div>
      </section>
    </main>
  );
}