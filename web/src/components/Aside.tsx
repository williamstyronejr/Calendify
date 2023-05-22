"use client";
import { useState } from "react";

const tasks = [
  {
    id: "12",
    title: "title",
  },
];

const TaskItem = ({ id, title }: { id: string; title: string }) => {
  const [] = useState(false);

  return (
    <div key={id} className="py-2">
      {title}
    </div>
  );
};

const Aside = () => {
  const [display, setDisplay] = useState("tasks");

  return (
    <aside className="flex flex-row flex-nowrap w-60">
      <div className="w-10">
        <button
          className=""
          type="button"
          disabled={display === "tasks"}
          onClick={() => {
            setDisplay("tasks");
          }}
        >
          T
        </button>
      </div>

      <div className="flex flex-col">
        <div className="">
          <input
            className="w-full  rounded-lg px-2  py-1 bg-gray-500"
            type="text"
            placeholder="Add Task"
            onKeyUp={(evt) => {
              if (evt.key === "Enter") {
                console.log("Creating Task");
              }
            }}
          />
        </div>

        {tasks.map((task) => (
          <TaskItem
            key={`task-list-${task.id}`}
            id={task.id}
            title={task.title}
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
