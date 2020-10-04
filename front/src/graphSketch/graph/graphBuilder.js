import dagre from 'dagre'
import Graph from 'graphology'
import { random, circlepack } from 'graphology-layout'
import { ClickeableNode, RegularNode } from '../nodes'
import { InArrow, OutArrow, InOutArrow } from '../arrows'
import { P5Graph } from './graph'

export const GraphBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  return fakeBuilder({ p5, data, currentWord, onClickFunction })
}

const fakeBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  const graph = new Graph()

  graph.addNode(currentWord)
  data.forEach((word) => {
    graph.addNode(word.name)
    graph.addEdge(currentWord, word.name)
  })

  const layout = random(graph, { scale: 2000 })
  console.log(layout)

  const nodes = []
  const edges = []

  nodes.push(
    RegularNode({
      p5,
      xCoordinate: 0,
      yCoordinate: 0,
      label: currentWord,
    }),
  )
  data.forEach((node) => {
    nodes.push(
      RegularNode({
        p5,
        xCoordinate: layout[node.name].x - layout[currentWord].x,
        yCoordinate: layout[node.name].y - layout[currentWord].y,
        label: node.name,
      }),
    )
  })
  /*
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
  */

  /*
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

  */
  return P5Graph({
    nodes,
    edges,
    centerX: layout[currentWord].x,
    centerY: layout[currentWord].y,
  })
}
