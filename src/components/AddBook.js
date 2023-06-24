import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBooks } from '../redux/books/booksSlice';
import styles from '../styles/AddBook.module.css';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', category: 'Fiction' });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooks({
      book,
    }));
  };

  return (
    <div className={styles.form}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.book} value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} name="title" type="text" placeholder="Book title" required />
        <input className={styles.author} value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} name="author" type="text" placeholder="Book author" required />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
