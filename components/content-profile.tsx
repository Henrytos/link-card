import { ComponentProps } from "react";

interface ContentProfileProps extends ComponentProps<"main"> {}

export function ContentProfile(props: ContentProfileProps) {
  return (
    <>
      <section className="z-10 max-w-xl w-full mx-auto" {...props} />
    </>
  );
}
