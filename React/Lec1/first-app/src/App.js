// rafce
import React from 'react'
import Person from './Components/Person'
import Sam from './Components/Sam'

const App = () => {
  return ( // return can have only one parent
  <div>
    <Person name = 'Monu' age = '30' favColor="black"/>  
    {/* self closing tags */}
    <Person name='Samarth' age = '23' favColor="pink"/>
    <Sam/>
  </div>
   
  )
}

export default App