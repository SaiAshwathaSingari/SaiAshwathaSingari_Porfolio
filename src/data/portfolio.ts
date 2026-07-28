// ────────────────────────────────────────────────────────────
// Central content source. Edit here to update the whole site.
// ────────────────────────────────────────────────────────────

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  resume: string;
  tagline: string;
}

export interface Social {
  name: string;
  handle: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface About {
  headline: string;
  paragraphs: string[];
  stats: Stat[];
  focus: string[];
}

export interface Experience {
  company: string;
  parent?: string;
  logo?: string;
  parentLogo?: string;
  role: string;
  duration: string;
  current?: boolean;
  location?: string;
  summary: string;
  tags: string[];
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  features: string[];
  challenge: string;
  tech: string[];
  links: { live?: string; code?: string };
  accent: string;
}

export interface Education {
  institution: string;
  logo?: string;
  degree: string;
  location: string;
  duration: string;
  score: string;
  scoreScale: string;
  status: string;
  notes: string;
}

export type AchievementType =
  | "Internship"
  | "Certification"
  | "Achievement"
  | "Hackathon"
  | "Education";

export interface Achievement {
  title: string;
  org: string;
  type: AchievementType;
  year: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export const profile: Profile = {
  firstName: "Sai Ashwatha",
  lastName: "Singari",
  fullName: "Sai Ashwatha Singari",
  initials: "SAS",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "C++ & Systems",
    "Problem Solver",
  ],
  location: "Manipal, India",
  email: "singarisai777@gmail.com",
  phone: "+91 80740 34506",
  resume: "/resume.pdf",
  tagline:
    "Computer & Communication Engineering student building reliable, high-performance software — from low-level C++ systems to full-stack web apps.",
};

export const socials: Social[] = [
  { name: "GitHub", handle: "SaiAshwathaSingari", url: "https://github.com/SaiAshwathaSingari" },
  { name: "LinkedIn", handle: "sai-ashwatha-singari", url: "https://www.linkedin.com/in/sai-ashwatha-singari" },
  { name: "LeetCode", handle: "SaiAshwathaSingari", url: "https://leetcode.com/u/SaiAshwathaSingari/" },
  { name: "CodeChef", handle: "ashthboyz", url: "https://www.codechef.com/users/ashthboyz" },
];

export const about: About = {
  headline:
    "I build software that feels considered — from low-level systems to the interface.",
  paragraphs: [
    "I'm a Computer & Communication Engineering student who enjoys turning hard problems into clean, dependable software. I like working across the stack — from performance-critical C++ systems to full-stack web apps that people actually enjoy using.",
    "Right now I'm a Software Engineering Intern at NI (National Instruments), now part of Emerson, building high-performance C++ APIs and hardware drivers for RF signal instruments. It's teaching me how production software is really built — rigorous testing, code reviews, and code that teammates can trust and extend.",
    "I care about the details that separate a template from a product: performance, reliability, and the small interactions that make software feel alive. I'm looking to bring that same energy to a team building things at scale.",
  ],
  stats: [
    { value: "8.77", label: "CGPA · 10.0" },
    { value: "247K", label: "Packets/sec · Sentinel" },
    { value: "3", label: "Featured projects" },
    { value: "2027", label: "Graduating class" },
  ],
  focus: ["Software Engineering", "C++ / Systems", "Full-Stack", "Generative AI"],
};

export const experiences: Experience[] = [
  {
    company: "NI (National Instruments)",
    parent: "now part of Emerson",
    logo: "/logo-ni.svg",
    parentLogo: "/logo-emerson.png",
    role: "Software Engineering Intern",
    duration: "Jul 2026 — Present",
    current: true,
    location: "RF R&D · C++",
    summary:
      "Building high-performance C++ APIs and hardware drivers for RF Signal Acquisition (RFSA) and RF Signal Generation (RFSG) instruments — enabling compatibility with LabVIEW, NI software, and third-party applications.",
    tags: ["C++", "Hardware Drivers", "RF Systems", "LabVIEW", "Testing", "Version Control"],
    highlights: [
      "Developing high-performance C++ APIs and hardware drivers for RFSA and RFSG instruments, enabling compatibility with LabVIEW, NI software, and third-party applications.",
      "Building and maintaining production-grade software by implementing new features and debugging complex issues.",
      "Validating hardware–software interactions and optimizing reliability across RF measurement systems.",
      "Collaborating with cross-functional RF R&D engineers to design, test, and deliver robust engineering solutions.",
      "Following industry-standard software development and version-control practices.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "LangChain", "Socket.IO"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Fundamentals",
    items: ["LabVIEW", "REST APIs", "JWT Auth", "Git", "Postman", "Generative AI", "Jupyter"],
  },
];

// Marquee ticker of technologies for the skills band.
export const techTicker: string[] = [
  "C++", "C", "Python", "Java", "JavaScript", "React", "Node.js",
  "Express", "Tailwind CSS", "LangChain", "Socket.IO", "MongoDB",
  "MySQL", "LabVIEW", "REST APIs", "Git", "Postman", "Generative AI",
];

export const projects: Project[] = [
  {
    title: "Sentinel — Threat-Intelligence Engine",
    year: "2026",
    category: "Systems · C++ · Network Security",
    description:
      "A multithreaded C++17 deep-packet-inspection engine that turns raw network traffic into threat intelligence — parsing Ethernet/IP/TCP/UDP with a lock-free worker pool at ~247K packets/sec.",
    features: [
      "JA3 TLS fingerprinting plus real-time detectors for port scans, DNS tunnelling, C2 beaconing, SYN floods, and cleartext credentials",
      "Random Forest classifier that flags encrypted traffic from flow statistics alone",
      "Structured telemetry streamed to a live WebSocket dashboard; Docker + GitHub Actions CI with unit tests",
    ],
    challenge:
      "Designing a lock-free, sharded worker pipeline that sustains ~247K packets/sec while correlating threats across flows and hosts.",
    tech: ["C++17", "Python", "scikit-learn", "Node.js", "WebSocket", "Docker"],
    links: {
      live: "",
      code: "https://github.com/SaiAshwathaSingari/Sentinel",
    },
    accent: "#7CFF4F",
  },
  {
    title: "CVision — AI Resume Builder",
    year: "2025",
    category: "Full-Stack · MERN · AI",
    description:
      "A full-stack MERN resume builder with a high-performance editor — real-time side-by-side preview, section-wise editing, and multiple ATS-optimized themes.",
    features: [
      "LangChain-powered AI content generation, with ImageKit for automated background removal",
      "Real-time, side-by-side preview and section-wise editing across ATS-friendly themes",
      "Automated parsing for instant import plus high-fidelity PDF export that keeps formatting intact",
    ],
    challenge:
      "Wiring an AI generation flow into a smooth editing experience while keeping exported output well-structured and pixel-consistent.",
    tech: ["MongoDB", "Express", "React", "Node.js", "LangChain", "ImageKit"],
    links: {
      live: "",
      code: "https://github.com/SaiAshwathaSingari/AI-Resume-Builder",
    },
    accent: "#39FF88",
  },
  {
    title: "InstaConnect — MERN Social App",
    year: "2025",
    category: "Full-Stack · MERN",
    description:
      "A full-stack social application built on the MERN stack (MongoDB, Express, React/Vite, Node.js) with authentication, profiles, and an image-driven feed.",
    features: [
      "JWT authentication backed by a secure Express/MongoDB API",
      "Cloudinary image uploads powering a social post feed",
      "React (Vite) client with an optional FastAPI microservice hook",
    ],
    challenge:
      "Wiring a clean client/server split with secure auth, media uploads, and environment-driven config across separate deployments.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloudinary"],
    links: {
      live: "",
      code: "https://github.com/SaiAshwathaSingari/InstantConnect_MERN",
    },
    accent: "#34d399",
  },
];

export const education: Education[] = [
  {
    institution: "Manipal Institute of Technology",
    logo: "/logo-mit.png",
    degree: "B.Tech — Computer & Communication Engineering (CCE)",
    location: "Manipal, India",
    duration: "Jul 2023 — Jul 2027",
    score: "8.77",
    scoreScale: "/ 10.0 CGPA",
    status: "Current",
    notes:
      "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Operating Systems, and Embedded Systems.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Software Engineering Internship",
    org: "NI (National Instruments), now part of Emerson",
    type: "Internship",
    year: "2026",
  },
  {
    title: "Node.js & MongoDB: Back-End Database Applications",
    org: "Course Certificate",
    type: "Certification",
    year: "2025",
  },
  {
    title: "JavaScript Programming Essentials",
    org: "Course Certificate",
    type: "Certification",
    year: "2024",
  },
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
