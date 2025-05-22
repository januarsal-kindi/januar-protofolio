"use client";
import React, { useEffect } from "react";
import JavascriptIcon from "@/components/icons/javascript.svg";
import TypescriptIcon from "@/components/icons/typescript.svg";
import ReactIcon from "@/components/icons/react.svg";
import ReactNativeIcon from "@/components/icons/react-native.svg";
import VueIcon from "@/components/icons/vue.svg";
import WebpackIcon from "@/components/icons/webpack.svg";
import CSSIcon from "@/components/icons/css.svg";
import NuxtIcon from "@/components/icons/nuxt.svg";
import NextIcon from "@/components/icons/next.svg";

// Define the type for the icon component

const icons = {
  javascript: () => JavascriptIcon,
  typescript: () => TypescriptIcon,
  react: () => ReactIcon,
  "react-native": () => ReactNativeIcon,
  vue: () => VueIcon,
  webpack: () => WebpackIcon,
  css: () => CSSIcon,
  nuxt: () => NuxtIcon,
  next: () => NextIcon,
};

// const icons = {
//   javascript: () => import("@/components/icons/javascript.svg"),
//   typescript: () => import("@/components/icons/typescript.svg"),
//   react: () => import("@/components/icons/react.svg"),
//   "react-native": () => import("@/components/icons/react-native.svg"),
//   vue: () => import("@/components/icons/vue.svg"),
//   webpack: () => import("@/components/icons/webpack.svg"),
//   css: () => import("@/components/icons/css.svg"),
//   nuxt: () => import("@/components/icons/nuxt.svg"),
//   next: () => import("@/components/icons/next.svg"),
// };

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type IconType = keyof typeof icons;

export type IconMapperProps = {
  name: IconType;
  className?: string;
  height?: number;
  width?: number;
};
export default function IconMapper({
  name,
  className,
  height = 12,
  width = 12,
}: IconMapperProps) {
  const [Icon, setIcon] = React.useState<IconComponent | null>(null);

  useEffect(() => {
    if (icons[name]) {
      const IconComponent = icons[name]();
      setIcon(() => IconComponent);
    }
  }, [name]);

  if (!Icon) return null;

  return <Icon className={className} height={height} width={width} />;
}
