import React from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../pages/Home'

const DefaultDisplay = () => {
  return (
    <div>
      <p>MAKE A NOTE</p> <br/>
      <Link to='./create'> ADD </Link>
    </div>
  )
}

export default DefaultDisplay
