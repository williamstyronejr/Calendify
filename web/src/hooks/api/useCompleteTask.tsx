import { useMutation } from "@tanstack/react-query";

export default function useTaskComplete() {
  return useMutation(
    ["task", "complete"],
    async ({ id, complete }: { id: string; complete: boolean }) => {
      const res = await fetch("/api/task/complete", {
        method: "POST",
        body: JSON.stringify({ id, complete }),
      });

      if (res.ok) return await res.json();

      throw new Error("An error occurred during updating, please try again.");
    }
  );
}
