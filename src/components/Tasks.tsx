import { useTodos } from "./TodoContext";

export default function Tasks() {
  const { todos } = useTodos();
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="tasks-summary">
      <h2>Task Summary</h2>
      <div className="stats">
        <div className="stat">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat">
          <div className="stat-number">{completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat">
          <div className="stat-number">{pending}</div>
          <div className="stat-label">Pending</div>
        </div>
      </div>
    </div>
  );
}
