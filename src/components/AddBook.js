/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBooks } from '../redux/books/booksSlice';


function AddBook() {
  const [book, setBook] = useState({title: '', author: '', category: "Fiction"});
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addBooks({
    book,
  }))
  setBook({title: '', author: ''})
}

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input value={book.title} onChange={(e) => setBook({...book, title: e.target.value})} name="title" type="text" placeholder="Book Title" required />
        <input value={book.author} onChange={(e) => setBook({...book, author: e.target.value})} name="author" type="text" placeholder="Book Author" required />
        <button
         
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
}

export default AddBook;
