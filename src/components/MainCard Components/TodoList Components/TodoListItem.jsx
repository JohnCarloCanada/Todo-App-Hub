import React, { useContext } from "react";
import check from "../../../assets/images/icon-check.svg";
import deleteBtn from "../../../assets/images/icon-cross.svg";
import TodoContext from "../../../Context/TodoContext";
import { FaEye } from "react-icons/fa";

const TodoListItem = ({ text, completed, id }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <section className="flex justify-between items-center px-4 py-4 border-b-2 border-b-l-dark-grayish-blue dark:border-d-very-dark-grayish-blue-first">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          className="hidden peer"
          checked={completed}
          onChange={() => changeCompleted(id)}
        />
        <div className="w-6 h-6 bg-none border-[1px] rounded-full border-l-dark-grayish-blue dark:border-d-very-dark-grayish-blue-first hover:border-primary-bright-blue dark:hover:border-primary-bright-blue"></div>
        <img
          src={check}
          className="w-0 h-0 p-0 peer-checked:p-1 object-contain peer-checked:w-6 peer-checked:h-6 bg-gradient-to-t from-primary-check-background-first to-primary-check-background-second rounded-full absolute left-0"
          aria-hidden="true"
        ></img>
        <span className="text-sm text-d-very-dark-grayish-blue-second peer-checked:text-l-dark-grayish-blue dark:peer-checked:text-d-very-dark-grayish-blue-first dark:text-d-light-grayish-blue pl-3 peer-checked:line-through">
          {text}
        </span>
      </label>

      <label className="flex items-center gap-4">
        <FaEye size={18} className="text-primary-bright-blue  cursor-pointer" />
        <img
          className="cursor-pointer"
          src={deleteBtn}
          alt="delete button"
          onClick={() => deleteList(id)}
        />
      </label>
    </section>
  );
};

export default TodoListItem;
