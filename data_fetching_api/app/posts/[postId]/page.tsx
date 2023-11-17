import React from "react";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

interface Comment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

// Realizando chamadas paralelas!
async function getPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) throw new Error("Falha ao carregar Post");
  const data = await res.json();

  return data;
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postID=${postId}`
  );
  if (!res.ok) throw new Error("Falha ao carregar Comments");
  const data = await res.json();

  return data;
}

const PostPage = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  // poderia utilizar react suspense
  // const post = getPost(postId);
  // const comments = getComments(postId);

  const [post, comments] = await Promise.all([
    getPost(postId),
    getComments(postId),
  ]);

  return (
    <div className="container mx-auto my-6">
      <div>
        <h4>{post?.title}</h4>
        <p>{post?.body}</p>
      </div>
      <hr className="my-10" />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.id}----{comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;

/* 
  * Como realizar sequencial?
    1. Cria componente para comentários, 
    2. Coloca a função no componente.
*/
