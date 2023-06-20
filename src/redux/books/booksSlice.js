import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
      console.log(state.books);
    },

  },
});
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
