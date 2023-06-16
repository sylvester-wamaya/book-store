import React from 'react';

function AddBook() {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="book" type="text" placeholder="Book Title" />
        <input name="book" type="text" placeholder="Book Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default AddBook;
