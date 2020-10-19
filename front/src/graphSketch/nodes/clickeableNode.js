import Node from './node'

export const ClickeableNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  onClick,
  color,
  baseRadius,
  onHoverRadius,
}) => {
  let radius = baseRadius
  let scale = 1
  let relativeXCenter = 0
  let relativeYCenter = 0

  const baseNode = Node({
    p5,
    label,
    color,
  })
  baseNode.setRadius(baseRadius)
  baseNode.setXCoordinate(xCoordinate)
  baseNode.setYCoordinate(yCoordinate)

  const draw = () => {
    checkHover()
    baseNode.draw()
  }

  const setRadius = (_radius) => {
    radius = _radius
    baseNode.setRadius(_radius)
  }

  const checkHover = () => {
    if (isInXArea() && isInYArea()) {
      setRadius(onHoverRadius)
      p5.cursor('pointer')
    } else {
      setRadius(baseRadius)
    }
  }

  const isInXArea = () => {
    if (
      p5.mouseX >
      (baseNode.getXCoordinate() - radius + relativeXCenter) * scale
    ) {
      if (
        p5.mouseX <
        (baseNode.getXCoordinate() + radius + relativeXCenter) * scale
      ) {
        return true
      }
    }

    return false
  }

  const isInYArea = () => {
    if (
      p5.mouseY >
      (baseNode.getYCoordinate() - radius + relativeYCenter) * scale
    ) {
      if (
        p5.mouseY <
        (baseNode.getYCoordinate() + radius + relativeYCenter) * scale
      ) {
        return true
      }
    }

    return false
  }

  const mouseIsInArea = () => {
    if (isInXArea() && isInYArea()) {
      return true
    }
    return false
  }

  const mouseClicked = () => {
    if (mouseIsInArea()) {
      onClick(label)
    }
  }

  const setScale = (_scale) => {
    scale = _scale
  }

  const setRelativeCenterCoordinates = (x, y) => {
    relativeXCenter = x
    relativeYCenter = y
  }

  return {
    draw,
    mouseClicked,
    getRadius: baseNode.getRadius,
    setXCoordinate: baseNode.setXCoordinate,
    setYCoordinate: baseNode.setYCoordinate,
    getXCoordinate: baseNode.getXCoordinate,
    getYCoordinate: baseNode.getYCoordinate,
    setScale,
    setRelativeCenterCoordinates,
    isClickeable: true,
  }
}
