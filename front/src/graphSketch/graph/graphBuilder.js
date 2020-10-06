import Graph from 'graphology'
import { random } from 'graphology-layout'
import { ClickeableNode, RegularNode } from '../nodes'
import { P5Graph } from './graph'

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
      xCoordinate: layout[currentWord].x,
      yCoordinate: layout[currentWord].y,
      label: currentWord,
      onClick: onClickFunction,
    }),
  )
  data.forEach((node) => {
    if (node.status === 'estimulo') {
      nodes.push(
        ClickeableNode({
          p5,
          xCoordinate: layout[node.name].x,
          yCoordinate: layout[node.name].y,
          label: node.name,
          onClick: onClickFunction,
        }),
      )
    } else {
      nodes.push(
        RegularNode({
          p5,
          xCoordinate: layout[node.name].x,
          yCoordinate: layout[node.name].y,
          label: node.name,
        }),
      )
    }
  })

  /*
  const nodes = []
  const edges = []

  nodes.push(
    ClickeableNode({
      p5,
      xCoordinate: 300,
      yCoordinate: 100,
      label: 'abeja',
      onClick: onClickFunction,
    }),
  )

  nodes.push(
    ClickeableNode({
      p5,
      xCoordinate: 300,
      yCoordinate: 100,
      label: 'zapato',
      onClick: onClickFunction,
    }),
  )
  */

  return P5Graph({
    nodes,
    edges,
  })
}
