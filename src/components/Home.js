import React from 'react'
import BookCard from './BookCard'
import AddBook from './AddBook'

function Home() {
    const books = [
        {id: 1, title: "The secret", author: "Rhonda Byrne", category: "Self-help"},
        {id: 2, title: "Into the Wild", author: "Jon Krakauer", category: "Adventure"},
        {id: 3, title: "Treasure Island", author: "Robert Louis Stevenson", category: "Action"},
        {id: 4, title: "American Gods", author: "Neil Gaiman", category: "Fantasy"},
]
  return (
    <div>
      <h1>Home</h1>
      <ul>
      {
        books.map((book)=>(
            <BookCard title={book.title} author={book.author} category={book.category} key={book.id}/>
        ))
      }
      </ul>
      <AddBook/>
    </div>
  )
}

export default Home
