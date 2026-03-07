import React from "react";

/* =========================
   THEME
========================= */

export type theme = "AOSSIE" | "light" | "dark" | "minimal" | "corporate";

/* =========================================================
   Button Variant
========================================================= */

export type ButtonVariant = "solid" | "outline" | "ghost" | "gradient";

/* =========================
   IMAGE TYPE
========================= */

export type image = {
  src?: string;
  alt?: string;
};

/* =========================
   HERO SECTION
========================= */

export type hero = {
  /** Optional hero background image */
  image?: image;

  title: string;
  description: string;

  /** Label like: YOU'RE SPONSORING */
  sponsorLabel?: string;
};

/* =========================
   PROJECT INFORMATION
========================= */

export type projectInformation = {
  name: string;
  description: string;
};

/* =========================
   ORGANIZATION INFORMATION
========================= */

export type organizationInformation = {
  name: string;
  description: string;

  /** Organization logo */
  logo?: image | string;

  projectInformation: projectInformation;
};

/* =========================
   SPONSOR TIERS
========================= */

export type Tier = "Platinum" | "Gold" | "Silver" | "Bronze";

/* =========================
   SPONSOR CARD
========================= */

export type sponsor = {
  name: string;

  /** Sponsor logo or avatar */
  logo?: string;

  /** Sponsor website */
  link?: string;

  /** Sponsorship tier */
  sponsorshipTier?: Tier;
};

/* =========================
   CURRENT SPONSORS
========================= */

export type sponsors = sponsor[];

/* =========================
   SPONSOR LINKS (CTA)
========================= */

export type sponsorLink = {
  name: string;
  url: string;
  icon?: React.ReactNode;
  className?: string;

  /** open link in new tab */
  newTab?: boolean;
};

/* =========================
   CTA SECTION
========================= */

export type CTAsection = {
  title: string;
  description: string;
  sponsorLink: sponsorLink[];
};

/* =========================
   BACKGROUND PATTERNS
========================= */

export type pattern = "dots" | "grid" | "stripes" | "none";

/* =========================
   SUPPORT US COMPO PROPS
========================= */

export interface supportUsButtonProps {
  // Theme for the button, can be one of "AOSSIE", "light", "dark", "minimal", or "corporate"
  theme?: theme;

  // Optional background pattern for the button, can be one of "dots", "grid", "stripes", or "none"
  pattern?: pattern;

  // Information about the hero section, including title, description, sponsor label, and optional background image
  Hero: hero;

  // Information about the organization, including name, description, logo, and project information
  organizationInformation: organizationInformation;

  // List of current sponsors, each with name, optional logo, link, and sponsorship tier
  sponsors: sponsors;

  // Information about the call-to-action section, including title, description, and sponsor links
  CTAsection: CTAsection;

  // Optional class name for custom styling
  classNames?: {
    container?: string;
    hero?: string;
    organizationInformation?: string;
    sponsors?: string;
    CTAsection?: string;
  };

  // Optional button variant for styling the call-to-action buttons
  ButtonVariant?: ButtonVariant;
}
