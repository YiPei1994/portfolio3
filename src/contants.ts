import { ThemeInput } from "react-github-calendar";

export const links = ["projects", "about"];

export const explicitTheme: ThemeInput = {
  light: ["#f3e8ff", "#d8b4fe", "#a855f7", "#7e22ce", "#581c87"],
  dark: ["#f3e8ff", "#d8b4fe", "#a855f7", "#7e22ce", "#581c87"],
};

export const colorBg =
  "bg-gradient-to-r from-[#FFE074] via-[#50CAE4] to-[#9B5CFF] inline-block text-transparent bg-clip-text font-bold";

export const projects = [
  {
    title: "The Wild Oasis",
    description: "Fullstack web app for booking cabin in dark forest.",
    usedTechs: ["nextjs", "tailwind", "typescript", "figma", "supabase"],
    web: "https://the-wild-oasis-web.vercel.app/",
    github: "https://github.com/YiPei1994/the-wild-oasis-web.git",
    content: "/projectImages/wild_oasis.jpg",
  },
  {
    title: "Honey Bee",
    description:
      "Presentational mock single page web site for local bee community.",
    usedTechs: ["nextjs", "tailwind", "typescript", "figma"],
    web: "https://honeybee-gilt.vercel.app/",
    github: "https://github.com/YiPei1994/honeybee",
    content: "/projectImages/honey_bee.svg",
  },
];

export const efficentSkills = [
  {
    name: "html",
    style: "w-8 h-8 opacity-[0.50]  absolute top-[40%] left-[10%]",
  },
  {
    name: "css",
    style: "w-12 h-12 opacity-[0.70]  absolute top-[20%] right-[10%]",
  },
  {
    name: "javascript",
    style: "w-16 h-16 opacity-[0.65]  absolute top-[55%] right-[20%]",
  },
  {
    name: "react",
    style: "w-24 h-24 opacity-[0.58]  absolute top-[80%] left-[30%]",
  },
  {
    name: "nextjs",
    style: "w-9 h-9 opacity-[0.60]  absolute top-[85%] right-[5%]",
  },
  {
    name: "git",
    style: "w-10 h-10 opacity-[0.15]  absolute top-[55%] left-[30%]",
  },
];

export const freetimeSkills = [
  {
    name: "python",
    style: "w-12 h-12 opacity-[0.35]  absolute top-[75.5%] left-[5.5%]",
  },
  {
    name: "php",
    style: "w-14 h-14 opacity-[0.25]  absolute top-[85.5%] right-[27.5%]",
  },
  {
    name: "go",
    style: "w-20 h-20 opacity-[0.25]  absolute top-[50.5%] left-[50.5%]",
  },
  {
    name: "figma",
    style: "w-7 h-7 opacity-[0.15]  absolute top-[18.5%] right-[44.5%]",
  },
  {
    name: "docker",
    style: "w-12 h-12 opacity-[0.57]  absolute top-[78.5%] left-[22.5%]",
  },
  {
    name: "supabase",
    style: "w-10 h-10 opacity-[0.45]  absolute top-[25.78%] left-[33.55%]",
  },
  {
    name: "sql",
    style: "w-6 h-6 opacity-[0.30]  absolute top-[67.5%] left-[45.5%]",
  },
];
