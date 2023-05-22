import { ReactNode } from "react";
import Aside from "../../components/Aside";

export default function CalendarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Aside />
      <main className="flex flex-row flex-grow h-full">{children}</main>
    </>
  );
}
