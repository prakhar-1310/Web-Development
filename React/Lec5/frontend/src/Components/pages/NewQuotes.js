import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const NewQuotes = () => {
  let usernameInputref = useRef();
  let quoteInputref = useRef();
  let navigate = useNavigate();
  const addquoteHandler = async (e)=>{
    e.preventDefault();
    let author = usernameInputref.current.value;
    let text = quoteInputref.current.value;
    try{
      let res = await axios.post('http://localhost:8080/addquotes',{author, text});
      console.log(res);
      navigate('/');
    }
    catch(e){
      console.log('cannot add a new quote at this moment');
    }
    
  }

  return (
    <form className={styles['new-quote-form']} onSubmit={addquoteHandler}>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id='author' placeholder="Author's Name" ref ={usernameInputref}/>
      </div>

      <div>
        <label htmlFor="quote">Quote:</label>
        <textarea name="" id="quote" cols={15} rows={3} placeholder="Author's Quote" ref = {quoteInputref}></textarea>
      </div>

      <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes