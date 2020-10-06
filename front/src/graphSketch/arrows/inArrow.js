import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InArrow = ({ p5, initialNode, finalNode }) => {
  const arrow = Arrow({
    p5,
    initialNode,
    finalNode,
  })

  const triangle = LeftTriangle({
    p5,
  })

  const draw = () => {
    p5.push()
    const { color, strokeWeight } = arrow
    const { baseVector, endVector } = arrow.draw()

    triangle.setPointerX(baseVector.x)
    triangle.setPointerY(baseVector.y)
    p5.rotate(endVector.heading())
    triangle.draw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
