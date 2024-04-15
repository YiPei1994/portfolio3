import { ThemeInput } from "react-github-calendar";

export const links = ["work", "about"];

export const explicitTheme: ThemeInput = {
  light: ["#f3e8ff", "#d8b4fe", "#a855f7", "#7e22ce", "#581c87"],
  dark: ["#f3e8ff", "#d8b4fe", "#a855f7", "#7e22ce", "#581c87"],
};

export const colorBg =
  "bg-gradient-to-r from-[#FFE074] via-[#50CAE4] to-[#9B5CFF] inline-block text-transparent bg-clip-text font-bold";

export const efficentSkills = [
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "supabase",
  "git",
];

export const freetimeSkills = [
  "python",
  "php",
  "go",
  "figma",
  "dockers",
  "sql",
];

export const projects = [
  {
    title: "Honey Bee",
    description: "Static website for local bee community.",
    usedTechs: ["nextjs", "tailwind", "typescript", "figma"],
    web: "https://honeybee-gilt.vercel.app/",
    github: "https://github.com/YiPei1994/honeybee",
    content: "./public/projectImages/honey_bee.svg",
  },
];
