import React, { useContext, useEffect, useRef } from 'react'
import p5 from 'p5'
import PropTypes from 'prop-types'
import { GraphoraContext } from '../../GraphoraContext'
import { WordCard } from '../../molecules/WordCard'
import { LabelButton } from '../../atoms/Button'

export const Graph = ({ sketch }) => {
  const { currentWord, relatedWords, goBackinHistory } = useContext(
    GraphoraContext,
  )
  const ref = useRef()

  useEffect(() => {
    // eslint-disable-next-line
    new p5(sketch, ref.current)
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

Graph.propTypes = {
  sketch: PropTypes.any,
}
