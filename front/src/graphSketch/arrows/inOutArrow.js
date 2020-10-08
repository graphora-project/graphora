import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const InOutArrow = ({ p5, initialNode, finalNode }) => {
  const rightArrow = Arrow({
    p5,
    initialNode,
    finalNode,
  })

  const leftArrow = Arrow({
    p5,
    initialNode: finalNode,
    finalNode: initialNode,
  })

  const rightTriangle = RightTriangle({
    p5,
  })

  const leftTriangle = RightTriangle({
    p5,
  })

  const draw = () => {
    const initialX = initialNode.getXCoordinate()
    const initialY = initialNode.getYCoordinate()

    const { color, strokeWeight } = rightArrow
    const { endVector } = rightArrow.draw()

    drawLeftTriangle()

    p5.push()
    p5.translate(initialX, initialY)
    const magnitud = endVector.mag()
    endVector.setMag(magnitud - finalNode.getRadius())
    p5.translate(endVector.x, endVector.y)
    rightTriangle.setPointerX(0)
    rightTriangle.setPointerY(0)
    p5.rotate(endVector.heading())
    rightTriangle.draw({ color, strokeWeight })
    p5.pop()
  }

  const drawLeftTriangle = () => {
    p5.push()
    const { color, strokeWeight } = leftArrow
    const { endVector } = leftArrow.draw({ display: false })

    leftTriangle.setPointerX(0)
    leftTriangle.setPointerY(0)

    const magnitud = endVector.mag()
    endVector.setMag(magnitud - initialNode.getRadius())

    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    leftTriangle.draw({ color, strokeWeight })
    p5.pop()
  }
  return {
    draw,
  }
}
