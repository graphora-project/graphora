import Node from './node'

export const ClickeableNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  onClick,
}) => {
  const [baseNodeDraw, relations] = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
  })
  const color = '#F24C00'
  const baseRatio = 50
  const onHoverRatio = 60
  let ratio = baseRatio

  const draw = () => {
    checkHover()
    baseNodeDraw({ color, ratio })
  }

  const checkHover = () => {
    if (isInXArea() && isInYArea()) {
      ratio = onHoverRatio
      p5.cursor('pointer')
    } else {
      ratio = baseRatio
    }
  }

  const isInXArea = () => {
    if (p5.mouseX > xCoordinate - ratio) {
      if (p5.mouseX < xCoordinate + ratio) {
        return true
      }
    }

    return false
  }

  const isInYArea = () => {
    if (p5.mouseY > yCoordinate - ratio) {
      if (p5.mouseY < yCoordinate + ratio) {
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
      console.log('click')
      onClick()
    }
  }

  return { draw, relations, mouseClicked }
}
