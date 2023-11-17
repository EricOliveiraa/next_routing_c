"use client";

import useSWR from "swr";

/* 
  * Na documentação do Next, é sugerido utilizar o SWR *
    motivo => Para evitar multiplas renderizações quando estamos utilizando useEffect, useState...
*/

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosSwr() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const URL = "https://jsonplaceholder.typicode.com/todos";

  const { data, error, isLoading } = useSWR<Todo[]>(URL, fetcher);

  return (
    <>
      {!isLoading && (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
