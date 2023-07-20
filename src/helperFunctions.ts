import { prisma } from "./db";
import { TodoItemProps } from "./types";

export const getTodos = () => {
  return prisma.todo.findMany();
};

export const toggleTodo = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};

export const filterTodos = (arr: Omit<TodoItemProps, 'toggleTodo'>[], status: boolean) => {
  return arr.filter(item => item.complete === status)
}
