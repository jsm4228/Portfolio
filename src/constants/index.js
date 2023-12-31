import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  openai,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongodb,
  express,
  python,
  java,
  helloWorld,
  cocktail,
  event,
  recipes,
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
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "OpenAI API",
    icon: openai,
  },
];

const experiences = [
  {
    title: "Robotics Engineer",
    company_name: "Wilder Systems Robots",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jun 2020 - Mar 2021",
  },
  {
    title: "Senior Technology Consultant",
    company_name: "Lumenci",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2021 - March 2023",
  },
  {
    title: "AI Application Developer",
    company_name: "weeve.ai",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2023 - Present",
  },
  {
    title: "Software Engineering Fellow",
    company_name: "General Assembly",
    icon: dcc,
    iconBg: "#333333",
    date: "May 2023 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Chat App with ChatGPT",
    description:
      "A real-time chat applications with user authentication, OpenAI ChatGPT integration, friend request, and real-time messages powered by socket.io",
    username: "jsmathew41@gmail.com",
    password: "a",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: helloWorld,
    repo: "https://github.com/kevinleet/helloWorld_frontend",
    demo: "https://helloworldfrontend-production.up.railway.app/",
  },
  {
    id: "project-4",
    name: "recipes.ai",
    description:
      "A recipe application utlizing OpenAI's API to generate recipes and corresponding images based on user inputs.",
    username: "test@test.com",
    password: "t",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: recipes,
    repo: "https://github.com/jsm4228/recipe.ai-client/blob/main/README.md",
    demo: "https://recipe-ai-client.vercel.app/",
  },
  {
    id: "project-2",
    name: "Cocktail Recipes",
    description:
      "A recipe application utilzing a 3rd-party API to beatifully and easily display recipes for thousands of cocktails with React.js",
    username: null,
    password: null,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cocktail,
    repo: "https://github.com/jsm4228/u3_lab_react_axios_foodE/blob/main/README.md",
    demo: "https://cocktail-recipes-123.netlify.app/",
  },
  {
    id: "project-3",
    name: "TicketMaster",
    description:
      "A web application for viewing tickets available at various venues",
    username: null,
    password: null,
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
    image: event,
    repo: "https://github.com/jsm4228/TicketMaster-Frontend/",
    demo: "https://event-pulse.vercel.app/",
  },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: movie,
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
