import Calendar from "@/components/Calendar";
import { prisma } from "@/utils/db";
import Head from "next/head";

async function getCalendarData() {
  console.log("Should only appear on server");
  try {
    const events = await prisma.event.findMany({});

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

  return (
    <>
      <Head>
        <title>Calendar - Calendify</title>
      </Head>

      <Calendar initialEvent={events} />
    </>
  );
}
