// import { useState, type FormEvent } from 'react';
// import './Todo.css'; // Fixedimport path

// interface TodoItem {
//     index: number;
//     message: string;
//     completed: boolean;
// }

// export default function Todo() {
//     const [todo, setTodo] = useState<TodoItem[]>([]);
//     const [inputValue, setInputValue] = useState("");
//     const [id, setId] = useState(0);

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         if (inputValue.trim()) {
//             addingValue(inputValue);
//         }
//     };

//     const setInput = (value: string) => {
//         if(value.trim() === "") {
//             alert("Please enter a valid task.");
//             return;
//         }
//         setTodo([...todo, { index: id, message: value, completed: false }]);
//         setId(id + 1);
//     }

//     const addingValue = (inputValue: string) => {
//         setInput(inputValue);
//         setInputValue("");
//     }

//     const deleteTodo = (todoForDelete: TodoItem) => {
//         const latestTodo = todo.filter(singleTodo => singleTodo.index !== todoForDelete.index);
//         setTodo(latestTodo);
//     }

//     return (
//         <div className="todo">
//             <h2>Todo List</h2>  
//             <form onSubmit={handleSubmit}>
//                 <input
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     placeholder="Add a new task..."
//                 />
//                 <button type="submit">Add</button>
//             </form>
//             <ul>
//                 {todo.map(singleTodo => (
//                     <li key={singleTodo.index}>
//                         <span>{singleTodo.message}</span>
//                         <button 
//                             type="button" 
//                             onClick={() => deleteTodo(singleTodo)}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

import { useState, type FormEvent } from "react";
import "./Todo.css";
import { useTodos } from "./TodoContext";

export default function Todo() {
  const { todos, addTodo, deleteTodo, toggleComplete } = useTodos();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map(t => (
          <li key={t.index} className={`todo-item ${t.completed ? "done" : ""}`}>
            <label className="todo-row">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleComplete(t.index)}
              />
              <span className="msg">{t.message}</span>
            </label>
            <button type="button" className="delete" onClick={() => deleteTodo(t.index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
