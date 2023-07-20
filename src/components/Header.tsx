import Link from "next/link";
import { NavLink } from "./ui/NavLink";
import ThemeButton from "./ui/ThemeButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <div className="flex gap-6">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-800 dark:border-slate-300 px-2 py-1 rounded hover:bg-slate-500 focus-within:bg-slate-700 outline-none"
          >
          New
        </Link>
      </div>
      <ul className="flex underline gap-6">
        <li>
          <NavLink link="/" name="home"  />
        </li>
        <li>
          <NavLink link="/todo" name="todo"  />
        </li>
        <li>
          <NavLink link="/completed" name="completed"  />
        </li>
      </ul>
      <ThemeButton />
    </header>
  );
};
