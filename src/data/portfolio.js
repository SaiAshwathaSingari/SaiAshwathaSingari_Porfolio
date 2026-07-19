// ────────────────────────────────────────────────────────────
// Central content source. Edit here to update the whole site.
// ────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Sai Ashwatha",
  lastName: "Singari",
  fullName: "Sai Ashwatha Singari",
  // Rotating roles shown in the hero
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud & Networking",
    "Problem Solver",
  ],
  location: "Manipal, India",
  email: "singarisai777@gmail.com",
  phone: "+91 80740 34506",
  resume: "/resume.pdf",
  // Contact form: create a form at https://formspree.io, confirm your email,
  // then paste your endpoint here (e.g. "https://formspree.io/f/abcdwxyz").
  // Until then, the form falls back to opening the visitor's mail client.
  formspree: "https://formspree.io/f/your_form_id",
  tagline:
    "Software Engineering student crafting reliable, high-performance products across software, networking, and cloud.",
};

export const socials = [
  { name: "GitHub", handle: "SaiAshwathaSingari", url: "https://github.com/SaiAshwathaSingari" },
  { name: "LinkedIn", handle: "sai-ashwatha-singari", url: "https://www.linkedin.com/in/sai-ashwatha-singari" },
  { name: "LeetCode", handle: "SaiAshwathaSingari", url: "https://leetcode.com/u/SaiAshwathaSingari/" },
  { name: "CodeChef", handle: "ashthboyz", url: "https://www.codechef.com/users/ashthboyz" },
];

export const about = {
  headline:
    "I build software that feels considered — from the wire to the interface.",
  paragraphs: [
    "I'm a Software Engineering student who loves turning hard problems into clean, dependable products. My curiosity runs the full stack — from routing packets across a network, to orchestrating services in the cloud, to shipping interfaces people actually enjoy using.",
    "Right now I'm working as a Software Engineering Intern at NI (National Instruments), now part of Emerson, contributing to software for RF R&D applications. It's teaching me how large-scale, enterprise software is really built: rigorous code reviews, testing, Agile delivery, and writing code that teammates can trust and extend.",
    "I care about the details that separate a template from a product — performance, accessibility, and the little interactions that make software feel alive. I'm looking to bring that same energy to a team building things at scale.",
  ],
  stats: [
    { value: "1+", label: "Year of internship experience" },
    { value: "8.77", label: "CGPA / 10.0" },
    { value: "15+", label: "Technologies in daily use" },
    { value: "2027", label: "Graduating class" },
  ],
  focus: ["Software Engineering", "Cloud", "Networking", "Product"],
};

export const experiences = [
  {
    company: "NI (National Instruments)",
    parent: "now part of Emerson",
    logo: "/logo-ni.svg",
    parentLogo: "/logo-emerson.png",
    role: "Software Engineering Intern",
    duration: "Jul 2025 — Present",
    current: true,
    location: "Software · RF R&D",
    summary:
      "Developing software solutions for RF (Radio Frequency) R&D applications inside an enterprise engineering organization, working alongside experienced software engineers and cross-functional teams.",
    tags: ["Enterprise Software", "RF R&D", "Agile", "Code Reviews", "Testing"],
    highlights: [
      "Developing software solutions for RF (Radio Frequency) R&D applications.",
      "Writing clean, maintainable, and scalable code contributing to feature development and bug fixes.",
      "Collaborating with experienced software engineers and cross-functional teams.",
      "Debugging, testing, and improving software components; participating in code reviews.",
      "Learning large-scale software development practices and engineering design processes.",
      "Working in an Agile environment with modern development tools and engineering workflows.",
    ],
  },
  {
    company: "EmergX",
    parent: "",
    logo: "/logo-emergx.svg",
    role: "Full-Stack Developer Intern",
    duration: "Jul 2025 — Sep 2025",
    location: "Remote",
    summary:
      "Engineered high-performance UI components and backend systems for an AI-driven interview intelligence platform.",
    tags: ["React", "Node.js", "Express", "JWT", "Web Audio API", "Tailwind CSS"],
    highlights: [
      "Architected client-side microphone orchestration and real-time recording indicators using the Web Audio API.",
      "Engineered scalable Node.js/Express APIs managing complex session lifecycles and secure audio streams.",
      "Implemented JWT-based authentication and Google OAuth 2.0 integration for secure user sessions.",
      "Optimized frontend state architecture, significantly reducing redundant network overhead.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    category: "Networking",
    items: ["Cisco", "CCNA", "Network Design", "Routing", "Switching"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Linux", "Docker"],
  },
];

// Marquee ticker of technologies for the skills band.
export const techTicker = [
  "C++", "Python", "Java", "TypeScript", "React", "Next.js", "Node.js",
  "Express", "MongoDB", "MySQL", "AWS", "Azure", "Docker", "Linux",
  "CCNA", "Cisco", "Git", "Tailwind CSS",
];

export const projects = [
  {
    title: "Sentinel — DPI Threat Engine",
    year: "2026",
    category: "Systems · C++ · Network Security",
    description:
      "A dependency-free, multithreaded C++17 deep-packet-inspection engine that turns raw packet captures into threat intelligence — JA3 TLS fingerprinting, ML traffic classification, and real-time intrusion detection.",
    features: [
      "JA3 TLS fingerprinting from the ClientHello (GREASE-aware, custom MD5)",
      "ML classifies encrypted traffic by flow shape alone — no SNI or port",
      "6 threat detectors mapped to MITRE ATT&CK + live WebSocket SOC dashboard",
    ],
    challenge:
      "Designing a lock-free, sharded worker pipeline (reader → workers → analytics → writer) that sustains ~247K packets/sec while correlating threats across flows and hosts.",
    tech: ["C++17", "Python", "scikit-learn", "Node.js", "WebSocket", "CMake"],
    links: {
      live: "",
      code: "https://github.com/SaiAshwathaSingari/Sentinel",
    },
    accent: "#22c55e",
  },
  {
    title: "AI Resume Builder",
    year: "2025",
    category: "Full-Stack · AI",
    description:
      "A full-stack AI resume builder that generates and refines polished, ATS-friendly resumes from a guided editor, with a React client and a Node/Express server.",
    features: [
      "AI-assisted content generation & refinement",
      "Live editor with clean, exportable templates",
      "React client + Node/Express server, deployed on Vercel",
    ],
    challenge:
      "Wiring an AI generation flow into a smooth editing experience while keeping the output well-structured and export-ready.",
    tech: ["React", "Node.js", "Express", "JavaScript", "Vercel"],
    links: {
      live: "",
      code: "https://github.com/SaiAshwathaSingari/AI-Resume-Builder",
    },
    accent: "#c6f24e",
  },
];

export const education = [
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
      "Coursework spanning software engineering, computer networks, operating systems, DBMS, and communication systems.",
  },
];

export const achievements = [
  {
    title: "Software Engineering Internship",
    org: "NI (National Instruments), now part of Emerson",
    type: "Internship",
    year: "2025",
  },
  {
    title: "Full-Stack Developer Internship",
    org: "EmergX — AI Interview Platform",
    type: "Internship",
    year: "2025",
  },
  {
    title: "CCNA — Routing & Switching",
    org: "Cisco Networking Academy",
    type: "Certification",
    year: "2024",
  },
  {
    title: "2★ Competitive Programmer",
    org: "CodeChef",
    type: "Achievement",
    year: "2024",
  },
  {
    title: "Hackathon Participant",
    org: "Inter-college Hackathons",
    type: "Hackathon",
    year: "2024",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
