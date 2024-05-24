import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/component.module.css'
import add from '../assets/pencil-outline.svg'

const DefaultDisplay = () => {
  return (
    <div className={styles.defoutletcon}>
      <p className={styles.makeanote}> PAPERCUT </p> <br/>
      <Link to='./create' className={styles.nostyle}>
        <div className={styles.create}>
          <img src={add} alt="create-note" className={styles.pencil}/>
          <p className={styles.addnote}> ADD NEW </p>
        </div>
      </Link>
      {/* <br />
      <p className={styles.disclaimer}> My vercel server can be slow sometimes. Try refreshing the page</p> */}

    </div>
  )
}

export default DefaultDisplay
