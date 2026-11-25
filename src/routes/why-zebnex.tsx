import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Blocks, LockKeyhole, MapPinned, Scaling } from "lucide-react";

import { PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const reasons = [
  { icon: Blocks, title: "Software and data under one roof", description: "We build the application, data and reporting together, with fewer hand-offs between vendors." },
  { icon: MapPinned, title: "Built for where you work", description: "Mobile money such as M-Pesa, WhatsApp communication and local operating conditions are part of the design in every market we serve, not add-ons." },
  { icon: LockKeyhole, title: "Security first", description: "Customer, payment and operational data are protected from the start, with attention to the data protection requirements of each market we serve." },
  { icon: BarChart3, title: "Data you can use", description: "Dashboards and reports turn daily activity into decisions about money, stock and operations." },
  { icon: Scaling, title: "Scales with you", description: "Start with one shop, one room or one building and extend across a portfolio without replacing the system." },
];

export const Route = createFileRoute("/why-zebnex")({
  head: () => profilePageHead("Why Zebnex", "Five practical reasons organizations choose Zebnex for dependable systems."),
  component: WhyZebnexPage,
});

function WhyZebnexPage() {
  return (
    <main className="content-page">
      <PageIntro number={10} eyebrow="WHY ZEBNEX" title="Five reasons clients choose us." />
      <div className="reasons-list">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <article className="reason-row" key={reason.title}>
              <span className="reason-number">{String(index + 1).padStart(2, "0")}</span>
              <Icon className="reason-icon" aria-hidden="true" />
              <div><h2>{reason.title}</h2><p>{reason.description}</p></div>
            </article>
          );
        })}
      </div>
    </main>
  );
}