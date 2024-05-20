import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/component.module.css'
import add from '../assets/pencil-outline.svg'

const DefaultDisplay = () => {
  return (
    <div className={styles.defoutletcon}>
      <p className={styles.makeanote}>MAKE A NOTE</p> <br/>
      <Link to='./create' className={styles.nostyle}>
        <div className={styles.create}>
          <img src={add} alt="create-note" className={styles.pencil}/>
          <p className={styles.addnote}> CREATE </p>
        </div>
      </Link>
    </div>
  )
}

export default DefaultDisplay
