import React from "react";
import Image from "@/components/Image";

export type experienceItemProps = {
  image: string;
  title: string;
  company: string;
  date: string;
  description: string;
};

export default function ExperinceItem({
  image,
  title,
  company,
  date,
  description,
}: experienceItemProps) {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="w-12 h-12 bg-white rounded-full relative items-center justify-center">
          <Image
            src={image}
            alt={company}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2 flex-col md:flex-row space-x-2" >
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <span className="text-sm text-[#8491a0]">{date}</span>
        </div>
        <p className="text-[#c5c5c5] md:text-lg text-sm">{description}</p>
      </div>
    </div>
  );
}
