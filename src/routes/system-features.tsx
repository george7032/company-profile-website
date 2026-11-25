import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Bell, Boxes, CreditCard, FileText, LockKeyhole, Network, Package, Receipt, ShoppingCart, Users, Wallet } from "lucide-react";

import { FeatureTile, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const systemFeatures = [
  { icon: Boxes, title: "Inventory and stock", description: "Track stock in and out, set reorder levels, and catch shortages and expiry dates early." },
  { icon: Receipt, title: "POS sales", description: "Fast checkout with receipts, discounts, returns, shifts and end-of-day cash-up." },
  { icon: BarChart3, title: "Financial and accounting", description: "Income, expenses, ledgers, profit and loss, and balances by branch or account." },
  { icon: FileText, title: "Invoicing and receipts", description: "Quotations, invoices and receipts generated and sent in seconds." },
  { icon: CreditCard, title: "M-Pesa payments", description: "Payments matched to the right customer, unit or student automatically." },
  { icon: Users, title: "Customers and suppliers", description: "Profiles, history, balances and statements for everyone you deal with." },
  { icon: ShoppingCart, title: "Purchasing", description: "Purchase orders, supplier prices, goods received and payables." },
  { icon: LockKeyhole, title: "Staff and permissions", description: "Role-based access so each person sees only what they should." },
  { icon: BarChart3, title: "Reports and dashboards", description: "Live sales, collections, stock and performance, exportable to Excel or PDF." },
  { icon: Bell, title: "WhatsApp and SMS alerts", description: "Reminders, receipts and notices sent to customers and staff." },
  { icon: Network, title: "Multi-branch control", description: "One view across every shop, school, building or depot." },
  { icon: Package, title: "Security and backups", description: "Encrypted data, audit trails and daily backups, with local data protection rules in mind." },
];

export const Route = createFileRoute("/system-features")({
  head: () => profilePageHead("System features", "A practical set of modules for stock, payments, reporting, staff and security."),
  component: SystemFeaturesPage,
});

function SystemFeaturesPage() {
  return (
    <main className="content-page">
      <PageIntro number={8} eyebrow="SYSTEM FEATURES" title="What to expect in every system." lead="Modules are configured to your sector, so you only use what you need." />
      <div className="feature-grid feature-grid-four">
        {systemFeatures.map((feature) => <FeatureTile key={feature.title} icon={feature.icon} title={feature.title}>{feature.description}</FeatureTile>)}
      </div>
    </main>
  );
}