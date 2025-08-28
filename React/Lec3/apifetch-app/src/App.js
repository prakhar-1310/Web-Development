import React from 'react'
import GithubUser from './Components/GithubUser'

const App = () => {
  return (
    <div>
      <h1>Github Profiles</h1>
      <GithubUser username="prakhar-1310" />
      <GithubUser username="Samarth0606" />
    </div>
  )
}

export default App