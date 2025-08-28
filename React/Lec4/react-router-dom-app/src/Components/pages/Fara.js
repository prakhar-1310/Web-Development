import React from 'react'
import { useNavigate } from "react-router-dom";

const Fara = () => {
  let navigate = useNavigate();
  let redirectPagehandler=()=>{
    navigate('/');
  }
  return (
    <div>Fara
      <button onClick= {redirectPagehandler}>main page</button>
    </div>
    
  )
}

export default Fara