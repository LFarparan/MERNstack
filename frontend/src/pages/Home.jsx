import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import homeStyle from '../style/home.module.css'
import Header from '../component/Header';

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

  function shortenTitle(title){
    if (title.length > 40) {
      return title.slice(0, 40) + "...";
    }
    return title;
  }

  return (
    <>
      <Header/>
      <h2>Media Collection</h2>
      <div className={homeStyle.notecollection}>
      <div className={homeStyle.display}>
        <div className={homeStyle.notecon}>
          <BookContext.Provider value={{books, setBooks}}>
            <Outlet/>
          </BookContext.Provider>
        </div>
      </div>
       <div className={homeStyle.showbooks}>
          <div className={homeStyle.showbookscon}>
            { (books == [])? <p> Your Book Collection is Empty </p> :
                        books.map((book)=> ( 
                        <Link key={book._id} className={homeStyle.noStyle} to={`/books/display/${book._id}`}>
                          <div className={homeStyle.bookcon} style={{backgroundColor: book.color}}> 
                            <p className={homeStyle.booktitle}> {shortenTitle(book.title)} </p> 
                            <p className={homeStyle.bookdetails}> by {book.author} </p> 
                          </div>
                        </Link>     
              ))
            }
          </div>
       </div>
      </div>
    </>
    
  )
}


