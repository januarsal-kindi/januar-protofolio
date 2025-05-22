"use client";
import React from "react";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
const menus = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
export default function Navbar() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <header className="w-full z-40 fixed top-0 bg-dark  mx-auto px-4 py-6 flex items-center justify-between">
      <div className="hidden w-full sm:flex container mx-auto max-w-5xl  items-center justify-between">
        <div className="w-20">
          <div className="font-bold text-xl">JS.</div>
        </div>
        <nav>
          <ul className="flex space-x-8">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.href}
                  scroll={false}
                  onClick={() => scrolltoHash(menu.name.toLowerCase())}
                  className="text-white hover:text-[#5badff]"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <NavbarMobile
        menus={menus}
        onClick={(menu) => {
          scrolltoHash(menu.name.toLowerCase());
        }}
      />
    </header>
  );
}
