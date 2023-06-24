import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import styles from '../styles/BookCard.module.css';

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
      <div className={styles.book}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={`${styles.author} author`}>{author}</p>
        <div className={styles.bookBtns}>
          <button className="bookBtns" type="button">Comments</button>
          <span>|</span>
          <button className="bookBtns" onClick={() => dispatch(deleteBook(id))} type="button">Remove</button>
          <span>|</span>
          <button className="bookBtns" type="button">Edit</button>
        </div>
      </div>

      <div className={styles.read}>
        <div className={styles.progress} />
        <div>
          <p className={styles.percentage}>75%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>

      <div className={styles.chapter}>
        <div className={styles.line} />
        <div>
          <p className={styles.current}>CURRENT CHAPTER</p>
          <p className={styles.intro}>Introduction</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>

  );
}

export default BookCard;
