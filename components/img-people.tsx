/* eslint-disable @next/next/no-img-element */

import { ComponentProps } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface ProfileImgProps extends ComponentProps<"img"> {}

export function ProfileImg({ src, alt }: ProfileImgProps) {
  return (
    <Dialog>
      <DialogTrigger className="m-auto">
        <img
          src={src}
          alt={alt}
          className="w-24 h-24 rounded-full object-cover shadow-2xl m-auto"
        />
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent">
        <img
          src={src}
          alt={alt}
          className="w-full h-ful rounded-full object-cover shadow-2xl m-auto"
        />
      </DialogContent>
    </Dialog>
  );
}
