import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NetworkDiagram } from "@/components/profile-site";
import { profileAssets } from "@/lib/profile-assets";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/")({
  head: () =>
    profilePageHead(
      "Zebnex Tech Solutions",
      "Dependable management systems, websites and AI agents for businesses and institutions worldwide.",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="cover-page">
      <NetworkDiagram />
      <div className="cover-topline">
        <img className="cover-logo" src={profileAssets.logo.url} alt="Zebnex" />
        <div className="cover-edition">
          <strong>2026</strong>
          <span>Company profile</span>
        </div>
      </div>

      <section className="cover-copy">
        <p className="eyebrow">Management systems · Websites · AI agents</p>
        <h1 className="cover-title">
          <span>Zebnex</span>
          <span>
            Tech <em>Solutions</em>
          </span>
        </h1>
        <div className="cover-accent-line" />
        <p className="cover-description">
          Dependable systems for businesses and institutions, wherever they operate.
        </p>
        <div className="cover-capabilities" aria-label="Our areas of work">
          <span><b>01</b> Software</span>
          <span><b>02</b> Data</span>
          <span><b>03</b> Networking</span>
        </div>
        <Button asChild size="lg" className="cover-button">
          <Link to="/contents">
            Explore the profile <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </section>

      <div className="cover-bottomline">
        <a href="https://www.zebnextechsolutions.co.ke">www.zebnextechsolutions.co.ke</a>
        <span>Nairobi, Kenya · Serving clients worldwide</span>
      </div>
      <Link to="/about" className="cover-next-preview">
        <span><b>03</b> About Zebnex</span>
        <span>Software, data and networking in one team <ArrowRight aria-hidden="true" /></span>
      </Link>
    </main>
  );
}