export const Graph = ({ nodes, edges }) => {
  const draw = () => {
    nodes.forEach((node) => {
      node.draw()
    })
    edges.forEach((edge) => {
      edge.draw()
    })
  }

  return {
    draw,
  }
}
