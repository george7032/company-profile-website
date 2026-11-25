export const coverPage = {
  number: 1,
  path: "/",
  section: "COVER",
  title: "Zebnex Tech Solutions",
} as const;

export const profilePages = [
  coverPage,
  { number: 2, path: "/contents", section: "CONTENTS", title: "What’s inside." },
  { number: 3, path: "/about", section: "ABOUT ZEBNEX", title: "Software, data and networking in one team." },
  { number: 4, path: "/vision-and-mission", section: "VISION AND MISSION", title: "What we’re working towards." },
  { number: 5, path: "/services", section: "WHAT WE DO", title: "Two ways we help." },
  { number: 6, path: "/ai-agents", section: "AI AGENTS", title: "Routine work, handled around the clock." },
  { number: 7, path: "/ai-agents-in-practice", section: "AI AGENTS IN PRACTICE", title: "What it looks like day to day." },
  { number: 8, path: "/system-features", section: "SYSTEM FEATURES", title: "What to expect in every system." },
  { number: 9, path: "/who-we-serve", section: "WHO WE SERVE", title: "Organizations that run on records." },
  { number: 10, path: "/why-zebnex", section: "WHY ZEBNEX", title: "Five reasons clients choose us." },
  { number: 11, path: "/systems", section: "SELECTED WORK", title: "Systems we build." },
  { number: 12, path: "/selected-work", section: "SELECTED WORK", title: "Institutions and tours." },
  { number: 13, path: "/trusted-by", section: "TRUSTED BY", title: "Organizations that have worked with Zebnex." },
  { number: 14, path: "/how-we-work", section: "HOW WE WORK", title: "From first visit to steady running." },
  { number: 15, path: "/before-and-after", section: "BEFORE AND AFTER", title: "What changes when the system goes live." },
  { number: 16, path: "/contact", section: "CONTACT", title: "Let’s talk about your organization." },
] as const;

export type ProfilePage = (typeof profilePages)[number];
export type ProfilePath = ProfilePage["path"];

export function pageForPath(path: string): ProfilePage {
  return profilePages.find((page) => page.path === path) ?? coverPage;
}