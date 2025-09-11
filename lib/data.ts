import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Главная",
    hash: "#Главная",
  },
  {
    name: "Обо мне",
    hash: "#Обо мне",
  },
  {
    name: "Проекты",
    hash: "#Проекты",
  },
  {
    name: "Навыки",
    hash: "#Навыки",
  },
] as const;

export const projectsData = [
  {
    title: "Lawyer",
    description:
      "Лендинг юридической компании с акцентом на удобство использования и профессиональный дизайн",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Email.js",
      "react-toastify",
      "tailwindCSS",
      "formik",
      "framer-motion",
      "react-scroll",
      "react-icons",
      "react-spinners",
      "sass",
      "yup",
      "zustand",
    ],
    imageUrl: "/lawyer/lawyer-desktop.webp",
    demoVideo: "/lawyer/lawyer-presentation.mp4",
    gallery: [
      "/lawyer/lawyer-desktop.webp",
      "/lawyer/lawyer-mobile.webp",
    ],
  },
  {
    title: "ZaraHome",
    description:
      "Интернет‑магазин товаров для дома: каталог, поиск, корзина, оформление заказа",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux/RTK",
      "RTK Query",
      "TailwindCSS",
      "Framer Motion",
      "Nest.js",
      "TypeORM",
      "PostgreSQL",
    ],
    imageUrl: "/zarahome/zarahome-desktop.webp",
    demoVideo: undefined,
    gallery: [
      "/zarahome/zarahome-desktop.webp",
    ],
  },
  {
    title: "Windows Haus",
    description: "Сайт компании по установке окон с интерактивным функционалом",
    tags: [
      "Vue",
      "TypeScript",
      "Nuxt",
      "emailJS",
      "swiper",
      "vuelidate",
      "pinia",
      "vue-toastification",
      "ymaps",
      "vue-router",
      "vue3-burger-menu",
      "vue3-side-panel",
      "vue3-transitions",
      "yup",
    ],
    imageUrl: "/windows-haus/okna-haus.webp",
    demoVideo: "/windows-haus/okna-haus.mp4",
    gallery: [
      "/windows-haus/okna-haus.webp",
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Zustand",
  "Vuex",
  "Typeorm",
  "Prisma",
  "MongoDB",
  "Redux/RTK",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Vite",
  "Webpack",
] as const;
