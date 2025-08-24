import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import { ThemeProvider } from "./components/ThemeContext";
import { TodoProvider } from "./components/TodoContext";
import Tags from "./components/Tags";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="App">
          <Router>
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tags" element={<Tags />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
