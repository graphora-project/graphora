import P5 from '../p5/P5'
import Arrow from './arrow'
import RightTriangle from './rightTriangle'

export const SelfInArrow = ({ initialNode, finalNode }) => {
  const p5 = P5.getInstance()
  const baseArrow = Arrow({
    initialNode,
    finalNode,
  })

  const triangle = RightTriangle()

  const draw = () => {
    const { color, strokeWeight } = baseArrow

    const initialX = initialNode.getXCoordinate() - finalNode.getRadius() - 30
    const initialY = initialNode.getYCoordinate() - finalNode.getRadius() - 30
    const finalX = finalNode.getXCoordinate()
    const finalY = finalNode.getYCoordinate()

    const endVector = p5.createVector(finalX - initialX, finalY - initialY)

    p5.push()
    p5.translate(initialX, initialY)

    triangle.setPointerX(0)
    triangle.setPointerY(0)

    const magnitud = endVector.mag()
    endVector.setMag(magnitud - initialNode.getRadius())

    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    triangle.draw({ color, strokeWeight })

    p5.noFill()
    p5.strokeWeight(strokeWeight)
    p5.bezier(
      0,
      0,
      -20,
      -4,
      -20,
      40,
      finalNode.getRadius() - 5,
      finalNode.getRadius() - 5,
    )

    p5.pop()
  }

  return {
    draw,
  }
}
