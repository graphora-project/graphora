import Graph from 'graphology'
import { StimulateNode, RegularNode, ClusterNode } from '../nodes'
import { P5Graph } from './graph'
import { InArrow, OutArrow, InOutArrow } from '../arrows'
import { CollisionsManager } from '../collisionsManager'

let p5Graph
let clusters

const generalView = {
  nodes: [],
  edges: [],
}

export const GraphBuilder = ({ p5, data, currentWord, onClickFunction }) => {
  p5Graph = undefined
  displayGeneralView(p5, data, currentWord, onClickFunction)
  return p5Graph
}

const displayGeneralView = (p5, data, currentWord, onClickFunction) => {
  if (!p5Graph) {
    const graph = new Graph()
    clusters = createClusters(data)

    graph.addNode(currentWord)
    clusters.forEach((cluster) => {
      if (!graph.nodes().includes(cluster.name)) {
        graph.addNode(cluster.name)
        graph.addEdge(currentWord, cluster.name)
      }
    })

    const layout = layoutGraph(graph, { scale: 500 })

    const { nodes, edges } = generateEdgesAndNodesForClusters(
      p5,
      clusters,
      currentWord,
      (clusterName) =>
        displayCluster(p5, onClickFunction, clusterName, currentWord),
      layout,
    )

    CollisionsManager({ p5 }).checkCollisions(nodes)

    p5Graph = P5Graph()
    generalView.nodes = nodes
    generalView.edges = edges
  }

  p5Graph.setNodes(generalView.nodes)
  p5Graph.setEdges(generalView.edges)
}

const displayCluster = (p5, onClickFunction, clusterName, currentWord) => {
  const graph = new Graph()
  const filterCluster = clusters.filter(
    (cluster) => cluster.name === clusterName,
  )

  const clusterData = filterCluster[0]

  graph.addNode(currentWord)
  clusterData.nodes.forEach((node) => {
    if (!graph.nodes().includes(node.name)) {
      graph.addNode(node.name)
      graph.addEdge(currentWord, node.name)
    }
  })

  const layout = layoutGraph(graph, { scale: 400 })

  const nodes = generateNodes(
    p5,
    clusterData.nodes,
    currentWord,
    onClickFunction,
    layout,
  )
  const edges = generateEdges(p5, clusterData.nodes, nodes)

  CollisionsManager({ p5 }).checkCollisions(nodes)

  p5Graph.setEdges(edges)
  p5Graph.setNodes(nodes)
}

const createClusters = (data) => {
  const createdClusters = []
  const maxNodesInCluster = 10
  const numberOfClusters = Math.round(data.length / maxNodesInCluster)

  const nodes = [...data]

  for (let i = 0; i < numberOfClusters; i += 1) {
    const newCluster = {
      name: `cluster ${i}`,
      nodes: [],
    }

    for (let j = 0; j < maxNodesInCluster; j += 1) {
      const node = nodes.pop()

      if (node) {
        newCluster.nodes.push(node)
      } else {
        // there are no more nodes
        // avoid put an undefined node in the cluster
        break
      }
    }

    createdClusters.push(newCluster)
  }

  return createdClusters
}

const generateEdgesAndNodesForClusters = (
  p5,
  clustersData,
  currentWord,
  onClickFunction,
  layout,
) => {
  const nodes = []

  nodes.push(
    StimulateNode({
      p5,
      xCoordinate: layout[currentWord].x,
      yCoordinate: layout[currentWord].y,
      label: currentWord,
      onClick: () => {},
    }),
  )

  for (let i = 0; i < clustersData.length; i += 1) {
    nodes.push(
      ClusterNode({
        p5,
        xCoordinate: layout[clustersData[i].name].x,
        yCoordinate: layout[clustersData[i].name].y,
        label: clustersData[i].name,
        onClick: onClickFunction,
      }),
    )
  }

  const edges = []

  for (let i = 1; i < nodes.length; i += 1) {
    edges.push(
      InArrow({
        p5,
        initialNode: nodes[0],
        finalNode: nodes[i],
      }),
    )
  }

  return {
    nodes,
    edges,
  }
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
    StimulateNode({
      p5,
      xCoordinate: 0,
      yCoordinate: 0,
      label: currentWord,
      // displays general view when central node is clicked
      onClick: displayGeneralView,
    }),
  )
  data.forEach((node) => {
    if (node.status === 'estimulo') {
      nodes.push(
        StimulateNode({
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
