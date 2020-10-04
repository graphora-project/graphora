import React, { useContext, useEffect, useRef } from 'react'
import p5 from 'p5'
import { GraphoraContext } from '../../GraphoraContext'
import { WordCard } from '../../molecules/WordCard'
import { LabelButton } from '../../atoms/Button'
import { graphSketch } from '../../../graphSketch'

const graph = graphSketch(p5)

export const Graph = () => {
  const { currentWord, relatedWords, goBackinHistory, searchWord } = useContext(
    GraphoraContext,
  )
  const ref = useRef()
  graph.setOnClickFunction((label) => {
    searchWord(label)
  })

  useEffect(() => {
    graph.setData(relatedWords)
  }, [relatedWords])

  useEffect(() => {
    // eslint-disable-next-line
    new p5(graph.sketch, ref.current)
    // eslint-disable-next-line
  }, [])

  return currentWord ? (
    <>
      <div ref={ref} />
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
