import React from "react";

// Quando coloco entre [...url] => estou desconstruindo a URL e recebo Array
// Quando colocado entre duplo [[...url]] => estou informando que é uma rota opcional com os parametros
const BlogPage = ({ params }) => {
  return <div>{params.postId}</div>;
};

export default BlogPage;

// SEO => Para realizar as trocas dinâmicas no Title e Description do Site!
export async function generateMetaData({ params }) {
  return {
    title: `Página de ${params.slug}`,
    description: `Página de ${params.slug}}`,
  };
}
