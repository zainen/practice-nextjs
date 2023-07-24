import { TodoList } from "@/components/TodoList";
import { Suspense } from "react";

const Todo = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList filter={true} />
    </Suspense>
  );
}

export default Todo;