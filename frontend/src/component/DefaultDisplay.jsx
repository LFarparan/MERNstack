import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../pages/Home'

const DefaultDisplay = () => {
  const {setIsDefault} = useContext(BookContext)
  return (
    <div>
      <p>MAKE A NOTE</p> <br/>
      <Link to='./create' onClick={()=>setIsDefault(false)}> ADD </Link>
    </div>
  )
}

export default DefaultDisplay
