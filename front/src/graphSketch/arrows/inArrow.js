import P5 from '../p5/P5'
import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const InArrow = ({ initialNode, finalNode }) => {
  const p5 = P5.getInstance()

  const arrow = Arrow({
    initialNode: finalNode,
    finalNode: initialNode,
  })

  const triangle = RightTriangle()

  const draw = () => {
    const { color, strokeWeight } = arrow
    p5.push()
    const { endVector } = arrow.draw()
    triangle.setPointerX(0)
    triangle.setPointerY(0)

    const magnitud = endVector.mag()
    endVector.setMag(magnitud - initialNode.getRadius())

    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    triangle.draw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
