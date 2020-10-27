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
    const edgesRepresentation = relatedNodesData.map((nodeData) => {
      if (nodeData.name !== centralNodeName) {
        return {
          initialNode: centralNodeName,
          finalNode: nodeData.name,
          type: nodeData.direction,
        }
      }
      return {
        initialNode: centralNodeName,
        finalNode: centralNodeName,
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
