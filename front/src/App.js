import React, { useState, useContext } from 'react'
import { GraphoraProvider, GraphoraContext } from './components/GraphoraContext'

function App() {
  const [word, setWord] = useState('')
  const [wordRelations, searchWord] = useContext(GraphoraContext)

  const handleSearch = async (e) => {
    e.preventDefault()
    searchWord(e.target.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setWord(e.target.value)
  }

  return (
    <GraphoraProvider>
      <form onSubmit={handleSearch}>
        <label htmlFor="word">
          insert a word
          <input id="word" type="text" onChange={handleChange} value={word} />
        </label>
        <input type="submit" value="search" />
      </form>
      <ul>
        {wordRelations.map((relation) => (
          <div key={relation.name}>
            <h3>{relation.name}</h3>
            <ul>
              <li>status: {relation.status}</li>
              <li>direction: {relation.direction}</li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    </GraphoraProvider>
  )
}

export default App
