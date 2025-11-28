import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql
} from "react-icons/si";

const experience = [
  { name: "HTML", icon: FaHtml5, level: "Experienced" },
  { name: "CSS", icon: FaCss3Alt, level: "Experienced" },
  { name: "JavaScript", icon: FaJs, level: "Intermediate" },
  { name: "React", icon: FaReact, level: "Intermediate" },
  { name: "Node.js", icon: FaNodeJs, level: "Intermediate" },
  { name: "Express.js", icon: SiExpress, level: "Intermediate" },
  { name: "MySQL", icon: SiMysql, level: "Intermediate" },   // Updated
  { name: "Git", icon: FaGitAlt, level: "Experienced" },
  { name: "GitHub", icon: FaGithub, level: "Experienced" }
];

export default experience;
