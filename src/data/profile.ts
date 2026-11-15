/**
 * ─────────────────────────────────────────────────────────────
 *  ALL YOUR DETAILS LIVE IN THIS ONE FILE.
 *  Edit the text below and the website updates.
 *
 *  Anything still written like '[THIS]' (in square brackets) is
 *  hidden on the site until you replace it with the real value.
 * ─────────────────────────────────────────────────────────────
 */

/** true once a value has been filled in (not empty and not a '[PLACEHOLDER]'). */
export const isSet = (v?: string | null): v is string => !!v && !v.trim().startsWith('[');

export const profile = {
  name: 'Kiran Reddy',
  /** Studio / brand name: shown in the menu bar and footer, and used for the credit on client sites. */
  studio: 'Kiran Reddy Studio',
  initials: 'KR',
  role: 'Full-Stack Developer & UI/UX Designer',
  headline: 'I build websites that look great and bring in real enquiries.',
  intro:
    'I design and build complete websites end to end – the look and feel, the frontend, the backend, the admin panel and the launch. ' +
    'My latest project is a full website for Green Card Overseas, a study-abroad consultancy, with an animated scroll journey, lead forms and an admin dashboard.',
  location: 'Hyderabad, India',
  /** Your photo: put the file in the public/ folder, e.g. public/me.jpg, then write '/me.jpg' here. */
  photo: '/me.jpg',
  /** Your CV as a PDF in public/, e.g. '/Kiran-Reddy-Resume.pdf'. Shows a "Download CV" button. */
  resume: '[RESUME PDF]',
  /** Shown as "Available for freelance work" in the hero. Set to false to hide it. */
  available: true,
};

export const contact = {
  email: 'kiranreddystudio@gmail.com',
  /** With country code, digits only, e.g. '919876543210'. Used for Call and WhatsApp. */
  phone: '917032810757',
  /** How the number is shown on the page, e.g. '+91 98765 43210'. */
  phoneDisplay: '+91 70328 10757',
};

/** Profiles shown in the Contact section. Leave '[...]' to hide one. */
export const links = {
  github: 'https://github.com/kiranreddy002',
  linkedin: 'https://www.linkedin.com/in/kiranreddy02/',
  leetcode: '[LEETCODE URL]',
  hackerrank: '[HACKERRANK URL]',
  instagram: 'https://www.instagram.com/kiran_reddy_19/',
};

/** "What I do" cards under the hero. */
export const services = [
  { icon: 'globe', title: 'Business websites', text: 'Fast, mobile-first sites for shops, clinics, consultancies and startups – built to turn visitors into enquiries.' },
  { icon: 'layout', title: 'Landing pages & redesigns', text: 'Modern, animated pages that load quickly, rank well on Google and make your brand look premium.' },
  { icon: 'database', title: 'Admin panels & backends', text: 'Lead management, content editing and dashboards, so you can run your site without a developer.' },
] as const;

export const skillGroups = [
  { title: 'Frontend & design', items: ['UI/UX design', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'Framer Motion', 'Canvas animation'] },
  { title: 'Backend', items: ['Python', 'FastAPI', 'REST APIs', 'SQL databases', 'Authentication', 'Admin dashboards'] },
  { title: 'Tools & delivery', items: ['Git & GitHub', 'Playwright testing', 'Vercel', 'Render', 'SEO basics', 'Responsive design'] },
];

export interface Project {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  tech: string[];
  /** Screenshot in public/projects/. Leave '' for a text-only card. */
  image: string;
  live: string;
  code: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Green Card Overseas',
    kind: 'Client website · Study-abroad consultancy',
    description:
      'A complete website for a study-abroad consultancy: a scroll-driven flight from India across seven countries, lead capture that feeds an admin dashboard, and every page tuned for phones.',
    highlights: [
      'Scroll-driven canvas flight animation with country stops',
      'Enquiry and eligibility forms, quick-answers chat, WhatsApp and tap-to-call',
      'Admin panel for leads, FAQs, blog and content – with light and dark themes',
      'SEO-ready pages, fast loading, tested with Playwright',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python'],
    image: '/projects/greencard.jpg',
    live: 'https://greencardoverseas-dun.vercel.app/',
    code: '',
    featured: true,
  },
  {
    title: 'Calculator',
    kind: 'Personal project',
    description: 'A clean in-browser calculator for everyday sums – my first project on GitHub.',
    highlights: ['Add, subtract, multiply and divide with decimals', 'Plain HTML, CSS and JavaScript – no libraries'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    live: '[CALCULATOR LIVE LINK]',
    code: 'https://github.com/kiranreddy002/CalculatorByKiranReddy',
  },
];

/** Work history and education, newest first. Entries whose title is still '[...]' are hidden. */
export const experience = [
  {
    title: 'Software Engineer & UI/UX Designer',
    place: '',
    period: 'Mar 2026 – Present',
    points: ['Design user interfaces and user flows, and build them into working web features.'],
  },
  {
    title: 'Freelance Full-Stack Web Developer',
    place: 'Kiran Reddy Studio',
    period: '2025 – Present',
    points: [
      'Built and launched the Green Card Overseas website end to end: design, frontend, backend, admin panel, testing and deployment.',
      'Work directly with business owners to turn their goals into fast, easy-to-manage websites.',
    ],
  },
  {
    title: 'Full Stack Python Intern',
    place: '',
    period: 'Jun 2025 – Mar 2026',
    points: ['Built web applications with Python on the backend and modern tools on the frontend.'],
  },
  {
    title: 'Master of Computer Applications (MCA)',
    place: 'Man Power Development College',
    period: '2025',
    points: [],
  },
];
