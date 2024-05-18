import React, {useContext, useEffect, useState} from 'react';
import { BookContext } from './Home';
import { useParams, Link } from "react-router-dom"

export default function DisplayBook(){
  const {books, setBooks} = useContext(BookContext)
  const [display, setDisplay] = useState(null);
  const [color, setColor] = useState('#f7f7f7')
  const params = useParams()


  useEffect(()=>{
    const preview = books.find((book) => book._id === params.bookId);
    setColor(preview.color)
    setDisplay(preview)
  }, [display, params.bookId])

  if (!display) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: color}}>
        <div className='controls'>
          <Link to='../create'> ADD </Link>
          <Link to={`../edit/${params.bookId}`}> EDIT </Link>
        </div>
        <div>
          <h1>{display.title}</h1>
          <p> by {display.author}</p>
          <p>{display.description}</p>
      </div>
      
    </div>
  )
}

