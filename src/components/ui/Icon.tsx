import Image from "next/image";
import type { IconName } from "@/types";

interface IconProps {
  name: IconName;
  /** Taille en px (les SVG Figma sont carrés). */
  size: number;
  className?: string;
}

/** Icône SVG décorative issue de `public/icons`. */
export function Icon({ name, size, className = "" }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      aria-hidden
      className={`shrink-0 ${className}`}
    />
  );
}
