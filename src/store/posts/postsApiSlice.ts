import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "src/@types/post";

export const postsApiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_API_URL }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], object>({
      query: () => `/posts?userId=${import.meta.env.VITE_USER_ID}`,
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<Post, { id: number }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Posts" }],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
} = postsApiSlice;
