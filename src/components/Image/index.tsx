import React from "react";

import NextImages, { type ImageProps } from "next/image";
import getConfig from "next/config";

type ImageComponentProps = ImageProps;
const { publicRuntimeConfig } = getConfig();

export default function Image({ src, ...arg }: ImageComponentProps) {
  const url =
    typeof src === "string" ? `${publicRuntimeConfig?.basePath || ''}${src} ` : src;

  return <NextImages {...arg} src={url} />; // Use unoptimized to prevent Next.js from optimizing the image
}
