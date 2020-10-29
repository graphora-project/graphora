import React, { useContext, useEffect, useRef } from 'react'
import { GraphoraContext } from '../../GraphoraContext'
import { GraphVisualizer } from '../../../graphSketch'

let graphVisualizer

const calculateGraphDimensions = () => {
  const graphWidth = (window.innerWidth / 100) * 90
  const graphHeight = (window.innerHeight / 100) * 90

  return {
    graphWidth,
    graphHeight,
  }
}

export const Graph = () => {
  const { currentWord, relatedWords, searchWord } = useContext(GraphoraContext)
  const ref = useRef()

  useEffect(() => {
    const { graphWidth, graphHeight } = calculateGraphDimensions()
    graphVisualizer = GraphVisualizer({
      containerReference: ref.current,
      initialGraphCanvasWidth: graphWidth,
      initialGraphCanvasHeight: graphHeight,
    })
    graphVisualizer.setOnNodeClickedFunction((label) => {
      searchWord(label)
    })

    const resizeGraphCanvas = () => {
      // eslint-disable-next-line
      const { graphWidth, graphHeight } = calculateGraphDimensions()
      graphVisualizer.resizeAndRedrawGraphCanvas(graphWidth, graphHeight)
    }
    window.addEventListener('resize', resizeGraphCanvas)

    return () => {
      window.removeEventListener('resize', resizeGraphCanvas)
    }
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
