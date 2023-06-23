/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import styles from '../styles/BookCard.module.css'

function BookCard({
  id, title, author, category,
}) {
  BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch();
  return (

    <li>
      <div className={styles.book }>
      <p className={styles.category}>{category}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>{author}</p>
      <div className={styles.bookBtns}>
        <button type="button">Comments</button>
        <button onClick={() => dispatch(deleteBook(id))} type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      </div>
      <div>
        <div className={styles.progress}></div>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Introduction</p>
        <button type='button'>Update progress</button>
      </div>
    </li>

  );
}

export default BookCard;
