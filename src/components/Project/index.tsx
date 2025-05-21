import React from "react";
import ProjectItem from "./ProjectItem";
import { IconType } from "../Stack/IconMapper";
const data = [
  {
    image: "/seakun.png",
    title: "Seakun.id",
    description:
      "A website for sharing the cost of premium subscriptions,I contributed to both the landing page and admin dashboard. I worked on this project from 2020 to 2021.",
    stack: ["javascript", "vue", "nuxt", "css"],
  },
  {
    image: "/adiravirtualexpo.jpg",
    title: "Adira Virtual Expo",
    description:
      "A 3D website built using third-party tools, integrated with Next.js for handling authentication and routing.",
    stack: ["javascript", "react", "next", "typescript", "webpack", "css"],
  },
  {
    title: "React-pdf-viewer",
    description:
      "A react component for viewing pdf file, i contributed to this project by adding new features and fixing bugs.this project is for private use only",
    stack: ["javascript", "react", "typescript", "webpack"],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-t   from-[#FF8660] to-[#D5491D]  text-transparent bg-clip-text">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <ProjectItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            stack={item.stack as IconType[]}
          />
        ))}
      </div>
    </section>
  );
}
