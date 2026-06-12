export const personal = {
  name: "Ezequiel Castioni",
  shortName: "Ezequiel",
  role: "Full Stack JavaScript Developer",
  focus: "Blockchain & Cybersecurity",
  location: "Buenos Aires, Argentina",
  email: "castioniezequiel@gmail.com",
  cvPath: "/cv/Ezequiel%20Castioni%20Resume.pdf",
  summary:
    "Developer with solid experience building end-to-end web applications. Specialized in React and Node.js, with payment and AI integrations. Currently expanding into blockchain smart contracts and cybersecurity.",
  tagline: "Clean code, products that scale, security in mind.",
}

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export type Project = {
  id: string
  title: string
  company?: string
  period?: string
  website?: string
  description: string
  highlights: string[]
  tags: string[]
  featured?: boolean
  accent: string
}

export const projects: Project[] = [
  {
    id: "velisse-platform",
    title: "Business Operations Platform",
    company: "Velisse",
    period: "2025–present",
    website: "https://www.velisse.com.ar",
    description:
      "Platform for digitizing business operations and e-commerce workflows: customers, orders, inventory, analytics, and reporting in one place.",
    highlights: [
      "Mercado Pago integration for online payments and automated order processing",
      "MCP server for business insights and AI-assisted operations",
      "Full-stack modules built with React, Node.js, and PostgreSQL",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Mercado Pago", "MCP", "Tailwind"],
    featured: true,
    accent: "#c9a66b",
  },
  {
    id: "yeslawyer-ai",
    title: "Legal Case AI Summarizer",
    company: "YesLawyer",
    period: "2025",
    website: "https://www.yeslawyer.com",
    description:
      "Legal platform with automated case summaries and AI-generated insights, integrated into the legal team's workflow.",
    highlights: [
      "OpenAI integration for case summaries and scoring",
      "Stripe payments",
      "Production deployments and PR reviews",
    ],
    tags: ["Next.js", "OpenAI", "Stripe", "Tailwind"],
    featured: true,
    accent: "#7a9eb8",
  },
  {
    id: "juntoz-migration",
    title: "E-commerce Dashboard",
    company: "Juntoz",
    period: "2023–2025",
    website: "https://www.juntoz.com",
    description:
      "Migration of a legacy e-commerce application to a modern dashboard with better DX and controlled Azure deployments.",
    highlights: [
      "Full migration to Next.js + TypeScript",
      "HTML templates for transactional emails",
      "Multi-environment CI/CD on Azure",
    ],
    tags: ["Next.js", "TypeScript", "Azure", "Vite"],
    featured: true,
    accent: "#6b8f71",
  },
  {
    id: "nextmed-payments",
    title: "Medical Platform",
    company: "NextMed",
    period: "2022–2023",
    website: "https://www.nextmed.com",
    description:
      "Medical platform with payment flows, front-end leadership, and junior team mentoring.",
    highlights: [
      "Stripe and Seamlesschex integrations",
      "Code review and mentoring",
      "Coordination with PMs and stakeholders",
    ],
    tags: ["Next.js", "Stripe", "React", "Team Lead"],
    accent: "#b87a7a",
  },
  {
    id: "redlo-api",
    title: "Full Stack API",
    company: "Redlo",
    period: "2022",
    website: "https://www.redlo.com.pe",
    description:
      "REST API with authentication, migrations, and UI components aligned to the product design.",
    highlights: [
      "Node.js + Express + Sequelize",
      "Auth, routes, and PostgreSQL migrations",
      "UI components built from scratch",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    accent: "#9a8f6b",
  },
  {
    id: "freelance-fullstack",
    title: "End-to-End Apps",
    company: "Freelance",
    period: "2021–present",
    description:
      "Full stack web applications deployed on Linux VPS with Nginx, DNS, SSL, and third-party API integrations.",
    highlights: [
      "React and TypeScript front ends",
      "Node.js APIs with auth and migrations",
      "Linux VPS infrastructure and deployments",
    ],
    tags: ["React", "TypeScript", "Node.js", "Linux", "Nginx"],
    accent: "#8a7ab8",
  },
]

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  website?: string
  current?: boolean
  bullets: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: "Velisse",
    role: "Product Engineer",
    location: "Argentina",
    website: "https://www.velisse.com.ar",
    period: "Oct 2025 – Present",
    current: true,
    bullets: [
      "Designed and developed a platform for digitizing business operations and e-commerce workflows",
      "Built customer, order, inventory, analytics, and reporting modules",
      "Integrated Mercado Pago for online payments and automated order processing",
      "Implemented an MCP server for business insights",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind", "MCP", "Linux", "VPS"],
  },
  {
    company: "YesLawyer",
    role: "Front-End Developer",
    location: "USA",
    website: "https://www.yeslawyer.com",
    period: "Jan 2025 – Oct 2025",
    bullets: [
      "Developed web applications with Next.js",
      "Integrated payment platform (Stripe)",
      "Reviewed and corrected PRs from junior developers",
      "Managed production deployments and updates",
      "Integrated OpenAI for legal case summaries and insights",
    ],
    stack: ["Next.js", "Tailwind", "Stripe", "OpenAI", "GitHub"],
  },
  {
    company: "Juntoz",
    role: "Front-End Developer",
    location: "Peru",
    website: "https://www.juntoz.com",
    period: "Dec 2023 – Jan 2025",
    bullets: [
      "Migrated legacy e-commerce to a modern dashboard with Next.js and TypeScript",
      "HTML templates for transactional emails",
      "Version control and multi-environment deployments on Azure",
    ],
    stack: ["Next.js", "TypeScript", "Bootstrap", "Vite", "Azure"],
  },
  {
    company: "NextMed",
    role: "Front-End Team Lead",
    location: "USA",
    website: "https://www.nextmed.com",
    period: "Sep 2022 – Dec 2023",
    bullets: [
      "Led front-end development and payment integrations",
      "Integrated Stripe and Seamlesschex",
      "Mentored junior developers and performed code reviews",
      "Translated stakeholder requirements into functional features",
    ],
    stack: ["Next.js", "Tailwind", "Stripe", "Seamlesschex", "GitHub"],
  },
  {
    company: "Redlo",
    role: "Full Stack Developer",
    location: "Peru",
    website: "https://www.redlo.com.pe",
    period: "Mar 2022 – Oct 2022",
    bullets: [
      "Developed front-end features and UI components",
      "Built back-end APIs with Node.js and Express",
      "Handled authentication, routes, and database migrations",
    ],
    stack: ["React", "Node.js", "Express", "Sequelize", "PostgreSQL"],
  },
  {
    company: "Personal & Freelance Projects",
    role: "Full Stack Development",
    location: "Remote",
    period: "Feb 2021 – Present",
    bullets: [
      "Developed and deployed full-stack web applications",
      "Managed Linux VPS infrastructure: Nginx, DNS, SSL",
      "Third-party API integrations including OpenAI",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    company: "Tarquini Revestimientos",
    role: "IT Systems & Networks Technician",
    location: "Argentina",
    period: "Sep 2017 – Jan 2019",
    bullets: [
      "Maintenance of computers, printers, and local networks",
      "Hardware/software configuration and security camera installation",
    ],
    stack: ["Networking", "Hardware", "Windows"],
  },
  {
    company: "Ezmifi Computación",
    role: "IT Systems & Networks Technician & Co-Owner",
    location: "Argentina",
    period: "Dec 2014 – Sep 2017",
    bullets: [
      "Provided technical support and customer service in a family-owned computer repair and sales business",
      "Installed, repaired, and maintained hardware and software; performed stock management, home service visits, and daily monitoring of operations",
      "Managed Windows and Linux networks for private clients and small companies (up to 50 workstations)",
    ],
    stack: ["Linux", "Windows", "Networking", "Hardware"],
  },
]

export const skillGroups = [
  {
    label: "Front-End",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Vite"],
  },
  {
    label: "Back-End",
    skills: ["Node.js", "Express", "Sequelize", "PostgreSQL", "REST APIs", "MCP"],
  },
  {
    label: "Blockchain & Web3",
    skills: ["Solidity", "Ethereum", "ERC-20", "ERC-721", "DeFi", "Foundry", "Chainlink"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Azure", "Linux VPS", "Nginx", "DNS", "SSL", "GitHub"],
  },
  {
    label: "Integrations",
    skills: ["Stripe", "Mercado Pago", "OpenAI API", "Seamlesschex"],
  },
  {
    label: "Security",
    skills: ["Cybersecurity", "Smart contract auditing", "Networking", "Defensive hacking"],
  },
]

export type Education = {
  institution: string
  program: string
  location: string
  period: string
  badge?: string
  description: string
  modules: string[]
  variant: "sage" | "violet"
}

export const educationPrograms: Education[] = [
  {
    institution: "Blockchain Accelerator",
    program: "Smart Contract Development & Security",
    location: "Spain",
    period: "May 2026 – Present",
    badge: "Web3",
    description:
      "Solidity and Ethereum smart contract development with a focus on DeFi protocols, security auditing, and Web3 integrations.",
    modules: [
      "Solidity & Ethereum",
      "DeFi protocols",
      "Smart contract security",
      "ERC-20 & ERC-721",
      "Foundry & Chainlink",
    ],
    variant: "violet",
  },
  {
    institution: "Ekoparty Hackademy",
    program: "Fundamentals of Hacking and Defense",
    location: "Argentina",
    period: "Aug 2025 – Present",
    badge: "160 hours",
    description:
      "Seven-module program in offensive and defensive cybersecurity, with hands-on labs and real-world scenarios.",
    modules: [
      "Hacking fundamentals",
      "Network security",
      "Defensive strategies",
      "Hands-on labs",
    ],
    variant: "sage",
  },
]
