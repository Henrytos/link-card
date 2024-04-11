import { ComponentProps } from "react";

interface MainContentProps extends ComponentProps<"main"> {}

export function MainContent({ children }: MainContentProps) {
  return (
    <>
      <main className="flex min-h-screen p-5 antialiased">{children}</main>
    </>
  );
}
