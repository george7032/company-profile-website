import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactItem, PageIntro } from "@/components/profile-site";
import { profilePageHead } from "@/lib/profile-metadata";

const socialProfiles = [
  { name: "Instagram", href: "https://www.instagram.com/zebnextechsolutions/" },
  { name: "Facebook", href: "https://www.facebook.com/zebnextechsolutions" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/zebnextechsolutions" },
  { name: "X", href: "https://x.com/zebnextechsolutions" },
  { name: "TikTok", href: "https://www.tiktok.com/@zebnextechsolutions" },
];

export const Route = createFileRoute("/contact")({
  head: () => profilePageHead("Contact", "Contact Zebnex Tech Solutions in Nairobi about your organization’s systems and website."),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="content-page contact-page">
      <PageIntro number={16} eyebrow="CONTACT" title="Let’s talk about your organization." lead="Tell us how your organization runs today, and where you’d like it to be." />
      <div className="contact-layout">
        <div className="contact-details-list">
          <ContactItem icon={Phone} label="Phone / WhatsApp"><a href="tel:+254115339092">+254 115 339 092</a></ContactItem>
          <ContactItem icon={Mail} label="Email"><a href="mailto:info@zebnextechsolutions.co.ke">info@zebnextechsolutions.co.ke</a></ContactItem>
          <ContactItem icon={Globe} label="Website"><a href="https://www.zebnextechsolutions.co.ke">www.zebnextechsolutions.co.ke</a></ContactItem>
          <ContactItem icon={MapPin} label="Location">Benedicta, Utawala (Pioneer Trading Centre – P19), Nairobi</ContactItem>
        </div>
        <aside className="contact-card">
          <p className="eyebrow">Start a conversation</p>
          <h2>Let’s build something dependable.</h2>
          <p>Reach out to George Kimani and tell us about the work you want your system to make easier.</p>
          <Button asChild size="lg">
            <a href="https://wa.me/254115339092">
              Message on WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </aside>
      </div>
      <div className="social-row">
        <div><p className="eyebrow">Follow Zebnex</p><p className="social-handle">@zebnextechsolutions</p></div>
        <div className="social-links">
          {socialProfiles.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
              {social.name}<ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}