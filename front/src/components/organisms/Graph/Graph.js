import React, { useContext } from 'react'
import { GraphoraContext } from '../../GraphoraContext'
import { WordCard } from '../../molecules/WordCard'
import { LabelButton } from '../../atoms/Button'

export const Graph = () => {
  const { currentWord, relatedWords, goBackinHistory } = useContext(
    GraphoraContext,
  )

  return currentWord ? (
    <>
      <h1>Results for: {currentWord}</h1>
      <LabelButton action={goBackinHistory}> Go Back </LabelButton>
      <ul>
        {relatedWords.map((word) => (
          <li key={word.name}>
            <WordCard word={word} />
            <hr />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h4>Results will appear here.</h4>
  )
}
