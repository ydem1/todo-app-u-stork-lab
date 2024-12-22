import React, { FC } from "react";
import { useDebounce } from "use-debounce";
import { useQueryParams } from "src/hooks/useQueryParams";
import { useGetPostsQuery } from "src/store/posts/postsApiSlice";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";
import { DEBOUNCE_DELAY } from "./constants";
import { PostItem } from "./PostItem";

export const Posts: FC = () => {
  const { getQueryParam } = useQueryParams();

  const { data: posts, isLoading } = useGetPostsQuery({});

  const searchQuery = getQueryParam(QUERY_PARAM_KEYS.SEARCH) || "";

  const [debouncedSearchQuery] = useDebounce(searchQuery, DEBOUNCE_DELAY);

  const visiblePosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="mx-auto flex w-full flex-col gap-5 rounded-md border-2 border-blue-base p-10">
      {visiblePosts?.map((post) => <PostItem key={post.id} {...post} />)}
    </ul>
  );
};
