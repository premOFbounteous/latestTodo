import { useFilteredTodos } from "./useFilteredTodos";

export default function Tags() {
  const { filter, setFilter, filtered } = useFilteredTodos();

  return (
    <div className="tags-page">
      <h2>Tasks by Tag</h2>
      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>
          Pending
        </button>
      </div>

      <ul className="tag-list">
        {filtered.map(t => (
          <li key={t.index}>{t.message}</li>
        ))}
        {filtered.length === 0 && <li>No items</li>}
      </ul>
    </div>
  );
}
