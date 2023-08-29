"use client";

import Aside from "@/components/Aside";
import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function CalendarLayout({ children }: { children: ReactNode }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Aside />
      <div className="flex flex-row flex-grow h-full w-0">{children}</div>
    </DndProvider>
  );
}
