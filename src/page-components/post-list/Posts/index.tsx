import React, { FC } from "react";
import { useGetPostsQuery } from "src/store/posts/postsApiSlice";
import { PostItem } from "./PostItem";

export const Posts: FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery({limit: 25});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="border-blue-base mx-auto flex w-full max-w- flex-col gap-5 rounded-md border-2 p-10">
      {posts?.map((post) => <PostItem key={post.id} {...post} />)}
    </ul>
  );
};
