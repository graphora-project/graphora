import P5 from './p5/P5'
import GraphRepresentation from './graph/graphRepresentation'
import { graphSketch } from './graphSketch'
import { GraphBuilder } from './graph/graphBuilder'

export const GraphVisualizer = ({ containerReference }) => {
  let relatedNodesData = []
  let onNodeClickedFunction

  const sketch = graphSketch()
  P5.createInstance({ p5Sketch: sketch.sketch, containerReference })

  const visualizeGraphWithData = (_centralNodeName, _relatedNodesData) => {
    // as setState function in React is asynchronus, when a new word is searched
    // react sends the new currentWord but the data is the same as before, creating and error on the graph
    if (dataIsUpdated(_relatedNodesData)) {
      relatedNodesData = _relatedNodesData

      const graphRepresentation = GraphRepresentation().create({
        centralNodeName: _centralNodeName,
        relatedNodesData,
      })

      console.log(graphRepresentation)
      const graph = GraphBuilder({
        data: relatedNodesData,
        currentWord: _centralNodeName,
        onClickFunction: onNodeClickedFunction,
      })

      sketch.setGraph(graph)
    }
  }

  const dataIsUpdated = (_relatedNodesData) => {
    if (
      relatedNodesData !== _relatedNodesData &&
      _relatedNodesData.length > 0
    ) {
      return true
    }
    return false
  }

  const setOnNodeClickedFunction = (_onNodeClickedFunction) => {
    onNodeClickedFunction = _onNodeClickedFunction
  }

  return {
    visualizeGraphWithData,
    setOnNodeClickedFunction,
  }
}
