export const CollisionsManager = ({ p5 }) => {
  let graphIsStable = false

  const checkCollisions = (nodes) => {
    if (graphIsStable) {
      return
    }

    let areCollisions = false

    nodes.forEach((node) => {
      const areCollisionsInNode = checkNodeCollisionsIn(node, nodes)

      if (areCollisionsInNode) {
        areCollisions = true
      }
    })

    if (!areCollisions) {
      graphIsStable = true
    }
  }

  const checkNodeCollisionsIn = (node, nodes) => {
    let areCollisions = false
    nodes.forEach((node2) => {
      if (node !== node2 && collisionBetween(node, node2)) {
        areCollisions = true
        resolveCollision(node, node2)
        resolveCollision(node2, node)
      }
    })

    return areCollisions
  }

  const collisionBetween = (node1, node2) => {
    const minMarginBetween = 50
    const distanceBetween = p5.dist(
      node1.getXCoordinate(),
      node1.getYCoordinate(),
      node2.getXCoordinate(),
      node2.getYCoordinate(),
    )

    if (
      node1.getRadius() + node2.getRadius() + minMarginBetween >
      distanceBetween
    ) {
      return true
    }

    return false
  }

  const resolveCollision = (node1, node2) => {
    const scale = 10
    const node2X = node2.getXCoordinate()
    const node2Y = node2.getYCoordinate()
    const relativeNode2X = node2X - node1.getXCoordinate()
    const relativeNode2Y = node2Y - node1.getYCoordinate()

    // geometrical cases. The coordinates are moved to the origin
    // and then changed depending in what area the node2 is
    if (relativeNode2X > 0 && relativeNode2Y > 0) {
      node2.setXCoordinate(node2X + scale)
      node2.setYCoordinate(node2Y + scale)
    }

    if (relativeNode2X > 0 && relativeNode2Y < 0) {
      node2.setXCoordinate(node2X + scale)
      node2.setYCoordinate(node2Y - scale)
    }

    if (relativeNode2X < 0 && relativeNode2Y < 0) {
      node2.setXCoordinate(node2X - scale)
      node2.setYCoordinate(node2Y - scale)
    }

    if (relativeNode2X < 0 && relativeNode2Y > 0) {
      node2.setXCoordinate(node2X - scale)
      node2.setYCoordinate(node2Y + scale)
    }

    if (relativeNode2X === 0 && relativeNode2Y < 0) {
      node2.setYCoordinate(node2Y - scale)
    }

    if (relativeNode2X === 0 && relativeNode2Y > 0) {
      node2.setYCoordinate(node2Y + scale)
    }

    if (relativeNode2X < 0 && relativeNode2Y === 0) {
      node2.setXCoordinate(node2X - scale)
    }

    if (relativeNode2X > 0 && relativeNode2Y === 0) {
      node2.setXCoordinate(node2X + scale)
    }

    if (relativeNode2X === 0 && relativeNode2Y === 0) {
      node2.setXCoordinate(node2X + scale)
    }
  }

  return {
    checkCollisions,
  }
}
