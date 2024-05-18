import React, {useState, useContext, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../style/modify.module.css'
import axios from 'axios'
import { BookContext } from './Home'

const CreateBook = () => {
  const {books, setBooks} = useContext(BookContext)
  const [color, setColor] = useState('#f7f7f7')
  const navigate = useNavigate()
  let titleRef = useRef(null)
  let authorRef = useRef(null)
  let descriptionRef = useRef(null)
  

  async function saveAndRedirect(){
    if (titleRef || authorRef || descriptionRef){
      const registerbook = {title: titleRef.current.value,
        author: authorRef.current.value,
        description: descriptionRef.current.value,
        color: color,
      }
      try {
        const book = await axios.post('http://localhost:3000/book', registerbook);
        const newbook = await axios.get('http://localhost:3000/book')
        setBooks(newbook.data.data)
        titleRef = null
        authorRef = null 
        descriptionRef = null
        navigate('../display/' + book.data._id)
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
      <button className={style.savebtn} onClick={saveAndRedirect}> SAVE </button>
    </div>
  )
}

export default CreateBook
