"use client";
import dayjs from "dayjs";
import { useEffect } from "react";

const Day = ({ day }: { day: number }) => {
  return (
    <div
      className="relative bg-sky-700 w-1/7"
      onDragOver={() => {
        console.log("Dragging OVer");
      }}
      onDropCapture={() => {
        console.log("testing");
      }}
      onDrop={(evt) => console.log("Drop Detected")}
    >
      <div>{day}</div>
    </div>
  );
};

const Week = ({ startDate }: { startDate: string }) => {
  const startDay = dayjs(startDate);

  return (
    <div className="flex flex-row w-full">
      <Day day={startDay.get("date")} />
      <Day day={startDay.add(1, "day").get("date")} />
      <Day day={startDay.add(2, "day").get("date")} />
      <Day day={startDay.add(3, "day").get("date")} />
      <Day day={startDay.add(4, "day").get("date")} />
      <Day day={startDay.add(5, "day").get("date")} />
      <Day day={startDay.add(6, "day").get("date")} />
    </div>
  );
};

const Month = ({ startDate }: { startDate: string }) => {
  const startMonth = dayjs(startDate).startOf("M");

  return (
    <>
      <div className="flex flex-row w-full shrink-0 h-1">
        <div className="w-1/7">Sunday</div>
        <div className="w-1/7">Monday</div>
        <div className="w-1/7">Tuesday</div>
        <div className="w-1/7">Wednesday</div>
        <div className="w-1/7">Thrusday</div>
        <div className="w-1/7">Friday</div>
        <div className="w-1/7">Saturday</div>
      </div>

      <Week startDate={startMonth.toString()} />
      <Week startDate={startMonth.add(1, "w").toString()} />
      <Week startDate={startMonth.add(2, "w").toString()} />
      <Week startDate={startMonth.add(3, "w").toString()} />
      <Week startDate={startMonth.add(4, "w").toString()} />
    </>
  );
};

const Views = ({
  startDate,
  events,
  mode,
}: {
  startDate: string;
  events: any;
  mode: string;
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="flex flex-row flex-wrap flex-grow h-0 w-full">
      <Month startDate={startDate} />
    </div>
  );
};

export default Views;
