/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ymcL5d2VVeGiOkxhZZHp/books'



const initialState = {
  books: [
  ],
  isLoading: false,
  error: null
};

export const getBooks = createAsyncThunk('books/getBooks', async()=>{
  try{
    const response = await axios.get(url)
    const booksArray = Object.entries(response.data).flatMap(
      ([item_id, books]) => books.map(
        ({ title, author, category }) => ({
          title, author, category, item_id,
        }),
      ),
    );
    return booksArray;
  }catch(error){
    return error.message
  }
})

export const addBooks = createAsyncThunk('books/addBooks', async({book}, id = uuidv4())=>{
  try{
    const newBook = {
      item_id: id.requestId,
      ...book,
    }
    console.log(newBook)
    const response = await axios.post(url, newBook)
    return newBook
  }catch(error){
    return error.message
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  
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
      console.log(state.books)
  })
  .addCase(getBooks.rejected, (state, action)=>{
      state.error = action.error.message
      state.isLoading = false
})
.addCase(addBooks.fulfilled, (state, action)=>{
  state.books.push(action.payload)
  console.log(action)
})
.addCase(addBooks.rejected, (state, action)=>{
  state.error = action.error.message
})
  }
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
