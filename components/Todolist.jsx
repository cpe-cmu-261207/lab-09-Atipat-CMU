import { IconMoon, IconSunHigh, IconThermometer } from "@tabler/icons";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../libs/themes";

export default function Todolist() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selTheme, setSelTheme] = useState(themes.light);

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem("todos-list"));
    setTodos(newTodos);
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoName) => {
    if (inputTodo === "") {
      alert("Todo cannot be empty");
    } else {
      const todo = { name: todoName, completed: false };
      todos ? setTodos([todo, ...todos]) : setTodos([todo]);
      setInputTodo("");
    }
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodo = [...todos];
    setTodos(newTodo);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx !== 0) {
      const targetTodo = todos[idx];
      const newTodos = [...todos];
      newTodos[idx] = newTodos[idx - 1];
      newTodos[idx - 1] = targetTodo;
      setTodos(newTodos);
    }
  };

  const moveDown = (idx) => {
    if (idx !== todos.length - 1) {
      const targetTodo = todos[idx];
      const newTodos = [...todos];
      newTodos[idx] = newTodos[idx + 1];
      newTodos[idx + 1] = targetTodo;
      setTodos(newTodos);
    }
  };

  const toggleTheme = () => {
    if (selTheme.name === "Light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  return (
    <div
      className="p-4"
      style={{
        backgroundColor: selTheme.backgoundColor,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
        }}
        className="mx-auto"
      >
        {/* App header */}
        <p
          className="display-4 text-center fst-italic mb-4"
          style={{ color: selTheme.foreground }}
        >
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <div className="d-flex align-items-center gap-2">
          <input
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
            onChange={(e) => {
              setInputTodo(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                addTodo(inputTodo);
              }
            }}
            value={inputTodo}
          />
          <button className="btn btn-dark" onClick={toggleTheme}>
            {selTheme.name === "Light" && <IconSunHigh />}
            {selTheme.name === "Dark" && <IconMoon />}
          </button>
        </div>
        <ThemeContext.Provider value={{ selTheme }}>
          {todos &&
            todos.map((todo, i) => {
              return (
                <Todo
                  name={todo.name}
                  completed={todo.completed}
                  key={i}
                  onDelete={() => deleteTodo(i)}
                  onMark={() => markTodo(i)}
                  onClickUp={() => moveUp(i)}
                  onClickDown={() => moveDown(i)}
                ></Todo>
              );
            })}
        </ThemeContext.Provider>
        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">
            All ({todos ? todos.length : 0}){" "}
          </span>
          <span className="text-warning">
            Pending (
            {todos ? todos.filter((x) => x.completed === false).length : 0}){" "}
          </span>
          <span className="text-success">
            Completed (
            {todos ? todos.filter((x) => x.completed === true).length : 0})
          </span>
        </p>

        {/* Made by section */}
        <div className="text-center p-3 text-muted fst-italic">
          made by Atipat Daowraeng 640610674
        </div>
      </div>
    </div>
  );
}
