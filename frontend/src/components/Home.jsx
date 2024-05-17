import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home(){
  const [books , setBooks] = useState([]);

  useEffect(() => {
    async function getBooks(){
      const book = await axios.get('http://localhost:3000/book')
      try {
        console.log(book.data.data)
        setBooks(book.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()
  }, [])

  return (
    <div>
       <div className="showbooks">
          <h2>Book Collection</h2>
          { (books == [])? <p> Your Book Collection is Empty </p> :
                      books.map((book)=> ( 
                      <div key={book._id}> 
                        <p> <b> {book.title} </b> <br/> 
                        {book.author} {book.publishYear} <br/> 
                        <em>{book.description}</em> </p> 
                      </div> ))
          }
       </div>
    </div>
  )
}


