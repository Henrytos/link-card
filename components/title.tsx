import { ComponentProps } from "react";

interface TitleProps extends ComponentProps<"h1"> {}

export function ProfileTitle({ children }: TitleProps) {
  return (
    <h1 className="text-center font-bold text-xl text-white">@{children}</h1>
  );
}
