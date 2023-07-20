import { Prisma } from "@prisma/client";

export type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

const todosSelect = {
  id: true,
  title: true,
  complete: true
}

export type TodoListProps = {
  todos: Prisma.TodoGetPayload<{ select: typeof todosSelect}>[]
}