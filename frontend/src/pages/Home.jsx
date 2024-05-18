import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import homeStyle from '../style/home.module.css'
import DefaultDisplay from '../component/DefaultDisplay';

export const BookContext = createContext();

export default function Home(){
  const [books , setBooks] = useState([]);
  const [isDefault , setIsDefault] = useState(true);

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
    <>
      <h2>Note Collection</h2>
      <div className={homeStyle.notecollection}>
      <div className={homeStyle.display}>
        <div className={homeStyle.notecon}>
          <BookContext.Provider value={{books, setBooks}}>
            {(isDefault) ? <DefaultDisplay/> : <Outlet/>}
          </BookContext.Provider>
        </div>
      </div>
       <div className={homeStyle.showbooks}>
          { (books == [])? <p> Your Book Collection is Empty </p> :
                      books.map((book)=> ( 
                      <Link key={book._id} className={homeStyle.noStyle} to={`/books/display/${book._id}`} onClick={()=>setIsDefault(false)}>
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


