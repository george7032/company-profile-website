import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/profile-site";
import { profileAssets } from "@/lib/profile-assets";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/trusted-by")({
  head: () => profilePageHead("Trusted by", "Organizations that have worked with Zebnex Tech Solutions."),
  component: TrustedByPage,
});

function TrustedByPage() {
  return (
    <main className="content-page">
      <PageIntro number={13} eyebrow="TRUSTED BY" title="Organizations that have worked with Zebnex." />
      <div className="trusted-grid">
        {profileAssets.clients.map((client) => (
          <div className="trusted-item" key={client.name}>
            <img src={client.image.url} alt={client.name} loading="lazy" />
            <p>{client.name}</p>
          </div>
        ))}
        <Link to="/contact" className="trusted-invitation">
          <span className="eyebrow">Your organization next.</span>
          <strong>Join the organizations that run on dependable systems.</strong>
          <span className="text-link">Let’s talk <span aria-hidden="true">→</span></span>
        </Link>
      </div>
    </main>
  );
}