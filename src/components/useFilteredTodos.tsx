import { useState } from "react";
import { useTodos } from "./TodoContext";

export type Filter = "all" | "completed" | "pending";

export function useFilteredTodos() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = todos.filter(t =>
    filter === "all"
      ? true
      : filter === "completed"
      ? t.completed
      : !t.completed
  );

  return { filter, setFilter, filtered };
}
