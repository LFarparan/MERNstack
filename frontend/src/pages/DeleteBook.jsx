import axios from 'axios';
import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookContext } from './Home';


const DeleteBook = () => {
  const {bookId} = useParams();
  const {setIsDefault} = useContext(BookContext)
  const navigate = useNavigate()
  async function Yass(){
    try {
      const delbook = await axios.delete('http://localhost:3000/book/'+ bookId)
      console.log(delbook)
      setIsDefault(true)
      navigate('../')
    } catch (error) {
      console.log(error)
    }
  }

  function OhNo(){
    navigate('../edit/' + bookId)
  }

  return (
    <div>
      <p className='deleteprompt'> Are you sure you want to DELETE this Book? </p>
      <div>
        <button onClick={Yass}> YES </button>
        <button onClick={OhNo}> NO </button>
      </div>
    </div>
  )
}

export default DeleteBook
