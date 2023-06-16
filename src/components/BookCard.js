import React from 'react'

function BookCard({title, author, category}) {
  return (
   
        
            <li>
            <p>{category}</p>
            <br/>
            <span><b>{title}</b></span>
            <br/>
            <span>{author}</span>
            <br/>
            <div>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
            </div>
            </li>

  )
}

export default BookCard
