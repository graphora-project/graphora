import React, { useContext } from 'react'
import { GraphoraContext } from '../GraphoraContext'
import { Card } from '../Card'

export const Graph = () => {
  const { relatedWords, searchWord } = useContext(GraphoraContext)

  return (
    <ul>
      {relatedWords.map((word) => (
        <div key={word.name}>
          {word.status === 'PalabrasAsociadas' ? (
            <Card word={word} />
          ) : (
            <Card word={word} handleSearch={searchWord} />
          )}
          <hr />
        </div>
      ))}
    </ul>
  )
}
