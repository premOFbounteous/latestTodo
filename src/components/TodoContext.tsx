import { createContext, useContext, useState, type ReactNode } from "react";

export interface TodoItem {
  index: number;
  message: string;
  completed: boolean;
}

interface TodoCtx {
  todos: TodoItem[];
  addTodo: (message: string) => void;
  deleteTodo: (index: number) => void;
  toggleComplete: (index: number) => void;
}

const TodoContext = createContext<TodoCtx | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [nextId, setNextId] = useState(0);

  const addTodo = (message: string) => {
    const msg = message.trim();
    if (!msg) return;
    setTodos(prev => [...prev, { index: nextId, message: msg, completed: false }]);
    setNextId(n => n + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.index !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(prev => prev.map(t => t.index === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodos must be used inside TodoProvider");
  return ctx;
};
