import React from "react";
import ExperinceItem from "./ExperinceItem";

const data = [
  {
    image: "/ruangguru.png",
    title: "Frontend Engineer",
    company: "Ruangguru",
    date: "Jun 2021 - Apr 2025",
    description:
      "As a Frontend Engineer at Ruangguru, I developed high-quality, performant features with clean and maintainable code. I also mentored three junior developers by providing technical guidance, conducting code reviews, and helping break down complex tasks for better execution",
  },
  {
    image: "/elevenia-logo.png",
    title: "Frontend Engineer",
    company: "Elevenia Biz (PT. XL Planet)",
    date: "Mar 2020 - Jun 2021",
    description:
      "Developed both the Back Office app using Razzle for managing transactions and sales, and the Customer-Facing project with Next.js to boost SEO through SSR. I collaborated with the product team to analyze and implement high-quality solutions.",
  },
  {
    image: "/blanja-logo.png",
    title: "Frontend Engineer",
    company: "Blanja.com (PT. Metraplasa)",
    date: "Aug 2018 -  Mar 2025",
    description:
      "At Blanja.com, I focused on building and improving the payment module using jQuery and Vue.js. I helped develop a new platform to boost performance and developer experience by implementing Webpack, Vue, Gulp, and SCSS. I also set up base components, Husky, and lint-staged to support the transition from the old to the new platform, and led a Vue.js knowledge-sharing session.",
  },
  {
    image: "/visionet-logo.png",
    title: "Fullstack Engineer",
    company: "Visionet Data Internasional",
    date: "Jun 2016 - Aug 2018",
    description:
      "I led the development of an admin dashboard for parking management (SkyParking) and built a sales dashboard using Angular 4 to improve property sales tracking. Additionally, I developed a mobile app for housing management as an Android Developer, allowing residents to pay utility bills and receive management notifications.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-12 md:py-16 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-gradient-to-t   from-[#5BADFF] to-[#1373D1]  text-transparent bg-clip-text">
        EXPERIENCE
      </h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {data.map((item, index) => (
          <ExperinceItem
            key={index}
            image={item.image}
            title={item.title + " - " + item.company}
            company={item.company}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
