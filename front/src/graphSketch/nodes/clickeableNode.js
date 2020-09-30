import Node from './node'

export const ClickeableNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  relations,
  onClick,
}) => {
  const [baseNodeDraw] = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
  })
  const color = '#F24C00'
  const baseDiameter = 50
  const onHoverDiameter = 60
  let diameter = baseDiameter

  const draw = () => {
    checkHover()
    baseNodeDraw({ color, diameter })
  }

  const checkHover = () => {
    if (isInXArea() && isInYArea()) {
      diameter = onHoverDiameter
      p5.cursor('pointer')
    } else {
      diameter = baseDiameter
    }
  }

  const isInXArea = () => {
    if (p5.mouseX > xCoordinate - diameter / 2) {
      if (p5.mouseX < xCoordinate + diameter / 2) {
        return true
      }
    }

    return false
  }

  const isInYArea = () => {
    if (p5.mouseY > yCoordinate - diameter / 2) {
      if (p5.mouseY < yCoordinate + diameter / 2) {
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
