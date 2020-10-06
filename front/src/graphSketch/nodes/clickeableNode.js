import Node from './node'

export const ClickeableNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  onClick,
}) => {
  const color = '#F24C00'
  const baseRadius = 15
  const onHoverRadius = 20
  let radius = baseRadius

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
    if (p5.mouseX > xCoordinate - radius) {
      if (p5.mouseX < xCoordinate + radius) {
        return true
      }
    }

    return false
  }

  const isInYArea = () => {
    if (p5.mouseY > yCoordinate - radius) {
      if (p5.mouseY < yCoordinate + radius) {
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

  return {
    draw,
    mouseClicked,
    setXCoordinate: baseNode.setXCoordinate,
    setYCoordinate: baseNode.setYCoordinate,
    xCoordinate: baseNode.xCoordinate,
    yCoordinate: baseNode.yCoordinate,
  }
}
