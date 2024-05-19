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

  useEffect(()=> {
    const defaultvals = books.find((book) => book._id === bookId);
    titleRef.current.value = defaultvals.title
    authorRef.current.value = defaultvals.author
    descriptionRef.current.value = defaultvals.description
    setColor(defaultvals.color)
  }, [])



  async function updatebook(){
    if (titleRef || authorRef || descriptionRef){
      const registerbook = {title: titleRef.current.value,
        author: authorRef.current.value,
        description: descriptionRef.current.value,
        color: color,
      }
      try {
        const book = await axios.patch('https://mern-book-eight.vercel.app/book/'+ bookId, registerbook);
        const newbook = await axios.get('https://mern-book-eight.vercel.app/book')
        setBooks(newbook.data.data)
        navigate('../display/' + book.data.book._id)
      } catch (error) {
        console.log(error)
      }
    }
    else alert('Fill out all fields');
  }

  return (
    <div className='formcon' style={{backgroundColor: color}}>
      <label htmlFor="title"> Title: </label> <br/>
      <input type="text" ref={titleRef} name="title" id="title"/><br/>
      <label htmlFor="author"> Author: </label><br/>
      <input type="text" ref={authorRef} name="author" id="author" /><br/>
      <label htmlFor="desciption"> Description: </label><br/>
      <textarea ref={descriptionRef} name="description" id="Description" /><br/>
      <div className='colorPanel'>
        <button onClick={()=>setColor('#f7f7f7')} className={style.color} style={{backgroundColor:'#f7f7f7'}}></button>
        <button onClick={()=>setColor('#e79beb')} className={style.color} style={{backgroundColor:'#e79beb'}}></button>
        <button onClick={()=>setColor('#91cff2')} className={style.color} style={{backgroundColor:'#91cff2'}}></button>
        <button onClick={()=>setColor('#91f2b9')} className={style.color} style={{backgroundColor:'#91f2b9'}}></button>
        <button onClick={()=>setColor('#f2ed91')} className={style.color} style={{backgroundColor:'#f2ed91'}}></button>
      </div>
      <div className='controlPanel'> 
        <button className='panel editbtn' onClick={updatebook}> SAVE </button>
        <Link to={`../delete/${bookId}`}>
          <button className='panel deletebtn'> DELETE </button>
        </Link>
        
      </div>
    </div>
  )
}


