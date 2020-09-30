import RightTriangle from './rightTriangle'
import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InOutArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [arrowDraw, color, strokeWeight, baseVector, endVector] = Arrow({
    p5,
    initialX,
    initialY,
    finalX,
    finalY,
  })

  const [rightTriangleDraw] = RightTriangle({
    p5,
    pointerX: 0,
    pointerY: 0,
  })

  const [leftTriangleDraw] = LeftTriangle({
    p5,
    pointerX: baseVector.x,
    pointerY: baseVector.y,
  })

  const draw = () => {
    p5.push()
    arrowDraw()
    p5.rotate(endVector.heading())
    leftTriangleDraw({ color, strokeWeight })
    p5.pop()

    p5.push()
    p5.translate(initialX, initialY)
    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    rightTriangleDraw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
