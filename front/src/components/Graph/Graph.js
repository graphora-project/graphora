import React, { useContext } from 'react'
import { GraphoraContext } from '../GraphoraContext'

export const Graph = () => {
  const { relatedWords } = useContext(GraphoraContext)

  return (
    <>
      <ul>
        {relatedWords.map((word) => (
          <div key={word.name}>
            <h3>{word.name}</h3>
            <ul>
              <li>status: {word.status}</li>
              <li>direction: {word.direction}</li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    </>
  )
}
