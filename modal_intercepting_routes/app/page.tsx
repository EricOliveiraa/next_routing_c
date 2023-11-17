import Image from "next/image";
import Link from "next/link";

async function getProdutos() {
  const resq = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await resq.json();

  return data;
}

export default async function Home() {
  const produtos = await getProdutos();

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">
        E-commerce Colorido
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 m-10">
        {produtos.map(({ id, title, url, thumbnailUrl }) => (
          <Link href={`/produtos/${id}`} key={id}>
            <Image
              src={thumbnailUrl}
              alt={title}
              width={150}
              height={150}
              className="w-full object-cover aspect-square rounded-md"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
