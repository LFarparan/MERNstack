import React from 'react'
import { Link } from 'react-router-dom'
import Header from './component/Header'
import style from './style/landing.module.css'
import cranelogo from './assets/cranelogo.png'


const App = () => {
  return (
    <div>
      <Header />
      <div className={style.body}>
        <img src={cranelogo} alt="crane-logo" className={style.bigcrane}/>
        <div className={style.textcon}>
          <p className={style.sitedetails}>
            PaperCut is a place where people leave and share random recommendation
            for books, series, movies, music, etc.
          </p>
          <p className={style.sitedetails}>
            Developed using MERN stack (MongoDB, Express, React, Node), 
            it accesses the REST API that I created & deployed on Vercel.
          </p>
          <Link to='/books'>  
            <button className={style.goto}> VISIT SITE </button>
          </Link>
        </div>
      </div>
  
    </div>
  )
}

export default App
