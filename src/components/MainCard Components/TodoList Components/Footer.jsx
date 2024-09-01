import React, { useState, useContext } from "react";
import Statuses from "../../Utilities Components/Statuses";
import TodoContext from "../../../Context/TodoContext";

const Footer = () => {
  const { status, setStatus, statusesList, todos, setTodos } =
    useContext(TodoContext);

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  return (
    <>
      <footer className="flex justify-between items-center p-4 text-[0.7rem]">
        <span className="sm:z-10 text-l-dark-grayish-blue hover:text-d-very-dark-grayish-blue-second cursor-pointer dark:hover:text-d-light-grayish-blue">
          {todos.length} Items Left
        </span>
        <span
          className="sm:z-10 text-l-dark-grayish-blue hover:text-d-very-dark-grayish-blue-second cursor-pointer dark:hover:text-d-light-grayish-blue"
          onClick={clearCompletedTodos}
        >
          Clear Completed
        </span>
      </footer>

      <section className="bg-l-very-light-gray dark:bg-d-dark-desaturated-blue w-full absolute bottom-[-60px] sm:bottom-0 flex justify-center gap-x-4 items-center p-4 text-l-dark-grayish-blue text-sm rounded-lg sm:rounded-t-none border-t-2 dark:border-d-very-dark-grayish-blue-first shadow-2xl sm:shadow-none">
        {statusesList.map((status, index) => {
          return (
            <Statuses key={index} text={status.text} setStatus={setStatus} />
          );
        })}
      </section>
    </>
  );
};

export default Footer;
