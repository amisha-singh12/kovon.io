import { NavLink, Feature, Step, FooterSection, SocialLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Browse Jobs', href: '/jobs' },
  { label: 'About', href: '/about' },
  { label: 'Culture', href: '/culture' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Employers', href: '/employers' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_CONTENT = {
  headline: 'Your Passport to',
  highlightedText: 'Global Work',
  description:
    'Kovon opens doors for millions of skilled workers to pursue meaningful careers across the world.',
  primaryCta: 'Register with us',
  secondaryCta: 'How it Works',
  jobsCount: '24,532',
};

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Lift Installer at Israel',
    company: 'ALFA DIVINE CONSULTANT LLP',
    location: 'Israel',
    salary: '₹2.2L - ₹2.7L / Month',
    posted: '4 weeks ago',
    type: 'FULL TIME',
    description:
      'Installs, tests, and commissions lift/elevator systems, ensuring proper alignment, safety standards, and compliance with regulations.',
  },
  {
    id: 2,
    title: 'Mechanical Project Leader',
    company: 'M/S. SUPER ASIA MANPOWER SERVICES',
    location: 'Saudi Arabia',
    salary: '₹2L - ₹2.5L / Month',
    posted: '3 weeks ago',
    type: 'FULL TIME',
    description:
      'Leads planning, execution, and delivery of mechanical projects, coordinating teams, budgets, and timelines efficiently.',
  },
  {
    id: 3,
    title: 'Electrical Technician',
    company: 'GLOBAL TECH SOLUTIONS',
    location: 'Qatar',
    salary: '₹1.8L - ₹2.3L / Month',
    posted: '1 week ago',
    type: 'FULL TIME',
    description:
      'Responsible for installation, troubleshooting, and maintenance of electrical systems across commercial sites.',
  },
  {
    id: 4,
    title: 'Construction Supervisor',
    company: 'INTERNATIONAL BUILD CORP',
    location: 'Dubai, UAE',
    salary: '₹2.5L - ₹3L / Month',
    posted: '5 days ago',
    type: 'FULL TIME',
    description:
      'Oversees construction projects, manages on-site teams, ensures safety compliance, and delivers projects on schedule.',
  },
  {
  id: 5,
  title: 'HVAC Technician',
  company: 'ARABIAN CLIMATE ENGINEERS',
  location: 'Kuwait',
  salary: '₹1.9L - ₹2.4L / Month',
  posted: '2 days ago',
  type: 'FULL TIME',
  description:
    'Installs, maintains, and repairs heating, ventilation, and air conditioning systems in residential and commercial facilities.',
},
{
  id: 6,
  title: 'Pipe Fitter',
  company: 'GULF INDUSTRIAL SERVICES',
  location: 'Oman',
  salary: '₹1.7L - ₹2.2L / Month',
  posted: '6 days ago',
  type: 'FULL TIME',
  description:
    'Assembles, installs, and maintains piping systems for oil, gas, and water infrastructure projects.',
},
{
  id: 7,
  title: 'Civil Site Engineer',
  company: 'DESERT INFRASTRUCTURE LLC',
  location: 'Abu Dhabi, UAE',
  salary: '₹2.8L - ₹3.5L / Month',
  posted: '1 week ago',
  type: 'FULL TIME',
  description:
    'Supervises construction activities on-site, ensures compliance with engineering standards, and coordinates with contractors and project managers.',
},
{
  id: 8,
  title: 'Welder (MIG/TIG)',
  company: 'SAUDI METAL WORKS',
  location: 'Riyadh, Saudi Arabia',
  salary: '₹1.6L - ₹2L / Month',
  posted: '3 days ago',
  type: 'FULL TIME',
  description:
    'Performs precision welding using MIG and TIG techniques for structural and industrial fabrication projects.',
},

];


export const STEPS: Step[] = [
   {
     id: 1,
    stepNumber: '01',
    title: 'Create Profile',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Get Verified',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Skill enhancement',
  },
  {
    id: 4,
    stepNumber: '04',
    title: 'Apply for Jobs',
  },
  {
    id: 5,
    stepNumber: '05',
    title: 'Receive Offer',
  }
];

// constants/content.ts
export const CULTURE_CONTENT = {
  heading: "Our Culture, Our Strength.",
  description:
    "We believe in empathy, integrity, and innovation. Kovon’s team is passionate about solving one of the most important challenges — making global jobs accessible with trust.",
  values: [
    {
      title: "Openness",
      text: "We foster transparent communication and welcome diverse perspectives.",
    },
    {
      title: "Ownership",
      text: "We empower our team to take responsibility for our shared mission.",
    },
  ],
  buttonText: "We're Hiring",
};


export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Culture', href: '/culture' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'For Candidates',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Register', href: '/register' },
      { label: 'Resources', href: '/resources' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/post-job' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Partner', href: '/partner' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com' },
  { platform: 'Twitter', icon: 'Twitter', href: 'https://twitter.com' },
  { platform: 'Facebook', icon: 'Facebook', href: 'https://facebook.com' },
  { platform: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
];

export const POPULAR_SEARCHES = [
  'Container Checker',
  'Sofa Maker',
  'Railway Project Worker',
  'Pig farm Worker',
];
