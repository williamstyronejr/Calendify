import Calendar from "@/components/Calendar";
import { prisma } from "@/utils/db";

async function getCalendarData() {
  console.log("Should only appear on server");
  try {
    const events = await prisma.event.findMany({});

    console.log({ events });
    return [
      {
        id: "test",
        title: "test",
      },
    ];
  } catch (err) {
    throw new Error("Error getting user calendar data");
  }
}

export default async function CalendarPage() {
  const events = await getCalendarData();

  console.log(events);
  return (
    <div className="w-full">
      <Calendar initialEvent={events} />
    </div>
  );
}
