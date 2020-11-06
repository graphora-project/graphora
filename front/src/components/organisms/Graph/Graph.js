import React, { useContext, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import { withSize } from 'react-sizeme'
import { GraphoraContext } from '../../GraphoraContext'
import { GraphVisualizer } from '../../../graphSketch'

let graphVisualizer

const graphSyles = makeStyles({
  graphContainer: {
    width: '100%',
    height: '100%',
  },
})

const ResizibleGraph = ({ size }) => {
  const { currentWord, relatedWords, searchWord } = useContext(GraphoraContext)
  const graphCanvasReference = useRef()
  const classes = graphSyles()

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
      initialGraphCanvasWidth: size.width,
      initialGraphCanvasHeight: size.height,
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentWord) {
      graphVisualizer.visualizeGraphWithData(currentWord, relatedWords)
    }
  }, [relatedWords, currentWord])

  useEffect(() => {
    // console.log(size)
    graphVisualizer.resizeAndRedrawGraphCanvas(size.width, size.height)
  }, [size])

  return <div ref={graphCanvasReference} className={classes.graphContainer} />
}

export const Graph = withSize({ monitorHeight: true })(ResizibleGraph)
