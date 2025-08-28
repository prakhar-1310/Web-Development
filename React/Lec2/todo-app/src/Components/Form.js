import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    let [input,setInput] = useState('');// empty box to input value
    let [isValid , setIsValid] = useState(true);

    function inputChangeHandler(e){ 
        setInput(e.target.value)// value filled inside the form
        if(input.trim().length > 0){
            setIsValid(true);
        }
    }

    function formSubmitHandler(e){ 

        e.preventDefault(); // preventing form from submiting
        if(input.trim().length === 0 ){
            setIsValid(false);
            return;
        }

        const newTodo = {  // making new todo
            id: props.todos.length,
            todo: input,
            checked:false
        }
        
        props.addTodo(newTodo); // sending to todo function
        // console.log(input);
        setInput(''); // making form empty
    }
    

    
    return (
        <form onSubmit={formSubmitHandler}>
            <input style={{border: `${!isValid ? '5px solid blue' : '' } `}} onChange={inputChangeHandler} className='divv' type="text" name="" id="" placeholder='Add your todos' value={input} />
        </form>
    )
}

export default Form