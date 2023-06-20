import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'wwdd', title: 'The secret', author: 'Rhonda Byrne', category: 'Self-help',
    },
    {
      id: 'dfff', title: 'Into the Wild', author: 'Jon Krakauer', category: 'Adventure',
    },
    {
      id: 'dfdfd', title: 'Treasure Island', author: 'Robert Louis Stevenson', category: 'Action',
    },
    {
      id: 'ddsss', title: 'American Gods', author: 'Neil Gaiman', category: 'Fantasy',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
      console.log(state.books);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
