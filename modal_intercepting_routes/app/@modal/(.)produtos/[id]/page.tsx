import Modal from "@/app/components/Modal";
import ProdutoFrame from "@/app/components/ProdutoFrame";
import React from "react";

async function getProdutoById(produtoId) {
  const resq = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${produtoId}`
  );
  const data = await resq.json();

  return data;
}

// Route Interceptor
const Produto = async ({ params }) => {
  const produto = await getProdutoById(params.id);

  return (
    <Modal>
      <ProdutoFrame {...produto} />
    </Modal>
  );
};

export default Produto;
