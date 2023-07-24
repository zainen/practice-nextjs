'use server'

import { TodoItem } from "./TodoItem";
import { filterTodos, getTodos, toggleTodo } from "@/helperFunctions";

export const TodoList = async ({filter}: {filter?: boolean}) => {
  const todos = await getTodos();
  return <>
      <ul className="pl-4">
        {(await filterTodos(todos, filter)).map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
}