import React, { useContext } from 'react'
import { GraphoraContext } from '../../GraphoraContext'
import { WordCard } from '../../molecules/WordCard'

export const Graph = () => {
  const { currentWord, relatedWords } = useContext(GraphoraContext)

  return (
    <>
      {currentWord ? <h1>Results for: {currentWord}</h1> : null}
      <ul>
        {relatedWords.map((word) => (
          <li key={word.name}>
            <WordCard word={word} />
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}
