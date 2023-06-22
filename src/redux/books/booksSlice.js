/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YVdtPQNs7lL0XYgfnx02/books'



const initialState = {
  books: [],
  isLoading: false,
  error: null
};

export const getBooks = createAsyncThunk('books/getBooks', async()=>{
  try{
    const jsonData = await axios.get(url)
    const books = await jsonData.json()
    return books.data
  }catch(error){
    return error.message
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers(builder){
    builder
    .addCase(getBooks.pending, (state)=>{
        state.isLoading = true
    })
    .addCase(getBooks.fulfilled, (state, action)=>{
      state.books = action.payload
      state.isLoading = false
      console.log(action)
  })
  .addCase(getBooks.rejected, (state, action)=>{
      state.error = action.error.message
      state.isLoading = false
})
  }
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
