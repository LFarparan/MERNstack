import axios from 'axios';
import React, {useEffect, useContext, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookContext } from './Home';
import style from '../style/component.module.css'


const DeleteBook = () => {
  const params = useParams();
  const {books, setBooks} = useContext(BookContext)
  const [color, setColor] = useState('#f7f7f7')
  const navigate = useNavigate()

  useEffect(()=>{
    if (books && books.length > 0){
      const preview = books.find((book) => book._id === params.bookId);
      if (preview)
        setColor(preview.color)
    }
  }, [books, params.bookId])


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
    <div  className={style.deletecon} style={{backgroundColor: color}}>
      <p className={style.deleteprompt}> Are you sure you want to DELETE this Book? </p>
      <div className={style.deletechoices}>
        <button className={style.deleteyes} onClick={Yass}> YES </button>
        <button className={style.deleteno} onClick={OhNo}> NO </button>
      </div>
    </div>
  )
}

export default DeleteBook
