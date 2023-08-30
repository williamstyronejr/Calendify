"use client";

import { useCallback, useState } from "react";
import DropDown from "../ui/DropDown";
import Views from "./View";
import dayjs from "dayjs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar({ initialEvent }: { initialEvent: any }) {
  const [interval, setInterval] = useState("Month");
  const [startDate, setStartDate] = useState(dayjs().toString());
  const currentMonth = months[dayjs(startDate).get("month")];
  const currentYear = dayjs(startDate).get("year");

  const moveDate = useCallback(
    (amount: number) => {
      if (interval === "Day") {
        setStartDate((old) => dayjs(old).add(amount, "day").toString());
      } else if (interval === "Week") {
        setStartDate((old) => dayjs(old).add(amount, "week").toString());
      } else if (interval === "Month") {
        setStartDate((old) => dayjs(old).add(amount, "month").toString());
      }
    },
    [interval]
  );

  return (
    <div className="flex flex-col flex-nowrap flex-grow w-full">
      <div className="flex flex-row flex-nowrap shrink-0 justify-between pt-2 pb-4">
        <div>
          {currentMonth} <span className="font-bold">{currentYear}</span>
        </div>

        <div className="flex flex-row flex-nowrap">
          <DropDown
            options={["Day", "Week", "Month"]}
            value={interval}
            changeValue={setInterval}
          />

          <button
            className="rounded-md mx-2 p-2 bg-slate-100 hover:bg-slate-300 border border-slate-500"
            type="button"
            onClick={() => {}}
          >
            Today
          </button>

          <button
            className="transition-colors mx-2 px-2 h-8 rounded-lg hover:bg-slate-300"
            type="button"
            onClick={() => {
              moveDate(-1);
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sc-vb7gpf-2 fzgCuP"
            >
              <path
                d="M9.5 3.5 5 8l4.5 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          <button
            className="transition-colors mx-2 px-2 h-8 rounded-lg hover:bg-slate-300"
            type="button"
            onClick={() => {
              moveDate(1);
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M6.5 3.5 11 8l-4.5 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <Views startDate={startDate} events={initialEvent} mode={interval} />
    </div>
  );
}
