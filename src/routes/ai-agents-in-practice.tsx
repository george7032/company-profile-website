import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardCheck, MessageCircle, Send, ShieldCheck } from "lucide-react";

import { NumberedStep, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const steps = [
  { number: "01", title: "Listen", copy: "Messages, payments and records arrive from tenants, parents, staff and customers." },
  { number: "02", title: "Decide", copy: "The agent matches them to the right account, unit or item using your rules." },
  { number: "03", title: "Act", copy: "It replies, reminds, assigns or updates the record, and logs every action." },
  { number: "04", title: "Report", copy: "You see the outcome in your dashboard and your weekly summary." },
];

export const Route = createFileRoute("/ai-agents-in-practice")({
  head: () => profilePageHead("AI agents in practice", "A transparent, approval-led workflow for AI agents connected to your operations."),
  component: AiPracticePage,
});

function AiPracticePage() {
  return (
    <main className="content-page">
      <PageIntro number={7} eyebrow="AI AGENTS IN PRACTICE" title="What it looks like day to day." />
      <div className="practice-layout">
        <div className="practice-steps">
          {steps.map((step) => <NumberedStep key={step.number} number={step.number} title={step.title}>{step.copy}</NumberedStep>)}
        </div>
        <section className="chat-demo" aria-label="Illustrative collections agent conversation">
          <div className="chat-demo-header">
            <span className="chat-status-dot" />
            <div><strong>Collections agent</strong><span>WhatsApp · Utawala Court</span></div>
            <MessageCircle aria-hidden="true" />
          </div>
          <div className="chat-message chat-message-agent">
            <span>Good morning, Jane. A reminder that KSh 18,500 is due for Unit B4. You can pay by M-Pesa as usual.</span>
            <small>09:10 · sent</small>
          </div>
          <div className="chat-message chat-message-customer">
            <span>Paid just now, thank you.</span>
            <small>09:14 · received</small>
          </div>
          <div className="chat-message chat-message-system">
            <CheckCircle2 aria-hidden="true" />
            <span>Payment matched to Jane · Unit B4</span>
          </div>
          <div className="chat-demo-footer"><Send aria-hidden="true" /> Every action is recorded in the system</div>
        </section>
      </div>
      <section className="control-callout">
        <ShieldCheck className="callout-icon" aria-hidden="true" />
        <div>
          <p className="eyebrow">You stay in control</p>
          <p>Sensitive actions can require your approval before they are sent. Every message is logged, you control what agents can access, and they can be switched off at any time.</p>
        </div>
        <ClipboardCheck className="control-watermark" aria-hidden="true" />
      </section>
    </main>
  );
}