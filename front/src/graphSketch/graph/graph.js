export const Graph = ({ nodes, edges }) => {
  const draw = () => {
    nodes.forEach((node) => {
      node.draw()
    })
    edges.forEach((edge) => {
      edge.draw()
    })
  }

  const clickListener = () => {
    nodes.forEach((node) => {
      if (node.mouseClicked) {
        node.mouseClicked()
      }
    })
  }

  return {
    draw,
    clickListener,
  }
}
