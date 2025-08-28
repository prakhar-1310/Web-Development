import React from 'react'
import Home from './Components/pages/Home'
import Fara from './Components/pages/Fara'
import Lambo from './Components/pages/Lambo'
import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/farari">Farari</Link></li>
          <li><Link to="/lamborgini">Lambor</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/farari' element = {<Fara/>}/>
        <Route path='/lamborgini' element = {<Lambo/>}/>
      </Routes>

    </div>
  )
}
export default App