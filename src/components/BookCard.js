import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookCard({ id, title, author, category }) {
  BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch()
  return (

    <li>
      <p>{category}</p>
      <br />
      <span><b>{title}</b></span>
      <br />
      <span>{author}</span>
      <br />
      <div>
        <button type="button">Comments</button>
        <button onClick={()=>dispatch(removeBook(id))} type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>

  );
}

export default BookCard;
