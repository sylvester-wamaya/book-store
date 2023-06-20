import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import AddBook from './AddBook';

function Home() {
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {
        books.map((book) => (
          <BookCard
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.id}
          />
        ))
      }
      </ul>
      <AddBook />
    </div>
  );
}

export default Home;
