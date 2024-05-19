import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import homeStyle from '../style/home.module.css'

export const BookContext = createContext();

export default function Home(){
  const [books , setBooks] = useState([]);

  useEffect(() => {
    async function getBooks(){
      const book = await axios.get('https://mern-book-eight.vercel.app/book')
      try {
        setBooks(book.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()
  }, [])

  return (
    <>
      <h2>Note Collection</h2>
      <div className={homeStyle.notecollection}>
      <div className={homeStyle.display}>
        <div className={homeStyle.notecon}>
          <BookContext.Provider value={{books, setBooks}}>
            <Outlet/>
          </BookContext.Provider>
        </div>
      </div>
       <div className={homeStyle.showbooks}>
          { (books == [])? <p> Your Book Collection is Empty </p> :
                      books.map((book)=> ( 
                      <Link key={book._id} className={homeStyle.noStyle} to={`/books/display/${book._id}`}>
                        <div className={homeStyle.bookcon} style={{backgroundColor: book.color}}> 
                          <p className={homeStyle.booktitle}> {book.title} </p> 
                          <p className={homeStyle.bookdetails}> by {book.author} </p> 
                        </div>
                      </Link>     
            ))
          }
       </div>
      </div>
    </>
    
  )
}


