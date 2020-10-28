const GraphRepresentation = () => {
  const create = ({ centralNodeName, relatedNodesData }) => ({
    nodes: generateNodesRepresentation(centralNodeName, relatedNodesData),
    edges: generateEdgesRepresentation(centralNodeName, relatedNodesData),
  })

  const generateNodesRepresentation = (centralNodeName, relatedNodesData) => {
    const nodesRepresentation = []

    nodesRepresentation.push({
      name: centralNodeName,
      type: 'main',
    })

    relatedNodesData.forEach((nodeData) => {
      if (nodeData.name !== centralNodeName) {
        nodesRepresentation.push({
          name: nodeData.name,
          type: nodeData.status,
        })
      }
    })

    return nodesRepresentation
  }

  const generateEdgesRepresentation = (centralNodeName, relatedNodesData) => {
    const edgesRepresentation = relatedNodesData.map((nodeData, index) => {
      if (nodeData.name !== centralNodeName) {
        return {
          initialNodeIndex: 0,
          finalNodeIndex: index,
          type: nodeData.direction,
        }
      }
      return {
        initialNode: 0,
        finalNode: 0,
        type: 'self-in',
      }
    })

    return edgesRepresentation
  }

  return {
    create,
  }
}

export default GraphRepresentation
