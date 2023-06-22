/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YVdtPQNs7lL0XYgfnx02/books'



const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
  error: null
};

export const getBooks = createAsyncThunk('books/getBooks', async()=>{
  try{
    const books = await axios.get(url)
    return books.data
  }catch(error){
    return error.message
  }
})

export const addBooks = createAsyncThunk('books/addBooks', async({book})=>{
  try{

    const response = await axios.post(url, book)
    console.log(response.data)
    return book
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
      state.books = [...state.books, action.payload]
      state.isLoading = false
      console.log(state.books)
  })
  .addCase(getBooks.rejected, (state, action)=>{
      state.error = action.error.message
      state.isLoading = false
})
.addCase(addBooks.fulfilled, (state, action)=>{
  state.books.push(action.payload)
})
.addCase(addBooks.rejected, (state, action)=>{
  state.error = action.error.message
})
  }
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
