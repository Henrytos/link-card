import { Children, ComponentProps } from "react";

interface LinkProps extends ComponentProps<"a"> {}

export function LinkProfile(props: LinkProps) {
  return (
    <a
      className="w-full text-white bg-black/60 py-4 font-medium text-base uppercase text-center hover:bg-black rounded-md transition duration-300 ease-in-out hover:scale-105"
      target="_blank"
      {...props}
    />
  );
}

interface LinkContentProps extends ComponentProps<"div"> {}

export function ContentLinkProfile({ children }: LinkContentProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
