import { createContext, useState, useEffect } from "react";

const TodoContext = createContext({});

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const statusesList = [
    { text: "All" },
    { text: "Active" },
    { text: "Completed" },
  ];

  useEffect(() => {
    let isMounted = true;
    if (isMounted) localStorage.setItem("todos", JSON.stringify(todos));

    return () => (isMounted = false);
  }, [todos]);

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo) => {
      if (status === "All") return true;
      if (status === "Active") return !todo.completed;
      if (status === "Completed") return todo.completed;
      return true;
    });

    setFilteredTodos(newFilteredTodos);
  }, [todos, status]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        status,
        setStatus,
        statusesList,
        filteredTodos,
        setFilteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
