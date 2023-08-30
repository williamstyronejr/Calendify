"use client";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useDrop } from "react-dnd";

const Day = ({ day }: { day: number }) => {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop(item: any, monitor) {
      console.log("found", item);
    },
  }));

  return (
    <div ref={drop} className="relative border border-slated-500/10 w-1/7">
      <div className="text-right pr-1 pt-1">{day}</div>
    </div>
  );
};

const Week = ({ startDate }: { startDate: string }) => {
  const startDay = dayjs(startDate);

  return (
    <div className="flex flex-row w-full flex-grow">
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
      <div className="flex flex-row w-full shrink-0 h-6">
        <div className="w-1/7 text-center">Sun</div>
        <div className="w-1/7 text-center">Mon</div>
        <div className="w-1/7 text-center">Tue</div>
        <div className="w-1/7 text-center">Wed</div>
        <div className="w-1/7 text-center">Thu</div>
        <div className="w-1/7 text-center">Fri</div>
        <div className="w-1/7 text-center">Sat</div>
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
    <div className="flex flex-col flex-nowrap flex-grow h-0 w-full">
      <Month startDate={startDate} />
    </div>
  );
};

export default Views;
