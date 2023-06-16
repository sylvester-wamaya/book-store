import React from 'react';
import PropTypes from 'prop-types';

function BookCard({ title, author, category }) {
  BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
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
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>

  );
}

export default BookCard;
