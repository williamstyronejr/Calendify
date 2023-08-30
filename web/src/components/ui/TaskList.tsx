"use client";

import TaskInput from "./TaskInput";
import CompleteButton from "./CompleteButton";

export default function TaskList({
  tasks,
  onSelect,
}: {
  tasks: any[];
  onSelect: (task: any) => void;
}) {
  return (
    <div>
      <div>
        <TaskInput />
      </div>

      <div className="flex flex-col flex-nowrap">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-row flex-nowrap items-center mb-2"
          >
            <CompleteButton id={task.id} isComplete={task.completed} />

            <button
              type="button"
              className="text-left w-0 grow "
              onClick={() => {
                console.log(task);
                onSelect(task);
              }}
            >
              <div
                title={task.title}
                className="whitespace-nowrap text-ellipsis overflow-hidden"
              >
                {task.title}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
