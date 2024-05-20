import React, {useContext, useEffect, useState} from 'react';
import { BookContext } from './Home';
import { useParams, Link } from "react-router-dom"
import style from '../style/display.module.css'
import addbtn from '../assets/note-plus.svg'
import editbtn from '../assets/book-edit.svg'


export default function DisplayBook(){
  const {books, setBooks} = useContext(BookContext)
  const [display, setDisplay] = useState(null);
  const [color, setColor] = useState('#f7f7f7')
  const params = useParams()


  useEffect(() => {
    if (books && books.length > 0) {
      const preview = books.find((book) => book._id === params.bookId);
      if (preview) {
        setColor(preview.color);
        setDisplay(preview);
      }
    }
  }, [books, params.bookId]);

  if (!display) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: color}} className={style.displaycontainer}>
        <div className={style.navigation}>
          <Link to={`../edit/${params.bookId}`}  className={style.editbutton}> 
            <p className={style.edithover}> EDIT </p>
            <img src={editbtn} alt="edit-button" className={style.icon} />
          </Link>
          <Link to='../create' className={style.addbutton}> 
            <p className={style.addhover}> ADD NEW </p>
            <img src={addbtn} alt="add-button" className={style.icon}/>
          </Link>
        </div>
        <div className={style.displayOne}>
          <div>
            <h1>{display.title}</h1>
            <p> by {display.author}</p>
            <br />
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               {display.description}</p>
          </div>
        </div>
    </div>
  )
}

