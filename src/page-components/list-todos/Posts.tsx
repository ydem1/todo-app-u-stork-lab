import React, { FC } from "react";
import { useGetPostsQuery } from "src/store/posts/postsApiSlice";

export const Posts: FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(posts);

  return (
    <section>
      <ul>{posts?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </section>
  );
};
