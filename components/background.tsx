/* eslint-disable @next/next/no-img-element */

import { ComponentProps } from "react";

interface BackgroundProps extends ComponentProps<"img"> {}

export function Background({ alt, src }: BackgroundProps) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      <span className="absolute top-0 left-0 w-full h-full bg-black/75 backdrop-blur-xl" />
    </>
  );
}
