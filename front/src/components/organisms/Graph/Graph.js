import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GraphoraContext } from '../../GraphoraContext'
import { GraphVisualizer } from '../../../graphSketch'

let graphVisualizer

export const Graph = ({ width, height }) => {
  const { currentWord, relatedWords, searchWord } = useContext(GraphoraContext)
  const graphCanvasReference = useRef()

  // here instead of inside the useEffect because in the useEffect, the context is outdated.
  // this causes that calling this funcion will "erase" the search history
  // this problem its solved outside of the useEffect.
  if (graphVisualizer) {
    graphVisualizer.setOnNodeClickedFunction((nodeLabel) =>
      searchWord(nodeLabel),
    )
  }

  useEffect(() => {
    graphVisualizer = GraphVisualizer({
      containerReference: graphCanvasReference.current,
      initialGraphCanvasWidth: width,
      initialGraphCanvasHeight: height,
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentWord) {
      graphVisualizer.visualizeGraphWithData(currentWord, relatedWords)
    }
  }, [relatedWords, currentWord])

  useEffect(() => {
    graphVisualizer.resizeAndRedrawGraphCanvas(width, height)
  }, [width, height])

  return <div ref={graphCanvasReference} />
}

Graph.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
