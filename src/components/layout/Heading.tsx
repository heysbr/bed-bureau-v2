import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};
export default function Heading({children}:HeadingProps) {
  return (
    <h3 className="w-full font-bold text-4xl">{children}</h3>
  )
}