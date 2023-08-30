"use client";

import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import TaskList from "@/components/ui/TaskList";
import CompleteButton from "@/components/ui/CompleteButton";

enum TaskDisplay {
  TODAY,
  WEEK,
}

const TaskDetails = ({ task }: { task: any }) => {
  return (
    <div className="px-2">
      <div className="flex flex-row flex-nowrap">
        <CompleteButton id={task.id} isComplete={task.completed} />
      </div>

      <hr className="my-2" />

      <h3 className="w-full text-wrap my-2 font-semibold text-wrap break-words">
        {task.title}
      </h3>

      <p className="">{task.description || "No description"}</p>
    </div>
  );
};

export default function TaskPage() {
  const [selected, setSelected] = useState<any[]>([]);
  const [display, setDisplay] = useState<TaskDisplay>(TaskDisplay.TODAY);

  const ref = useOutsideClick({
    active: true,
    ignoreButton: true,
    closeEvent: () => {
      setSelected([]);
    },
  });

  const tasks = [
    {
      id: "t",
      title:
        "titljfkdnsafjkdasnfkjnadskjfndsjkffdasnkjfdasnfjkdsnajfndaksjnfjkdasnfkjndsakjfndjsaknfkjsdanfjkansdjkfnjksadnfjkasndjkfdnaskjdnfe",
    },
    {
      id: "t2",
      title:
        "title title title title title title title title title title title title title title title title title title title title title title title title title title title title title ",
    },
    {
      id: "t3",
      title: "title",
    },
    {
      id: "t4",
      title: "title",
    },
  ];

  return (
    <div className="flex flex-row flex-nowrap grow">
      <aside className="flex flex-col flex-nowrap pr-4 w-20 shrink-0">
        <button
          type="button"
          className="text-left"
          disabled={display === TaskDisplay.TODAY}
          onClick={() => setDisplay(TaskDisplay.TODAY)}
        >
          Today
        </button>

        <button
          type="button"
          className="text-left"
          disabled={display === TaskDisplay.WEEK}
          onClick={() => setDisplay(TaskDisplay.WEEK)}
        >
          Next 7 Days
        </button>
      </aside>

      <div ref={ref} className="flex flex-row flex-nowrap grow">
        <div className="w-80 shrink-0">
          <TaskList tasks={tasks} onSelect={(task) => setSelected([task])} />
        </div>

        <div className="grow w-0">
          {selected.length === 0 ? <div>No Task</div> : null}
          {selected.length === 1 ? <TaskDetails task={selected[0]} /> : null}
        </div>
      </div>
    </div>
  );
}
