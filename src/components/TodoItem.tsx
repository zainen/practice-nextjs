"use client";

import { TodoItemProps } from "@/types";

export const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        id={id}
        className="cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};
