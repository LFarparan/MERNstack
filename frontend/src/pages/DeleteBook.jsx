import axios from 'axios';
import React, {useEffect, useContext, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookContext } from './Home';


const DeleteBook = () => {
  const params = useParams();
  const {books, setBooks} = useContext(BookContext)
  const [color, setColor] = useState('#f7f7f7')
  const navigate = useNavigate()

  useEffect(()=>{
    const preview = books.find((book) => book._id === params.bookId);
    setColor(preview.color)
  }, [])


  async function Yass(){
    try {
      const delbook = await axios.delete('https://mern-book-eight.vercel.app/book/'+ params.bookId)
      const newbook = await axios.get('https://mern-book-eight.vercel.app/book')
      setBooks(newbook.data.data)
      navigate('../')
    } catch (error) {
      console.log(error)
    }
  }

  function OhNo(){
    navigate('../edit/' + params.bookId)
  }

  return (
    <div style={{backgroundColor: color}}>
      <p className='deleteprompt'> Are you sure you want to DELETE this Book? </p>
      <div>
        <button onClick={Yass}> YES </button>
        <button onClick={OhNo}> NO </button>
      </div>
    </div>
  )
}

export default DeleteBook
