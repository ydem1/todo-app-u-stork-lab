import React, { FC } from "react";
import { useGetPostsQuery } from "src/store/posts/postsApiSlice";
import { PostItem } from "./PostItem";

export const Posts: FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="mx-auto flex w-full flex-col gap-5 rounded-md border-2 border-blue-base p-10">
      {posts?.map((post) => <PostItem key={post.id} {...post} />)}
    </ul>
  );
};
