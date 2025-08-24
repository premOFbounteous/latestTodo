import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useTodos } from "./TodoContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { todos } = useTodos();

  const completed = todos.filter(t => t.completed).length;
  const total = todos.length;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar">
      <div className="left">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/tasks" className={linkClass}>
          Tasks <span className="badge">{completed}/{total}</span>
        </NavLink>
        <NavLink to="/tags" className={linkClass}>Tags</NavLink>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}
