import React, {useState, useContext, useRef, useEffect} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import style from '../style/modify.module.css'
import axios from 'axios'
import { BookContext } from './Home'


export default function EditBook(){
  const {books, setBooks} = useContext(BookContext)
  const [color, setColor] = useState('#f7f7f7')
  const [placeholder, setPlaceholder] = useState();
  const navigate = useNavigate()
  let titleRef = useRef(null)
  let authorRef = useRef(null)
  let descriptionRef = useRef(null)
  const { bookId } = useParams()

  useEffect(() => {
    if (books && books.length > 0) {
      const defaultvals = books.find((book) => book._id === bookId);
      if (defaultvals) {
        titleRef.current.value = defaultvals.title;
        authorRef.current.value = defaultvals.author;
        descriptionRef.current.value = defaultvals.description;
        setColor(defaultvals.color);
      }
    }
  }, [books, bookId]);



  async function updatebook(){
    if (titleRef.current.value && authorRef.current.value && descriptionRef.current.value){
      const registerbook = {title: titleRef.current.value,
        author: authorRef.current.value,
        description: descriptionRef.current.value,
        color: color,
      }
      try {
        const book = await axios.patch('https://mern-book-eight.vercel.app/book/'+ bookId, registerbook);
        const newbook = await axios.get('https://mern-book-eight.vercel.app/book')
        setBooks(newbook.data.data)
        titleRef.current.value = '';
        authorRef.current.value = '';
        descriptionRef.current.value = '';
        navigate('../display/' + book.data.book._id)
      } catch (error) {
        console.log(error)
      }
    }
    else alert('Fill out all fields');
  }

  return (
    <div className={style.formcon} style={{backgroundColor: color}}>
      <div>
        <label htmlFor="title"> Title: </label> <br/>
        <input type="text" ref={titleRef} name="title" id="title"/><br/>
        <label htmlFor="author"> Author: </label><br/>
        <input type="text" ref={authorRef} name="author" id="author" /><br/>
        <label htmlFor="desciption"> Description: </label><br/>
        <textarea ref={descriptionRef} name="description" id="areadescription" /><br/>
        <p className={style.colorlabel}> Color: </p>
        <div className='colorPanel'>
          <button onClick={()=>setColor('#f7f7f7')} className={style.color} style={{backgroundColor:'#f7f7f7'}}></button>
          <button onClick={()=>setColor('#e79beb')} className={style.color} style={{backgroundColor:'#e79beb'}}></button>
          <button onClick={()=>setColor('#91cff2')} className={style.color} style={{backgroundColor:'#91cff2'}}></button>
          <button onClick={()=>setColor('#91f2b9')} className={style.color} style={{backgroundColor:'#91f2b9'}}></button>
          <button onClick={()=>setColor('#f2ed91')} className={style.color} style={{backgroundColor:'#f2ed91'}}></button>
        </div>
        <div className={style.controlPanels}> 
          <button className={style.savebtn} onClick={updatebook}> SAVE </button>
          <Link to={`../delete/${bookId}`} className={style.editbtn}>
            <button className={style.savebtn} > DELETE </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


