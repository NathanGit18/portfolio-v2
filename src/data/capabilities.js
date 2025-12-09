import { FaCode, FaServer, FaTools } from 'react-icons/fa';

export const capabilities = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FaCode,
    description: "My primary focus. I enjoy creating responsive, interactive user interfaces and exploring modern web standards.",
    skills: [
      "React & Vite",
      "HTML5 & CSS",
      "Responsive Layouts",
      "Basic State Management"
    ]
  },
  {
    id: 2,
    title: "Backend & Systems",
    icon: FaServer,
    description: "Academic exposure to server-side logic and system operations through college coursework.",
    skills: [
      "Java (OOP Concepts)",
      "C Programming Fundamentals",
      "Python Scripting Basics",
      "Intro to Linux/Bash"
    ]
  },
  {
    id: 3,
    title: "Tools & Workflow",
    icon: FaTools,
    description: "Familiarity with industry-standard development tools used for version control and deployment.",
    skills: [
      "Git & GitHub Workflow",
      "Netlify Deployment",
      "VS Code Environment",
      "Basic Network Analysis (Wireshark)"
    ]
  }
];