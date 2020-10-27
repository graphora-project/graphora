import React, { useContext, useEffect, useRef } from 'react'
import { GraphoraContext } from '../../GraphoraContext'
import { GraphVisualizer } from '../../../graphSketch'

let graphVisualizer

export const Graph = () => {
  const { currentWord, relatedWords, searchWord } = useContext(GraphoraContext)
  const ref = useRef()

  useEffect(() => {
    graphVisualizer = GraphVisualizer({ containerReference: ref.current })
    graphVisualizer.setOnNodeClickedFunction((label) => {
      searchWord(label)
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentWord) {
      graphVisualizer.visualizeGraphWithData(currentWord, relatedWords)
    }
  }, [relatedWords, currentWord])

  return currentWord ? (
    <>
      <h1>Results for: {currentWord}</h1>
      <div ref={ref} />
    </>
  ) : (
    <h4>Results will appear here.</h4>
  )
}
