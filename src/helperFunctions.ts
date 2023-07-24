import { redirect } from "next/navigation";
import { prisma } from "./db";
import { TodoListProps } from "./types";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  'use server'
  const todos = await prisma.todo.findMany();
  return todos
};

export const createTodo = async (data: FormData) => {
  "use server";
  try {
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      return new Error("Invalid Title");
    }
    
    await prisma.todo.create({ data: { title, complete: false } });
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
  redirect('/')
};

export const toggleTodo = async (id: string, complete: boolean) => {
  "use server";
  revalidatePath('/')
  revalidatePath('/todo')
  revalidatePath('/completed')

  await prisma.todo.update({ where: { id }, data: { complete } });
};

export const filterTodos = async (arr: TodoListProps['todos'], status?: boolean) => {
  'use server'
  return arr.filter(item => item.complete !== status)
}
