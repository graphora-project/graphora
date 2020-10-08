import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const OutArrow = ({ p5, initialNode, finalNode }) => {
  // eslint-disable-next-line
  const arrow = Arrow({
    p5,
    initialNode,
    finalNode,
  })

  const triangle = RightTriangle({
    p5,
  })

  const draw = () => {
    const { color, strokeWeight } = arrow
    p5.push()
    const { endVector } = arrow.draw()
    triangle.setPointerX(0)
    triangle.setPointerY(0)

    const magnitud = endVector.mag()
    endVector.setMag(magnitud - finalNode.getRadius())

    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    triangle.draw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
