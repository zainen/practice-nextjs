'use server'
import { TodoList } from "@/components/TodoList";
import { getTodos } from "@/helperFunctions";
import { TodoListProps } from "@/types";
import { Suspense } from "react";

// export async function getServerSideProps() {
//   const todos = await getTodos();
//   return { props: { todos: todos}}
// }

const Home = async () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
    </>
  );
};

export default Home;
