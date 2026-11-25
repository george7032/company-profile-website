import { createFileRoute } from "@tanstack/react-router";
import { Bell, Bot, CalendarCheck, ChartBar, MessageSquareText, Package, Wrench } from "lucide-react";

import { FeatureTile, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const agentTypes = [
  { icon: Bell, title: "Collections agent", description: "Sends rent and fee reminders over WhatsApp and follows up on arrears." },
  { icon: Wrench, title: "Maintenance agent", description: "Receives faults from tenants or staff, categorizes them, assigns them and tracks them to closure." },
  { icon: ChartBar, title: "Reporting agent", description: "Writes plain-language weekly summaries of collections, faults and costs." },
  { icon: MessageSquareText, title: "Enquiry agent", description: "Answers customer questions on WhatsApp about prices, availability and bookings at any hour." },
  { icon: Package, title: "Stock agent", description: "Watches stock levels and expiry dates and alerts you before items run out or expire." },
  { icon: CalendarCheck, title: "Booking agent", description: "Captures booking requests, checks availability and prepares quotations for your approval." },
];

export const Route = createFileRoute("/ai-agents")({
  head: () => profilePageHead("AI agents", "Optional AI agents that handle routine reminders, enquiries, bookings and reporting."),
  component: AiAgentsPage,
});

function AiAgentsPage() {
  return (
    <main className="content-page">
      <PageIntro
        number={6}
        eyebrow="AI AGENTS"
        title="Routine work, handled around the clock."
        lead={<>An AI agent is software that takes on a repeatable task for you. It reads incoming messages and records, decides what needs to happen, and acts: reminding, sorting, answering and reporting, while your team focuses on people and decisions.</>}
      />
      <div className="feature-grid feature-grid-three">
        {agentTypes.map((agent) => <FeatureTile key={agent.title} icon={agent.icon} title={agent.title}>{agent.description}</FeatureTile>)}
      </div>
      <div className="soft-callout">
        <Bot className="callout-icon" aria-hidden="true" />
        <p>Agents are optional and work alongside your management system, using your own data.</p>
      </div>
    </main>
  );
}