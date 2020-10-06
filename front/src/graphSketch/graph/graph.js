export const P5Graph = ({ nodes, edges }) => {
  let centerX = 0
  let centerY = 0

  const draw = ({ scale }) => {
    centerX = nodes[0].getXCoordinate()
    centerY = nodes[0].getYCoordinate()

    edges.forEach((edge) => {
      edge.draw()
    })

    nodes.forEach((node) => {
      if (node.setScale) {
        node.setScale(scale)
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
    centerX,
    centerY,
    nodes,
  }
}
