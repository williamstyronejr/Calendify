"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function TaskInput() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const { mutate: createTask } = useMutation(
    ["task", "create"],
    async ({ title, date }: { title: string; date: string }) => {
      // const res = await fetch("/api/tasks", {
      //   method: "POST",
      //   body: JSON.stringify({ title, date }),
      // });

      return null;
    },
    {}
  );

  return (
    <div className="">
      <input
        className=""
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        onKeyDown={() => {}}
      />

      <button
        className=""
        type="button"
        disabled={title.trim() === ""}
        onClick={() => {
          createTask({ title, date });
        }}
      ></button>
    </div>
  );
}
