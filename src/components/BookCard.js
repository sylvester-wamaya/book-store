import React from 'react'

function BookCard({title, author, category}) {
  return (
   
        
            <li>
            <h3>{category}</h3>
            <span>{title}</span>
            <span>{author}</span>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
            
            </li>

  )
}

export default BookCard
