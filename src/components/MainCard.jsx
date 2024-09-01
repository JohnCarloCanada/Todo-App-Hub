import React from "react";

import { Header, TodoEntry, TodoList } from "../components/MainCard Components";
const MainCard = () => {
  return (
    <>
      <Header />
      <TodoEntry />
      <TodoList />

      <section className="flex items-center justify-center mt-20 sm:mt-5">
        <span className="text-l-dark-grayish-blue text-[0.7rem]">
          Drag and drop to reorder list
        </span>
      </section>
    </>
  );
};

export default MainCard;
