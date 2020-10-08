import Graph from 'graphology'
import { random } from 'graphology-layout'
import { ClickeableNode, RegularNode } from '../nodes'
import { P5Graph } from './graph'
import { InArrow, OutArrow, InOutArrow } from '../arrows'
import { CollisionsManager } from '../collisionsManager'

export const GraphBuilder = ({ p5, data, currentWord, onClickFunction }) =>
  fakeBuilder({ p5, data, currentWord, onClickFunction })

const fakeBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  const graph = new Graph()

  graph.addNode(currentWord)
  data.forEach((word) => {
    graph.addNode(word.name)
    graph.addEdge(currentWord, word.name)
  })

  const layout = random(graph, { scale: 500 })

  const nodes = []
  const edges = []

  nodes.push(
    ClickeableNode({
      p5,
      xCoordinate: 0,
      yCoordinate: 0,
      label: currentWord,
      onClick: onClickFunction,
    }),
  )
  data.forEach((node) => {
    if (node.status === 'estimulo') {
      nodes.push(
        ClickeableNode({
          p5,
          xCoordinate: layout[node.name].x - layout[currentWord].x,
          yCoordinate: layout[node.name].y,
          label: node.name,
          onClick: onClickFunction,
        }),
      )
    } else {
      nodes.push(
        RegularNode({
          p5,
          xCoordinate: layout[node.name].x - layout[currentWord].x,
          yCoordinate: layout[node.name].y - layout[currentWord].y,
          label: node.name,
        }),
      )
    }

    if (node.direction === 'in') {
      edges.push(
        InArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[nodes.length - 1],
        }),
      )
    }

    if (node.direction === 'out') {
      edges.push(
        OutArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[nodes.length - 1],
        }),
      )
    }

    if (node.direction === 'in-out') {
      edges.push(
        InOutArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[nodes.length - 1],
        }),
      )
    }
  })

  CollisionsManager({ p5 }).checkCollisions(nodes)

  return P5Graph({
    nodes,
    edges,
  })
}
