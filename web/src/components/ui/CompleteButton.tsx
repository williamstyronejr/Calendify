"use client";

import useTaskComplete from "@/hooks/api/useCompleteTask";

export default function CompleteButton({
  id,
  isComplete,
}: {
  id: string;
  isComplete: boolean;
}) {
  const { mutate, isLoading } = useTaskComplete();

  return (
    <div>
      <button
        className="transition-colors w-6 h-6 shrink-0 mr-2 rounded-lg border border-black hover:bg-slate-200"
        type="button"
        disabled={isLoading}
        onClick={() => {
          mutate({ id, complete: !isComplete });
        }}
      />
    </div>
  );
}
