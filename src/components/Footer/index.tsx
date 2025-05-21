import React from "react";
import { Mail, Github, LucideLinkedin } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-16 flex justify-center items-center flex-col"
    >
      <h2 className="text-3xl font-bold mb-8 text-center ">Contact</h2>
      <div className="max-w-3xl">
        <p className="text-[#c5c5c5] mb-6 text-center">
          Seasoned Frontend Engineer with over 8 years of experience building
          high-performance, scalable web applications across edtech, e-commerce,
          and B2B platforms. Skilled in modern JavaScript frameworks like React,
          Vue, and Next.js, Adept at leveraging a comprehensive skill set
          encompassing front-end and back-end technologies.
        </p>
        <div className="flex items-center justify-center space-x-4 ">
          <div className="flex ">
            <Mail className="w-5 h-5 mr-2" />
            <a
              href="mailto:yayan.yayan98@gmail.com"
              className="text-[#c5c5c5] hover:text-white"
            >
              yayan.yayan98@gmail.com
            </a>
          </div>
          <div className="flex  items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/januaralkindi/"
              className="text-[#c5c5c5] hover:text-white"
            >
              <LucideLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/januarsal-kindi"
              className="text-[#c5c5c5] hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
