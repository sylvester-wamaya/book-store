import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input onChange={(e) => setTitle(e.target.value)} name="title" type="text" placeholder="Book Title" required />
        <input onChange={(e) => setAuthor(e.target.value)} name="author" type="text" placeholder="Book Author" required />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addBook({
              item_id: uuidv4(), title, author, category: 'Category',
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
