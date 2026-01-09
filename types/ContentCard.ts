export interface CTA {
  text: string;
  href: string;
}

export interface ImageConfig {
  src: string;
  alt: string;
  position: "left" | "right";
}

export interface ContentCardModel {
  tag?: string;
  title: string;
  description: string;
  features?: string[];
  image: ImageConfig;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  hasBackground: boolean;
}
