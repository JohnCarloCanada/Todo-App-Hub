import React, { useContext } from "react";
import { Footer, TodoListItem } from "./TodoList Components";
import TodoContext from "../../Context/TodoContext";
import { Reorder, motion } from "framer-motion";

const TodoList = () => {
  const { filteredTodos, setFilteredTodos } = useContext(TodoContext);

  return (
    <Reorder.Group axis="y" values={filteredTodos} onReorder={setFilteredTodos}>
      <section className="bg-l-very-light-gray dark:bg-d-dark-desaturated-blue mt-4 rounded-lg shadow-2xl relative">
        {filteredTodos.map((todo) => {
          return (
            <Reorder.Item key={todo.id} value={todo}>
              <TodoListItem {...todo} />
            </Reorder.Item>
          );
        })}
        <Footer />
      </section>
    </Reorder.Group>
  );
};

export default TodoList;
