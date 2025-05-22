"use client";
import React, { useEffect } from "react";

// Define the type for the icon component

const icons = {
  javascript: () => import("@/components/icons/javascript.svg"),
  typescript: () => import("@/components/icons/typescript.svg"),
  react: () => import("@/components/icons/react.svg"),
  "react-native": () => import("@/components/icons/react-native.svg"),
  vue: () => import("@/components/icons/vue.svg"),
  webpack: () => import("@/components/icons/webpack.svg"),
  css: () => import("@/components/icons/css.svg"),
  nuxt: () => import("@/components/icons/nuxt.svg"),
  next: () => import("@/components/icons/next.svg"),
};

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
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    icons[name]().then((mod) => {
      setIcon(() => mod.default);
      setLoading(false);
    });
  }, [name]);

  return loading && !Icon ? (
    <div className="animate-pulse  ${className} ">
      <div className={`bg-gray-300`} style={{ height, width }} />
    </div>
  ) : (
    Icon && <Icon className={className} height={height} width={width} />
  );
}
