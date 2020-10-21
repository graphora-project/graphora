export const P5Graph = () => {
  let nodes = []
  let edges = []

  const draw = ({ scale, centerX, centerY }) => {
    edges.forEach((edge) => {
      edge.draw()
    })

    nodes.forEach((node) => {
      if (node.isClickeable) {
        node.setScale(scale)
        node.setRelativeCenterCoordinates(centerX, centerY)
      }
      node.draw()
    })
  }

  const clickListener = () => {
    nodes.forEach((node) => {
      if (node.mouseClicked) {
        node.mouseClicked()
      }
    })
  }

  const setNodes = (_nodes) => {
    nodes = _nodes
  }

  const setEdges = (_edges) => {
    edges = _edges
  }

  return {
    draw,
    clickListener,
    nodes,
    setNodes,
    setEdges,
  }
}
