import Graph from 'graphology'
import { ClickeableNode, RegularNode } from '../nodes'
import { P5Graph } from './graph'
import { InArrow, OutArrow, InOutArrow } from '../arrows'
import { CollisionsManager } from '../collisionsManager'

export const GraphBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  const graph = new Graph()

  graph.addNode(currentWord)
  data.forEach((word) => {
    if (!graph.nodes().includes(word.name)) {
      graph.addNode(word.name)
      graph.addEdge(currentWord, word.name)
    }
  })

  const layout = layoutGraph(graph, { scale: 400 })

  const nodes = generateNodes(p5, data, currentWord, onClickFunction, layout)
  const edges = generateEdges(p5, data, nodes)

  CollisionsManager({ p5 }).checkCollisions(nodes)

  return P5Graph({
    nodes,
    edges,
  })
}

const layoutGraph = (graph, { scale = 1 } = {}) => {
  // quadrants with (0.5, 0.5) as its origin
  const quadrants = [
    {
      x: {
        min: 0,
        max: 0.5,
      },
      y: {
        min: 0,
        max: 0.5,
      },
    },
    {
      x: {
        min: 0.5,
        max: 1,
      },
      y: {
        min: 0,
        max: 0.5,
      },
    },
    {
      x: {
        min: 0.5,
        max: 1,
      },
      y: {
        min: 0.5,
        max: 1,
      },
    },
    {
      x: {
        min: 0,
        max: 0.5,
      },
      y: {
        min: 0.5,
        max: 1,
      },
    },
  ]
  const nodes = graph.nodes()
  const layout = {
    [nodes[0]]: {
      x: 0.5 * scale,
      y: 0.5 * scale,
    },
  }

  // iterates the quadrants in a circular way. Uses random function to generate
  // a random point within the current quadrant
  let quadrantIndex = 0
  for (let i = 1; i < nodes.length; i += 1) {
    const quadrant = quadrants[quadrantIndex]
    layout[nodes[i]] = {
      x:
        (Math.random() * (quadrant.x.max - quadrant.x.min) + quadrant.x.min) *
        scale,
      y:
        (Math.random() * (quadrant.y.max - quadrant.y.min) + quadrant.y.min) *
        scale,
    }

    quadrantIndex = (quadrantIndex + 1) % quadrants.length
  }

  return layout
}

const generateEdges = (p5, data, nodes) => {
  const edges = []

  for (let i = 0; i < data.length; i += 1) {
    const node = data[i]
    if (node.direction === 'in')
      edges.push(
        InArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[i + 1],
        }),
      )

    if (node.direction === 'out')
      edges.push(
        OutArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[i + 1],
        }),
      )

    if (node.direction === 'in-out')
      edges.push(
        InOutArrow({
          p5,
          initialNode: nodes[0],
          finalNode: nodes[i + 1],
        }),
      )
  }

  return edges
}

const generateNodes = (p5, data, currentWord, onClickFunction, layout) => {
  const nodes = []

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
    }

    if (node.status === 'asociada') {
      nodes.push(
        RegularNode({
          p5,
          xCoordinate: layout[node.name].x - layout[currentWord].x,
          yCoordinate: layout[node.name].y - layout[currentWord].y,
          label: node.name,
        }),
      )
    }
  })

  return nodes
}
