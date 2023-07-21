'use server'

import { TodoItem } from "./TodoItem";
import { getTodos, toggleTodo } from "@/helperFunctions";
import { use } from "react";

export const TodoList = () => {
  const todos = use(getTodos());
  return <>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
}