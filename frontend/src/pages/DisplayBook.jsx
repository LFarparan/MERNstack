import React, {useContext, useEffect, useState} from 'react';
import { BookContext } from './Home';
import { useParams } from "react-router-dom"

export default function DisplayBook(){
  const {books, setBooks} = useContext(BookContext)
  const [display, setDisplay] = useState(null);
  const params = useParams()

  useEffect(()=>{
    const preview = books.find((book) => book._id === params.bookId);
    setDisplay(preview)
  }, [display, params.bookId])

  if (!display) {
    return <div>Loading...</div>;
  }

  return (
    <div>

        <div>
          <h1>{display.title}</h1>
          <p>{display.author}</p>
          <p>{display.description}</p>
      </div>
    </div>
  )
}

