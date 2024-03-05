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
  hack,
  oasis,
  grip,
  gssoc,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Development Intern (OIBSIP)",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#383E56",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Developed websites using HTML and CSS.",
      "Completed assigned tasks within the given deadline.",
      "Assisted 20+ peers in doing the internship related work.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development Intern (GRIP)",
    company_name: "The Sparks Foundation",
    icon: grip,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Developed websites using HTML and CSS.",
      "Connected website with the database using MySQL.",
      "Integrated Razorpay Payment Gateway API with the website.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GSSOC",
    icon: gssoc,
    iconBg: "#383E56",
    date: "Feb 2022 - May 2022",
    points: [
      "Actively contribute to an open source project by writing code and fixing bugs.",
      "Collaborate with other contributors and mentors to discuss project details and review code.",
      "Engage with the open source community by participating in discussions and providing support to fellow contributors.",
      "Utilize this opportunity to enhance my programming skills, learn new technologies, and gain hands-on experience in real-world projects.",
    ],
  },
  {
    title: "Hacktoberfest Mentee",
    company_name: "DigitalOcean",
    icon: hack,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Oct 2021",
    points: [
      "Participate as a mentee in the Hacktoberfest program, collaborating with experienced mentors to dive into the world of open source software development.",
      "Work closely with mentors to identify suitable open source projects, address issues, receiving guidance and feedback to ensure code quality and relevance.",
      "Leverage the mentorship opportunity to enhance my coding skills, learn version control systems (like Git).",
      "Engage with a global community of developers, asking questions and learning from fellow participants during the Hacktoberfest event.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sumit is technology evangelist, disciplined student. Leads his teammates and motivate them in achieving organizational goals. Whatever the task assigned to him, he makes sure that he completes that in allotted time.",
    name: "Abhinav Soni",
    designation: "Developer",
    company: "ITC Infotech",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Sumit has robust technical grasp and problem-solving prowess. His insatiable curiosity for new technologies, demonstrated through his projects, illustrates a readiness to excel in the rapidly evolving software engineering landscape.",
    name: "Priya Kumari",
    designation: "HR Manager",
    company: "JobDunia",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects = [
  {
    name: "CryptoVerse",
    description:
      "Web-based platform that allows users to search about any cryptocurrency and know its whole details, providing a login/signup option to maintain his WatchList.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Google Analytics",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Google Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Chart JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sumitkumar16dec/CryptoVerse",
    direct_link: "https://sumit-cryptoverse.netlify.app",
  },
  {
    name: "Realtime Chat Application",
    description:
      "A secure web application that enables users to chat with each other using texts as well as images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "Google Analytics",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Google Firebase",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sumitkumar16dec/Realtime-Chat-Application",
    direct_link: "https://chat-sumit.netlify.app",
  },
  {
    name: "Portfolio",
    description:
      "Explore my portfolio website, a visual journey showcasing my passion and expertise. Discover my diverse projects, skills, and creativity in design, development, and more.",
    tags: [
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Email through website",
        color: "orange-text-gradient",
      },
      {
        name: "Seamless Animation",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sumitkumar16dec/Portfolio",
    direct_link: "https://sumitk18.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
