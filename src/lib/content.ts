// Shared content used by both GUI and CLI views

export const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React.js",
  "VS Code",
  "Next.js",
  "Git",
];

export const education = [
  { yearRange: "2024 - 2028", institution: "Amrita Vishwa Vidyapeetham, Chennai", detail: "B.Tech, CSE" },
  { yearRange: "2022 - 2024", institution: "Ascent Classes, Visakhapatnam", detail: "PUC (95.90%)" },
  { yearRange: "2021 - 2022", institution: "Sri Chaitanya Schools, Madhurawada", detail: "SSC (97.16%)" },
];

export const hobbies = [
  "Painting",
  "Photography",
  "Yoga",
  "Gaming",
  "Music",
  "Movies",
  "Videography",
  "Blogs",
  "Cricket",
  "Chess",
];

export type Project = {
  stack: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    stack: "Next.js, Tailwind",
    year: "2025",
    title: "Thief Detection Alarm",
    results: [
      { title: "Plays a loud sound if detects a person" },
      { title: "Works on Tensorflow's COCO-SSD AI Model" },
    ],
    link: "https://obj-detector.vercel.app",
    github: "#",
  },
  {
    stack: "Java",
    year: "2025",
    title: "CLI Task Manager",
    results: [
      { title: "Implemented CRUD Operations for task management" },
      { title: "Used FileWriter for faster CSV Exports" },
    ],
    link: "",
    github: "https://github.com/sarvan-2187/OOPS-LAB/tree/main/Project%20-%20Task%20Manager",
  },
];

export const certifications = [
  {
    title: "GenAI Fundamentals",
    description:
      "Successfully cleared the Generative AI Fundamentals Certification exam with a score of 100% from DataBricks Academy.",
    href:
      "https://api.accredible.com/v1/auth/invite?code=19d4a9e1e2986b343bbd&credential_id=b8cc4763-1b59-4012-a045-239bd6ccc5d9&url=https%3A%2F%2Fcredentials.databricks.com%2Fb8cc4763-1b59-4012-a045-239bd6ccc5d9&ident=49b82bb9-a7f5-4c05-a236-53f3cd61f21b/",
  },
  {
    title: "Hubspot Academy SEO",
    description:
      "Successfully cleared the Search Engine Optimization Certification exam with a score of 50/60 from Hubspot Academy.",
    href: "https://app-na2.hubspot.com/academy/achievements/j9ykrpsp/en/1/nagarampalli-sarvan-kumar/seo",
  },
];

export const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/nagarampalli-sarvan-kumar/" },
  { title: "GitHub", href: "https://github.com/sarvan-2187/" },
  { title: "WhatsApp", href: "https://wa.link/t1td0b" },
  { title: "Instagram", href: "https://www.instagram.com/sarvan._.21/" },
  { title: "YouTube", href: "https://youtube.com/@sarvankumarnagarampalli?si=EF7qnkqncoolWnvP" },
];
