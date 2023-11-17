type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const revalidate = 3600; // somente isso, revalida a pagina a cada hora => Tipo de Cache para seguimentação e não pro fetch!

async function getData(): Promise<Todo[]> {
  // cache: 'force-cache'
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Falha ao carregar todos");

  const data = await res.json();

  return data;
}

export default async function Todos() {
  const todos = await getData();

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
