import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    return new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
};

const NewTodo = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="w-fit">
        <input
          type="text"
          name="title"
          className="border border-slate-700 dark:border-slate-300 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-500 focus-within:bg-slate-500 outline-none"
        />
        <div className="flex justify-between">
          <Link
            href=".."
            className="border px-2 py-1 mt-2 border-slate-700 dark:border-slate-300 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-500 focus-within:bg-slate-500 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border px-2 py-1 mt-2 border-slate-700 dark:border-slate-300 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-500 focus-within:bg-slate-500 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTodo;