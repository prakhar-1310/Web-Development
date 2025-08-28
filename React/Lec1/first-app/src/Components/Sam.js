import React from 'react'

let array = ["😘", "👍","😁","😎","💕"];
let todos = ['day1', 'day2', 'day3', 'day4'];

let idx = Math.floor(Math.random()*6);

// we cannot use looping and if else inside the sam function
//instead of loop we use ternary and in case of loop we use map
// downside code is only for showing output not for evaluation or for logic , write logic outside this
const Sam = () => {
  return ( // return is used for showing the output
    <div>
        <h1>
          {array[idx]}
          {idx ===3 ? <img src="https://unsplash.com/photos/snow-covered-mountain-eGfvccM-Mzo" alt="photo" /> : "tumse na ho payega"}
          {/* instead of loop we use map function 
          key is given to avoid warning */}
          {todos.map((item,index)=>{
            return <li key={index}>my task is {item} & position is {index} </li>
          })}

        </h1>
       
    </div>
  )
}

export default Sam