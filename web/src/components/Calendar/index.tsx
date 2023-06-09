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
  console.log(startDate);

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
      <div className="flex flex-row flex-nowrap shrink-0 justify-between">
        <div>{currentMonth}</div>

        <div className="flex flex-row flex-nowrap">
          <DropDown
            options={["Day", "Week", "Month"]}
            value={interval}
            changeValue={setInterval}
          />

          <button className="mx-2" type="button" onClick={() => {}}>
            Today
          </button>

          <button
            className="mx-2"
            type="button"
            onClick={() => {
              moveDate(-1);
            }}
          >
            b
          </button>

          <button
            className="mx-2"
            type="button"
            onClick={() => {
              moveDate(1);
            }}
          >
            b
          </button>
        </div>
      </div>

      <Views startDate={startDate} events={initialEvent} mode={interval} />
    </div>
  );
}
