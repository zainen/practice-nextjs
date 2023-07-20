import { TodoList } from "@/components/TodoList";
import { prisma } from "@/db";

const getTodos = () => {
  return prisma.todo.findMany();
};

const Home = async () => {
  const todos = await getTodos();
  return (
    <>
      <TodoList todos={todos}/>
    </>
  );
};

export default Home;
