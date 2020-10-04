import React, { useContext, useEffect, useRef } from 'react'
import p5 from 'p5'
import { GraphoraContext } from '../../GraphoraContext'
import { WordCard } from '../../molecules/WordCard'
import { LabelButton } from '../../atoms/Button'
import { graphSketch } from '../../../graphSketch'

const graph = graphSketch(p5)
let p5Instance

export const Graph = () => {
  const { currentWord, relatedWords, goBackinHistory, searchWord } = useContext(
    GraphoraContext,
  )
  const ref = useRef()
  graph.setOnClickFunction((label) => {
    searchWord(label)
  })

  useEffect(() => {
    // eslint-disable-next-line
    p5Instance = new p5(graph.sketch, ref.current)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentWord) {
      graph.setData(p5Instance, relatedWords, currentWord)
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
