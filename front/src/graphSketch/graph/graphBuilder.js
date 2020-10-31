import { StimulusNode, AssociateNode, MainNode } from '../nodes'
import { P5Graph } from './graph'
import { InArrow, OutArrow, InOutArrow, SelfInArrow } from '../arrows'
import { CollisionsManager } from '../collisionsManager'
import RandomLayout from '../layout/randomLayout'

export const GraphBuilder = () => {
  const nodesTypes = {
    main: MainNode,
    estimulo: StimulusNode,
    asociada: AssociateNode,
  }

  const edgesTypes = {
    in: InArrow,
    out: OutArrow,
    'in-out': InOutArrow,
    'self-in': SelfInArrow,
  }

  const build = ({ graphRepresentation, onNodeClickedFunction }) => {
    const layout = RandomLayout().generate(graphRepresentation.nodes, {
      scale: 400,
    })
    const nodes = getNodesFromRepresentation(
      graphRepresentation.nodes,
      layout,
      onNodeClickedFunction,
    )

    const edges = getEdgesFromRepresentation(graphRepresentation.edges, nodes)

    CollisionsManager().checkCollisions(nodes)

    return P5Graph({
      nodes,
      edges,
    })
  }

  const getNodesFromRepresentation = (
    nodesData,
    layout,
    onNodeClickedFunction,
  ) => {
    const nodes = []

    nodesData.forEach((nodeData) => {
      const newNodeConstructor = nodesTypes[nodeData.type]
      const newNode = newNodeConstructor({
        xCoordinate: layout[nodeData.name].x,
        yCoordinate: layout[nodeData.name].y,
        label: nodeData.name,
      })

      if (newNode.isClickeable) {
        newNode.setOnClickFunction((nodeLabel) =>
          onNodeClickedFunction(nodeLabel),
        )
      }

      nodes.push(newNode)
    })

    return nodes
  }

  const getEdgesFromRepresentation = (edgesData, nodes) => {
    const edges = []

    edgesData.forEach((edgeData) => {
      const newEdgeConstructor = edgesTypes[edgeData.type]
      const newEdge = newEdgeConstructor({
        initialNode: nodes[edgeData.initialNodeIndex],
        finalNode: nodes[edgeData.finalNodeIndex],
      })

      edges.push(newEdge)
    })

    return edges
  }

  return {
    build,
  }
}
