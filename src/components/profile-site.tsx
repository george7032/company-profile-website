import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu, X, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { coverPage, pageForPath, profilePages, type ProfilePage } from "@/lib/profile-site-data";
import { profileAssets } from "@/lib/profile-assets";

const primaryLinks = [
  { label: "Contents", to: "/contents" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Systems", to: "/systems" },
  { label: "Contact", to: "/contact" },
] as const;

export function ProfileFrame({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const page = pageForPath(location.pathname);
  const currentIndex = profilePages.findIndex((item) => item.path === location.pathname);
  const previousPage = currentIndex > 0 ? profilePages[currentIndex - 1] : undefined;
  const nextPage = currentIndex >= 0 ? profilePages[currentIndex + 1] : undefined;
  const cover = page.number === coverPage.number;

  return (
    <div className={cover ? "profile-frame profile-frame-cover" : "profile-frame"}>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand-lockup" aria-label="Zebnex Tech Solutions home">
            <img className="brand-mark" src={profileAssets.logo.url} alt="" />
            <span className="brand-copy">
              <span className="brand-name">Zebnex Tech Solutions</span>
              <span className="brand-caption">Management systems · Websites · AI agents</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {primaryLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? "nav-link nav-link-active" : "nav-link"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            className="mobile-menu-button"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Main navigation">
            {primaryLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
        ) : null}
        <div className="header-rule">
          <span className="header-section-label">{page.section}</span>
        </div>
      </header>

      <div className="profile-page-content">{children}</div>

      <footer className="site-footer">
        <a href="https://www.zebnextechsolutions.co.ke" className="footer-site-link">
          www.zebnextechsolutions.co.ke
        </a>
        <div className="footer-page-nav" aria-label="Profile page navigation">
          {previousPage ? <PageArrow page={previousPage} direction="previous" /> : <span />}
          <span className="footer-page-count">
            {String(page.number).padStart(2, "0")} / 16
          </span>
          {nextPage ? <PageArrow page={nextPage} direction="next" /> : <span />}
        </div>
      </footer>
      <div className="page-progress" aria-hidden="true" />
    </div>
  );
}

function PageArrow({ page, direction }: { page: ProfilePage; direction: "previous" | "next" }) {
  const Icon = direction === "previous" ? ArrowLeft : ArrowRight;

  return (
    <Button asChild variant="ghost" size="icon" className="page-arrow">
      <Link
        to={page.path}
        title={`${direction === "previous" ? "Previous" : "Next"}: ${page.title}`}
        aria-label={`${direction === "previous" ? "Previous" : "Next"} page: ${page.title}`}
      >
        <Icon aria-hidden="true" />
      </Link>
    </Button>
  );
}

export function PageIntro({
  number,
  eyebrow,
  title,
  lead,
}: {
  number: number;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="page-intro">
      <span className="page-watermark" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </span>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {lead ? <div className="page-lead">{lead}</div> : null}
    </div>
  );
}

export function FeatureTile({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`feature-tile ${className}`}>
      <Icon className="feature-icon" aria-hidden="true" />
      <h2>{title}</h2>
      <div className="feature-description">{children}</div>
    </article>
  );
}

export function NumberedStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="numbered-step">
      <span className="step-number">{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </article>
  );
}

export function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="contact-item">
      <span className="contact-icon-wrap">
        <Icon className="contact-icon" aria-hidden="true" />
      </span>
      <div>
        <p className="detail-label">{label}</p>
        <div className="contact-value">{children}</div>
      </div>
    </div>
  );
}

export function ProjectImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="project-image-wrap">
      <img src={src} alt={alt} className="project-image" loading="lazy" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function NetworkDiagram() {
  return (
    <div className="network-diagram" aria-hidden="true">
      <svg viewBox="0 0 640 640" role="presentation">
        <circle className="diagram-ring diagram-ring-large" cx="320" cy="320" r="300" />
        <circle className="diagram-ring diagram-ring-mid" cx="320" cy="320" r="222" />
        <circle className="diagram-ring diagram-ring-dashed" cx="320" cy="320" r="154" />
        <path className="diagram-line" d="M105 144 228 82 320 32 433 140 530 255 494 427 385 544 226 508 102 391 105 144Z" />
        <path className="diagram-line diagram-line-strong" d="M320 168 472 320 320 472 168 320Z" />
        <path className="diagram-line" d="M105 144 320 320 530 255 385 544 228 82 226 508 494 427 102 391 433 140 320 32" />
        <circle className="diagram-node diagram-node-solid" cx="105" cy="144" r="8" />
        <circle className="diagram-node" cx="228" cy="82" r="7" />
        <circle className="diagram-node" cx="320" cy="32" r="7" />
        <circle className="diagram-node diagram-node-solid" cx="433" cy="140" r="8" />
        <circle className="diagram-node" cx="530" cy="255" r="7" />
        <circle className="diagram-node diagram-node-solid" cx="494" cy="427" r="8" />
        <circle className="diagram-node" cx="385" cy="544" r="7" />
        <circle className="diagram-node diagram-node-solid" cx="226" cy="508" r="8" />
        <circle className="diagram-node" cx="102" cy="391" r="7" />
        <circle className="diagram-center" cx="320" cy="320" r="11" />
      </svg>
    </div>
  );
}