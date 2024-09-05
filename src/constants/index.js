import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  gcp,
  docker,
  postgresql,
  python,
  net,
  mysql,
  aws,
  azure,
  cajahonor,
  nanypetapi,
  miabogadoya,
  beautybussiness,
  yam,
  c360,
  devsu,
  holberton,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: ux,
  },
  {
    title: "Cloud Architecture",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Back-End Developer",
    company_name: "Complemento",
    icon: c360,
    iconBg: "#333333",
    date: "May 2023 - May 2024",
  },
  {
    title: "Back-End Developer (Volunteer)",
    company_name: "Holberton",
    icon: holberton,
    iconBg: "#333333",
    date: "Sep 2022 - Mar 2023",
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Devsu",
    icon: devsu,
    iconBg: "#333333",
    date: "Dec 2021 - Jun 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "CajaHonor",
    description:
      "Corporate web app using React and .NET for managing military housing funds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "pink-text-gradient",
      },
    ],
    image: cajahonor,
  },
  {
    id: "project-2",
    name: "NanyPet API",
    description:
      "RestAPI: 3-tier architecture, repository pattern, Ardalis Endpoints",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
    ],
    image: nanypetapi,
    repo: "https://github.com/diegojojoayandun/NanyPetApi",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Mi Abogado Ya!",
    description: "MERN Stack web app",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: miabogadoya,
    repo: "https://github.com/diegojojoayandun/ciclo4-stack-mern",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Beauty Bussiness",
    description: `A web application that allows manage Beauty Shops, Made with Python; Django, Postgres.`,
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
    ],
    image: beautybussiness,
    repo: "https://github.com/diegojojoayandun/Beauty_Business_DJ",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Yet Another Mail",
    description: "This is a Google Chrome extension tha simplify gmail client.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: yam,
    repo: "https://github.com/diegojojoayandun/yam",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { services, technologies, experiences, projects };
