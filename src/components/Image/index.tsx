import React from "react";
import NextImages, { type ImageProps } from "next/image";

const isProd = process.env.NODE_ENV === "production";
type ImageComponentProps = ImageProps;

export default function Image({ src, ...arg }: ImageComponentProps) {
  const url =
    typeof src === "string"
      ? `${isProd ? "/januar-portofolio" : ""}${src} `
      : src;

  return <NextImages {...arg} src={url} />; // Use unoptimized to prevent Next.js from optimizing the image
}
