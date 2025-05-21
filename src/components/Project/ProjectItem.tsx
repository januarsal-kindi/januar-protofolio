import React from "react";
import Image from "next/image";
import IconMapper, { type IconType } from "@/components/Stack/IconMapper";

export type ProjectItemProps = {
  image?: string;
  title: string;
  description: string;
  stack: IconType[];
  link?: string;
  github?: string;
};
export default function ProjectItem({
  image,
  title,
  description,
  stack,
}: ProjectItemProps) {
  return (
    <div className="bg-[#222222] rounded-lg overflow-hidden">
      <div className="relative h-48 bg-gradient-to-r from-[#ff3d00] to-[#ffc107]">
        <div className="absolute inset-0 flex items-center justify-center">
          {image ? (
            <div className="text-center relative w-full h-48">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          ) : (
            <span className="text-white text-3xl">{title}</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-extralight">{title}</h3>
        </div>
        <p className="text-md font-light my-3">{description}</p>
        <div className="flex space-x-1.5">
          {stack.map((icon, index) => (
            <IconMapper key={index} name={icon} className="w-6 h-6 " />
          ))}
        </div>
      </div>
    </div>
  );
}
