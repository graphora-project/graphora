export const P5Graph = ({ nodes, edges, centerX, centerY }) => {
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
    centerX,
    centerY,
    nodes,
  }
}
