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
    removeBook: (state, action)=>{
        state.books = state.books.filter((book)=>book.id !== action.payload)
    }
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
