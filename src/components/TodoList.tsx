'use server'

import { TodoListProps } from "@/types";
import { TodoItem } from "./TodoItem";
import { toggleTodo } from "@/helperFunctions";

export const TodoList = ({todos}: TodoListProps) => {
  return <>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
}