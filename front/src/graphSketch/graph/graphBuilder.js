import dagre from 'dagre'
import { ClickeableNode, RegularNode } from '../nodes'
import { InArrow, OutArrow, InOutArrow } from '../arrows'
import { Graph } from './graph'

export const GraphBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  return fakeBuilder({ p5, data, currentWord, onClickFunction })
}

const fakeBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  let g = new dagre.graphlib.Graph({ multigraph: true })

  g.setGraph({})

  g.setDefaultEdgeLabel(() => {
    return {}
  })

  g.setNode(currentWord, { isStimulate: true, width: 60, height: 60 })
  data.forEach((word) => {
    if (word.status === 'estimulo') {
      g.setNode(word.name, { isStimulate: true, width: 60, height: 60 })
    } else {
      g.setNode(word.name, { width: 40, height: 40 })
    }
    g.setEdge(currentWord, word.name)
  })

  dagre.layout(g)

  const nodes = []
  const edges = []

  g.nodes().forEach((nodeName) => {
    const node = g.node(nodeName)

    if (node.isStimulate) {
      nodes.push(
        ClickeableNode({
          p5,
          xCoordinate: node.x,
          yCoordinate: node.y,
          label: nodeName,
          onClick: onClickFunction,
        }),
      )
    } else {
      nodes.push(
        RegularNode({
          p5,
          xCoordinate: node.x,
          yCoordinate: node.y,
          label: nodeName,
        }),
      )
    }
  })

  g.edges().forEach((edgeName) => {
    const edge = g.edge(edgeName)
    edges.push(
      OutArrow({
        p5,
        initialX: edge.points[0].x,
        initialY: edge.points[0].y,
        finalX: edge.points[edge.points.length - 1].x,
        finalY: edge.points[edge.points.length - 1].y,
      }),
    )
  })

  return Graph({
    nodes,
    edges,
  })
}
