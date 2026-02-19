export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  company: string;      // ✅ add this
  location: string;
  posted: string;       // ✅ add this
  salary: string;
  description: string;
  type?: string;  
}

export interface Step {
  id: number;
  stepNumber: string;
  title: string;
  // description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}
