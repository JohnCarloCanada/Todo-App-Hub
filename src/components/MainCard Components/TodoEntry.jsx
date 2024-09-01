import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../../Context/TodoContext";
const TodoEntry = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputFocused, setInputFocused] = useState(false);
  const [newTodos, setNewTodos] = useState("");

  const addTodos = () => {
    if (!newTodos.trim() || newTodos.trim() === " ") return;
    const id = uuidv4();
    const todayDate = new Date();
    const newTodoItem = {
      id,
      text: newTodos,
      completed: false,
      dateCreated: todayDate,
    };
    const newTodoItems = [...todos, newTodoItem];
    setTodos(newTodoItems);
    setNewTodos("");
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-between items-center bg-l-very-light-gray dark:bg-d-dark-desaturated-blue p-4 rounded-lg cursor-pointer"
    >
      <div
        onClick={addTodos}
        className="w-6 h-6 bg-none border-[1px] rounded-full border-l-dark-grayish-blue dark:border-d-very-dark-grayish-blue-first"
      ></div>
      {inputFocused ? (
        <span className="pl-3 text-d-very-dark-blue dark:text-d-light-grayish-blue text-base">
          Currently Typing
        </span>
      ) : (
        <span className="pl-3 text-l-dark-grayish-blue dark:text-d-very-dark-grayish-blue-first text-base">
          Create new todo...
        </span>
      )}
      <input
        className="flex-1 outline-none bg-l-very-light-gray dark:bg-d-dark-desaturated-blue pl-3 text-d-very-dark-blue dark:text-d-light-grayish-blue"
        type="text"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
      />
    </form>
  );
};

export default TodoEntry;
