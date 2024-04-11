import { ComponentProps } from "react";

interface FotterProps extends ComponentProps<"footer"> {}
export function Footer({ children }: FotterProps) {
  return (
    <>
      <footer className="absolute bottom-5 z-10  left-0 w-full flex justify-center">
        <p className="text-white   ">
          Todos os direitos reservado a
          <span className="font-semibold"> {children}</span>
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
