export const P5Graph = ({ nodes, edges }) => {
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

  return {
    draw,
    clickListener,
    nodes,
  }
}
