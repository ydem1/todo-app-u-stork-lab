import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "src/@types/post";

export const postsApiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], { limit?: number; offset?: number }>({
      query: ({ limit = 10, offset = 1 }) =>
        `/posts?_limit=${limit}&_offset=${offset}`,
    }),
    createPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: `/posts`,
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery } = postsApiSlice;
