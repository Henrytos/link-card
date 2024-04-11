import { Children, ComponentProps } from "react";
import { IconType } from "react-icons/lib";

interface LinkProps extends ComponentProps<"a"> {}

export function LinkProfile({ children, ...props }: LinkProps) {
  return (
    <a
      className="w-full text-white bg-black/60 py-4 font-medium text-base uppercase text-center hover:bg-black rounded-md transition duration-300 ease-in-out hover:scale-105 flex  gap-2 items-center  justify-center"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

interface LinkContentProps extends ComponentProps<"div"> {}

export function ContentLinkProfile({ children }: LinkContentProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
