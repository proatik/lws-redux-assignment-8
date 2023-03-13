import { configureStore } from "@reduxjs/toolkit";

import booksSlice from "../features/books/booksSlice";
import filtersSlice from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    [filtersSlice.name]: filtersSlice.reducer,
    [booksSlice.reducerPath]: booksSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(booksSlice.middleware),
});

export default store;
