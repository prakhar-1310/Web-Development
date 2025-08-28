import React, { useState } from 'react'

const Person = (props) => {
  let [namee,setName]=useState(props.name);
  function handleClick(){
    setName('Prakhar');
  }
  return (
    <div>
        <div onClick={handleClick}>i am a div donot click</div>
        {/* <h1>name: {props.name}</h1> */}
        <h1>name: {namee}</h1>
        <h3>Age : {props.age}</h3>
        <p>color: {props.favColor}</p>
    </div>
    // js wali cheej ya evaluate hone wali cheej in swarg ka darwaja
  )
}

export default Person