import ProdutoFrame from "@/app/components/ProdutoFrame";
import React from "react";

async function getProdutoById(produtoId) {
  const resq = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${produtoId}`
  );
  const data = await resq.json();

  return data;
}

const Produto = async ({ params }) => {
  const produto = await getProdutoById(params.id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-500">
        {/* enviando desconstruíndo */}
        <ProdutoFrame {...produto} />
      </div>
    </div>
  );
};

export default Produto;
