import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  alle,
  taoyuan,
  studyE,
  tripguide,
  threejs,
  jump,
  sien
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Project Manager",
    company_name: "跳跳股份有限公司",
    icon: jump,
    iconBg: "#fff",
    date: "Apr 2023 - Oct 2023",
    points: [
      "Brand establishment and website planning.",
      "Customer Interviews.",
      "Project Progress Management.",
      "Conceptual Planning.",
    ],
  },
  {
    title: "UI/UX designer",
    company_name: "全誼資訊股份有限公司",
    icon: alle,
    iconBg: "#fff",
    date: "May 2021 - Mar 2023",
    points: [
      'Designing 20+ websites and app projects.',
      'Designing apps and websites.',
      'Layout design and programming.',
      'Website version control.'
    ],
  },
  {
    title: "UI/UX designer",
    company_name: "席恩資訊股份有限公司",
    icon: sien,
    iconBg: "#013159",
    date: "Jun 2020 - Jan 2021",
    points: [
      'Using Figma for web design, with projects encompassing e-commerce and insurance.',
      'Independently using frameworks for responsive web design (RWD) slicing.'
    ],
  },
];



const projects = [
  {
    name: "桃園市民卡網站",
    description:
      "To streamline the initial citizen card application process in Taoyuan City, citizens can now apply online with their handheld devices. The Citizen Card website was optimized and transformed this year to enhance the UI/UX. This project has been gratifying as I could work closely with the client, resulting in efficient communication and a quicker development process.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: taoyuan,
    source_code_link: "https://www.google.com.tw/?hl=zh_TW",
  },
  {
    name: "新北市會考E點靈",
    description:
      'Due to the client request to create an app that enables students to quickly practice and improve their test-taking abilities, we needed to consider visual fatigue and font clarity due to prolonged usage. In terms of design, this project was quite interesting. To help users assess their current skill level, we incorporated gaming elements and utilized radar charts to analyze individual capabilities.',
    tags: [
      {
        name: "Adobe XD",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: studyE,
    source_code_link: "https://www.google.com.tw/?hl=zh_TW",
  },
  /* {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.google.com.tw/?hl=zh_TW",
  }, */
];

export { services, technologies, experiences, projects };