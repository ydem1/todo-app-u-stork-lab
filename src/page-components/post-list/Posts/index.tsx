import React, { FC } from "react";
import { useDebounce } from "use-debounce";
import { Loader } from "src/components/Loader";
import { useQueryParams } from "src/hooks/useQueryParams";
import { useGetPostsQuery } from "src/store/posts/postsApiSlice";
import { NotificationService } from "src/helpers/notifications";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";
import { Sizes } from "src/@types/sizes";
import { DEBOUNCE_DELAY } from "./constants";
import { PostItem } from "./PostItem";

export const Posts: FC = () => {
  const { getQueryParam } = useQueryParams();

  const { data: posts, isLoading, error } = useGetPostsQuery({});

  const searchQuery = getQueryParam(QUERY_PARAM_KEYS.SEARCH) || "";

  const [debouncedSearchQuery] = useDebounce(searchQuery, DEBOUNCE_DELAY);

  const visiblePosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <Loader
        className="flex h-full items-center justify-center"
        size={Sizes.XL}
      />
    );
  }

  if (error) {
    NotificationService.error();
  }

  if (!visiblePosts?.length) {
    return <p>No posts found matching your search criteria.</p>;
  }

  return (
    <ul className="mx-auto flex w-full flex-col gap-5 rounded-md border-2 border-blue-base p-10 dark:border-white-base">
      {visiblePosts?.map((post) => <PostItem key={post.id} {...post} />)}
    </ul>
  );
};
