import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/profile-site";
import { profilePages } from "@/lib/profile-site-data";
import { profilePageHead } from "@/lib/profile-metadata";

export const Route = createFileRoute("/contents")({
  head: () => profilePageHead("Contents", "Explore each section of the Zebnex Tech Solutions company profile."),
  component: ContentsPage,
});

function ContentsPage() {
  return (
    <main className="content-page">
      <PageIntro number={2} eyebrow="CONTENTS" title="What’s inside." />
      <div className="contents-list">
        {profilePages.slice(2).map((page) => (
          <Link className="contents-row" to={page.path} key={page.path}>
            <span className="contents-number">{String(page.number).padStart(2, "0")}</span>
            <span className="contents-title">{page.title}</span>
            <span className="contents-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </Link>
        ))}
      </div>
    </main>
  );
}