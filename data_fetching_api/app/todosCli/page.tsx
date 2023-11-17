"use client";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

import { useEffect, useState } from "react";

export default function TodosCli() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error("Falha ao carregar todos");

      const data: Todo[] = await res.json();

      setTodos(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
