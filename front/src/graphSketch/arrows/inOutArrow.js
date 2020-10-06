import RightTriangle from './rightTriangle'
import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InOutArrow = ({ p5, initialNode, finalNode }) => {
  const arrow = Arrow({
    p5,
    initialNode,
    finalNode,
  })

  const rightTriangle = RightTriangle({
    p5,
  })

  const leftTriangle = LeftTriangle({
    p5,
  })

  const draw = () => {
    const initialX = initialNode.getXCoordinate()
    const initialY = initialNode.getYCoordinate()

    const { color, strokeWeight } = arrow

    p5.push()
    const { baseVector, endVector } = arrow.draw()

    leftTriangle.setPointerX(baseVector.x)
    leftTriangle.setPointerY(baseVector.y)

    p5.rotate(endVector.heading())
    leftTriangle.draw({ color, strokeWeight })
    p5.pop()

    p5.push()
    p5.translate(initialX, initialY)
    p5.translate(endVector.x, endVector.y)
    rightTriangle.setPointerX(0)
    rightTriangle.setPointerY(0)
    p5.rotate(endVector.heading())
    rightTriangle.draw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
