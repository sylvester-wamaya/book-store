/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBooks } from '../redux/books/booksSlice';

function AddBook() {
  const [book, setBook] = useState({title: '', author: '', category: "Fiction"});
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  


  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input onChange={(e) => setBook({...book, title: e.target.value})} name="title" type="text" placeholder="Book Title" required />
        <input onChange={(e) => setBook({...book, author: e.target.value})} name="author" type="text" placeholder="Book Author" required />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addBooks({
              book,
            }));
          }}
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
}

export default AddBook;
