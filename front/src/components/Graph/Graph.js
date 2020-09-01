import React, { useContext } from 'react'
import { GraphoraContext } from '../GraphoraContext'
import { Card } from '../Card'

export const Graph = () => {
  const { currentWord, relatedWords, searchWord } = useContext(GraphoraContext)

  return (
    <>
      {currentWord ? <h1>Results for {currentWord}</h1> : null}
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
    </>
  )
}
