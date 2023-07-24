import { TodoList } from "@/components/TodoList";
import { Suspense } from "react";

const Completed = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList filter={false} />
    </Suspense>
  );
}

export default Completed;