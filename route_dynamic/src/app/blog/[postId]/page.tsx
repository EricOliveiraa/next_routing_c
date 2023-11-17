import React from "react";

const BlogPage = ({ params }) => {
  return <div>{params.postId}</div>;
};

export default BlogPage;

export async function generateMetaData({ params }) {
  return {
    title: `Post de ${params.slug}`,
    description: `Página do Post ${params.slug}}`,
  };
}

// Gerar paginas estaticas para conteúdos que não mudam com frequencia
// Data Fetch
export async function generateStaticParams() {
  const request = await fetch("https://.../posts");
  const posts = await request.json();

  return posts.map((post) => ({
    postId: String(post.id),
  }));
}
