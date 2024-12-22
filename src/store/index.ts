import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApiSlice } from './posts/postsApiSlice'

export const store = configureStore({
  reducer: {
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApiSlice.middleware),
})

setupListeners(store.dispatch)