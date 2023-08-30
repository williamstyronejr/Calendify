"use client";

import { useState } from "react";
import { useDrag } from "react-dnd";

const TaskItem = ({ id, title }: { id: string; title: string }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "task",
    item: { id, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return collected.isDragging ? (
    <div className="bg-sky-500 w-full h-10" ref={dragPreview}></div>
  ) : (
    <div className="" ref={dragPreview}>
      <div ref={drag} className="flex flex-row flex-nowrap">
        <button
          className="transition-colors w-5 h-5 rounded mr-2 border-2 border-black hover:border-gray-500 hover:bg-gray-500/20"
          type="button"
          onClick={() => {
            console.log("TODO: Completing Event");
          }}
        />

        <div>
          {title}
          <div>Gmail</div>
        </div>
      </div>
    </div>
  );
};

const TaskList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: "12",
      title: "title",
    },
    {
      id: "2",
      title: "title",
    },
    {
      id: "1",
      title: "title",
    },
  ]);

  return (
    <>
      <div className="py-4">
        <input
          className="w-full  rounded-lg px-2  py-1 bg-slate-100"
          type="text"
          placeholder="Add Task"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          onKeyUp={(evt) => {
            if (evt.key === "Enter") {
              setTasks((old) => [
                ...old,
                {
                  id: Math.random().toString(),
                  title: input,
                },
              ]);
              setInput("");
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
    </>
  );
};

const Aside = () => {
  const [display, setDisplay] = useState("calendar");

  return (
    <aside className="flex flex-row flex-nowrap w-60 pr-2">
      <div className="flex flex-col">
        {display === "calendar" ? <TaskList /> : null}
      </div>
    </aside>
  );
};

export default Aside;
