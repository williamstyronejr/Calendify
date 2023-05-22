"use client";

import { useState } from "react";
import DropDown from "./ui/DropDown";

const CalendarDay = () => {};

export default function Calendar({ initialEvent }: { initialEvent: any }) {
  const [] = useState("");
  const [interval, setInterval] = useState("Month");

  return (
    <div className="w-full">
      <div className="flex flex-row flex-nowrap w-full justify-between">
        <div>May</div>

        <div className="flex flex-row flex-nowrap">
          <DropDown
            options={["Day", "Month", "Year"]}
            value={interval}
            changeValue={setInterval}
          />

          <button className="mx-2" type="button" onClick={() => {}}>
            Today
          </button>

          <button className="mx-2" type="button" onClick={() => {}}>
            b
          </button>

          <button className="mx-2" type="button" onClick={() => {}}>
            b
          </button>
        </div>
      </div>

      <div>Calendar Body</div>
    </div>
  );
}
