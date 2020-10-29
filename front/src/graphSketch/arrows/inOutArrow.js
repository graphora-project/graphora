import P5 from '../p5/P5'
import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const InOutArrow = ({ initialNode, finalNode }) => {
  const p5 = P5.getInstance()

  const rightArrow = Arrow({
    initialNode,
    finalNode,
  })

  const leftArrow = Arrow({
    initialNode: finalNode,
    finalNode: initialNode,
  })

  const rightTriangle = RightTriangle()

  const leftTriangle = RightTriangle()

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
