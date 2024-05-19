import React from 'react'
import style from '../style/component.module.css'
import cranelogo from '../assets/cranelogo.png'

export default function Header() {
  return (
    <div className={style.header}>
        <img src={cranelogo} alt="papercut-logo" className={style.logo}/>
        <p className={style.headerlogo}> PAPERCUT </p>
    </div>
  )
}
