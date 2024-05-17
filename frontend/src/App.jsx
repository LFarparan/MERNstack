import React from 'react'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Link to='/books'>  
        <button> click ME!</button>
      </Link>
      
    </div>
  )
}

export default App
