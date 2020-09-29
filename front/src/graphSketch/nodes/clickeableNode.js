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
  const ratio = 50

  const draw = () => {
    baseNodeDraw({ color, ratio })
  }

  const mouseIsInArea = () => {
    const isInArea = true

    if (!p5.mouseX > xCoordinate - ratio) {
      isInArea = false
    }

    if (!p5.mouseX < xCoordinate + ratio) {
      isInArea = false
    }

    if (!p5.mouseY > yCoordinate - ratio) {
      isInArea = false
    }

    if (!p5.mouseY < yCoordinate + ratio) {
      false
    }

    return isInArea
  }

  const mouseClicked = () => {
    if (mouseIsInArea()) {
      onClick()
    }
  }

  return [draw, relations, mouseClicked]
}
