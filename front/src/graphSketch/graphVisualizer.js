import P5 from './p5/P5'
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
      // create representation
      const graph = GraphBuilder({
        data: relatedNodesData,
        currentWord: _centralNodeName,
        onClickFunction: onNodeClickedFunction,
      })

      sketch.setGraph(graph)
    }
  }

  const dataIsUpdated = (_relatedNodesData) => {
    if (relatedNodesData !== _relatedNodesData) {
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
